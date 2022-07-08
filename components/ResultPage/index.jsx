import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { PayslipContext } from "../../contexts/payslipContext";

import Container from "../UI/Container";

const ResultPage = () => {
  const router = useRouter();
  const { payslip } = useContext(PayslipContext);

  useEffect(() => {
    if (Object.keys(payslip).length === 0) {
      router.push("/");
    }
  }, [payslip]);

  return (
    <Container>
      <Table>
        <Tbody>
          <Tr>
            <Th>name</Th>
            <Th>gross income</Th>
            <Th>income tax</Th>
            <Th>net income</Th>
            <Th>incentive bonus</Th>
          </Tr>
          <Tr>
            <Td>{payslip.name}</Td>
            <Td>{payslip.grossIncome}</Td>
            <Td>{payslip.incomeTax}</Td>
            <Td>{payslip.netIncome}</Td>
            <Td>{payslip.incentiveBonus}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};

const cell = `
    border: 1px solid #ddd;
    padding: 20px;
    text-transform: capitalize;
`;

const Table = styled.table`
  width: 70%;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(0, 0, 0, 0.384);
  -moz-box-shadow: 1px 5px 10px 0px rgba(0, 0, 0, 0.384);
  box-shadow: 1px 5px 10px 0px rgba(0, 0, 0, 0.384);
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  ${cell}
`;

const Td = styled.td`
  ${cell}
`;

export default ResultPage;
