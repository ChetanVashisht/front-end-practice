function generateImportsForFolder()
{
	cd $1/compressed
	pwd
	cp ../../import.js .
	node import.js .
	rm import.js
	ls
	cd ../..
}

function convertImages()
{
	cd $1
	echo $1
	mkdir -p compressed
	mogrify -format jpg *.HEIC
	mogrify -format jpg *.HEIF
	mogrify -format jpg *.heic
	mogrify -format jpg *.heif
	mogrify -format jpg *.png
	mogrify -format jpg *.jpeg
	pwd
	magick mogrify -quality 85 -resize 65% -path ./compressed *.jpg
	rm *.jpg
	# find . -maxdepth 1 \( -iname \*.png -o -iname \*.jpeg -o -iname \*.bmp -o -iname \*.heif -o -iname \*.heic \) -exec convert -verbose "{}" "compressed/{}.jpg" \;
	ls
	cd ..
}

#declare -a folders=("Bayars-store" "Usha-Latesh-house" "anna-poorna" "bnr-hills" "kaustubha" "kesuvin-farm-house" "ravinarayan" "yogatute")
#
declare -a folders=("bayars-factory" "hrishi")

for i in "${folders[@]}"
do
	echo "Generating from folder $i"
	convertImages "$i"
	generateImportsForFolder "$i"
done

