#!/bin/bash

# Compile and  minifies CSS
for f in `ls src/css/*.scss`; do
  sass --update $f:${f%.scss}.css --style compressed
done

# Build site
jekyll build

# Minifies JS
yui-compressor _build/js/casataller.js -o _build/js/casataller.js
yui-compressor _build/js/simplespi.js -o _build/js/simplespi.js
# Minifies CSS files
yui-compressor _build/css/casataller.css -o _build/css/casataller.css
yui-compressor _build/css/normalize.css -o _build/css/normalize.css
yui-compressor _build/css/magnific-popup.css -o _build/css/magnific-popup.css
