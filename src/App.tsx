import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import './index.css';
import Feed from "./components/Feed";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import TopFooter from "./components/TopFooter";
import BottomFooter from "./components/BottomFooter";

const App = () => {
  return (
    <div> 
      <Navbar/>
      <MainSection/>
      <Feed/>
      <Cities/>
      <Countries/>
      <TopFooter/>
      <BottomFooter/>
    </div>
  )
}

export default App