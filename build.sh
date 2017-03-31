rm -rf docs
mkdir docs
cp -R libs docs/libs
./node_modules/.bin/webpack --config webpack.docs.config.js --progress --colors
rm -rf build
mkdir build
cp -R docs/index.js build/index.js