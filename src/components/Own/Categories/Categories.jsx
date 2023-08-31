import PropTypes from 'prop-types'
import s from './Categories.module.css';
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import { fetchCards } from '../../../asyncActions/cardsSaga';
import { useDispatch } from 'react-redux';


const Categories = ({cards}) => {
  const pc_categ = ['pc', 'steam', 'gog', 'epic-games-store']
  const console_categ = ['ps5', 'xbox', 'nintendo']
  // const [cards, setCards] = useState([])
  const url = 'https://gamerpower.p.rapidapi.com/api/giveaways?platform=';
  const urlAll = 'https://gamerpower.p.rapidapi.com/api/giveaways';
  const el = '';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '30a9e7f526msh3432e5955904017p1288d0jsnd2ab4cd9aa54',
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };
  const dispatch = useDispatch()
  // onClick={() => fetchCategory(url + el, options)}
  // const CardContext = React.createContext()
  return (
    // <CardContext.Provider value={}>
      <div className={s.links}>
        <ul className={s.platform}>
          {pc_categ.map((el, i) => (
            // 
            <li  onClick={() => dispatch(fetchCards(url,el,options))} className={s.link} key={i}><NavLink to={``}>{el}</NavLink></li>
          ))}
        </ul>
        <ul className={s.platform}>
          {console_categ.map((el, i) => (
            <li onClick={() => dispatch(fetchCards(url,el,options))} className={s.link} key={i}><NavLink to={``}>{el}</NavLink></li>
          ))}
            <li onClick={() => dispatch(fetchCards(urlAll,el,options))} className={s.link}><NavLink to={``}>all-platforms</NavLink></li>
        </ul>
      </div>
    // </CardContext.Provider>
    // ''
  )
}




Categories.propTypes = {
  text: PropTypes.string
}


export default Categories;