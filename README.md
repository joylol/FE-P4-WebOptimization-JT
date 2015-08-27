Website Performance Optimization Project

To run this application:
1. Download or clone this repository to your computer.
2. Open the files on your localhost.
3. To run index.html through PageSpeed, use the following website: http://joylol.github.io/FE-P4-WebOptimization-JT/

Index.html is optimized to a PageSpeed score above a 90 by:
1. Inlining critical pass css with the help of http://jonassebastianohlsson.com/criticalpathcssgenerator/
2. Resize and compressing images with the help of http://optimizilla.com/ and
http://resizeimage.net/
3. Minifying css with the help of http://cssminifier.com/

Pizza.html is optimized to 60fps by;
1. Using a web worker to calculate 'phase'
2. Setting 3 sizes for the changePizzaSizes function rather than calculating them
3. Instead of creating 200 pizzas for movingPizzas1, 30 are created because not all 200 are displayed on screen at once.
4. Used will-change: tranform to give moving pizzas their own layers.




 
