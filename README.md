# Elevation Visualizer
A web application to easily create topography art. The goal is to allow the user to select an area on the map, and the program will draw topography lines over the area. Future features include allowing the user to change the line and background colour, and and adjust the thickness and the spacing of the lines.

This project was created by, and currently maintained by Nicholas McGee.
## Motivation
This project was inspired by the Reddit post https://www.reddit.com/r/dataisbeautiful/comments/g6so17/oc_colorado_topography/ by u/KRANKARTA___. 
## Screenshots
First protoype using the Okangan
![Okangagan Prototype Image](img/protoV1.png?raw=true "Prototype V1")
## Installation
If downloaded, you must create a config.js file in ./app containing:
```javascript
var config = {
    API_KEY: 'YOUR_API_KEY'
};
```
## Languages Used
* Javascript
* HTML
* CSS
## APIs Used
* Google Maps JS
* CanvasJS
