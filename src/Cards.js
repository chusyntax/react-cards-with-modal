import img from './112803.jpg';
import GitHub from './github-white.png';
import Website from './website-white.png';
import React, {useState} from 'react';
import Modal from './Modal.js';
import ModalButton from './ModalButton';

function Card(props) {
  const [showModal,setShowModal] = useState(false);
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

  <ModalButton openModal={()=>setShowModal(true)}>Info</ModalButton>

<Modal showModal={showModal} setShowModal={setShowModal}
heading="Modal Heading"
description="Description-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ipsa, repellat doloremque debitis ipsum illo voluptates recusandae rem nulla cupiditate ducimus quidem optio rerum expedita porro non sed? Harum repellat iste atque, labore odio vitae quisquam deserunt expedita architecto impedit!"
madeBy="Made with: React, XML, JQuery and The New York Times API"
viewCode="https://github.com/chusyntax"
viewSite="https://github.com/chusyntax"
>
</Modal>


</div>
    
    );
  }
  
  export default Card;
  