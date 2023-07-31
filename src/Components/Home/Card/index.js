import { useState } from "react";

const Card = ({img, title, id, price, handleRemoveButton, totalPrice}) => {
    const [counter, setCounter] = useState(1);
    
    const handleDecreament =(id) => {
        if(counter > 1){
            setCounter(counter - 1);
        }else{
            handleRemoveButton(id)
        }
    }

    const handleIncreament =() => {
        setCounter(counter + 1);
    }
    

    return(
        <>
            <div className="Card" key={id}>
              <img src={img} alt={title} />
              <div className="CardText">
                <h1>{title}</h1>
                <p>{price}</p>
                <button onClick={() => handleRemoveButton(id)}>remove</button>
              </div>
              <div className="counter">
                <button onClick={handleIncreament}>^</button>
                <span>{counter} </span>
                <button onClick={handleDecreament}>v</button>
              </div>
            </div>
        </>
    )
}
export default Card;
