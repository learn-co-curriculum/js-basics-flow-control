function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400) {
    return('This one is on me!');
  }
  else if (someValue >= 2000 && someValue < 2499) {
    return('I will gladly take your thirty bucks.');
  }
  else if (someValue >= 2500) {
    return('No can do.');
  }
}

function ternaryCheckCity(city){ 
  // Write your code here!
  let theCity = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

    return(theCity)

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return('Thank you so much.');
      break;
    case 'not as generous' :
      return('Thank you.');
      break;
    default :
      return('Bye.')
  }

}