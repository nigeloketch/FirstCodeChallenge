/*Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.*/
// This function generates student grades based on entered marks
function studentGradeGenerator() {
    let grade = ""; // set an empty string variable for grade
    const marks = prompt ("enter student marks (betweeen 0 and 100): "); // use prompt to get user input for marks

    //  if entered marks are outside the valid range of 0-100
    if (marks > 100 || marks < 0) { 
        return "invalid marks entered!"; 
        // return an error message if marks are invalid
    }
    else if (marks >= 80) { 
        // if marks are greater or equal to 80, assign grade A
        grade = "A";
    }else if (marks >= 60 && marks <= 79){
         // if marks are between 60 and 79, assign grade B
        grade = "B";
    }else if (marks >= 50 && marks <= 59){ 
        // if marks are between 50 and 59, assign grade C
        grade = "C";
    }else if (marks >= 40 && marks <= 49){ 
        // if marks are between 40 and 49, assign grade D
        grade = "D";
    } else {
         // if marks are less than 40, assign grade E
        grade = "E";
    }

    return `Grade: ${grade}`; // return statement that displays the final grade based on the entered marks
}
