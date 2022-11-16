// import { Link } from "react-router-dom"
// import Image from '../images/main_header.png'

const Ofer = () => {
  return (
    <>
    <header>
      <div className="container ofer__container">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Sed magnam sit earum eius quis unde praesentium natus fugiat 
              laudantium blanditiis id possimus, molestias voluptatum optio 
          </p>
          <div className="main__header-left">
            <h4>#100DaysOfWorkOut#</h4>
            <h1>Join The Legends Of The Fitness World</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam qui deleniti reiciendis magni libero corrupti?
            </p>
            {/* <Link to='/plans' className='btn lg' >Get Started</Link> */}
          </div>
          <div className="main__header-right">
            {/* <div className="main__header-circle">персик</div>
            <div className="main__header-image"></div> */}
            <img src={Image} alt="Main Header" />
          </div>
      </div>
     
    </header>
    


   </> 
  )
}

export default Ofer