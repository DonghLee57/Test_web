// document.write()
var items = [[1, 2, 2],
             [3, 4, 3],
             [5, 6, 0]];
document.write("<table>");
document.write("<thead>");
document.write("<tbody>");
document.write("<tr>");
for(var i = 0; i < items.length ; i++){
for(var j = 0; j < items[0].length; j++){
  document.write("<td>"+ items[i][j] + "</td>");
  <!--console.log(`${i} ${j} ${items[i][j]}`);-->
};
document.write("</tr>");
};
document.write("</thead>");
document.write("</tbody>");