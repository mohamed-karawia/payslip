import { taxesTable } from "./constants";

const calculateIncomeTax = (annualSalary) => {

    for (const tax of taxesTable) {
        if (tax.maxIncome === null || annualSalary <= tax.maxIncome) {
            return tax.taxStartAmount + (annualSalary - tax.taxStartIncome) * tax.taxRate;
        }
    }
}

export default function calcPayslip(annualSalary, evaluationRate) {
    const grossIncome = annualSalary / 12;
    const incomeTax = calculateIncomeTax(annualSalary) / 12;
    const netIncome = grossIncome - incomeTax;
    const incentiveBonus = (grossIncome) * (evaluationRate / 100);
    return {
        grossIncome,
        incomeTax,
        netIncome,
        incentiveBonus
    }
}

