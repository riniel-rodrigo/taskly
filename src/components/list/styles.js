import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
`;

export const Card = styled.div`
  align-self: center;
  justify-self: center;
  width: 17rem;
  background-color: #eeece8;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const CardContent = styled.div`
  flex-grow: 1;
`;

export const TaskName = styled.h3`
  font-size: 1em;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TaskDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: #666666;
  font-size: 0.9em;
`;

export const TaskPrice = styled.div`
  margin-bottom: 4px;
`;

export const TaskDate = styled.div`
  color: #999999;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;

  svg {
    color: #888888;
    margin-left: 12px;
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
    justify-self: end;
    align-self: end;
    display: flex;
    gap: 1rem;
  }
`;

export const ButtonToast = styled.div`
    padding: 0.3rem 1rem;
    background-color: ${({ variant }) =>
      variant === "danger" ? "#d9534f" : "#588157"};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ variant }) =>
        variant === "danger" ? "#c9302c" : "#4b6f5e"};
    }
`;
