const users = [
  {
    name: "Vlad",
    age: 14,
    eyeColor: "blue",
    gender: "male",
    isActive: false,
    email: "vlad1234@gmail.com",
  },
  {
    name: "Dima",
    age: 12,
    eyeColor: "brown",
    gender: "male",
    isActive: true,
    email: "dmitro@gmail.com",
  },
  {
    name: "Alina",
    age: 10,
    eyeColor: "green",
    gender: "female",
    isActive: true,
    email: "alina1111@gmail.com",
  },
  {
    name: "Artem",
    age: 15,
    eyeColor: "brown",
    gender: "male",
    isActive: false,
    email: "artem@gmail.com",
  },
];

const userNames = users.map((user) => user.name);
console.log(userNames);

const arrBrownEyes = users.filter((user) => user.eyeColor === "brown");
console.log(arrBrownEyes);

const femaleUsers = users.filter((user) => user.gender === "female");
const femaleNames = [];

femaleUsers.forEach((user) => femaleNames.push(user.name));

console.log(femaleNames);

const notActive = users.filter((user) => user.isActive === false);
console.log(notActive);

const dima = users.find((user) => user.email === "dmitro@gmail.com");
console.log(dima);

const teenagers = users.filter((user) => user.age >= 12 && user.age <= 18);
console.log(teenagers);