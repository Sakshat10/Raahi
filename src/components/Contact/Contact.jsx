import React, { useState } from 'react';
import './cont.css';

const GlassForm = () => {
  const [formData, setFormData] = useState({
    Firstname: '',
    lastname:'',
    email: '',
    type: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="form-container" name='Contact'>
        <div className='form-container-1'>
      <form onSubmit={handleSubmit} className="glass-form">
        <h2>Contact Us</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="First-name"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Last-name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <select name="Message-type" id="Message-type" className='enquiry' required>
        <option value="">--Please choose an option--</option>
            <option value="Enquiry">Enquiry</option>
            <option value="Complaint">Complaint</option>
            <option value="Emergency">Emergency</option>
            <option value="Suggestion">Suggestion</option>
        </select>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default GlassForm;
