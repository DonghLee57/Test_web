// document.getElementById()
// Importing .js should be lower than <id> line in html.

var bar_select = ''
bar_select += '<select type="text" list="skills" id="table_skill">';
bar_select += '<datalist id="skills">';
bar_select += '<option value="00">스킬1</option>';
bar_select += '<option value="01">스킬2</option>';
bar_select += '<option value="02">스킬3</option>';
bar_select += '</datalist>';
bar_select += '</select>';

var out = "";
out += "<table>";
out += "<tr>";
for(var i = 0; i < items.length ; i++){
for(var j = 0; j < items[0].length; j++){
  out += "<td>"+ bar_select + "</td>";
};
out += "</tr>";
};
out += "</thead>";
out += "</tbody>";

document.getElementById("setting").innerHTML = out;