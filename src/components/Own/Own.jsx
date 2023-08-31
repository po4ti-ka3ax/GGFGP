import PropTypes from 'prop-types'
import Categories from './Categories/Categories';
import s from './Own.module.css';
import Cards from './Cards/Cards';
import React, { createRef, useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import glass from '../../img/glass.svg'
import { fetchCards, fetchSearch } from '../../asyncActions/cardsSaga';
import { useDispatch, useSelector } from 'react-redux';


const Own = () => {
  const url = 'https://gamerpower.p.rapidapi.com/api/giveaways?platform=';
  const [platform, setPlatform] = useState('')
  const [giveaway, setGiveaway] = useState('')
  const [sort, setSort] = useState('')
  const [listShow, setListShow] = useState(true)
  const [showPlatform, setShowPlatform] = useState(true)
  const [showGiveaway, setShowGiveaway] = useState(true)
  const [showSort, setShowSort] = useState(true)

  // const showSearch = (el) => {
  //  if(el == showPlatform) {
  //   setShowPlatform(!showPlatform)
  //  } else if(el == showGiveaway) {
  //   setShowGiveaway(!showGiveaway)
  //  } else if(el == showSort) {}
  // }

  const platforms = [
    "pc", "steam",
    "epic-games-store", "ubisoft",
    "gog", "itchio",
    "ps4", "ps5",
    "xbox-one", "xbox-series-xs",
    "switch", "android",
    "ios", "vr",
    "battlenet", "origin",
  ]
  const giveawayType = [
    'game', 'loot', 'beta'
  ]
  const sortBy = [
    'date', 'value', 'popularity'
  ]
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '30a9e7f526msh3432e5955904017p1288d0jsnd2ab4cd9aa54',
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };
  const searchFetch = (e) => {
    e.stopPropagation()
    dispatch(fetchSearch(platform, giveaway, sort, options))

  }
  // const [result, setResult] = useState([])
  const dispatch = useDispatch()
  const cards = useSelector(state => state.cards)
  // console.log(cards);
  useEffect(() => {
    document.addEventListener('scroll', scrollPage)

    return function () {
      document.removeEventListener('scroll', scrollPage)
    }
  }, [])

  const scrollPage = (e) => {
    console.log('scroll');

  }
  useEffect(() => {
    dispatch(fetchCards(url, 'pc', options))

    // axios
    //   .get(url)
    //   .then(data => {
    //     setResult(data.data)
    //   })

    // fetch(url, options)
    //   .then(data => data.json())
    //   .then(res => setResult(res))


    // const data = async () => {
    //   await fetch(url, options)
    //     .then(status)
    //     .then(json)
    //     .then((data) => {
    //       return cards.push(data)
    //     })
    //     .catch((error) => {
    //       console.log('Error', error);
    //     })
    // }
    // data()
    // axios.get(url)
    // .then(data => console.log(data))

  }, [])

  // const clickOnPage = () => {
  //   console.log('click');
  //   setListShow(!listShow)
  // }


  // console.log(result);

  // const cards = []
  // console.log(cards);
  return (
    <div>
      <Header />
      {/* // <CardContext.consumer> */}
      <div className='container'>
        <Categories cards={cards} />
        <div className={s.container}>
          <div className={s.selects}>
            <div className={s.select}>
              {/* <select name='platform' className={s.select__query} onChange={''} id="">
                {
                  platforms.map(el => <option key={el}>{el}</option>)
                }
              </select> */}
              {/* onChange={() => setPlatformShow(!platformShow)} */}
              <div className="dropdown">
                <p>Platforms:</p>

                <button onClick={() => setShowPlatform(!showPlatform)} className={s.select__query}>
                  {platform == '' ? 'Change Platform' : platform}
                </button>

                <ul className={showPlatform && listShow ? s.dropdown__list : s.dropdown__list_visible}>
                  {platforms.map(el =>
                    <li key={el} data-value={el} onClick={() => setPlatform(el)} className={s.dropdown__list_item}>
                      {el}
                    </li>)}

                </ul>
                <div className={s.default__title}>
                  <p>Default value: Pc</p>
                </div>
              </div>
              <div className="dropdown">
                <p>Giveaway Types:</p>

                <button onClick={() => setShowGiveaway(!showGiveaway)} className={s.select__query}>
                  {giveaway == '' ? 'Change Type' : giveaway}
                </button>

                <ul className={showGiveaway && listShow ? s.dropdown__list : s.dropdown__list_visible}>
                  {giveawayType.map(el =>
                    <li key={el} data-value={el} onClick={() => setGiveaway(el)} className={s.dropdown__list_item}>
                      {el}
                    </li>)}

                </ul>
                <div className={s.default__title}>
                  <p>Default value: Game</p>
                </div>
              </div>
              <div className="dropdown">

                <p>Sort By:</p>

                <button onClick={() => setShowSort(!showSort)} className={s.select__query}>
                  {sort == '' ? 'Change Sort' : sort}
                </button>

                <ul className={showSort && listShow ? s.dropdown__list : s.dropdown__list_visible}>
                  {sortBy.map(el => <li key={el} data-value={el} onClick={(e) => {
                    e.stopPropagation()
                    setSort(el)
                  }} className={s.dropdown__list_item}>{el}</li>)}

                </ul>
                <div className={s.default__title}>
                  <p>Default value: Popularity</p>
                </div>
              </div>

              <div >
                <button onClick={searchFetch} className={s.search__btn}>
                  Search<img src={glass} /></button>
              </div>

            </div>
            {/* <div className={s.select}>
              <select name="giveaway type:" id="">
                {
                  giveawayType.map(el => <option className={s.select__option} value={el} key={el}>{el}</option>)
                }
              </select>
            </div>
            <div className={s.select}>
              <select name="sort by" id="">
                {
                  sortBy.map(el => <option key={el}>{el}</option>)
                }
              </select>
            </div> */}
          </div>
          <div className={s.cards}>
            <Cards target={true} cards={cards} />
          </div>
        </div>
      </div>
      {/* // </CardContext.consumer> */}
    </div>




  )
}




Own.propTypes = {
  text: PropTypes.string
}


export default Own;