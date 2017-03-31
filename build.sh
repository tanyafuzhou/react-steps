rm -rf gh-pages
mkdir gh-pages
cp -R libs gh-pages/libs
./node_modules/.bin/webpack --config webpack.gh.config.js --progress --colors
rm -rf build
mkdir build
cp -R gh-pages/index.js build/index.js