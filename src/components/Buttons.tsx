import '../css/Buttons.css';

export const Buttons=({handleSearchClickProp}: ButtonsPropDTO)=>{

  const handleLuckyButtonClick=()=>{
    window.location.href = "https://doodles.google/";
  }

  return (
    <div className="buttons-container">
      <button className="search-button" onClick={handleSearchClickProp}>
        Google Search
      </button>
      <button className="lucky-button" onClick={handleLuckyButtonClick}>I'm Feeling Lucky</button>
    </div>
  );
}

interface ButtonsPropDTO {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSearchClickProp: (params: any)=> void;
}