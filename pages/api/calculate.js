import calcPayslip from "../../utils/calcPayslip";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body;
    const payslip = calcPayslip(body.annualSalary, body.evaluationRate);
    const name = body.firstName + " " + body.lastName;
    res.json({
      name,
      ...payslip
    });
  }
}
