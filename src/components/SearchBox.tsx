import { useState } from "react";
import "../css/SearchBox.css";
import micIcon from "../icons/MicIcon.svg";
import searchIcon from "../icons/SearchIcon.svg";
import cameraIcon from "../icons/CameraIcon.svg";
import { Buttons } from "./Buttons";
import { Languages } from "./Languages";

export const SearchBox = () => {
  const [searchText, setSearchText] = useState<string>("");

  const handleKeyDown = (eParam: React.KeyboardEvent<HTMLInputElement>) => {
    if (eParam.key === "Enter") {
      searchData();
    }
  };
  
  const handleSearchClick=()=>{
    searchData();
  }
  
  const searchData=()=>{
    window.location.href = `https://www.google.com/search?q=${searchText}`;

  }

  const handleInputChange = (
    eventParam: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(eventParam.target.value);
  };

  return (
    <div className="search-main-container">
      <p className="search-main-text">Google</p>
      <div className="search-container">
        <img className="search-icon" src={searchIcon} alt="" />
        <input
          type="text"
          className="search-box"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
        <div className="icons-container">
          <img className="search-icon" src={micIcon} alt="" />
          <img className="search-icon" src={cameraIcon} alt="" />
        </div>
      </div>
      <Buttons handleSearchClickProp={handleSearchClick}/>
      <Languages/>
    </div>
  );
};
