import { useState, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { PayslipContext } from "../../contexts/payslipContext";
import Container from "../UI/Container";

const Home = () => {
  const { dispatch } = useContext(PayslipContext);
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const checkValidity = () => {
    let fields = formData;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "First name is required";
    }

    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Last name is required";
    }

    // Annual salary
    if (!fields["annualSalary"]) {
      formIsValid = false;
      errors["annualSalary"] = "Annual salary is required";
    }

    if (fields["annualSalary"] < 0 || isNaN(fields["annualSalary"])) {
      formIsValid = false;
      errors["annualSalary"] = "Annual salary must be a positive number";
    }

    // Evaluation rate
    if (!fields["evaluationRate"]) {
      formIsValid = false;
      errors["evaluationRate"] = "Evaluation rate is required";
    }

    if (
      fields["evaluationRate"] < 0 ||
      fields["evaluationRate"] > 12 ||
      isNaN(fields["evaluationRate"])
    ) {
      formIsValid = false;
      errors["evaluationRate"] =
        "Evaluation rate must be a number between 0 and 12";
    }

    // Date
    if (!fields["startDate"]) {
      formIsValid = false;
      errors["startDate"] = "Start date is required";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidity()) {
      fetch("/api/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "SET_PAYSLIP", payload: data });
          router.push("/result");
        });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputBox>
            <Label>first name</Label>
            <Input
              type="text"
              name="firstName"
              placeholder="first name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <Error>{errors.firstName}</Error>}
          </InputBox>
          <InputBox>
            <Label>last name</Label>
            <Input
              type="text"
              name="lastName"
              placeholder="last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <Error>{errors.lastName}</Error>}
          </InputBox>
        </FormGroup>
        <InputBox>
          <Label>annual salary</Label>
          <Input
            type="number"
            name="annualSalary"
            placeholder="annual salary"
            value={formData.annualSalary}
            onChange={handleChange}
          />
          {errors.annualSalary && <Error>{errors.annualSalary}</Error>}
        </InputBox>
        <InputBox>
          <Label>evaluation rate </Label>
          <Input
            type="number"
            name="evaluationRate"
            placeholder="evaluation rate"
            value={formData.evaluationRate}
            onChange={handleChange}
          />
          {errors.evaluationRate && <Error>{errors.evaluationRate}</Error>}
        </InputBox>
        <InputBox>
          <Label>payment start date</Label>
          <Input
            type="date"
            name="startDate"
            placeholder="payment start date"
            value={formData.startDate}
            onChange={handleChange}
          />
          {errors.startDate && <Error>{errors.startDate}</Error>}
        </InputBox>
        <Button type="submit">Calculate</Button>
      </Form>
    </Container>
  );
};



const Form = styled.form`
  background-color: white;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.411);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const Label = styled.label`
  text-transform: capitalize;
  color: ${({ theme }) => theme.primaryColor};
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  height: 40px;
  padding: 5px;
  width: 100%;
  &::placeholder {
    text-transform: capitalize;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 12px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export default Home;
