import img from './112803.jpg';
import GitHub from './github-white.png';
import Website from './website-white.png';
 import ModalButton from './ModalButton'


function Card(props) {
    return (
      <div className="card">
  <div className="cardBody">

    <div className="imageOverlay">
    <img className="imageOverlayImg" src={img} alt="landscape" />
      <div className="imageOverlayDescription">

        <a href={props.gitHub} target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="GitHub Icon" /> 
        </a>

        <a href={props.liveSite} target="_blank" rel="noopener noreferrer">
        <img src={Website} alt="liveSite Icon" /> 
        </a> 
       
      </div>
    </div>

      <h2 className="cardTitle">{props.heading}</h2>
      <p className="cardDescription">{props.description}</p>
  </div>
  <button className="cardButton">More Information</button>
<ModalButton/>
</div>
    );
  }
  
  export default Card;
  