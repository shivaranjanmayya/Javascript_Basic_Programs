//Store & display 5 employee details (should have at least 5 properties and 2 behaviours) using Object constructor.

var employee1 = new Object();
employee1.name = 'Shiva';
employee1.id = 11290;
employee1.salary = 20000;
employee1.age = 26;
employee1.email = "nsmayya@gmail.com";
employee1.employeeRecords = function () {
    console.log(this.name, this.id, this.salary, this.age, this.email);
};
employee1.workLocation = function () {
    console.log("Working in Mangalore");
};

employee1.employeeRecords();
employee1.workLocation();

var employee2 = new Object();
employee2.name = 'Ranjan';
employee2.id = 11291;
employee2.salary = 25000;
employee2.age = 26;
employee2.email = "abc@gmail.com";
employee2.employeeRecords = function () {
    console.log(this.name, this.id, this.salary, this.age, this.email);
};
employee2.workLocation = function () {
    console.log("Working in Mangalore");
};


employee2.employeeRecords();
employee2.workLocation();

var employee3 = new Object();
employee3.name = 'xyz';
employee3.id = 11292;
employee3.salary = 30000;
employee3.age = 29;
employee3.email = "xyz@gmail.com";
employee3.employeeRecords = function () {
    console.log(this.name, this.id, this.salary, this.age, this.email);
};
employee3.workLocation = function () {
    console.log("Working in Mysore");
};

employee3.employeeRecords();
employee3.workLocation();

var employee4 = new Object();
employee4.name = 'Mayya';
employee4.id = 11293;
employee4.salary = 40000;
employee4.age = 30;
employee4.email = "mayya@gmail.com";
employee4.employeeRecords = function () {
    console.log(this.name, this.id, this.salary, this.age, this.email);
};
employee4.workLocation = function () {
    console.log("Working in Bangalore");
};

employee4.employeeRecords();
employee4.workLocation();

var employee5 = new Object();
employee5.name = 'Hari';
employee5.id = 12345;
employee5.salary = 23000;
employee5.age = 24;
employee5.email = "nhmayya@gmail.com";
employee5.employeeRecords = function () {
    console.log(this.name, this.id, this.salary, this.age, this.email);
};
employee5.workLocation = function () {
    console.log("Working in Mangalore");
};

employee5.employeeRecords();
employee5.workLocation();


