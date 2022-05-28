import React, { useEffect, useState, useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import api from "../../services/api";
import CartContext from "../../context/cart";

import { Container, List, ListItem } from "./styles";

function Home() {
  /* STATES */
  const [travelList, setTravelList] = useState([]);

  /* CONTEXT */
  const { state, setState } = useContext(CartContext);

  /* USE EFFECT */
  useEffect(() => {
    const getTravelList = async () => {
      const response = await api.get("/travels");
      setTravelList(response.data);
    };

    getTravelList();
  }, []);

  /* FUNCTIONS */
  const handleAddToCart = (travel) => {
    const copyCart = [...state.cart];
    const travelIndex = copyCart.findIndex((el) => el.id === travel.id);

    if (travelIndex >= 0) {
      copyCart[travelIndex].quantity += 1;
    } else {
      copyCart.push({ ...travel, quantity: 1 });
    }

    setState({
      cart: copyCart,
    });
  };

  return (
    <Container>
      <List>
        {travelList.map((travel) => (
          <ListItem>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={travel.photo} alt="Image Travel" />
            <p>Viaje a {travel.title}</p>
            <span className="cost">$ {travel.price}</span>

            <button type="button" onClick={() => handleAddToCart(travel)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>
              <span>Agregar al carrito</span>
            </button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Home;
