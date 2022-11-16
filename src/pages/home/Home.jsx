import FAQs from '../../components/FAQs'
// import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
// import Ofer from '../../components/Ofer'
import './home.css'

const Home = () => {
  return (
    <>
    {/* <Ofer/> */}
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQs/>
    <Testimonials/>
    </>
  )
}

export default Home