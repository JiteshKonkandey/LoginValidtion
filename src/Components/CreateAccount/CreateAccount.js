import React,{useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CreateAccount.scss"

const CreateAccount = (props) => {
    const Navigate = useNavigate();
    const initialValues = {username: "", email: "", password: "",confirmPassword: "", phone: "",checkbox: ""};
  
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    
    const [isSubmit, setIsSubmit] = useState(false);
    

    const handleChange = (e) => {
    const {name, value}= e.target;
    setFormValues({...formValues, [name]: value});

    console.log(formValues);
  };

  
  
  
  const validate = (values) => {
    const errors = {};
    const regex= /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if(!regex.test(values.email)) {
      errors.email = "Email is Invalid!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }else if (values.password.length < 4) {
      errors.password = "Password should be greater than Four characters";
    }else if (values.password.length > 10) {
      errors.password = "Password should not be greater than Ten characters";
    }
    if (!values.confirmPassword){
        errors.confirmPassword="Please confirm your password";
    }else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password do not match";
    }
    if (!values.phone) {
        errors.phone = "Phone is required"
    }else if (values.phone.length < 10) {
        errors.phone = "Phone number should not be less than 10 digits"
    }
    
    
    return errors;
};
const handleSubmit = (e) => {
  e.preventDefault();
  
  setFormErrors(validate(formValues));
  setIsSubmit(!isSubmit);
  // formErrors.length ===0 ? Navigate("/data"): alert("sdkhkjsd")
  if(Object.keys(formErrors).length === 0 && isSubmit) {
      Navigate("/data");
  }
  
;
};
  const onChart = () => {
//    if(validate(formValues)){
    //        Navigate("/data")
    //    }
}


useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
    }
    // eslint-disable-next-line
  },[formErrors])

    return (
        <>
            <div className="container">
                {/* <div className="create-account-page"></div> */}
                <div className="container-left">
                    <div className="container-left-image">
                        <img src="./image.png" alt="imageLeft" />
                    </div>

                </div>
                <div className="container-right">
                    <h1>Create an account</h1>
                    <form className="container-right-form">
                        <div className="container-right-form-field">
                            <h2>Your email address</h2>
                            <input type="email" name="email" value={formValues ? formValues.email : ""} onChange={handleChange}/>
                        </div>
                        <p>{formErrors.email}</p>
                        <div className="container-right-form-field">
                            <h2>Your password</h2>
                            <input type="password" name="password" className="" value={formValues ? formValues.password : ""} onChange={handleChange}/>
                        </div>
                        <p>{formErrors.password}</p>
                        <div className="container-right-form-field">
                            <h2>Confirm your password</h2>
                            <input type="password" name="confirmPassword" className="" value={formValues ? formValues.confirmPassword : ""} onChange={handleChange}/>
                        </div>
                        <p>{formErrors.confirmPassword}</p>
                        <div className="container-right-form-field">
                            <h2>Your full name</h2>
                            <input type="text" name="username" className="" value={formValues ? formValues.username : ""} onChange={handleChange}/>
                        </div>
                        <p>{formErrors.username}</p>
                        <div className="container-right-form-Phonefield">
                            <h2>Your phone number</h2>
                            <input type="number" name='phone' value={formValues ? formValues.phone : ""} onChange={handleChange}/>
                        </div>
                        <p>{formErrors.phone}</p>
                        <div className="container-right-form-termsAndCond">
                            <input type="checkbox" name="checkbox"/>
                            <p>I read and agree Terms and Conditions</p>
                        </div>
                        <div className="container-right-form">
                            <button onClick={handleSubmit}>
                                Create account
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateAccount;