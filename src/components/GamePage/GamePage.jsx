import PropTypes from 'prop-types'
import s from './GamePage.module.css';
import gameImg from '../../img/cardImg.png'
import { Link, useParams } from 'react-router-dom';
import Cards from '../Own/Cards/Cards';
import { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Categories from '../Own/Categories/Categories';

const GamePage = () => {
  const {id} = useParams()
  // console.log(params);
  const [info, setInfo] = useState([])
  const [otherCards, setOtherCards] = useState([])

  const urlId = `https://gamerpower.p.rapidapi.com/api/giveaway?id=${id}`;
  const urlPlatform = `https://gamerpower.p.rapidapi.com/api/giveaways`;
  // const platform = [
  //   "pc", "steam",
  //   "epic-games-store", "ubisoft",
  //   "gog", "itchio",
  //   "ps4", "ps5",
  //   "xbox-one", "xbox-series-xs",
  //   "switch", "android",
  //   "ios", "vr",
  //   "battlenet", "origin",
  //   "drm-free", "xbox-360"]
  // const cards = useSelector(state => state.cards)
  // console.log(cards);

  // const mapStateToProps = state => {
  //   return {
  //     cards: state.cards
  //   }
  // }
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '30a9e7f526msh3432e5955904017p1288d0jsnd2ab4cd9aa54',
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  }
  useEffect(() => {
    fetch(urlId, options)
      .then(data => data.json())
      .then(res => setInfo(res))


    fetch(urlPlatform, options)
      .then(data => data.json())
      .then(res => setOtherCards(res))



  

  }, [id])
  // console.log(info);

  // const str = 'Беги Форест, беги'

  // const reg = /беги/gi

  // const res = str.replace(, 'стой')
  // console.log(reg.test(str));
  return (
    <div>
      <Header />
      <div className='container'>
        <Categories />
        <div className={s.game_page__info}>
          <p>Platform: {info.platforms ? info.platforms : "PC"}</p>
          <p>Start: {info.published_date ? info.published_date : "TODAY"}</p>
          <p>End: {info.end_date ? info.end_date : "TOMORROW"}</p>
        </div>
        <div className={s.game__about}>
          <div className={s.game}>
            <div className={s.game__img}>
              {/* <img src={info.image ? info.image : gameImg} alt="Game image" /> */}
              <img src={info.image} alt="Game image" />
            </div>
            <div className={s.game_info}>
              <h3 className={s.game__title}>{info.title ? info.title : "Not Found"}</h3>
              <p className={s.game_type}>type: {info.type ? info.type : 'DLC'}</p>
              <p className={s.game_price}>{info.worth === "N/A" ? 'FREE' : info.worth}</p>
            </div>
          </div>
          <div className={s.game__btn}>
            <Link target='_blank' to={info.open_giveaway_url}>View</Link>
          </div>
        </div>

        <div className={s.game__description}>
          <p className={s.game__description_text}>{info.description}</p>
        </div>
        <div className={s.game__instruction}>
          {info.instructions}
        </div>
        
        <h4 className={s.platform__title}>Check other giveaway</h4>
        <div className={s.cards}>
          <Cards target={false} cards={otherCards} />
        </div>
      </div>
    </div>


  )
}




GamePage.propTypes = {
  id: PropTypes.number,
  platform: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(GamePage);
// connect(mapStateToProps)()