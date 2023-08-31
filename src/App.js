import './App.css';
import Header from './components/Header/Header';
import Own from './components/Own/Own';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error from './components/Error/Error';
import GamePage from './components/GamePage/GamePage';
import { useDispatch, useSelector } from 'react-redux';
import { checkPosition, throttle } from './asyncActions/cardsSaga';
import { useEffect } from 'react';

function App() {

  // const dispatch = useDispatch()
  // console.log(cash);
  // const cards = useSelector(state => state.cards)

  // (() => {
  //   window.addEventListener('scroll',throttle(checkPosition, 300))
  //   window.addEventListener('resize',throttle(checkPosition, 300))
  // })()

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Own />} />
          <Route path='*' element={<Error />} />
            <Route path={'games/:id'} element={<GamePage/>}/>
          {/* <Route path='/:id' element={<GamePage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
