import { useRef } from "react";
import emailjs from '@emailjs/browser';
import SectionTitle from "../Components/SectionTitle";
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6jhsgf8', 'template_e4imigr', form.current, '-npVdGWbaLqbFOvCH')
            .then((result) => {
                if (result.text === 'OK') {

                    alert('Message sent successfully !')
                }

                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <SectionTitle text="Let's work together" />
            <div className="container-primary bg-slate-600  p-[0px] border-none" data-aos="fade-up" id="contact">
                <div className="wrapper flex flex-col p-5 md:p-10">
                    <form className="w-full" ref={form} onSubmit={sendEmail}>
                        <input required type="text" name='user_name' className="input text-[#ffffff73] outline-none" placeholder="Enter your name here" />
                        <input required type="email" name='user_email' className="input my-5 text-[#ffffff73] outline-none" placeholder="Enter your email here" />
                        <input required type="text" name='user_phone' className="input mb-5 text-[#ffffff73] outline-none" placeholder="Enter your phone number" />
                        <textarea name="message" cols="30" rows="8" className="input outline-none" placeholder="Write details here"></textarea>
                        <button className="px-3 active:bg-[#ffffff73] py-2 w-24 text-white elite social rounded-lg mt-4">Send</button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Contact;