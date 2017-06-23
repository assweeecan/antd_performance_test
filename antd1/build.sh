npm install
rm -rf ./build
npm run buildfis
rm -rf ./output
fis3 --version --no-color
fis3 release prod -d ./output/ --no-color

mkdir ./output/webroot
mv ./output/static ./output/webroot/static
