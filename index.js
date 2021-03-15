function scuberGreetingForFeet(feetTraveled){
  //var feetTraveled = feetTraveled;
  if (feetTraveled <= 400){
    return "This one is on me!";
  }
    else if (feetTraveled >= 2000 && feetTraveled < 2500){
      return "I will gladly take your thirty bucks."
    }
    else if (feetTraveled > 2500 && feetTraveled > 2001){
      return "No can do."
    }
     
  }


function ternaryCheckCity(city){
  if (city === "NYC" ? true : false){
    return "Ok, sounds good."
  }
  else if (city !== "NYC" ? true : false){
    return "No go."
  }
};

function switchOnCharmFromTip(goodTip){

switch(goodTip) {
  case "generous":
    return "Thank you so much.";
    break;
  case "not as generous":
    return "Thank you." 
    break;
  default: return "Bye.";
} 

   
  /*if (goodTip == "generous"){
    return 'Thank you so much.'
  }
  else if (goodTip !== "generous" ? true : false){
    return "Thank you."
  }
  else {
  return "Bye."
  }*/
};