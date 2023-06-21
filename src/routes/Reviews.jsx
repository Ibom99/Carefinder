
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import TextAreaWithFormatting from '../components/TextAreaWithFormatting'
import "./Reviews.css"
import { convertToRaw } from 'draft-js'
import * as draftToHtml from 'draftjs-to-html';
import Button from '../components/button'
import { v4 as uuidv4 } from 'uuid';
import { createReviewDocument } from '../firebase'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import ReviewsSearchBar from '../components/ReviewsSearchBar'

const Reviews = () => { 
  const emptyForm = {
    review: '',
      hospitalName: "",
      link: "",
      image: "",
      contact: "",
  }
   const [markdownValue, setMarkdownValue] = useState("")

  const [editorState, setEditorState] = useState("")
  const [formData, setFormData] = useState(emptyForm)
  const [allReviews, setAllReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState([]);


  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    try {
      const reviewsRef = collection(db, "reviews");
      const snapshots = await getDocs(reviewsRef);
      const docs = snapshots.docs.map((doc) => doc.data());
      setAllReviews(docs);
      console.log(docs)
    } catch (error) {
      console.log("Error getting reviews:", error);
    }
  };
  
// useEffect(() =>{
//   (async () => {
//     // reference the data
// const reviewsRef = collection(db, "reviews")

// const snapshots = await getDocs(reviewsRef)

// const docs = snapshots.docs.map((doc) => doc.data())
// console.log(docs)
//   })()
// }, [])



  const getMarkDown = (e) => {
    setEditorState(e);
    const value = editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()));
    
    setMarkdownValue(value);
    setFormData({
      ...formData,
      review: value
    });
    console.log(value)
  
  };

  const postReview = async () =>{
    const payload = {
      ...formData,
      id: uuidv4(),
      createdAt: new Date()
    }
     try {
      const res = await createReviewDocument(payload)
      if (res){
        setFormData(emptyForm)
        getReviews()
        // window.location.reload()
      } 
    } catch (error){
      console.log("error")
    }
   
  }
  const handleChange = (e) =>{
    const { name, value } = e.target
  setFormData({
    ...formData,
    [name]: value
  })
  }

  return (
    <div className='review-container'>
      <div className="navigation">
        <NavBar />
      </div>
     <div className='review-content'>

     {/* <ReviewsSearchBar allReviews={allReviews} /> */}

      

      <h1 className='review-title'>Reviews</h1>
      <ReviewsSearchBar allReviews={allReviews} setFilteredReviews={setFilteredReviews} />

    
      <div className="reviews-list">
      {(filteredReviews.length > 0 ? filteredReviews : allReviews).map(review => (
            <div className='review-card' key={review.id}>
              <p className='hospital-review'><b> {review.hospitalName}</b></p>
              {/* <p>{review.createdAt}</p> */}
              <p>{review.review}</p>
              <p><b>Link:</b> {review.link}</p>
              <p><b>Contact Details:</b> {review.contact} </p>
              {/* <hr /> */}
            </div>
          ))}
        </div>
        
<div className='review-inputs'>
<div className='set-one'>
<label htmlFor='hospitalName'>Hospital Name</label>

<input type='text' name='hospitalName' value={formData.hospitalName} onChange={handleChange} placeholder="Enter hospital name" className='hospital-input' />

<label>Review</label>
<TextAreaWithFormatting
name='review'
value={formData.review}
  onEditorStateChange={getMarkDown}
  editorState={editorState}
  
/>
</div>

<div className='set-two'>
<label>Link</label>
      <input type='text' name='link' placeholder="Enter hospital link" value={formData.link} onChange={handleChange} className='link-input'/>

      <label>Contact Information:</label>
      <input type='text' name='contact' placeholder="Enter contact information" value={formData.contact} onChange={handleChange} className='contact-input'/>

</div>
</div>
       
      <div className='btn-container'>
      <Button onClick={postReview} className="post-btn" text="Post Review"  />

      </div>
     
     </div>
    </div>
  )
}

export default Reviews
