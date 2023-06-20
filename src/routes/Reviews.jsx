// import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import "./Reviews.css"
// import { ReviewContext } from '../components/ReviewContext'

const Reviews = () => {
  // const { reviews } = useContext(ReviewContext);

  return (
    <div className='azlist-container'>
      <div className="navigation">
        <NavBar />
      </div>
     <div className='review-content'>
     {/* {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.content}</p>
        </div>
      ))} */}
      Reviews
     </div>
    </div>
  )
}

export default Reviews
