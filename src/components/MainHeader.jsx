
import { Link } from "react-router-dom"
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut#</h4>
          <a className="a_link" href="https://www.youtube.com/watch?v=FiWby-T0Ec0&t=4176s" target="_blank" rel="noreferrer">Смотри сдесь</a>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Numquam qui deleniti reiciendis magni libero corrupti?
          </p>
          <Link to='/plans' className='btn lg' >Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"><p>LUNAтик</p></div>
          <div className="main__header-image">
           <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader