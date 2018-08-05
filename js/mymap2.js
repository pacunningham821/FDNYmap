var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 1000 - margin.left - margin.right,
    height = 1100 - margin.top - margin.bottom;


var canvas = d3.select(".MAP").append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom);

// GEOJSON data of Manhattan
var ManhattanGJ = {
"type": "FeatureCollection",
"features": [
{ "type": "Feature", "properties": { "name": "Manhattan" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -74.000617379114288, 40.6951221683874 ], [ -74.001969, 40.691843 ], [ -74.004593, 40.688215 ], [ -74.007374912135404, 40.687261947149402 ], [ -74.002408, 40.695703 ], [ -74.000617379114288, 40.6951221683874 ] ] ], [ [ [ -73.933407922938102, 40.882074964842694 ], [ -73.924974, 40.879144 ], [ -73.922602, 40.878779 ], [ -73.919808, 40.876577 ], [ -73.9152, 40.875581 ], [ -73.911405, 40.879278 ], [ -73.909505, 40.878878 ], [ -73.907105, 40.876277 ], [ -73.907104, 40.872978 ], [ -73.908605, 40.871678 ], [ -73.909804, 40.868282 ], [ -73.91434, 40.862521 ], [ -73.91929, 40.857475 ], [ -73.923904, 40.850488 ], [ -73.928159, 40.845492 ], [ -73.933006, 40.835679 ], [ -73.933459, 40.833184 ], [ -73.932327, 40.819503 ], [ -73.93257, 40.809256 ], [ -73.927525, 40.802764 ], [ -73.923022, 40.802425 ], [ -73.919861, 40.799353 ], [ -73.912456, 40.796096 ], [ -73.910673, 40.793116 ], [ -73.910296, 40.790657 ], [ -73.9126, 40.789376 ], [ -73.916833, 40.785191 ], [ -73.924234, 40.779101 ], [ -73.929881, 40.776222 ], [ -73.931847, 40.777892 ], [ -73.934412, 40.778093 ], [ -73.93638, 40.776921 ], [ -73.937858, 40.774088 ], [ -73.937466, 40.772504 ], [ -73.934956, 40.77173 ], [ -73.935323, 40.770485 ], [ -73.941312, 40.766918 ], [ -73.951367, 40.754524 ], [ -73.956842, 40.748828 ], [ -73.961381, 40.742802 ], [ -73.96262, 40.739033 ], [ -73.962478, 40.736802 ], [ -73.962229, 40.732649 ], [ -73.96108, 40.729148 ], [ -73.961543, 40.723876 ], [ -73.967578, 40.716496 ], [ -73.96905, 40.712482 ], [ -73.970318, 40.707332 ], [ -73.97306, 40.709179 ], [ -73.979233, 40.705769 ], [ -73.986866, 40.705161 ], [ -73.992722, 40.705544 ], [ -73.994498, 40.704318 ], [ -73.996698, 40.700877 ], [ -74.004051, 40.703653 ], [ -74.009043, 40.70059 ], [ -74.013796, 40.70005 ], [ -74.0168, 40.701794 ], [ -74.019526, 40.706985 ], [ -74.024543, 40.709436 ], [ -74.021117, 40.727417 ], [ -74.013784, 40.756601 ], [ -74.009184, 40.763601 ], [ -73.968082, 40.8207 ], [ -73.963182, 40.8269 ], [ -73.953982, 40.848 ], [ -73.948281, 40.858399 ], [ -73.933407922938102, 40.882074964842694 ] ] ], [ [ [ -74.027106, 40.685092 ], [ -74.025442, 40.687976 ], [ -74.0195, 40.693382 ], [ -74.01546, 40.693382 ], [ -74.012132, 40.690679 ], [ -74.013083, 40.687795 ], [ -74.016173, 40.687075 ], [ -74.025442, 40.684191 ], [ -74.027106, 40.685092 ] ] ], [ [ [ -74.04692, 40.691139 ], [ -74.04086, 40.700117 ], [ -74.037998, 40.698995 ], [ -74.043441, 40.68968 ], [ -74.046359, 40.689175 ], [ -74.04692, 40.691139 ] ] ] ] } }
]
}

// Making manhattan projection and MapPath
var MapProjection = d3.geoEquirectangular()
    .scale(270000)
    .center([-73.960681, 40.781319])
    .translate([width/2, height/2]);
  //.fitExtent([[10,10], [width, height]], ManhattanGJ);


// Manhattan path with equirectangular projection
var MapPath = d3.geoPath()
    .projection(MapProjection);

var textx = -60;
var texty = 370;

canvas.append("path")
  .attr("d", MapPath(ManhattanGJ))
  .attr("stroke", d3.rgb(0,0,0))
  .attr("fill",d3.rgb(222,222,222))
  .attr("stroke-width", 2.5)
  .attr("id", "ManhattanMap");

canvas.append("text")
  .attr("font-family", "Arial Black")
  .attr("font-size", 60)
  .attr("x", textx)
  .attr("y", texty)
  .attr("font-weight", 700)
  .attr("fill", d3.rgb(222,222,222))
  .attr("stroke", d3.rgb(0,0,0))
  .attr("stroke-width", 2)
  .attr("transform", "translate("+ textx + "," + texty + ") rotate(306)")
  .text("MANHATTAN");

canvas.append("text")
  .attr("font-family", "Lucida Console")
  .attr("font-size", 18)
  .attr("x", 80)
  .attr("y", 100)
  .attr("fill", d3.rgb(80,80,80))
  .attr("font-weight", 700)
  .text("2018 Manhattan Service Teams Onsite Repair")


canvas.append("text")
  .attr("font-family", "Lucida Console")
  .attr("font-size", 14)
  .attr("x", 85)
  .attr("y", 120)
  .attr("fill", d3.rgb(80,80,80))
  .text("Each dot is a recorded onsite repair in 2018")

  canvas.append("text")
    .attr("font-family", "Lucida Console")
    .attr("font-size", 14)
    .attr("x", 85)
    .attr("y", 135)
    .attr("fill", d3.rgb(80,80,80))
    .text("Spiral created for locations with multiple visits")


// add circles to map based on csv file
d3.csv("https://raw.githubusercontent.com/pacunningham821/map1/master/activityLocations.csv").then(function(data){

var MapPoint = canvas.selectAll(".Point")
  //.data(data.filter(function(data) {return data.SSO == 212001698}))
  .data(data)
  .enter()
  .append("circle")
  .attr("r", 2)
  .attr("fill", d3.rgb(127,174,236))
  .attr("stroke", d3.rgb(0,0,0))
  .attr("stroke-width", 0.1)
  .attr("cx", function(d) {console.log("Lon, Lat: " + MapProjection([d.NewLon, d.NewLat])); return MapProjection([d.NewLon, d.NewLat])[0];})
  .attr("cy", function(d) {return MapProjection([d.NewLon, d.NewLat])[1];})
  .attr("class", "Point");

}); // close of d3.csv callback function
