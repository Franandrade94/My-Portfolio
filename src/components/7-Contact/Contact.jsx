import "./contact.css";
import React from "react";

const Contact = () => {

    const handleClickWhatsapp = () => {
        window.open("https://wa.me/5491156073772?text=Hola,%20Francisco%20¿Cómo%20estas?%20Vi%20tu%20página%20personal%20y%20me%20gustaría%20contactarte.%20Muchas%20Gracias!%20")
    }

    const handleClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/andrade-francisco94/")
    }

    
    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94")
    }

    return(
        <footer className="contact-Container" id="contacto">
            <div className="All-Contact">
                
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