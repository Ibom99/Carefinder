import React, { useState } from "react";
import "./SearchResults.css";
import ReactModal from "react-modal";
import { MdClose} from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";


const SearchResults = ({ result }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  // ReactModal.setAppElement('#main')
let subtitle;

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "white",
      width: '84%',
      color: "#0D47A1",
      borderRadius: "15px",
      boxShadow: '  0 0 20px rgba(0, 0, 0, 0.15)',
      border: "1px solid #E3F2FD"
    },
  };

  const openModal = () =>{
    setIsOpen(true)
  }

  const afterOpenModal = () =>{
    subtitle.style.color = '#64B5F6';
  }

  const closeModal = () => {
    setIsOpen(false)
    console.log('closed')
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const copyModalText = () => {
    const modalText = `${result.name}\nHospital Address: ${result.address}\nState: ${result.state.name}`;
    copyToClipboard(modalText);
    alert('Copied!')
  };

  return (
    <>
    <div
      className="search-result"
      onClick={openModal}
    >
      <p className="result-name">{result.name}</p>
      {/* <p>{result.location}</p> */}
      <p className="result-address">{result.address}</p>
      {/* <p>{result.state.name}</p> */}
      </div>
      <ReactModal appElement={document.getElementById('root')}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Hospital Details"
       
      >
        <div className="hospital-top">
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{result.name}</h2>
        <button className="hospital-close-btn" onClick={closeModal}><MdClose /></button>
        </div>
        
        <div className="modal-details"><p><b>Hospital Address:</b> {result.address}</p>
        <p><b>State:</b> {result.state.name}</p></div>
        
        <div className="copy-btn">
        <button className="copy" onClick={copyModalText}>
         <IoCopyOutline /> 
        </button>
        </div>
       
      </ReactModal>

      </>
  );
};

export default SearchResults;
