export const testData = [
    {
        title: 'Gross income between 0 EGP and 18,200 EGP',
        input: {
            annualSalary: 10000,
            evaluationRate: 11,
        },
        output: {
            grossIncome: 833,
            incomeTax: 0,
            netIncome: 833,
            incentiveBonus: 92,
        }
    },
    {
        title: 'Gross income between 18,201 EGP and 37,000 EGP',
        input: {
            annualSalary: 30000,
            evaluationRate: 10,
        },
        output: {
            grossIncome: 2500,
            incomeTax: 187,
            netIncome: 2313,
            incentiveBonus: 250,
        }
    },
    {
        title: 'Gross income between 37,001 EGP and 87,000 EGP',
        input: {
            annualSalary: 60050,
            evaluationRate: 9
        },
        output: {
            grossIncome: 5004,
            incomeTax: 922,
            netIncome: 4082,
            incentiveBonus: 450
        }
    },
    {
        title: 'Gross income between 37,001 EGP and 87,000 EGP',
        input: {
            annualSalary: 87000,
            evaluationRate: 12
        },
        output: {
            grossIncome: 7250,
            incomeTax: 1652,
            netIncome: 5598,
            incentiveBonus: 870
        }
    },
    {
        title: 'Gross income between 87,001 EGP and 180,000 EGP',
        input: {
            annualSalary: 90000,
            evaluationRate: 9
        },
        output: {
            grossIncome: 7500,
            incomeTax: 1744,
            netIncome: 5756,
            incentiveBonus: 675
        }
    },
    {
        title: 'Gross income More than 180,000 EGP',
        input: {
            annualSalary: 180001,
            evaluationRate: 12
        },
        output: {
            grossIncome: 15000,
            incomeTax: 4519,
            netIncome: 10481,
            incentiveBonus: 1800
        }
    }
]