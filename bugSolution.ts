function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane User";
console.log(greeter(user));

//Or

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let userArray = ["Jane User", "John Smith"];
console.log(greeterArray(userArray));