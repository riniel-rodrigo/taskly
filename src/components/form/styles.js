import styled from "styled-components";

export const Title = styled.h2`
  font-size: 17px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: end;
  padding: 20px;
  border-radius: 8px;
  background-color: #eeece8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1050px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 12px;
  color: #666;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  transition: border 0.3s;
  background-color: #eeece8;

  &:focus {
    border-color: #588157;
    outline: none;
  }
`;

export const Button = styled.button`
  align-self: end;
  padding: 10px;
  height: 39px;
  font-size: 14px;
  color: #ffffff;
  background-color: #588157;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a5a40;
  }
`;

export const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
