import { SearchBox } from "./SearchBox";
import '../css/MainComponent.css';
import { Header } from "./Header";
import { Languages } from "./Languages";
import { Footer } from "./Footer";

export const MainComponent=()=>{

  return <div className="main-component-container">
    <Header/>
    <SearchBox/>
    <Languages/>
    <Footer/>
  </div>
}