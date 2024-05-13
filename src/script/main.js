//home work 1

// let arr = [1, 35, 45, 87, 24, 5, 66, 15, 20];

// function edediOrta() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(edediOrta());

function yaziCeviren(yazi) {
  yazi = yazi.split("");
  yazi = yazi.reverse();
  yazi = yazi.join("");
  console.log(yazi);
}

yaziCeviren("salam");
