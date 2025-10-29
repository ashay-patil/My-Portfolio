import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useState } from 'react'

const Contact = () => {
    const [alertMessage, setAlertMessage] = useState('Submit Now');
    const [submitClass, setSubmitClass] = useState('contact-submit');
    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitClass('prevent-click');
        setAlertMessage('Submitting ...');
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);
        const object = Object.fromEntries(formData);
        const {name, email, message} =  object;
        if(!name || !email || !message){
            alert('Please enter valid Inputs');
            setSubmitClass('contact-submit');
        setAlertMessage('Submit Now');
            return ;
        }
        const namearr = name.split(' ');
        if(namearr.length > 5){
            alert('Invalid Name');
            setSubmitClass('contact-submit');
        setAlertMessage('Submit Now');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            setSubmitClass('contact-submit');
        setAlertMessage('Submit Now');
            return;
        }
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            event.target.reset();
        }
        setSubmitClass('contact-submit');
        setAlertMessage('Submit Now');
    };

    return (
        <div id='contact' className="contact">
            <div className="space-adjust"></div>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to contact me</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>ashaypatil2005@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>7498783815</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Pune, Maharashtra</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                    <button className={submitClass} type='submit' disabled={submitClass==='prevent-click'} >{alertMessage}</button>
                </form>
            </div>
        </div>
    )
}


export default Contact;