import logo from '../assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { GiBarbedStar } from "react-icons/gi";
function Footer() {
  return (
   <footer>
       <section className=' flex rounded-[20px] flex-col lg:flex-row justify-evenly px-3 pt-10 gap-4 shadow-[-6px_-6px_10px_#efefef]'>
         <div>
            <img src={logo} alt="logo" />
            <ul className='flex items-center gap-2 mt-6'>
                <li className='w-[40px] h-[40px] flex justify-center items-center rounded-[5px] border border-[#b4b4b4] hover:bg-[#efefef] hover:text-black duration-300 ease-in-out text-[#9a9a9a] ' ><FaFacebookF className='text-[1.1em]' /></li>
                <li className='w-[40px] h-[40px] flex justify-center items-center rounded-[5px] border border-[#b4b4b4] hover:bg-[#efefef] hover:text-black duration-300 ease-in-out text-[#9a9a9a] '><FaTwitter className='text-[1.1em]' /></li>
                <li className='w-[40px] h-[40px] flex justify-center items-center rounded-[5px] border border-[#b4b4b4] hover:bg-[#efefef] hover:text-black duration-300 ease-in-out text-[#9a9a9a] '><FaYoutube  className='text-[1.1em]'/></li>
                <li className='w-[40px] h-[40px] flex justify-center items-center rounded-[5px] border border-[#b4b4b4] hover:bg-[#efefef] hover:text-black duration-300 ease-in-out text-[#9a9a9a] '><IoLogoInstagram className='text-[1.1em]' /></li>
                <li className='w-[40px] h-[40px] flex justify-center items-center rounded-[5px] border border-[#b4b4b4] hover:bg-[#efefef] hover:text-black duration-300 ease-in-out text-[#9a9a9a] '><IoLogoWhatsapp className='text-[1.1em]' /></li>
            </ul>
        </div>
       
        <ul className='flex flex-col gap-1.5 '>
            <li className='text-[#222222] text-[1.3em] font-[500] '>Ultras</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out mt-1 '>About us</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Conditions</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Our Journals</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Careers</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Affiliate Programme</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Ultras Press</li>
        </ul>
        <ul className='flex flex-col gap-1.5'>
            <li className='text-[#222222] text-[1.3em] font-[500]'>Customer Service</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out mt-1 '>FAQ</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Contact</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Privacy Policy</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Returns & Refunds</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Cookie Guidelines</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Delivery Information</li>
        </ul>
      <ul className='flex flex-col gap-1.5 '>
            <li className='text-[#222222] text-[1.3em] font-[500]'>Customer Service</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out mt-1 '>FAQ</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Contact</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Privacy Policy</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Returns & Refunds</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Cookie Guidelines</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Delivery Information</li>
        </ul>
        <ul className='flex flex-col gap-1 '>
            <li className='text-[#222222] text-[1.3em] font-[500] mt-1'>Subscribe Us</li>
            <li className='text-[#747474] text-[1.1em] hover:text-black duration-300 ease-in-out '>Subscribe to our newsletter to get <br/> updates about our grand offers.</li>
            <li className='flex items-center relative mt-4'>
                <input type="email" placeholder='Email Adress' className='border rounded-[10px] z-10 bg-[#f8f8f8] w-full max-w-[240px] h-[40px] outline-none text-[#575a5d] pl-3 ' />
                <button className='text-white bg-black hidden lg:flex absolute -right-[30px] z-20 w-[110px] h-[40px]  justify-center items-center rounded-tr-[10px] rounded-br-[10px]' type='submit'>Subscribe</button>
            </li>
        </ul>
       </section>
       <hr className='text-[#747474] mt-8 mx-5 lg:mx-10' />
       <div className='flex justify-center items-center my-5'>
        <p className='flex items-center gap-3 text-[#747474]'><span>Sama Goyushova </span><GiBarbedStar className='text-[1.6em] star' /></p>
       </div>
   </footer>
  )
}

export default Footer
