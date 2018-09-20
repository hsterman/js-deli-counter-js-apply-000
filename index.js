var katzDeliLine = [];
var i = 0;
function takeANumber(line) {
  line.push(line);
  
  i++;
  return `Welcome. You are number ${i} in line.`;
 
}

function nowServing(line){
  var t = 0;
  
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + line.shift([t]) + ".";
  }
}
  
function currentLine(line) {
  if (line.length > 0) 
  {
    var i;
    let posName = [];
    for (i = 0; i < line.length; i++) {
      posName.push(" " + (i + 1) + ". " + line[i])}
       
    return ("The line is currently:" + posName.join()); 
       } else { 
    return "The line is currently empty.";
  }
}
