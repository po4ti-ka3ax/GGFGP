import PropTypes from 'prop-types'
import s from './Header.module.css';
import left from '../../img/left.png'
import right from '../../img/right.png'
import Categories from '../Own/Categories/Categories';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <Link to={'/'} className={s.header}>
          <img src={left} alt="" />
          <div className={s.header__title}>
            GG <br />
            FGP
          </div>
          <img src={right} alt="" />

      </Link>
      {/* <div className="container">
        <Categories />

      </div> */}

    </div>

  )
}




Header.propTypes = {
  text: PropTypes.string
}


export default Header;