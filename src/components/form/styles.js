import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.625rem;
`;

export const Title = styled.h2`
  display: block;
  font-size: 1.0625rem;
  color: #333;
  margin-bottom: 0.625rem;
  text-align: center;
`;

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  gap: 2rem;

  padding: 1.25rem;
  border-radius: 0.5rem;
  background-color: #eeece8;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

  @media (max-width: 1050px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  color: #666;
`;

export const Input = styled.input`
  display: block;
  padding: 0.5rem;
  border: 0.0625rem solid #ddd;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: #333;
  background-color: #eeece8;
  transition: border 0.3s;
  width: 100%;

  &:focus {
    border-color: #588157;
    outline: none;
  }
`;

export const NameWarning = styled.p`
  color:#b69121;
  font-size: 0.7rem;
  white-space: nowrap;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: end;

  svg{
    font-size: 2.2rem;
    color: #333;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #AD1025;
    }
  }
`;

export const Button = styled.button`
  padding: 0.625rem;
  height: 2.4375rem;
  font-size: 0.875rem;
  color: #ffffff;
  background-color: #588157;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a5a40;
  }
`;
