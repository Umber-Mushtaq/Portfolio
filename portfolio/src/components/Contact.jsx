import { useRef } from "react";
import image from "../assets/img4rm.png";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Styles = {
  inputStyle:
    "w-full bg-transparent text-text border border-text/50 py-3 px-2 rounded-md",
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_52pg45b",
        "template_i4cg025",
        form.current,
        "SaM9eU5m3JhHwbmLr"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id='contact' className='bg-foregrounddark py-5 px-10'>
      <h1 className='text-white font-bold tracking-wide text-3xl mb-6 mt-10 text-center'>
        Contect <span className='text-button'>Me</span>
      </h1>
      <p className='text-text text-center'>
        I’d love to hear from you — let’s build something great together.
      </p>
      <div className='flex flex-row justify-center items-center text-center py-5'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='max-w-md space-y-5 my-5'
        >
          <input
            type='email'
            placeholder='Enter your email'
            name='email'
            required
            className={Styles.inputStyle}
          />
          <input
            type='text'
            placeholder='Enter your name'
            name='name'
            required
            className={Styles.inputStyle}
          />
          <input
            type='text'
            placeholder='Enter your subject'
            name='subject'
            required
            className={Styles.inputStyle}
          />
          <textarea
            rows={4}
            placeholder='Enter your message'
            name='message'
            required
            className={Styles.inputStyle}
          />
          <button
            type='submit'
            className='text-text border-2 border-button rounded-md text-center py-2 px-3 w-full hover:text-black hover:bg-button transition-colors duration-700'
          >
            Submit
          </button>
        </form>
        <div className={Styles.leftSection}>
          <img
            src={image}
            className='hidden md:block mx-auto ml-10 border-4 border-button rounded-md'
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
