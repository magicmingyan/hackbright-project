var planet = planetaryjs.planet();


planet.loadPlugin(planetaryjs.plugins.earth({
  topojson: { file: 'static/world-110m.json' }
}));
// Make the planet fit well in its canvas
planet.projection.scale(300).translate([300, 300]);
var canvas = document.getElementById('globe');


planetaryjs.plugins.zoom({
  scaleExtent: [300, 500],
  onZoom: function() {
    console.log("The planet was zoomed!", this, d3.event);
  }
});
planet.loadPlugin(planetaryjs.plugins.zoom({
    scaleExtent: [300, 500]
  }));

planetaryjs.plugins.drag({
  onDrag: function() {
    console.log("The planet was dragged!", this, d3.event);
  }
});
planet.loadPlugin(planetaryjs.plugins.drag());



planet.loadPlugin(planetaryjs.plugins.pings());

var colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
setInterval(function() {
  var lat = Math.random() * 170 - 85;
  var lng = Math.random() * 360 - 180;
  var color = colors[Math.floor(Math.random() * colors.length)];
  var angle = Math.random() * 10;
  planet.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: angle });
}, 250);

// // planet.loadPlugin(planetaryjs.plugins.objects());
// console.log(planet.plugins.pings.add)

// console.log(planet.plugins.pings.add)

// // planet.plugins.objects.add(-1.3167103, 50.6927176, { imagesrc:"static/img/polar.png" });


planet.draw(canvas);


