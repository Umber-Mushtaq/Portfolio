import { useRef, useState } from "react";
import image from "../assets/img4rm.png";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Styles = {
  inputStyle:
    "w-full bg-[#1c2333] text-white placeholder-text/60 border border-white/10 py-3.5 px-4 rounded-xl focus:outline-none focus:border-button focus:ring-1 focus:ring-button transition-all duration-300 text-sm",
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_52pg45b",
        "template_i4cg025",
        form.current,
        "SaM9eU5m3JhHwbmLr",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        },
      );
  };

  return (
    <section
      id='contact'
      className='w-full bg-foregrounddark py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden text-white'
    >
      {/* Background ambient lighting blur */}
      <div className='absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-button/10 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-5xl mx-auto relative z-10'>
        {/* Section Header */}
        <div className='text-center space-y-3 mb-12 sm:mb-16'>
          <h2 className='text-3xl md:text-5xl font-extrabold tracking-tight'>
            Contact <span className='text-button'>Me</span>
          </h2>
          <p className='text-text text-sm md:text-base max-w-lg mx-auto font-light'>
            I’d love to hear from you — let’s build something great together.
          </p>
        </div>

        {/* Content Box */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#161b22] border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl'>
          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className='space-y-4 w-full'>
            <div>
              <input
                type='text'
                placeholder='Enter your name'
                name='name'
                required
                className={Styles.inputStyle}
              />
            </div>
            <div>
              <input
                type='email'
                placeholder='Enter your email'
                name='email'
                required
                className={Styles.inputStyle}
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Enter your subject'
                name='subject'
                required
                className={Styles.inputStyle}
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder='Enter your message'
                name='message'
                required
                className={`${Styles.inputStyle} resize-none`}
              />
            </div>
            <button
              type='submit'
              disabled={loading}
              className='w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-button hover:opacity-90 active:scale-[0.99] transition-all duration-300 shadow-lg shadow-button/20 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Side Image Illustration */}
          <div className='hidden lg:flex justify-center items-center'>
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-button to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500'></div>
              <img
                src={image}
                alt='Contact illustration'
                className='relative w-full max-w-sm object-cover rounded-2xl border border-white/10 shadow-2xl bg-[#1c2333] p-4'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
