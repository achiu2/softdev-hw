var rep_states = ['IA','NH','SC','NV','AL','AK','AR','GA','MA','MN','OK','TN','TX','VT','VA','KS','KY','LA','ME','PR','HI','ID','MI','MS','VI','DC','GU','WY','FL','IL','MO','NC','MP','OH'];
var dem_states = ['IA','NH','NV','SC','AL', 'AR', "CO", 'GA', "MA", "MN", "OK", "TN", "TE", "VT", "VG", "LA", "NE",
"KS", "ME", "MS", "MI", "FL", "IL", "MO", "NC", "OH", "AZ", "ID", "UT", "AK", "HA", "WA", "WI", "WY", "NY", "MD",
"CT", "DE", "PA", "RI", "IN", "GU", "WV", "KY", "OR", "VI", "PR", "CA", "MT", "NJ", "ND", "NM", "SD", "DC"];
//var rep_total = [30,23,50,30,50,28,40,76,42,38,43,58,155,16,49,40,46,46,23,23,19,32,59,40,9,19,9,29,99,69,52,72,9,66];
var dem_allotted = [44, 24, 34, 53, 53, 32, 66, 100, 91, 77, 38, 66, 219, 16, 94, 47, 24, 33, 22, 34, 127, 198, 135,
    64, 104, 141];
var rep_allotted = [23,20,50,28,50,28,39,72,42,38,40,58,155,16,46,40,46,41,23,23,19,32,59,37,0,19,0,11,99,65,30,71,9,66];
s = -1;

function init() {
  d3.select(".names")
    .selectAll("div")
      .data(rep_states)
    .enter().append("div")
      .text(function(d) {
        return d;
      })
      .style("height", function() {
        return "35px";
      })

  d3.select(".republican")
    .selectAll("div")
      .data(rep_allotted)
    .enter().append("div")
      .style("width", function(d) {
        if (d == 0) { return "10px"; }
        return d * 10 + "px"; })
      .text(function(d) {
        s++;
        return d })

  d3.select("#other")
      .on("click", function(d,i) {
          delegates(dem_allotted)
        })
}

function delegates(party) {
  d3.select(".republican").selectAll("div").remove();
  d3.select(".names").selectAll("div").remove();
  d3.select(".names")
    .selectAll("div")
      .data(dem_states)
    .enter().append("div")
      .text(function(d) {
        return d;
      })
      .style("height", function() {
        return "35px";
      })
  d3.select(".republican")
    .selectAll("div")
      .data(dem_allotted)
    .enter().append("div")
      .style("background-color", "#2980b9")
      .style("width", function(d) {
        if (d == 0) { return "10px"; }
        return d * 10 + "px"; })
      .text(function(d) {
        s++;
        return d })
    .transition()
      .duration(3000);
}

init();
