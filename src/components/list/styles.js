import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 1.25rem;
  padding-top: 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  justify-self: center;
  width: 80%;
  padding: 0.625rem 0.9375rem;
  background-color: #eeece8;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  flex-grow: 1;
`;

export const TaskId = styled.div`
  color: #666666;
`;

export const TaskName = styled.h3`
  font-size: 1em;
  font-weight: 600;
  color: #333333;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const TaskDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: #666666;
  font-size: 0.9rem;
`;

export const TaskPrice = styled.div`
  margin-bottom: 0.25rem;
  color: #666666;
`;

export const TaskDate = styled.div`
  color: #666666;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;

  svg {
    font-size: 1.1rem;
    color: #888888;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #588157;
    }
  }
`;

export const ToastDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-self: end;
    align-self: end;
    gap: 1rem;
  }
`;

export const ButtonToast = styled.div`
  padding: 0.3rem 1rem;
  background-color: ${({ variant }) =>
    variant === "danger" ? "#d9534f" : "#588157"};
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "danger" ? "#c9302c" : "#4b6f5e"};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonsMoveBox = styled.div`
  display: flex;
  gap: 0.3rem;

  & svg {
    font-size: 1.3rem;
    font-weight: 700;
    color: #424a4d;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #588157;
    }
  }
`;
