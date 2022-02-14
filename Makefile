# this is not very useful as I'm using latex-workshop to build the .pdf

filename=main

tmp:
	pdflatex -interaction nonstopmode -halt-on-error -file-line-error main.tex

pdflatex-clean:
	rm -f $(filename).acn $(filename).aux $(filename).bbl $(filename).blg $(filename).fdb_latexmk $(filename).fls $(filename).glo $(filename).glsdefs $(filename).ist $(filename).listing $(filename).lof $(filename).log $(filename).lol $(filename).lot $(filename).mw $(filename).out $(filename).synctex.gz $(filename).toc $(filename).upa $(filename).upb

clean: pdflatex-clean
