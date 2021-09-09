import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function App() {
  const [decimal, setDecimal] = useState("0");
  const [binary, setBinary] = useState("");
  const regex = /^[a-zA-Z.,;:|\\\/~!@#$%^&*_-{}\[\]()`"'<>?\s]+$/;
  const regexNumbers = /^([^2-9]*)$/;

  const handleChange = e => {
    if (regex.test(e.target.value) || !regexNumbers.test(e.target.value)) {
      alert("Only accepts 1 and 0");
    }
    setBinary(e.target.value);
  };

  useEffect(() => {
    setDecimal(parseInt(binary, 2));
  });

  return (
    <Container>
      <Fieldset>
        <label for="binary">Binary</label>
        <Input name="binary" value={binary} onChange={handleChange} />
      </Fieldset>
      <Decimal>Decimal: {decimal}</Decimal>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e84a5f;
  color: white;
  font-size: 20px;
  padding: 0.5em;
  border: 2px solid white;
  border-radius: 20px;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: 1em;
  font-size: 20px;
`;

const Decimal = styled.p`
  font-size: 20px;
`;
