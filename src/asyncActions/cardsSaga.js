import { addCardsAction, GET_MANY_CARDS } from "../store/cardsReducer";
import {put, takeEvery} from 'redux-saga/effects'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '30a9e7f526msh3432e5955904017p1288d0jsnd2ab4cd9aa54',
    'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
  }
};

export const fetchCards = (url, platform = 'pc', options) => {
  return (dispatch) => {
    fetch(url + platform, options)
      .then(data => data.json())
      .then(res => {dispatch(addCardsAction(res))})
    
  }
}

export const fetchSearch = (platform, giveaway = 'game', sort = 'popularity') => {
  if(platform === '') {
    platform = 'pc'
  }
  if(giveaway === '') {
    giveaway = 'game'
  }
  if(sort === '') {
    sort = 'popularity'
  }
  console.log(platform)
  console.log(giveaway)
  console.log(sort)
  const url = `https://gamerpower.p.rapidapi.com/api/giveaways?platform=${platform}&type=${giveaway}&sort-by=${sort} `
  return (dispatch) => {
    fetch(url, options)
    // console.log(`https://gamerpower.p.rapidapi.com/api/giveaways?platform=` + platform + `&type=` + giveaway + `&sort-by=` + sort)
      .then(data => data.json())
      .then(res => {dispatch(addCardsAction(res))})
    
  }
}

// https://gamerpower.p.rapidapi.com/api/giveaways?platform=pc&type=game&sort-by=popularity
// https://gamerpower.p.rapidapi.com/api/giveaways?platform=pc&type=game&sort-by=popularity

// function* cardsWorker(url, platform, options) {
//   yield 
// }

// export function* cardsWatcher() {
//   yield takeEvery(GET_MANY_CARDS, cardsWorker)
// }




// const url = 'https://gamerpower.p.rapidapi.com/api/giveaways?platform=';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '30a9e7f526msh3432e5955904017p1288d0jsnd2ab4cd9aa54',
//     'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
//   }
// };

// export function throttle(callee, timeout) {
//   let timer = null

//   return function perform(...args) {
//     if(timer) return
//     timer = setTimeout(() => {
//       callee(...args)

//       clearTimeout(timer)
//       timer = null
//     }, timeout)
//   }
// }

// export  function checkPosition() {
//   const height = document.body.offsetHeight
//   const screenHeight = window.innerHeight

//   const scrolled = window.scrollY

//   const threshold = height - screenHeight / 4

//   const position = scrolled + screenHeight

//   if(position >= threshold) {
//      fetchCards()
//   }
// }




// 