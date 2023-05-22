cd $1
mkdir compressed
magick mogrify -quality 45 -resize 25% -path ./compressed *.jpg
