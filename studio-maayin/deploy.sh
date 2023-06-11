npm run build
rm -rf ~/studio-maayin-dist/assets
mv dist/* ~/studio-maayin-dist
cp ~/studio-maayin-dist/index.html ~/studio-maayin-dist/404.html

cd ~/studio-maayin-dist
git add .
git commit -m "Latest dist"
git push
