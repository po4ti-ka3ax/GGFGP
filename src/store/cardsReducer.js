
const defaultState = {
    cards: [
      // {
      // "id": 2484,
      // "title": "Soul Valley (IndieGala) Giveaway",
      // "worth": "$14.99",
      // "thumbnail": "https://www.gamerpower.com/offers/1/64d8db2a8889a.jpg",
      // "image": "https://www.gamerpower.com/offers/1b/64d8db2a8889a.jpg",
      // "description": "Download Soul Valley without any cost via IndieGala! Soul Valley is a walking simulator game with puzzles. Check it out!",
      // "instructions": "1. Login into your free IndieGala account.\r\n2. Scroll down and click the \"Add to Your Library\" button to add the game to your library.\r\n3. Go to \"My Library\" to find your game.",
      // "open_giveaway_url": "https://www.gamerpower.com/open/soul-valley-indiegala-giveaway",
      // "published_date": "2023-08-13 09:31:22",
      // "type": "Game",
      // "platforms": "PC, DRM-Free",
      // "end_date": "N/A",
      // "users": 1570,
      // "status": "Active",
      // "gamerpower_url": "https://www.gamerpower.com/soul-valley-indiegala-giveaway",
      // "open_giveaway": "https://www.gamerpower.com/open/soul-valley-indiegala-giveaway"
      // }
    ],
    errors: {}
  }
  
  const GET_MANY_CARDS = 'GET_MANY_CARDS'
  const SET_ERROR = 'SET_ERROR'

export const cardsReducer = (state=defaultState, action) => {
    switch(action.type) {
      case GET_MANY_CARDS:
        return{...state, cards: [ ...action.payload]}

      case SET_ERROR:
        return{...state, errors: action.payload}

      default:
        return state
    }
  } 

export const addCardsAction = (payload) => (
  {
    type: GET_MANY_CARDS,
    payload
  }
)

export const setError = (error) => (
  {
    type: SET_ERROR,
    payload: error
  }
)