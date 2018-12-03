var planet = planetaryjs.planet();
// You can remove this statement if `world-110m.json`
// is in the same path as the HTML page:

planet.loadPlugin(planetaryjs.plugins.earth({
  topojson: { file: 'static/world-110m.json' }
}));
// Make the planet fit well in its canvas
planet.projection.scale(500).translate([500, 500]);
var canvas = document.getElementById('globe');


planetaryjs.plugins.zoom({
  scaleExtent: [300, 1000],
  onZoom: function() {
    console.log("The planet was zoomed!", this, d3.event);
  }
});

planet.loadPlugin(planetaryjs.plugins.zoom({
    scaleExtent: [300, 1000]
  }));

planetaryjs.plugins.drag({
  onDrag: function() {
    console.log("The planet was dragged!", this, d3.event);
  }
});

planet.loadPlugin(planetaryjs.plugins.drag());

planet.draw(canvas);