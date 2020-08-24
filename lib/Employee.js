// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    printInfo() {
      console.log(`Hello ${this.name}, your ID number is ${this.id}. We have recorded your email as ${this.email}`);
    }
    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    getRole() {
        return Employee;
    }
  }
  module.exports = Employee;
  