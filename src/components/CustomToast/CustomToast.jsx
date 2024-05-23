
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CustomToast.css";

const CustomToast = ({ message,handlefeedback }) => (
  <div className="custom-toast">
    <FaCheck className="toast-icon" />
    <div className="toast-message">{message}</div>
    <div className="toast-submessage">We will do our best to improve.</div>
    <button className="toast-close-button" onClick={handlefeedback}>Close</button>
  </div>
);

export default CustomToast;
