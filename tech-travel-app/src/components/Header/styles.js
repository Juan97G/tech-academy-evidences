import styled from "styled-components";

export const Container = styled.header`
  background-color: #0676D9;
  padding: 30px 20px 20px;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 958px;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;

  div {
    background-color: #FFF;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 16px;
      color: #0676D9;
      font-weight: bold;
    }
  }
`;
