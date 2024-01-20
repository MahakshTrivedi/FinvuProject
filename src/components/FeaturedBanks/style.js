import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 10px;
`;
export const StyledBank = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 25px 5px;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.div`
  max-height: 25px;
  max-width: 25px;
  margin-left: 10px;
  margin-right: 10px;
  img {
    width: 100%;
    height: auto;
  }
`;
