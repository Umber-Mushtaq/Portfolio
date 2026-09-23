import { BiPhone } from "react-icons/bi";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      id='footer'
      className='w-full bg-[#12161c] border-t border-white/10 text-white pt-16 pb-8 px-6 sm:px-12 md:px-20 relative overflow-hidden'
    >
      {/* Background ambient lighting */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-button/5 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-6xl mx-auto relative z-10'>
        {/* Top Content Row */}
        <div className='flex flex-col md:flex-row justify-between items-center pb-12 border-b border-white/10 gap-8'>
          {/* Brand / Logo Section */}
          <div className='flex flex-col items-center md:items-start space-y-2 text-center md:text-left'>
            <div className='flex items-center space-x-3'>
              <div className='p-2.5 bg-button/10 border border-button/30 rounded-xl'>
                <FaGraduationCap className='text-3xl text-button' />
              </div>
              <span className='text-2xl font-extrabold tracking-wide'>
                Umber <span className='text-button'>Mushtaq</span>
              </span>
            </div>
            <p className='text-text text-sm max-w-sm font-light'>
              Full-Stack Software Engineer building scalable web applications,
              modern APIs, and cloud solutions.
            </p>
          </div>

          {/* Contact Details List */}
          <div className='flex flex-col sm:flex-row gap-6 md:gap-8 text-text text-sm'>
            <a
              href='mailto:umber22j@gmail.com'
              className='flex items-center gap-3 bg-[#1c2333] border border-white/10 py-3 px-4 rounded-xl hover:border-button hover:text-white transition-all duration-300'
            >
              <MdEmail className='text-button text-xl flex-shrink-0' />
              <span>umber22j@gmail.com</span>
            </a>

            <a
              href='tel:+923498875900'
              className='flex items-center gap-3 bg-[#1c2333] border border-white/10 py-3 px-4 rounded-xl hover:border-button hover:text-white transition-all duration-300'
            >
              <BiPhone className='text-button text-xl flex-shrink-0' />
              <span>+92 3498875900</span>
            </a>

            <div className='flex items-center gap-3 bg-[#1c2333] border border-white/10 py-3 px-4 rounded-xl text-text'>
              <FaMapMarkerAlt className='text-button text-xl flex-shrink-0' />
              <span>Lahore, Punjab</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className='flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-text/70 gap-4'>
          <p>
            © {new Date().getFullYear()} Umber Mushtaq. All rights reserved.
          </p>
          <div className='flex items-center space-x-6'>
            <a
              href='https://github.com'
              target='_blank'
              rel='noreferrer'
              className='hover:text-button transition-colors'
            >
              <FaGithub className='text-lg' />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noreferrer'
              className='hover:text-button transition-colors'
            >
              <FaLinkedin className='text-lg' />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noreferrer'
              className='hover:text-button transition-colors'
            >
              <FaTwitter className='text-lg' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
