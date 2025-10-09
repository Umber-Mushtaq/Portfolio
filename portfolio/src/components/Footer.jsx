import { BiPhone } from "react-icons/bi";
import { FaMapLocation, FaGraduationCap } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section
      id='footer'
      className='flex flex-col items-center justify-center py-5'
    >
      <h1 className='flex items-center text-bold text-white'>
        <FaGraduationCap className='mx-2 text-5xl text-button' />
        Umber Mushtaq
      </h1>
      <div className='flex-col space-y-3 my-3 md:flex md:flex-row md:space-x-3 text-text'>
        <h1>
          <MdEmail className='inline text-button text-2xl' /> umber22j@gmail.com
        </h1>
        <h1>
          <BiPhone className='inline text-button text-2xl' /> +92 3498875900
        </h1>
        <h1>
          <FaMapLocation className='inline text-button text-2xl' /> @Lahore,
          Punjab
        </h1>
      </div>
    </section>
  );
};

export default Footer;
