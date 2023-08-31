import PropTypes from 'prop-types'
import s from './Card.module.css';
import {Link, Route, Routes, useNavigate, useSearchParams} from 'react-router-dom'
import GamePage from '../../../GamePage/GamePage';

const Card = ({target,cards,url,open_giveaway,id, platform, status, title, img, price }) => {
  // console.log(cards);

  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const toGame = () => setSearchParams(`game/${ id}`)

  return (
    <div className={s.card}>
      <div className={s.card__left}>
        <Link target={target ? '_blank' : '_self'} to={`/games/${id}`}>
          <img className={s.card__img} src={img} alt="" />
        </Link>
        <div className={s.card__right}>
          <h1 className={s.card__title}>{title}</h1>
          <div>
            <p className={s.card__price}>{price}</p>
          </div>
          <Link state={cards} target={target ? '_blank' : '_self'} to={`/games/${id}`} className={s.card__btn}>View</Link>

        </div>
      </div>
    </div>
  )
}



Card.propTypes = {
  cards: PropTypes.array,
  url: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.number,
  platform: PropTypes.string,
  status: PropTypes.string,
  open_giveaway: PropTypes.string,
}


export default Card;