import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Courses from './components/Courses'
import Location from './components/Location'
import Footer from './components/Footer'
import WelfareCulture from './components/WelfareCulture'
import DigitalArea from './components/DigitalArea'

function App() {
  return (
    <div className="bg-[#F8EBFF] flex flex-col items-center">
      <Header/>
      <AboutUs/>
      <Courses/>
      <Location/>
      <Footer/>
    </div>
  )
}
export default App
