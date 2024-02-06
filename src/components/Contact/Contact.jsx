import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_d4utf1p', 'template_ci17t6p', form.current, {
            publicKey: 'mRwpt2kI2erHN8b1Q',
        })
        .then(
            (result) => {
            toast.success('Sent Successfully!', result.text);
            e.target.reset();
            },
            (error) => {
            toast.error('Failed to Send...', error.text);
            },
        );
    };

    return(
        <div className={styles.contact}>
            <div className={styles.wrapper}>
                <div>
                    <h1>Feel free to Reach me out</h1>
                </div>
                <form ref={form} onSubmit={sendEmail} className={styles.inputform}>
                    <div>
                        <input type="text" placeholder="Your Name" name='user_name' required/>
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email" name='user_email' required/>
                    </div>
                    <div>
                        <textarea placeholder="Your Message..." name='message' required/>
                    </div>
                    <div>
                        <button type='submit' value='Send' className={styles.button}>Send</button>
                        {/* <input type="submit" value="Send" className={styles.button}/> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;