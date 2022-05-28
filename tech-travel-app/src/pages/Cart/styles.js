import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 958px;
  margin: 0 auto;
`;

export const ContainerList = styled.ul`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  border-radius: 5px;
  padding: 36px 44px;
`;

export const TravelItem = styled.li`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid #666;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;

  img {
    height: 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  .price {
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const Quantity = styled.input`
  font-size: 16px;
  color: #666;
  padding: 6px;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  appearance: textfield;
  text-align: center;
`;

export const Subtotal = styled.div`
  font-weight: 600;
  font-size: 16px;
  display: flex;

  p {
    margin-right: 10px;
  }
`;

export const TravelsTotal = styled.div`
  width: 100%;
  text-align: right;
  padding: 35px 30px 10px;

  p {
    display: inline;
    color: #878484;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    margin-right: 10px;
  }

  span {
    font-weight: bold;
    font-size: 18px;
  }
`;
