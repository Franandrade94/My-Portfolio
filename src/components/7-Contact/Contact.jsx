import "./contact.css";
import React from "react";

const Contact = () => {

    const handleClickWhatsapp = () => {
        window.open("https://wa.me/5491156073772?text=Hello%20Francisco.%20How%20are%20you?%20I%20saw%20your%20personal%20page%20and%20I%20would%20like%20to%20get%20in%20touch%20with%20you.%20Thank%20you%20very%20much!%20 ")
    }

    const handleClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/andrade-francisco94/")
    }

    
    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94")
    }

    return(
        <footer className="contact-Container" id="contacto">
            
            <div className="All-Contact" data-aos="fade-right">
                
                <h1>Contact</h1>

                <div className="MyContact">
                    
                    <div className="contacts" onClick={handleClickLinkedIn}>
                        <h3>LinkedIn</h3>
                        <p>andrade-francisco94</p>
                    </div>

                    <div className="contacts" onClick={handleClickGitHub}>
                        <h3>Github</h3>
                        <p>franandrade94</p>
                    </div>

                    <div className="contacts" onClick={() => window.location = 'mailto:franandrade15994@gmail.com'}>
                        <h3>Email</h3>
                        <p>franandrade15994@gmail.com</p>
                    </div>

                    <div className="contacts" onClick={handleClickWhatsapp}>
                        <h3>Whatsapp</h3>
                        <p>+54 9 1156073772</p>
                    </div>

                </div>

            </div>
        </footer>
    )
};

export default Contact;