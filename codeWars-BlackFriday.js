function blackFriday(year){
  var blackFridayArray = [];
  var fridayFinder=[];
  var fourthFriday=[];
  
  for(var i=1; i<31; i++)
  {
    blackFridayArray.push(new Date(year, 10, i).getDate());
    fridayFinder.push(new Date(year, 10, i).getDay());
  }
  for(i=1; i<31; i++)
  {
    if(fridayFinder[i]===5){fourthFriday.push(blackFridayArray[i]);}
  }
  var dateOfFourthFriday = fourthFriday[3];
  return dateOfFourthFriday;
}

blackFriday(1977);