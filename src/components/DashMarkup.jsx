import React, { useState } from 'react'
import "./DashMarkup.css"
import DashNav from './DashNav'
import DashHeader from './DashHeader'
import ReactMarkdown from 'react-markdown'

const DashMarkup = () => {
  const [input, setInput] = useState()
  const [reviews, setReviews] = useState([]);

  const handleSave = () => {
    const newReview = {
      id: Date.now(),
      content: input,
    };
    setReviews([...reviews, newReview]);
    setInput('');
  };

  const handleDelete = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  

  return (
    <div className='dash-markup-container'><DashNav />
        <div className='dash-markup-content'>
        CONTENT MARKUP
        <div className='markdown-area'>
        <div className='markdown-input' >
        <textarea cols="50" rows="10"
        className='textarea' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleSave}>Save</button>
        </div>

       <div className='markdown-text'>
        Markdown Preview
       <ReactMarkdown className='display-text'>{input}</ReactMarkdown> 

       </div>
       <div className='reviews'>
       {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.content}</p>
          <button onClick={() => handleDelete(review.id)}>Delete</button>
        </div>
      ))}
       </div>
       
        
        </div>
      
        </div>
     <DashHeader />
    </div>
  )
}

export default DashMarkup
