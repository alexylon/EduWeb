let arr = [5, 6, 7, 8, 9];

for (let index in arr) {
  console.log(arr[index]);
}

for (let element of arr) {
  console.log(element);
}

let family = [
  { name: "Alexander", birthYear: 1972 },
  { name: "Ekaterina", birthYear: 1986 }
];

for (let index in family) {
  console.log(family[index]);
}

for (let element of family) {
  console.log(element);
}
