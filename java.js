var table;

function readGames()
{
  //getting the gamesTable id to table variable
table=$('#gamesTable');
//loops with condition that the length of games object is less than i
for(var i=0;i<games.length;i++)
{
var row="<tr>";
row+="<td>"+(i+1)+"</td>";
row=row+"<td>"+games[i].name+"</td>";
row=row+"<td>"+games[i].platform+"</td>";
row=row+"<td>"+games[i].genre+"</td>";
row=row+"<td>"+games[i].awards+"</td>";
row=row+"</tr>";
//appending the row to table

table.append(row);
}
//after clicking the button, the button is diabled
$('#click').attr("disabled","disablded");

//gamesTable.style.border = "1px solid #000";

}



//Extra Credit


//JSON object variables
var mydata = JSON.parse(games);
