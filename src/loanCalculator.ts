


export const getApr = (loanRequest:LoanRequest) => {

    let apr = 0;

    if (loanRequest.creditScore >= 700 && loanRequest.loanAmount > 100000 )
        return 0
    
    apr = getBaseRate(loanRequest, apr);

    if (loanRequest.vehicleYear < 2015) {

        apr += 1;
    }

    if (loanRequest.mileage > 100000) {
        apr += 2;
    }

    return apr;

}

function getBaseRate(loanRequest: LoanRequest, apr: number) {
    if (loanRequest.loanTerm <= 36) {
        if (loanRequest.creditScore >= 700)
            apr = 4.75;
        else if (loanRequest.creditScore > 600 && loanRequest.creditScore < 699) {
            apr = 5.75;
        } else {
            apr = 12.75;
        }
    } else if (loanRequest.loanTerm <= 48) {
        if (loanRequest.creditScore >= 700)
            apr = 5;
        else if (loanRequest.creditScore > 600 && loanRequest.creditScore < 699) {
            apr = 6;
        }
    } else if (loanRequest.loanTerm <= 60) {
        if (loanRequest.creditScore >= 700)
            apr = 5.5;
        else if (loanRequest.creditScore > 600 && loanRequest.creditScore < 699) {
            apr = 6.65;
        }
    }
    return apr;
}
