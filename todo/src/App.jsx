import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Form from "./components/Form/Form";
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  margin-bottom: 10px`

function App() {
  const [cards, setCards] = useState([]);

  function handleAddCards(value) {  
    setCards([...cards, value]);
  }


  return (
    <div>
       <Form handleAdd={handleAddCards} />
       {cards.map(card => <Card key={uuidv4()} ><p>{card.firstName}</p><p>{card.lastName}</p><p>{card.birthday}</p><p>{card.country}</p></Card>)}
    </div>
    );
  }


export default App;
