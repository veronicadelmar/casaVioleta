import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Courses from './components/Courses'
import WelfareCulture from './components/WelfareCulture'

function App() {
  return (
    <div className='bg-[#F8EBFF] flex flex-col items-center'>
      <Header/>
      <AboutUs/>
      <Courses/>
      <WelfareCulture/>
    </div>
  )
}
export default App
