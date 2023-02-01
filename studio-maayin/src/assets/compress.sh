mkdir compressed
cd $1
magick mogrify -quality 45 -resize 25% -path ../compressed *.jpg
