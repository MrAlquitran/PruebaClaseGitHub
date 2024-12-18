/*TASK 2

-Write a Car class whose constructor initializes model and milesPerGallon from arguments.
-All instances built with Car:
    -should initialize with a tank at 0
    -should initialize with an odometer at 0
-Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank.
-Give cars ability to .drive(distance). The distance driven:
    -Should cause the odometer to go up.
    -Should cause the the tank to go down taking milesPerGallon into account.
-A car which runs out of fuel while driving can't drive any more distance:
    -The drive method should return a string "I ran out of fuel at x miles!" x being odometer.
*/
class Car{
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        tank = 0;
        odometer = 0;
    }
    fill(gallons){
        this.tank.push(gallons);
    }
    drive(distance){
        this.odometer.push(distance);
        this.tank;
        if (this.tank = 0){
            console.log("You have run out of fuel, you have done "+odometer+" miles")
        }
    }

}