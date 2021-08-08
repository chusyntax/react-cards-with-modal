import React from 'react'

const Modal =(props)=>{

return(
   
<> 

{props.showModal ? (

    <div className="background">
        <div className='modalWrapper' showModal={props.showModal}>

            <img clasName="modalImg" src={require('./deals.jpg').default} alt="A Landscape" width="100%" height="100%"/>
          
            <div className="modalContent">
                <h1>{props.heading}</h1>
               <p>{props.description}</p>
               <p>{props.madeBy}</p>
                <div className="buttonLayout">
                <button className="innerModalButton"><a href={props.viewCode} target="_blank" rel="noreferrer">View Code</a></button>
                <button className="innerModalButton"><a href={props.viewSite} target="_blank" rel="noreferrer">Live Site</a></button>
                </div>
            </div>
            <button className="closeModalButton" aria-label="Close modal" onClick={()=> props.setShowModal(prev => !prev)}>Close</button>
        </div>
    </div>
) : null} 

</>

);
}


export default Modal;