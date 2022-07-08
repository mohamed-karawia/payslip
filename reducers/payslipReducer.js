export const payslipReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAYSLIP':
      return {
        name: action.payload.name,
        grossIncome: action.payload.grossIncome,
        incomeTax: action.payload.incomeTax,
        netIncome: action.payload.netIncome,
        incentiveBonus: action.payload.incentiveBonus,
      };
    default:
      return state;
  }
} 