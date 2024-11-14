import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  width: 70vw;
  max-width: 1050px;
  margin-top: 1.25rem;

  @media (max-width: 1050px) {
    width: 80vw;
  }

  @media (max-width: 750px) {
    width: 90vw;
  }

  @media (max-width: 600px) {
    width: 95vw;
  }
`;

export const Title = styled.h2``;

export const Area = styled.div``;
