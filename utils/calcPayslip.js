import { taxesTable } from "./constants";

const calculateIncomeTax = (annualSalary) => {

    for (const tax of taxesTable) {
        if (tax.maxIncome === null || annualSalary <= tax.maxIncome) {
            return tax.taxStartAmount + (annualSalary - tax.taxStartIncome) * tax.taxRate;
        }
    }
}

export default function calcPayslip(annualSalary, evaluationRate) {
    const round = Math.round;
    const grossIncome = round(annualSalary / 12);
    const incomeTax = round(calculateIncomeTax(annualSalary) / 12);
    const netIncome = round(grossIncome - incomeTax);
    const incentiveBonus = round((grossIncome) * (evaluationRate / 100));
    return {
        grossIncome,
        incomeTax,
        netIncome,
        incentiveBonus
    }
}

