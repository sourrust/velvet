# Velvet

Velvet is a haddock theme aiming to be simple and easy to read.

**Color Palette**
![color](https://github.com/sourrust/velvet/raw/master/img/colorpalette.png)

`#ededed` white
`#e8e8e8` grey0
`#d1d1d1` grey1
`#424242` grey2
`#303030` black
`#ffe4e1` red0
`#dc143c` red1

### Usage
***

From commandline

`haddock --theme=/path/to/velvet {files...}`

or

Using cabal (script)

```bash
#!/bin/bash

PKG_NAME=#your package name
VELVET_PATH=/path/to/velvet
DEST=dist/doc/html/${PKG_NAME}

cabal haddock --css=${VELVET_PATH}/velvet.css

cp ${VELVET_PATH}/arrow-down.gif ${DEST}
cp ${VELVET_PATH}/arrow-right.gif ${DEST}
cp ${VELVET_PATH}/synopsis.png ${DEST}
```

### Screenshots
***

**Contents**:
![contents](https://github.com/sourrust/velvet/raw/master/img/contents.png)

**Index**:
![index](https://github.com/sourrust/velvet/raw/master/img/index.png)

**Main**:
![main](https://github.com/sourrust/velvet/raw/master/img/main.png)

**Frames**:
![frame](https://github.com/sourrust/velvet/raw/master/img/frames.png)

The example screenshots used are from documentation in [attoparsec](https://github.com/bos/attoparsec) project.

_For a much larger version of the screenshots checkout:_

* [Full Index](https://github.com/sourrust/velvet/raw/master/img/index-full.png)
* [Full Main](https://github.com/sourrust/velvet/raw/master/img/main-full.png)

**Tested on:**

* Chrome 16.0.912.4
