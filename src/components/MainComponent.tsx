import { SearchBox } from "./SearchBox";
import '../css/MainComponent.css';
import { Header } from "./Header";
import { Buttons } from "./Buttons";
import { Languages } from "./Languages";
import { Footer } from "./Footer";

export const MainComponent=()=>{

  return <div className="main-component-container">
    <Header/>
    <SearchBox/>
    <Buttons/>
    <Languages/>
    <Footer/>
  </div>
}