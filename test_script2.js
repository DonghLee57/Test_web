// document.getElementById()
// Importing .js should be lower than <id> line in html.

var items = [[1, 2, 2],
             [3, 4, 3],
             [5, 6, 0]];
var out = ""
out += "<table>";
out += "<tr>";
for(var i = 0; i < items.length ; i++){
for(var j = 0; j < items[0].length; j++){
  out += "<td>"+ items[i][j] + "</td>";
};
out += "</tr>";
};
out += "</thead>";
out += "</tbody>";
console.log(out);
document.getElementById("setting").innerHTML = out;