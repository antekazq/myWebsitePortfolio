import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



const Contact = () => {

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            alert('Message successfully sent!');
            window.location.reload(false);
        })
        .catch((error) => {
            console.error('EmailJS Error:', error); 
            alert('Failed to send the message. Please try again.');
        });
    };

    return (
        <section id = "contact" className="contact-container">
            <h1 className="title">Contact</h1>

            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Submit</button>
            </form>


        </section>
    );
};
export default Contact;