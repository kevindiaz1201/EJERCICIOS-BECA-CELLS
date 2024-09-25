let people = [
    { name: "bob", id:1 }, { name: "john", id:2 },
    { name: "alex", id:3 }, { name: "john", id:3 }
    ];

let nameCount = people.reduce((accumulator, person) => {
  if (accumulator[person.name]) {
    accumulator[person.name]++;
  } else {
    accumulator[person.name] = 1;
  }
  return accumulator;
}, {});

console.log(nameCount);
