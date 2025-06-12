// Program untuk mengkalkulasi gaji karyawan full-time dan part-time

// Objek atau cetakan untuk waktu kerja
interface WorkingHours {

    name:string,
    clockIn: string,
    clockOut: string,
    dailyhour:number,
    dailySalary : number

}

// Objek atau class employee
class Employee {

    name:string
    perHour_Salary : number
    overTime_Salary : number


    constructor(name: string) {

        this.name = name;

    }

}


// membuat objek atau class employee full time dari class employee
class Fulltime extends Employee {
    
    workingDays : WorkingHours [] = [];
    perHour_Salary : number = 100000;
    overTime_Salary : number = 75000;

    constructor(name:string) {

        super(name);

    }


    addWorkingHours (clockIn : string, clockOut : string) {

        let HoursMinutes_clockIn : string [] = clockIn.split(":");
        let HoursMinutes_clockOut : string [] = clockOut.split(":");

        const Hours : number = Math.abs(parseInt(HoursMinutes_clockIn[0]) - parseInt(HoursMinutes_clockOut[0]));
        
        let salary : number = 0;
        const overtime = Hours - 6;

        if (Hours > 6) {

            salary = (this.perHour_Salary * (Hours - overtime)) + (this.overTime_Salary * overtime);

        } else {

            salary = this.perHour_Salary * Hours;

        }


        const newWorkingHours : WorkingHours = { name : this.name, clockIn, clockOut, dailyhour : Hours , dailySalary : salary}

        this.workingDays.push(newWorkingHours);


        
        

    }

    getTotalSalary() {

        let totalSalary = 0;

        if (this.workingDays.length != 0) {

            for (const property in this.workingDays) {

                totalSalary += this.workingDays[property].dailySalary;
                

            }

        }

        return totalSalary.toLocaleString("id", { style : "currency", currency : "IDR"})

    }



}

// membuat objek atau class employee part time dari class employee
class PartTime extends Employee {

    workingDays : WorkingHours [] = [];
    perHour_Salary : number = 50000;
    overTime_Salary : number = 30000;

    constructor(name:string) {

        super(name);

    }


    addWorkingHours (clockIn : string, clockOut : string) {

        let HoursMinutes_clockIn : string [] = clockIn.split(":");
        let HoursMinutes_clockOut : string [] = clockOut.split(":");

        const Hours : number = Math.abs(parseInt(HoursMinutes_clockIn[0]) - parseInt(HoursMinutes_clockOut[0]));


        let salary : number = 0;
        const overtime = Hours - 6;

        if (Hours > 6) {

            salary = (this.perHour_Salary * (Hours - overtime)) + (this.overTime_Salary * overtime);

        } else {

            salary = this.perHour_Salary * Hours;

        }


        const newWorkingHours : WorkingHours = { name : this.name, clockIn, clockOut, dailyhour : Hours , dailySalary : salary}

        this.workingDays.push(newWorkingHours);

       
        
        

    }

    getTotalSalary() {

        let totalSalary = 0;

        if (this.workingDays.length != 0) {

            for (const property in this.workingDays) {

                totalSalary += this.workingDays[property].dailySalary;
                

            }

        }

        return totalSalary.toLocaleString("id", { style : "currency", currency : "IDR"})

    }



}


const employeeA = new Fulltime("Bobi");

employeeA.addWorkingHours("09:00","12:00")
employeeA.addWorkingHours("09:00","16:00")

console.log(employeeA.workingDays);

console.log(employeeA.getTotalSalary());


const employeeB = new PartTime("Groot");

employeeB.addWorkingHours("09:00","12:00")
employeeB.addWorkingHours("09:00","16:00")

console.log(employeeB.workingDays);

console.log(employeeB.getTotalSalary());






