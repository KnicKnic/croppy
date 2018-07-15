## Convert icons

found link on making icons https://www.netguru.co/codestories/few-tips-that-will-make-your-pwa-on-ios-feel-like-native

```
$source = "..\images\icons-512.png" 
#note it is 512x512
magick convert -resize 152 $source touch-icon-ipad.png
magick convert -resize 180 $source touch-icon-iphone-retina.png
magick convert -resize 167 $source touch-icon-ipad-retina.png
magick convert -resize 120 $source touch-icon-iphone.png
```

## convert splash screen
```
$source = '.\croppy_loading.png'
$files = @(
("apple_splash_2048.png" ,"2048x2732"),
("apple_splash_1668.png" ,"1668x2224"),
("apple_splash_1536.png" ,"1536x2048"),
("apple_splash_1125.png" ,"1125x2436"),
("apple_splash_1242.png" ,"1242x2208"),
("apple_splash_750.png"  ,"750x1334" ),
("apple_splash_640.png"  ,"640x1136" )
)

$files = @(
("apple_splash_2048.png", "2048x2692"),
("apple_splash_1668.png", "1668x2184"),
("apple_splash_1536.png", "1536x2008"),
("apple_splash_1125.png", "1125x2436"),
("apple_splash_1242.png", "1242x2148"),
("apple_splash_750.png", "750x1294"),
("apple_splash_640.png", "640x1096"))

foreach($file in $files){
    $size = $file[1]
    $name = $file[0]
    magick convert -resize "$size" $source -background white -gravity center -extent $size $name
}

```