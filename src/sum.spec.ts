import { getApr } from "./loanCalculator";

describe('calculate loan amount', () => {

// - The loan amount
// - The loan term (in months)
// - The person credit score
// - The vehicle year
// - The vehicle mileage

    it('should return successful sum 36 month loan', () => {

        const params = {
            loanAmount : 10000,
            loanTerm: 36,
            creditScore: 700,
            vehicleYear: 2014,
            mileage: 50000
        } as LoanRequest;

        const apr = getApr(params)

        expect(apr).toBe(5.75);


    })

    it('should return successful sum 48 month loan', () => {

        const params = {
            loanAmount : 10000,
            loanTerm: 48,
            creditScore: 700,
            vehicleYear: 2014,
            mileage: 50000
        } as LoanRequest;

        const apr = getApr(params)

        expect(apr).toBe(6);


    })

    it('should return successful sum for 60 month loan', () => {

        const params = {
            loanAmount : 10000,
            loanTerm: 60,
            creditScore: 700,
            vehicleYear: 2014,
            mileage: 50000
        } as LoanRequest;

        const apr = getApr(params)

        expect(apr).toBe(6.5);


    })

    it('should return successful sum for 36 month loan and cs between 600 699', () => {

        const params = {
            loanAmount : 10000,
            loanTerm: 36,
            creditScore: 650,
            vehicleYear: 2014,
            mileage: 50000
        } as LoanRequest;

        const apr = getApr(params)

        expect(apr).toBe(6.75);


    })

    it('should return successful sum for 48 month loan and cs between 600 699', () => {

        const params = {
            loanAmount : 10000,
            loanTerm: 48,
            creditScore: 650,
            vehicleYear: 2014,
            mileage: 50000
        } as LoanRequest;

        const apr = getApr(params)

        expect(apr).toBe(7);


    })


    it('should return successful sum for 60 month loan and cs between 600 699', () => {

        const params = {
            loanAmount : 10000,
            loanTerm: 60,
            creditScore: 650,
            vehicleYear: 2014,
            mileage: 50000
        } as LoanRequest;

        const apr = getApr(params)

        expect(apr).toBe(7.65);


    })

    it('should return successful sum for 36 month loan and cs < 600', () => {

        const params = {
            loanAmount : 10000,
            loanTerm: 36,
            creditScore: 500,
            vehicleYear: 2014,
            mileage: 50000
        } as LoanRequest;

        const apr = getApr(params)

        expect(apr).toBe(13.75);


    })




})