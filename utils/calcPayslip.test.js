import { testData } from '../testData/fixtures';
import calcPayslip from './calcPayslip';

describe('Calculate Payslip', () => {
    testData.forEach(test => {
        it(test.title, () => {
            expect(calcPayslip(test.input.annualSalary, test.input.evaluationRate)).toEqual(test.output);
        }
        )
    }
    )
})
