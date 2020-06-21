//Higer order functions
function product(name) {
  return function (price) {
    console.log(`[${name}] ${price}`);
  };
}

const pay = product("Pen");
pay(2000);

function waitAndRun(ms, func) {
  setTimeout(func, ms);
}

function run() {
  console.log("Run");
}

waitAndRun(2000, run);
