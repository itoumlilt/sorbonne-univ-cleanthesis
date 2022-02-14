# Cleanthesis Template for Sorbonne Université rules

CleanThesis LaTeX source files derived from [clanthesis](https://github.com/derric/cleanthesis) 
and adapted to [Sorbonne Université rules](https://www.sorbonne-universite.fr/en/research-and-innovation/doctorate/administrative-procedures/defence).

## Getting started

Ordered list of main files to follow, with brief description:

- `./setup.tex`: Update initial metadata (thesis title, author name, university, advisors ...)
- `./main.tex`: follow the comments in this file to setup the high-level organisation of the manuscript components
- `./content/front/titlepages.tex`: This file allows you to customize the front page of the manuscript, you can follow the commented `TODO`s placed in the file to fill this page.
- `./content/front/copyright.tex`: You may want to change the dedication sentence here
- `./content/front/remerciements.tex`: This is probably the only page that colleagues read, it is not necessary for the version sent to the reviewers, but it is usually written between the submission of the manuscript and the beginning of the slides, with a of emotion.
- `./content/front/abstract-en.tex`: thesis english abstract
- `./content/front/abstract-fr.tex`: thesis french abstract (the administration require both langages).
- `./content/*`: other tex source files, you can follow the include order from `./main.tex` to fill them.

## Build the PDF

The `Makefile` in this project only has a clean command. 
To build the project, simply use `latex-workshop`.
The VS Code extension works just fine, and compiles the PDF in background.

I added a `./.vscode/settings.json` VS Code, that prevents latex-workshop from building the PDF at each keystroke and changes this default to `build on save`, which is more friendly in a latex project.

## License

This work may be distributed and/or modified under the conditions of the LaTeX Project Public License, either version 1.3 of this license or (at your option) any later version. The latest version of this license is in http://www.latex-project.org/lppl.txt and version 1.3 or later is part of all distributions of LaTeX version 2005/12/01 or later.

Feel free to use it for your own work,
and if you wish to send cookie-credit:

```bibtex
@phdthesis{toumlilt2021colony,
  title  = {Colony: A Hybrid Consistency System for Highly-Available Collaborative Edge Computing},
  author = {Toumlilt, Ilyas},
  year   = {2021},
  school = {Sorbonne Universit{\'e}}
}
```

## Credits

The LaTeX source files from this thesis are derived from the [cleanthesis](https://github.com/derric/cleanthesis)

Many thanks to [Dr. Serrano](https://github.com/lpeak) for the initial design.
