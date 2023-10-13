import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { SelectedPage } from "./shared/types";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import Classes from "./components/Classes";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }else setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);

    // return sth when component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className="app bg-gray-20">
      <Navbar 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
        isTopOfPage={isTopOfPage}
      />
      <Home
        setSelectedPage={setSelectedPage} 
      />
      <Benefits
        setSelectedPage={setSelectedPage} 
      />
      <Classes
        setSelectedPage={setSelectedPage} 
      />
      <ContactUs
        setSelectedPage={setSelectedPage} 
      />
      <Footer />
    </div>
  )
}

export default App
