mkdir compressed
cd $1
magick mogrify -quality 45 -resize 25% -path ../compressed *.jpg
magick mogrify -quality 45 -resize 25% -path ../compressed *.jpeg
magick mogrify -quality 45 -resize 25% -path ../compressed *.png
magick mogrify -quality 45 -resize 25% -path ../compressed *.heif
magick mogrify -quality 45 -resize 25% -path ../compressed *.heic
