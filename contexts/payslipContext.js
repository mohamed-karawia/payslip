import React, { createContext, useReducer } from 'react';
import { payslipReducer } from '../reducers/payslipReducer';

export const PayslipContext = createContext();

const PayslipContextProvider = ({ children }) => {
    const [payslip, dispatch] = useReducer(payslipReducer, {});
    return (
        <PayslipContext.Provider value={{ payslip, dispatch }}>
            {children}
        </PayslipContext.Provider>
    );
}

export default PayslipContextProvider;