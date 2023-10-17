import { forwardRef } from "react";

const Card = ({cardId, unclickedCardIds, setUnclickedCardIds}, ref) => {

    const handleClick = () => {
        // si clikeamos tenemos que cambiar el array de unclickcards
        setUnclickedCardIds(unclickedCardIds.filter(id => id !== cardId))
        // filtro x el id y si el id no es igual al id de la card puede quedarse en el array 

    }

  return (
    <article ref={ref} className="card" onClick={handleClick}>
        {cardId}
    </article>
  );
}

export default forwardRef (Card);