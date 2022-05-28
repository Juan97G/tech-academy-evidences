import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import CartContext from "../../context/cart";
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  TravelsTotal,
} from "./styles";

function Cart() {

  /* CONTEXT */
  const { state, useState } = useContext(CartContext);

  const totalTravels = state.cart.reduce(
    (acc, travel) => acc + travel.quantity * travel.price,
    0
  );

  return (
    <Container>
      <ContainerList>
        {state.cart.map((travel) => (
          <TravelItem>
            <img src={travel.photo} alt={travel.title} />
            <Info>
              <p>Viaje a {travel.title}</p>
              <span className="price">$ {travel.price}</span>
            </Info>
            <Quantity readOnly type="number" value={travel.quantity} />
            <Subtotal>
              <p>$ {(travel.quantity * travel.price).toFixed(2)}</p>
              <button type="button">
                <MdDelete size={24} color="#0676D9" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
        {state.cart.length > 0 ? (
          <TravelsTotal>
            <p>Total</p>
            <span>$ {totalTravels.toFixed(2)}</span>
          </TravelsTotal>
        ) : null}
      </ContainerList>
    </Container>
  );
}

export default Cart;
