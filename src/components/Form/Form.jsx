import { useState, useContext } from "react";
import { formContext } from "../../context/FormContext";
import CustomToast from "../CustomToast/CustomToast";
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import "./Form.css";

const Form = () => {
  // destructuring submitForm from context
  const { submitForm } = useContext(formContext);
  const[openFeedback,setOpenFeedback]=useState(false);

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    serviceQuality: "",
    beverageQuality: "",
    cleanliness: "",
    overallRating: ""
  });

  const handlefeedback=()=>{
    setOpenFeedback(prev=>!prev);
  }

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // send the form details to context
    setOpenFeedback(true);

    submitForm(formDetails);
    
   setFormDetails({
      name: "",
      email: "",
      phone: "",
      serviceQuality: "",
      beverageQuality: "",
      cleanliness: "",
      overallRating: ""
    });

    console.log(formDetails, "formdetails");
  };


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    
    setFormDetails({
      ...formDetails,
      [name]: value
    });
    
  };
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
   if (checked) {
      setFormDetails({
        ...formDetails,
        [name]: value
      });
    } else {
      setFormDetails({
        ...formDetails,
        [name]: ""
      });
    }
  };
  
 
  return (
    <div className="form-component">
     
      <form className="form-details" onSubmit={handleSubmit}>
        <div className="form-fill">
          <div className="left">
            <div className="form-items">
              <label htmlFor="name">Customer Name<span className="asteric">*</span></label>
              <input 
                name="name" 
                 required
                value={formDetails.name} 
                onChange={handleOnChange} 
              />
            </div>
            <div className="form-items">
              <label htmlFor="phone">Phone No<span className="asteric">*</span></label>
              <input 
                type="number" 
                name="phone" 
                 required
                value={formDetails.phone} 
                onChange={handleOnChange} 
              />
            </div>
            <div className="form-items">
              <label>Quality of Service Received from Host?<span className="asteric">*</span></label>
              <div className="check-items">
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="serviceQuality" 
                    value="excellent" 
                    className="check-class"
                    checked={formDetails.serviceQuality.includes("excellent")}
                    onChange={handleChange}
                  /> 
                  <div>Excellent</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="serviceQuality" 
                    value="good" 
                    checked={formDetails.serviceQuality.includes("good")}
                    onChange={handleChange}
                  /> 
                  <div>Good</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="serviceQuality" 
                    value="fair" 
                    checked={formDetails.serviceQuality.includes("fair")}
                    onChange={handleChange}
                  /> 
                  <div>Fair</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="serviceQuality" 
                    value="bad" 
                    checked={formDetails.serviceQuality.includes("bad")}
                    onChange={handleChange}
                  /> 
                  <div>Bad</div>
                </div>
              </div>
            </div>
            <div className="form-items">
              <label>Was Our Restaurant Clean?<span className="asteric">*</span></label>
              <div className="check-items">
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="cleanliness" 
                    value="excellent" 
                    checked={formDetails.cleanliness.includes("excellent")}
                    onChange={handleChange}
                  /> 
                  <div>Excellent</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="cleanliness" 
                    value="good" 
                    checked={formDetails.cleanliness.includes("good")}
                    onChange={handleChange}
                  /> 
                  <div>Good</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="cleanliness" 
                    value="fair" 
                    checked={formDetails.cleanliness.includes("fair")}
                    onChange={handleChange}
                  /> 
                  <div>Fair</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="cleanliness" 
                    value="bad" 
                    checked={formDetails.cleanliness.includes("bad")}
                    onChange={handleChange}
                  /> 
                  <div>Bad</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="form-items">
              <label htmlFor="email">Email<span className="asteric">*</span></label>
              <input 
                type="email" 
               required
                name="email" 
                value={formDetails.email} 
                onChange={handleOnChange} 
              />
            </div>
            <div className="form-items">
              <label>Please Rate Quality of Beverage?<span className="asteric">*</span></label>
              <div className="check-items">
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="beverageQuality" 
                    value="excellent" 
                    checked={formDetails.beverageQuality.includes("excellent")}
                    onChange={handleChange}
                  /> 
                  <div>Excellent</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="beverageQuality" 
                    value="good" 
                    checked={formDetails.beverageQuality.includes("good")}
                    onChange={handleChange}
                  /> 
                  <div>Good</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="beverageQuality" 
                    value="fair" 
                    checked={formDetails.beverageQuality.includes("fair")}
                    onChange={handleChange}
                  /> 
                  <div>Fair</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="beverageQuality" 
                    value="bad" 
                    checked={formDetails.beverageQuality.includes("bad")}
                    onChange={handleChange}
                  /> 
                  <div>Bad</div>
                </div>
              </div>
            </div>
            <div className="form-items">
              <label>Please Rate Overall Dining Experience?<span className="asteric">*</span></label>
              <div className="check-items">
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="overallRating" 
                    value="excellent" 
                    checked={formDetails.overallRating.includes("excellent")}
                    onChange={handleChange}
                  /> 
                  <div>Excellent</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="overallRating" 
                    value="good" 
                    checked={formDetails.overallRating.includes("good")}
                    onChange={handleChange}
                  /> 
                  <div>Good</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="overallRating" 
                    value="fair" 
                    checked={formDetails.overallRating.includes("fair")}
                    onChange={handleChange}
                  /> 
                  <div>Fair</div>
                </div>
                <div className="check-one">
                  <input 
                    type="checkbox" 
                    name="overallRating" 
                    value="bad" 
                    checked={formDetails.overallRating.includes("bad")}
                    onChange={handleChange}
                  /> 
                  <div>Bad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-items-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="custom-toast">
        {openFeedback&&<CustomToast handlefeedback={handlefeedback} message="Thank you for the feedback!!"/>}
      </div>


      
    </div>
    
  );
};

export default Form;
