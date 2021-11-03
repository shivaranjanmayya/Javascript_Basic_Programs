//setter example

var emp = {
    name: "Jack",
    salary: 606060,
    city: "Bangalore",
    set empCity(empCity) {
        this.city = empCity;
    },
    set empName(empName) {
        this.name = empName;
    }
};

emp.empCity = "Mangalore";
emp.empName = "shiva";

console.log(emp["name"]);
console.log(emp.city);