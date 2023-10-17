import Card from './components/Card';
import './App.css';
import { useState, useEffect, createRef } from 'react';


const App = () => {

const cardIds = [0,1,2,3]
const [unclickedCardIds, setUnclickedCardIds] = useState(cardIds)
// por cada cardId voy a mapear esto a una card asi tiene su id

const refs = cardIds.reduce((acc, value) => {
   // por cada uno de lo cardIds voy a crearle una ref
  acc[value] = createRef()
  return acc //lo devuelvo
}, {}) // y lo meto en un objeto

// ahora que tenemos los ref de cada componente
// get the highest component every time we click on a card
// lo que esta dentro de [] tendra nuestra depenencia y cada vez que cambie usara el useEffect
useEffect (() => {
  if (unclickedCardIds.length > 0 && (unclickedCardIds.length < cardIds.length)) {
    //scroll to highest unClickedCardIds
    const highestId = Math.min(...unclickedCardIds)
    refs[highestId].current.scrollIntoView({
      behavior: "smooth"
    })
  }
}, [unclickedCardIds, cardIds.length])

  return (
    <div className="App">
      <header></header>
      {cardIds.map(cardId => (
        <Card
          key={cardId}
          cardId={cardId}
          unclickedCardIds={unclickedCardIds}
          setUnclickedCardIds={setUnclickedCardIds} // por si algo se clickea
          ref={refs[cardId]} // le pasamos las refs a las cards
        />
      ))}
    </div>
  );
}

export default App;
