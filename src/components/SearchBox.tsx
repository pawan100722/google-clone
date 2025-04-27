import "../css/SearchBox.css";
import micIcon from "../icons/MicIcon.svg";
import searchIcon from "../icons/SearchIcon.svg";
import cameraIcon from "../icons/CameraIcon.svg";

export const SearchBox = () => {
  return (
    <div className="search-main-container">
      <p className="search-main-text">Google</p>
      <div className="search-container">
        <img className="search-icon" src={searchIcon} alt="" />
        <input type="text" className="search-box" />
        <div className="icons-container">
          <img className="search-icon" src={micIcon} alt="" />
          <img className="search-icon" src={cameraIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
