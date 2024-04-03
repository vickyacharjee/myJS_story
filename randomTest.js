// const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
// console.log(shopping[2]);
// const random = ["tree", 795, [0, 1, 2,[3,5,6]]];
// console.log(random[2][3][1]);//5
// random.push(121)
// console.log(random[3]);
// console.log(random);


// const cities = ["Manchester", "Liverpool"];
// const newLength = cities.push("Bristol");
// console.log(typeof(cities)); // [ "Manchester", "Liverpool", "Bristol" ]
// console.log(newLength); // 3
// console.log(typeof(newLength)); // 3


const user=['vicky','21','shillong']
const user2=user.pop()
console.log(user);
console.log("deleted",user2);
// [ 'vicky', '21' ]
// deleted shillong


const user1=['vicky','21','shillong']
const user3=user1.push('india')
console.log(user);
console.log("length ",user3);

const city = ["Manchester", "Liverpool"];
const removedCity = city.pop();
console.log(removedCity); // "Liverpool"

const arr=['hi','this','vicky'];
const arr2=arr;
arr2[2]='vickyACharjee';
console.log(arr2);
console.log(arr);