//Defaut Parameters
/* 
function greeting(name) {
  if (name === undefined) {
    name = "friend";
  }
  return `Hi , ${name}!`;
}

console.log(greeting());
*/

function greeting(name = "friend", language) {
  if (language === "en") {
    return `Hi, ${name}`;
  } else if (language === "ja") {
    return `Konichiwa, ${name}`;
  } else {
    return `Chào bạn, ${name}`;
  }
}

console.log(greeting());
