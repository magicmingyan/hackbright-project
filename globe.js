var planet = planetaryjs.planet();
// You can remove this statement if `world-110m.json`
// is in the same path as the HTML page:
console.log("hi")
// planet.loadPlugin(planetaryjs.plugins.earth({
//   topojson: { file: '/static/world-110m.json' }
// }));
// Make the planet fit well in its canvas
planet.projection.scale(250).translate([250, 250]);
var canvas = document.getElementById('globe');
planet.draw(canvas);