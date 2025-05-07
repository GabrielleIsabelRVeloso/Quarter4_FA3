let x = prompt("Enter a number:");
	while (isNaN(x))
    {
        x = prompt("Please enter a random number:");
    }
	x= Number(x);
    let output = "";
    if (x % 2 === 0) 
    {
        for (y = x; y > 0; y--)
        {
            for (g = 1; g <= y; g++)
        {
            output += y + " ";
        }
        output += "<br>";
        }
    } 
    else
    {
    for (y = x; y > 0; y--)
    {
        for (g = 0; g < x; g++)
        {   
            output += g + " ";
        }
        output += "<br>";
    }
    }
    document.getElementById("output").innerHTML = output;
let contact = [];
function con() 
{
    document.getElementById("list").innerHTML = contact.join("<br>");
}
function add() 
{
    let name = document.getElementById("name").value;
    if (name === "") return;
        
    if (contact.length == 7) 
    {
        contact.shift(); 
    }
        
    contact.push(name);
    document.getElementById("name").value = "";
    con();
    }     
    function remove()
    {
        contact.pop();
        con();
    }