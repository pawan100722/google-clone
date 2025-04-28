import '../css/Header.css';
import menuGridIcon from '../icons/MenuGridIcon.svg';
import searchLabIcon from '../icons/SearchLabIcon.svg';
import userImage from '../images/user.png'

export const Header =()=>{

  const handleSearchLabClick=()=>{
    window.location.href = "https://labs.google.com/search?source=hp";
  };



  return <div className="header-container">
    <div className="header-left-container">
      <p className='header-text'>About</p>
      <p className='header-text'>Store</p>
    </div>
    <div className="header-right-container">
      <p className='header-text'>Gmail</p>
      <p className='header-text'>Images</p>
      <img className='header-icon' src={searchLabIcon} alt=""  onClick ={handleSearchLabClick}/>
      <img className='header-icon' src={menuGridIcon} alt="" />
      <img className='user-image' src={userImage} alt="" />
    </div>
  </div>
}