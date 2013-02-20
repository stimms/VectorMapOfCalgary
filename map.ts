declare var d3: any;

module OpenData
{
  export class CalgaryMap{

    render(){
        var xy =  d3.geo.albers().scale(280000).translate([33400,-45300]);//.translate([-1000,1800]);//.scale(5000);//.translate([-900,950]);//.scale(28000);
        var path = d3.geo.path().projection(xy);

        var vis = d3.select("#map")
          .append("svg:svg")
          .attr("width", 900)
          .attr("height", 900);

        d3.json( "data.json", (json) =>
        {
          vis.append("svg:g")
            .attr("class", "tracts")
          .selectAll("path")
            .data(json.features)
          .enter().append("svg:path")
            .attr("d", path)
            .attr("fill-opacity", 0.5)
            .attr("fill", (d) => {return "black";})
            .attr("stroke", "#222")
        })
    }
  }
}