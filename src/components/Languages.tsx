import '../css/Languages.css';
import * as CONSTANT from '../CONSTANTS.ts';

export const Languages=()=>{

  return <div className="languages-container">
    <p>Google offered in:</p>
    {
      CONSTANT.LANGUAGES.map((language, indx)=> <p key={`${indx}-${language}`}>{language}</p>)
    }
  </div>
}