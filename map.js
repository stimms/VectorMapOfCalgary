var OpenData;
(function (OpenData) {
    var CalgaryMap = (function () {
        function CalgaryMap() { }
        CalgaryMap.prototype.render = function () {
            var xy = d3.geo.albers(0.25).translate([
                -1000, 
                1800
            ]);
            var path = d3.geo.path().projection(xy);
            var vis = d3.select("#map").append("svg:svg").attr("width", 900).attr("height", 900);
            d3.json("data.json", function (json) {
                vis.append("svg:g").attr("class", "tracts").selectAll("path").data(json.features).enter().append("svg:path").attr("d", path).attr("fill-opacity", 0.5).attr("fill", function (d) {
                    return "black";
                }).attr("stroke", "#222");
            });
        };
        return CalgaryMap;
    })();
    OpenData.CalgaryMap = CalgaryMap;    
})(OpenData || (OpenData = {}));
