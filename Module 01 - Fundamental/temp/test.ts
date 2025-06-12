// // Program untuk mengkalkulasi gaji karyawan full-time dan part-time

// // Objek atau cetakan untuk waktu kerja
// interface WorkingHours {

//     name:string,
//     clockIn: string,
//     clockOut: string,
//     dailyhour:number,
//     dailySalary : number

// }

// // Objek atau class employee
// class Employee {

//     name:string
//     perHour_Salary : number
//     overTime_Salary : number


//     constructor(name: string) {

//         this.name = name;

//     }

// }


// // membuat objek atau class employee full time dari class employee
// class Fulltime extends Employee {
    
//     workingDays : WorkingHours [] = [];
//     perHour_Salary : number = 100000;
//     overTime_Salary : number = 75000;

//     constructor(name:string) {

//         super(name);

//     }


//     addWorkingHours (clockIn : string, clockOut : string) {

//         let HoursMinutes_clockIn : string [] = clockIn.split(":");
//         let HoursMinutes_clockOut : string [] = clockOut.split(":");

//         const Minutes_clockIn : number = (parseInt(HoursMinutes_clockIn[0]) * 60) + parseInt(HoursMinutes_clockIn[1]);
//         const Minutes_clockOut : number = (parseInt(HoursMinutes_clockOut[0]) * 60) + parseInt(HoursMinutes_clockOut[1]);
//         const Minutes : number = Math.abs(Minutes_clockIn - Minutes_clockOut);
        
//         const minutesRemainder : number = Minutes % 60;
//         const Hours : number = (Math.abs(Minutes - minutesRemainder)) / 60;
//         const overtime : number = (((Minutes - minutesRemainder) - (6 * 60))) / 60;

//         console.log(Hours);
//         console.log((minutesRemainder/60).toFixed(1));
//         console.log((minutesRemainder));
//         console.log(overtime);
//         console.log((this.overTime_Salary * (minutesRemainder/60)));
        
        
        
        

//         let salary : number = 0;

//         if (Hours > 6) {

//             salary = (this.perHour_Salary * (Hours - overtime)) + (this.overTime_Salary * overtime) + (this.overTime_Salary * (minutesRemainder/60));

//         } else {

//             salary = (this.perHour_Salary * Hours) + (this.perHour_Salary * (minutesRemainder/60));

//         }


//         const newWorkingHours : WorkingHours = { name : this.name, clockIn, clockOut, dailyhour : Hours , dailySalary : salary}

//         this.workingDays.push(newWorkingHours);


        
        

//     }

//     getTotalSalary() {

//         let totalSalary = 0;

//         if (this.workingDays.length != 0) {

//             for (const property in this.workingDays) {

//                 totalSalary += this.workingDays[property].dailySalary;
                

//             }

//         }

//         return totalSalary.toLocaleString("id", { style : "currency", currency : "IDR"})

//     }



// }

// // membuat objek atau class employee part time dari class employee
// class PartTime extends Employee {

//     workingDays : WorkingHours [] = [];
//     perHour_Salary : number = 50000;
//     overTime_Salary : number = 30000;

//     constructor(name:string) {

//         super(name);

//     }


//     addWorkingHours (clockIn : string, clockOut : string) {

//         let HoursMinutes_clockIn : string [] = clockIn.split(":");
//         let HoursMinutes_clockOut : string [] = clockOut.split(":");

//         const Minutes_clockIn : number = (parseInt(HoursMinutes_clockIn[0]) * 60) + parseInt(HoursMinutes_clockIn[1]);
//         const Minutes_clockOut : number = (parseInt(HoursMinutes_clockOut[0]) * 60) + parseInt(HoursMinutes_clockOut[1]);
//         const Minutes : number = Math.abs(Minutes_clockIn - Minutes_clockOut);
        
//         const minutesRemainder : number = Minutes % 60;
//         const Hours : number = (Math.abs(Minutes - minutesRemainder)) / 60;
//         const overtime : number = (((Minutes - minutesRemainder) - (6 * 60))) / 60;
        
//         let salary : number = 0;

//         if (Hours > 6) {

//             salary = (this.perHour_Salary * (Hours - overtime)) + (this.overTime_Salary * overtime) + (this.overTime_Salary * (minutesRemainder/60));

//         } else {

//             salary = (this.perHour_Salary * Hours) + (this.perHour_Salary * (minutesRemainder/60));

//         }


//         const newWorkingHours : WorkingHours = { name : this.name, clockIn, clockOut, dailyhour : Hours , dailySalary : salary}

//         this.workingDays.push(newWorkingHours);

       
        
        

//     }

//     getTotalSalary() {

//         let totalSalary = 0;

//         if (this.workingDays.length != 0) {

//             for (const property in this.workingDays) {

//                 totalSalary += this.workingDays[property].dailySalary;
                

//             }

//         }

//         return totalSalary.toLocaleString("id", { style : "currency", currency : "IDR"})

//     }



// }


// const employeeA = new Fulltime("Bobi");

// employeeA.addWorkingHours("09:00","12:00")
// employeeA.addWorkingHours("08:00","13:00")

// console.log(employeeA.workingDays);

// console.log(employeeA.getTotalSalary());


// const employeeB = new PartTime("Groot");

// employeeB.addWorkingHours("09:00","12:00")
// employeeB.addWorkingHours("09:00","16:00")

// console.log(employeeB.workingDays);

// console.log(employeeB.getTotalSalary());






