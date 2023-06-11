cd $1
mkdir compressed
magick mogrify -quality 50 -resize 50% -path ./compressed *.jpg
