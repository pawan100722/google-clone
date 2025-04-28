import { SearchBox } from "./SearchBox";
import '../css/MainComponent.css';
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainComponent=()=>{

  return <div className="main-component-container">
    <Header/>
    <SearchBox/>
    <Footer/>
  </div>
}