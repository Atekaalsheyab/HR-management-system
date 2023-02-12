"use strict"

function Employee(EmployeeId, FullName, Department, Level, Image_URL, Salary) {
    this.EmployeeId = EmployeeId;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.Image_URL = Image_URL;
    this.Salary = 0;
}

Employee.prototype.calculateSalary = function () {

    let max;
    let min;
    switch (this.Level) {
        case "Senior":
            max = 2000;
            min = 1500;
            this.Salary = Math.floor(Math.random() * (max - min) + min);
           return  this.Salary = this.Salary - ((7.5 / 100) * this.Salary);
            break;
        case "Mid-Senior":
            max = 1500;
            min = 1000;
            this.Salary = Math.floor(Math.random() * (max - min) + min);
           return  this.Salary = this.Salary - ((7.5 / 100) * this.Salary);
            break;
        case "Junior":
            max = 500;
            min = 1000;
            this.Salary = Math.floor(Math.random() * (max - min) + min);
            return this.Salary = this.Salary - ((7.5 / 100) * this.Salary);
            break;

        default:
            break;
    }
}


Employee.prototype.render = function () {
    document.write( `EmployeeName : ${this.FullName}    Salary:  ${this.Salary}`); 
    document.write("<br>");

}

let empArr= new Array();

let emp1= new Employee(1000, "Ghazi Samer", "Administration", "Senior", ""); 
emp1.calculateSalary(this.Level); 
let emp2= new Employee(1001, "Lana Ali", "Finance", "Senior", ""); 
emp2.calculateSalary(this.Level); 
let emp3= new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", ""); 
emp3.calculateSalary(this.Level); 
let emp4= new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", ""); 
emp4.calculateSalary(this.Level); 
let emp5= new Employee(1004, "Omar Zaid", "Development", "Senior", ""); 
emp5.calculateSalary(this.Level); 
let emp6= new Employee(1005, "Rana Saleh", "Development", "Junior", ""); 
emp6.calculateSalary(this.Level); 
let emp7= new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", ""); 
emp7.calculateSalary(this.Level); 

empArr=[emp1,emp2,emp3,emp4,emp5,emp6,emp7];

// emp1.render(); 

for (let index = 0; index <empArr.length; index++) {
    empArr[index].render(); 
    
}

