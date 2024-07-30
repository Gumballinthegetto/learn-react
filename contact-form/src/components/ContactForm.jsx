import { useState } from "react";
import FormMessage from "./FormMessage";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    queryType: '',
    message: '',
    consentChecked: false,
  });
  const [errors, setErrors] = useState({})
  const [showPopUp, setShowPopUp] = useState(false)

  function handleOnChange(e) {
    e.preventDefault();
    setFormData(prevFormData => {
      const { name, type, value, checked } = e.target
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  function handleOnClosed(e) {
    e.preventDefault();
    setShowPopUp(prevState => !prevState)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm(formData)
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setShowPopUp(prevState => !prevState)
    } else {
      alert('Please fill the form correctly!')
    }
  }

  function validateForm(data) {
    const errors = {}

    if (!data.firstName.trim()) {
      errors.firstName = 'First Name is required.'
    } else if (!data.lastName.trim()) {
      errors.lastName = 'Last Name is required.'
    } else if (!data.emailAddress.trim()) {
      errors.emailAddress = 'Email is required.'
    } else if (!data.queryType.trim()) {
      errors.queryType = 'Please select one.'
    } else if (!data.message.trim()) {
      errors.message = 'Please input something here.'
    }

    return errors
  }

  return (
    <div className="bg-white p-5 border rounded-xl text-[0.8rem] max-w-xl mx-auto overflow-scroll">
      <form action="" method="get">
        <h1 className="text-[1.5rem] font-[500]">Contact Us</h1>
        <div className="my-5 sm:flex sm:flex-row sm:space-x-4">
          <div className="formField mb-5 sm:mb-0 sm:w-1/2">
            <label htmlFor="firstName">First Name <span>*</span></label>
            <input 
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
              placeholder="Enter your first name" />
          </div>
          <div className="formField sm:w-1/2">
            <label htmlFor="lastName">Last Name <span>*</span></label>
            <input 
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleOnChange}
              placeholder="Enter your last name"
              required />
          </div>
        </div>
        <div className="formField mb-5">
          <label htmlFor="emailAddress">Email Address <span>*</span></label>
          <input 
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleOnChange}
            placeholder="Enter your email address"
            required />
        </div>
        <div className="formField mb-5">
          <label htmlFor="queryType">Query Type <span>*</span></label>
          <div className="sm:flex sm:flex-row sm:w-full sm:space-x-4">
            <div className="radioField mb-3 sm:mb-0 sm:w-1/2">
              <input 
                  type="radio"
                  id="generalEnquiry"
                  name="queryType"
                  value="General Enquiry"
                  onChange={handleOnChange}
                  checked={formData.queryType === 'General Enquiry'}
                  required />
              <label htmlFor="generalEnquiry">General Enquiry</label>
            </div>
            <div className="radioField sm:w-1/2">
              <input 
                type="radio"
                id="supportRequest"
                name="queryType"
                value="Support Request"
                onChange={handleOnChange}
                checked={formData.queryType === 'Support Request'}
                required />
              <label htmlFor="supportRequest">Support Request</label>
            </div>
          </div>
        </div>
        <div className="formField mb-5">
          <label htmlFor="message">Message <span>*</span></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleOnChange}
            placeholder="Enter your message here"
            required />
        </div>
        <div className="flex items-center space-x-5 py-3 mb-5">
          <input 
            type="checkbox"
            id="consentChecked"
            name="consentChecked"
            checked={formData.consentChecked}
            onChange={handleOnChange}
            required />
          <label className="text-[0.8rem]" htmlFor="consentChecked">I consent to being contacted by the team <span>*</span></label>
        </div>
        <button 
          type="submit"
          className="border rounded-md bg-green-800 text-white text-bold py-2 w-full"
          onClick={handleSubmit}
          >Submit
        </button>
      </form>
      { showPopUp && <FormMessage onClosed={handleOnClosed} /> }
    </div>
  );
}