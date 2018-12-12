

function initialize() {
  var earth = new WE.map('earth_div',{
  						zoom: 3,
  						scrollWheelZoom: true
  						});

  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

  // var marker = WE.marker([51.5, -0.09]).addTo(earth);
  // marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();
  
  // var marker2 = WE.marker([30.058056, 31.228889]).addTo(earth);
  // marker2.bindPopup("<b>Cairo</b><br>Yay, you found me!", {maxWidth: 120, closeButton: false});
  
  // var markerCustom = WE.marker([50, -9], '/img/logo-webglearth-white-100.png', 100, 24).addTo(earth);
  // // earth.setView([51.505, 0], 3);

  // var markerTest = WE.marker([56.0, 10.0]).addTo(earth);

  $.get('/geo.json', function (geos) {
      let geo;
      for (let key in geos) {
            geo = geos[key];
            var marker4 = WE.marker([geo.latitude, geo.longitude]).addTo(earth);
            marker4.bindPopup(geo.title, {maxWidth: 120, closeButton: true});
      }
    });
}



