import styled from 'styled-components';


export const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 120px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  background-color: #fff;
`;

export const Label = styled.label``;

export const Button = styled.button`
  height: 42px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: #2c73d2;
  cursor: pointer;
`;