// This function computes the Pay As You Earn (PAYE) tax based on the gross salary provided as an input parameter. It uses a progressive tax system with different tax rates applied at different income thresholds.
function computePayee (grossSalary) {
    if (grossSalary<= 12298) { 
        // If the gross salary is less than or equal to Ksh. 12,298, the PAYE tax is 0.
        return 0;
    }
    else if (grossSalary <= 23885) { 
        // If the gross salary is less than or equal to Ksh. 23,885, a tax rate of 10% is applied on the amount exceeding Ksh. 12,298.
        return (grossSalary - 12298) * 0.1;
    }else if (grossSalary <= 35472) { 
        // If the gross salary is less than or equal to Ksh. 35,472, a tax rate of 15% is applied on the amount exceeding Ksh. 23,885 plus a constant tax amount of Ksh. 1,158.70.
        return 1158.7 +(grossSalary - 23885) * 0.15
    }else if  (grossSalary <=47059) { 
        // If the gross salary is less than or equal to Ksh. 47,059, a tax rate of 20% is applied on the amount exceeding Ksh. 35,472 plus a constant tax amount of Ksh. 2,963.70.
        return 2963.7 + (grossSalary - 35472) * 0.2;
    }else if (grossSalary <= 58646) { 
        // If the gross salary is less than or equal to Ksh. 58,646, a tax rate of 25% is applied on the amount exceeding Ksh. 47,059 plus a constant tax amount of Ksh. 5,328.70.
        return 5328.7 + (grossSalary - 47059) * 0.25;
    }else { // If the gross salary is greater than Ksh. 58,646, a tax rate of 30% is applied on the amount exceeding Ksh. 58,646 plus a constant tax amount of Ksh. 9,023.70.
        return 9023.7 + (grossSalary - 58646) * 0.3;
    }
}

// This function computes the National Hospital Insurance Fund (NHIF) deductions based on the gross salary provided as an input parameter. It uses a fixed monthly contribution amount.
function computeNHIFDeductions(grossSalary){
    if (grossSalary <= 5999) { 
        // If the gross salary is less than or equal to Ksh. 5,999, the NHIF deduction amount is Ksh. 150 per month.
        return 150;
    }else if (grossSalary <= 7999) { 
        // If the gross salary is less than or equal to Ksh. 7,999, the NHIF deduction amount is Ksh. 300 per month.
        return 300;
    }else if (grossSalary <= 11999) { 
        // If the gross salary is less than or equal to Ksh. 11,999, the NHIF deduction amount is Ksh. 400 per month.
        return 400;
    }else if (grossSalary <= 14999) { 
        // If the gross salary is less than or equal to Ksh. 14,999, the NHIF deduction amount is Ksh. 500 per month.
        return 500;
    }else if (grossSalary <= 19999) { 
        // If the gross salary is less than or equal to Ksh. 19,999, the NHIF deduction amount is Ksh. 600 per month.
        return 600;
    }else if (grossSalary <= 24999) { 
        // If the gross salary is less than or equal to Ksh. 24,999, the NHIF deduction amount is Ksh. 750 per month.
        return 750;
    }else if (grossSalary <= 29999) {
        // If the gross salary is less than or equal to Ksh. 29,999, the NHIF deduction amount is Ksh. 850 per month.
        return 850;
    }else if (grossSalary <= 34999) { 
        // If the gross salary is less than or equal to Ksh. 34,999, the NHIF deduction amount is Ksh. 900 per month.
        return 900;
    }else if(grossSalary <= 39999) { 
        // If the gross salary is less than or equal to Ksh. 39,999, the NHIF deduction amount is Ksh. 950 per month.
        return 950;
    }else{ // If the gross salary is greater than Ksh. 39,999, the NHIF deduction amount is Ksh. 1,000 per month.
        return 1000;
    }
}

// This function calculates the net salary based on the basic salary and benefits provided as input parameters. It first checks that the inputs are valid numbers. Then it computes the gross salary by adding the basic salary and benefits. It then calls the computePayee and computeNHIFDeductions functions to calculate the PAYE tax and NHIF deductions, respectively. Finally, it subtracts the PAYE tax and NHIF deductions from the gross salary to obtain the net salary and returns a string with the results.
function calculateNetSalary(basicSalary, benefits) {
    if (isNaN(basicSalary) || isNaN(benefits)) { 
        // If the basic salary or benefits is not a valid number, return an error message.
        return "Invalid input: basicSalary and benefits must be numbers!";
    }
    const grossSalary = parseInt(basicSalary) + parseInt(benefits); 
    // Compute the gross salary by adding the basic salary and benefits.
    const payee = computePayee(grossSalary); 
    // Compute the PAYE tax based on the gross salary.
    const nhifDeductions =computeNHIFDeductions(grossSalary); 
    // Compute the NHIF deductions based on the gross salary.

    const netSalary = grossSalary - payee - nhifDeductions; 
    // Calculate the net salary by subtracting the PAYE tax and NHIF deductions from the gross salary.
    return `Net Salary Ksh. ${netSalary}, PAYE: Ksh. ${payee}, NHIF Deductions: Ksh. ${nhifDeductions}`;
     // Return a formatted string with the results.
}

