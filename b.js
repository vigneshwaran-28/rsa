// function a() {
//   let i = 0;

//   (async () => {
//     const axios = require("axios");
//     while (true) {
//       i++;
//       console.log("came inside");
//       const data = await axios.get("https://reqres.in/api/users");
//       console.log("data inside while", data.data);
//       if (i > 2) break;
//     }
//   })();

//   console.log("i", i);
// }

// a();

// if(null===null)
// console.log('inside if');
// else
// console.log('inside else');

const a = [
  { name: "v", age: 19 },
  { name: "n", age: 19 },
];
const b = [
  { name: "k", age: 19 },
  { name: "a", age: 19 },
];

console.log([...b,...a]);
