export const Validation = (
  email,
  password,
  feedback,
  username,
  hospitalname,
  review
) => {
  let error = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (email === "") {
    error.email = "Email is required!";
  } else if (!emailPattern.test(email)) {
    error.email = "Invalid email address!";
  }

  if (password === "") {
    error.password = "Password is required!";
  } else if (!passwordPattern.test(password)) {
    error.password =
      "Password must be at least 8 characters long, contain at least ONE LOWERCASE LETTER, ONE UPPERCASE LETTER, and ONE DIGIT!";
  }

  if (feedback === "") {
    error.feedback = "Feedback is required!";
  }

  if (username === "") {
    error.username = "Username is required!";
  }

  if (hospitalname === "") {
    error.hospitalname = "Hospital name is required!";
  }

  if (review === "") {
    error.review = "Review is required!";
  }

  return error;
};

// export const signUpValidation = (email, password) =>{
//   const errors = {};
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

//   if (email === "") {
//     errors.email = "Email is required!";
//   } else if (!emailPattern.test(email)) {
//     errors.email = "Invalid email address!";
//   }

//

// }

// if (username === "") {
//   errors.username = "Username is required!";
// }
// if (hospitalName === "") {
//   errors.hospitalName = "Hospital Name is required!";
// }
// if (height === "") {
//   errors.height = "Height is required!";
// }
// if (mass === "") {
//   errors.mass = "Mass is required!";
// }
// if (password === "") {
//   errors.password = "Password is required!";
// } else if (!passwordPattern.test(password)) {
//   errors.password =
//     "Password must be at least 8 characters long, contain at least ONE LOWERCASE LETTER, ONE UPPERCASE LETTER, and ONE DIGIT!";
// }
