/*Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.*/
// This function checks car speed and returns the number of points

function speedDetector () {
    const speed = parseInt (prompt ("Enter car speed in km/hr): ")); // get user input for car speed and convert to integer

    //  if entered value is not a number
    if (isNaN(speed)){
        return "invalid input: speed must be a number !"; // return an error message if input is not a number
    }

    let points = 0; // initialize variable points to zero

    // check if speed is within the limit of 70 km/hr
    if (speed <= 70){
        return "ok"; 
        // return "ok" if speed is less than or equal to 70 km/hr
    }else{
        points = Math.floor((speed - 70)/5); 
        // calculate points based on how much speed exceeds the limit
    }

    // check if points are greater than 12, which results in license suspension
    return points > 12 ? "License suspended":`${points}`;
     // return the number of points if less than or equal to 12, otherwise return "License suspended"
}
