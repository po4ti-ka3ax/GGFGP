import PropTypes from 'prop-types'
import Card from './Card/Card';
import s from './Cards.module.css';


const Cards = ({ cards, target }) => {
  // console.log(cards);

  return (
    <div className={s.cards}>
      { cards.length > 0 ? cards.map((card) => {
        return( <Card
            target={target}
            url={cards.url}
            cards={cards}
            key={card.id}
            id={card.id}
            title={card.title}
            price={card.worth}
            img={card.image}
            platform={card.platform}
            status={card.status}
            open_giveaway={card.open_giveaway}
          />)
      }) : 'Пусто'}
    </div>
  )
}




Cards.propTypes = {
  cards: PropTypes.array
}


export default Cards;