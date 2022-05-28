import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../context/cart";
import logo from "../../assets/logo.svg";

import { Container, HeaderContainer, Cart } from "./styles";

const Index = () => {
  /* CONTEXT */
  const { state, setState } = useContext(CartContext);

  const totalQuantity = state.cart.reduce(
    (acc, travel) => acc + travel.quantity,
    0
  );

  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="Logo de Tech Travel App" height={40} />
        </Link>
        <Link to="/cart">
          <Cart>
            <div>
              <span>{totalQuantity}</span>
            </div>
            <FaShoppingCart size={36} color="#FFF" />
          </Cart>
        </Link>
      </HeaderContainer>
    </Container>
  );
};

export default Index;
