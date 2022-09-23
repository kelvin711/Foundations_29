function Employee(name, shifts) {
    this.name = name;
    this.shifts = shifts;

    // this.getSchedule = function() {
    //     console.log(`${this.name} works on ${this.shifts}`);
    // }
}

Employee.prototype.getSchedule = function(){
    console.log(`${this.name} works on ${this.shifts}`);
}


let empOne = new Employee("Lukas", "he never clocks in so idk");

empOne.getSchedule()