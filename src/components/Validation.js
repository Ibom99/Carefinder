const Validation = (email, feedback, password, username) => {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (email === "") {
    errors.email = "Email is required!";
  } else if (!emailPattern.test(email)) {
    errors.email = "Invalid email address!";
  }
  
  if (username === "") {
    errors.username = "Username is required!";
  }
  // if (hospitalName === "") {
  //   errors.hospitalName = "Hospital Name is required!";
  // }
  // if (height === "") {
  //   errors.height = "Height is required!";
  // }
  // if (mass === "") {
  //   errors.mass = "Mass is required!";
  // }
  if (feedback === "") {
    errors.feedback = "Feedback is required!";
  }

  if (password === "") {
    errors.password = "Password is required!";
  } else if (!passwordPattern.test(password)) {
    errors.password =
      "Password must be at least 8 characters long, contain at least ONE LOWERCASE LETTER, ONE UPPERCASE LETTER, and ONE DIGIT!";
  }
  

  return errors;
};

export default Validation;
