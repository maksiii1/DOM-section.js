const object = {
  firstName: "Maks",
  secondName: "Saimon",
  fullName: function (arg1, arg2) {
    return `${this.firstName} ${this.secondName} ${arg1}`;
  },
};

const person = {
  firstName: "Maks2",
  secondName: "Saimon2",
};

const fullName = object.fullName.bind(person, "Saimon", "Maks");

console.log(fullName());
