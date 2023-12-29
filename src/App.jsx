import { useState } from "react"

import AboutPage from "./sections/About/About"
import Home from "./sections/Home/Home"
import FormationsPage from "./sections/Formation/formation.component"
import Projects from "./sections/Projects/Projects"
import Contact from "./sections/Contact/Contact"
import GoBack from "./components/goBackButton/goBack"


function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleHeaderPositionChange = (isHeaderVisible) => {
    setIsHeaderVisible(isHeaderVisible);
  };


  return (
    <>
    <GoBack showButton={!isHeaderVisible} />
    <Home onHeaderPositionChange={handleHeaderPositionChange}/>
    <AboutPage/>
    <FormationsPage/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
