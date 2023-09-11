import Header from './components/Header'
import HomeContainer from './components/HomeContainer'
import WelfareCulture from './components/WelfareCulture'
import DigitalArea from './components/DigitalArea'
import ContactForm from './components/ContactForm'
import HelpUsGrow from './components/HelpUsGrow'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#F8EBFF] flex flex-col items-center">
        <Header/>
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          {/* <Route path='/area-escolar' element={<MIKE />} /> */}
          <Route path='/cultura-bienestar' element={<WelfareCulture />} />
          <Route path='/area-digital' element={<DigitalArea />} />
          {/* <Route path='/capacitacion-laboral' element={<MIKE />} /> */}
          <Route path='/informacion-de-contacto' element={<ContactForm />} />
          <Route path='/ayudanos-a-crecer' element={<HelpUsGrow />} />
          
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
export default App
