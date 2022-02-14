async function main() {

  let CONFIG = require("./config.json");
  let colony_dc = require('antidote_ts_client');
  let colony_pop = require('edgeant_ts_pop');
  let host = "localhost"

  let dc_connection = colony_dc.connect(CONFIG.dbURI, CONFIG.credentials);
  let cnt = dc_connection.counter("myCounter");
  dc_connection.update(
    cnt.increment(3)
  )

  let peer_connection = colony_pop.connect(CONFIG.signalingServers, CONFIG.credentials)
  let tx = await peer_connection.startTransaction()
  let map = tx.gmap("myMap");
  tx.update([
    map.register("a").assign(42),
    map.set("e").addAll([1, 2, 3, 4])
  ])
  tx.commit().then(
    console.log(
      await peer_connection.gmap("myMap").set("e").read()
    )
  )

}

main()
