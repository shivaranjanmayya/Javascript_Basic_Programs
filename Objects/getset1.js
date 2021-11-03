//getter example

var emp = {
    name: "Jack",
    salary: 606060,
    city: "Bangalore",
    get empCity() {
        return this.city;
    },
    get empName() {
        return this.name;
    }
};

console.log(emp.empCity);
console.log(emp.empName);