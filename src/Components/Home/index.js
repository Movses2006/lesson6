import { Data } from "./data";
import { useState, useEffect } from "react";
import "./style.css"
import Card from "./Card";

const Home = () => {
    const [cards, setCards] = useState(Data); 
    const handleRemoveButton = (id) => {
        const updatedCards = cards.filter((card) => card.id !== id);
        setCards(updatedCards);
    };
    const [totalPrice, setTotalPrice] = useState([])

    useEffect(() => {
        setTotalPrice(cards.reduce((acc, card) => acc + +card.price, 0));
    },[cards])
  
    return (
    <>
      {cards.map(({img, title, id, price}) => {
        return(
        <Card
            key={id}
            img={img}
            title={title}
            price={price}
            handleRemoveButton={() => handleRemoveButton(id)}
        />)
      })}
      <h2>{totalPrice}</h2>
    </>
  );
};

export default Home;