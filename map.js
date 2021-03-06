var OpenData;
(function (OpenData) {
    var CalgaryMap = (function () {
        function CalgaryMap() { }
        CalgaryMap.prototype.render = function () {
            var xy = d3.geo.albers().scale(104000).translate([
                5006.880974004931, 
                24151
            ]).rotate([
                110, 
                0
            ]);
            var path = d3.geo.path().projection(xy);
            var vis = d3.select("#map").append("svg:svg").attr("width", 900).attr("height", 900);
            d3.json("data.geojson", function (json) {
                vis.append("svg:g").attr("class", "tracts").selectAll("path").data(json.features).enter().append("svg:path").attr("d", path).attr("fill-opacity", 0.5).attr("data-name", function (d) {
                    return d.properties.NAME;
                }).attr("fill", function (d) {
                    return "black";
                }).attr("stroke", "#222").append("svg:title").text(function (d) {
                    return d.properties.NAME;
                });
            });
        };
        return CalgaryMap;
    })();
    OpenData.CalgaryMap = CalgaryMap;    
})(OpenData || (OpenData = {}));
