import React, { use, useContext } from 'react'
import bottle from '../assets/bootle.png'
import bottle2 from '../assets/bottle2.png'
import vegetables from '../assets/vegetables.png'
import bread from '../assets/bread.png'

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import { FaRegHeart } from "react-icons/fa6";
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import DataContext, { DATA } from '../Context/DataContext'
import { FaStar } from "react-icons/fa";
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import { FaArrowRightLong } from "react-icons/fa6";
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import { CiCalendarDate } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import store1 from '../assets/store1.jpg'
import store2 from '../assets/store2.jpg'
import phone from '../assets/phone.png'
import { SlBasket } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { FaLandmark } from "react-icons/fa6";
import { BsChatHeartFill } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { BASKET } from '../Context/BasketContext'
function Main() {
    const containerRef = useRef()

    const scrollRight = () => {
        containerRef.current.scrollLeft += 220
    }
    const scrollLeft = () => {
        containerRef.current.scrollLeft -= 220
    }

    const chnage = useRef()
    const right = () => {
        chnage.current.scrollLeft += 360
    }
    const left = () => {
        chnage.current.scrollLeft -= 360
    }

    const ChnageSlider = useRef()
    const changeSliderRight = () =>{
        ChnageSlider.current.scrollLeft += 220
    }
    const changeSliderLeft = () => {
        ChnageSlider.current.scrollLeft -= 220
    }

    const AllProducts = useRef()
    const rightPro = () => {
        AllProducts.current.scrollLeft += 220
    }
    const leftPro = () => {
        AllProducts.current.scrollLeft -= 220
    }

    const {products,  category} = useContext(DATA)
    const [cat , setCat] = useState('')
    const CatPro = cat ? products.filter(item => item.category == cat) : products
    
    
    const {AddBasket} = useContext(BASKET)
    
    return (
        <main className='pt-[20px] lg:pt-[50px]'>
            <section className='mainBackGround mx-3 lg:mx-0 flex flex-col lg:flex-row justify-center lg:justify-evenly py-5'>
                  <Swiper  pagination={true} modules={[Pagination , Autoplay ]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper px-3 lg:px-0 w-full max-w-[910px] ">
                        <SwiperSlide>
                            <div className='bg-[#e6f3fa] rounded-[30px] px-7 flex flex-col lg:flex-row items-center justify-center  py-15 lg:py-[110px] '>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[1.9em] text-[#ffc43f]'>100% Natural</p>
                                    <h2 className='text-[rgb(34,34,34)] text-[2em] lg:text-[3.2em] lg:w-[70%] font-[700]'>Fresh Smoothie & Summer Juice</h2>
                                    <p className='text-[#747474] lg:w-[70%] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus qui suscipit quia nostrum accusamus velit!</p>
                                    <button className='w-[160px] h-[54px] flex justify-center rounded-[5px] items-center border'>SHOP NOW</button>
                                </div>
                                <img className=' w-full max-w-[250px]' src={bottle} alt="bottle" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-[#e6f3fa] rounded-[30px] px-7 flex flex-col lg:flex-row items-center justify-center  py-15 lg:py-[110px] '>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[1.9em] text-[#ffc43f]'>100% Natural</p>
                                    <h2 className='text-[rgb(34,34,34)] text-[2em] lg:text-[3.2em] lg:w-[70%] font-[700]'>Fresh Smoothie & Summer Juice</h2>
                                    <p className='text-[#747474] lg:w-[70%] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus qui suscipit quia nostrum accusamus velit!</p>
                                    <button className='w-[160px] h-[54px] flex justify-center rounded-[5px] items-center border'>SHOP NOW</button>
                                </div>
                                <img className=' w-full max-w-[250px]' src={bottle2} alt="bottle" />
                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='bg-[#e6f3fa] rounded-[30px] px-7 flex flex-col lg:flex-row items-center justify-center  py-15 lg:py-[110px] '>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[1.9em] text-[#ffc43f]'>100% Natural</p>
                                    <h2 className='text-[rgb(34,34,34)] text-[2em] lg:text-[3.2em] font-[700] lg:w-[70%]'>Fresh Smoothie & Summer Juice</h2>
                                    <p className='text-[#747474] lg:w-[70%] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus qui suscipit quia nostrum accusamus velit!</p>
                                    <button className='w-[160px] h-[54px] flex justify-center rounded-[5px] items-center border'>SHOP NOW</button>
                                </div>
                                <img className=' w-full max-w-[250px]' src={bottle} alt="bottle" />
                            </div>
                        </SwiperSlide>
        
                    </Swiper>

                <div className='flex flex-col gap-5  mt-10 lg:mt-0 lg:mr-[20px]'>
                    <div className='bg-[#eef5e5] flex pl-7 overflow-hidden justify-center lg:justify-between items-center lg:pl-7 pt-8  max-w-[550px] rounded-[10px]'>
                        <div className='flex flex-col gap-2 pb-7 lg:pb-0'>
                            <p className='text-[1.7em]'> 15% Off </p>
                            <div className='flex gap-2 items-center'> <hr className='w-[100px]' /> <span className='text-[.8em]'>SALE</span></div>
                            <h2 className='text-[2.1em] font-[500]'>Baked Products</h2>
                            <p className='text-[#747474]'>Shop Collection →</p>
                        </div>
                      <div> <img src={vegetables} className='pt-22 lg:pt-0 ml-4' alt="vegetables" /></div>
                    </div>
                    <div className='bg-[#f9ebe7] flex pl-7 overflow-hidden justify-center lg:justify-between items-center lg:pl-7 pt-8  max-w-[550px] rounded-[10px]'>
                        <div className='flex flex-col gap-2 pb-7 lg:pb-0'>
                            <p className='text-[1.7em]'> 15% Off </p>
                            <div className='flex gap-2 items-center'> <hr className='w-[100px]' /> <span className='text-[.8em]'>SALE</span></div>
                            <h2 className='text-[2.1em] font-[500]'>Baked Products</h2>
                            <p className='text-[#747474]'>Shop Collection →</p>
                        </div>
                      <div> <img src={bread} className='pt-22 lg:pt-0 ml-4' alt="vegetables" /></div>
                    </div>
                </div>
            </section>

            <div className='flex justify-between px-5 items-center mt-8'>
                <h2 className='lg:text-[2em] text-[1.3em] font-[500]'>Category</h2>
                <div className='flex gap-7 items-center'>
                    <p className='text-[1.1em] text-[#747474] hidden lg:block hover:text-black duration-300 '>View All Categories →</p>
                    <div className='flex gap-4'>
                        <button onClick={scrollLeft} className='bg-[#f2efef] text-[#747474] w-[42px] h-[42px] flex justify-center items-center rounded-[10px] text-[1.5em] font-[500] hover:bg-[#ffc43f] hover:text-white duration-300 '><IoIosArrowBack /></button>
                        <button onClick={scrollRight} className='bg-[#f2efef] text-[#747474] w-[42px] h-[42px] flex justify-center items-center rounded-[10px] text-[1.5em] font-[500] hover:bg-[#ffc43f] hover:text-white duration-300 '><IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
           <section ref={containerRef} className='flex gap-7 mt-5 overflow-x-scroll veges py-9 mx-[26px] px-5'>
            <div className='bg-white h-[220px] gap-2 shrink-0  flex-col w-full max-w-[220px] rounded-[20px] hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_15px_#ececec] flex justify-center items-center  '>
               <img src={icon1} alt="icon1"/>
               <h2 className='text-[1.5em] font-[500] '>Fruits & Veges</h2>
            </div>
               <div className='bg-white h-[220px] gap-2 shrink-0  flex-col w-full max-w-[220px] rounded-[20px] hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_15px_#ececec] flex justify-center items-center  '>
               <img src={icon2} alt="icon2"/>
               <h2 className='text-[1.5em] font-[500] '>Breads & Sweets</h2>
            </div>
               <div className='bg-white h-[220px] gap-2 shrink-0  flex-col w-full max-w-[220px] rounded-[20px] hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_15px_#ececec] flex justify-center items-center  '>
               <img src={icon3} alt="icon3"/>
               <h2 className='text-[1.5em] font-[500] '>Fruits & Veges</h2>
            </div>
               <div className='bg-white h-[220px] gap-2 shrink-0  flex-col w-full max-w-[220px] rounded-[20px] hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_15px_#ececec] flex justify-center items-center  '>
               <img src={icon4} alt="icon4"/>
               <h2 className='text-[1.5em] font-[500] '>Fruits & Veges</h2>
            </div>
               <div className='bg-white h-[220px] gap-2 shrink-0 flex-col w-full max-w-[220px] rounded-[20px] hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_15px_#ececec] flex justify-center items-center  '>
               <img src={icon5} alt="icon5"/>
               <h2 className='text-[1.5em] font-[500] '>Fruits & Veges</h2>
            </div>
            <div className='bg-white h-[220px] gap-2 shrink-0  flex-col w-full max-w-[220px] rounded-[20px] hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_15px_#ececec] flex justify-center items-center  '>
               <img src={icon1} alt="icon1"/>
               <h2 className='text-[1.5em] font-[500] '>Fruits & Veges</h2>
            </div>
               <div className='bg-white h-[220px] gap-2 shrink-0  flex-col w-full max-w-[220px] rounded-[20px] hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_15px_#ececec] flex justify-center items-center  '>
               <img src={icon2} alt="icon2"/>
               <h2 className='text-[1.5em] font-[500] '>Breads & Sweets</h2>
            </div>
               <div className='bg-white h-[220px] gap-2 shrink-0  flex-col w-full max-w-[220px] rounded-[20px] hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_15px_#ececec] flex justify-center items-center  '>
               <img src={icon3} alt="icon3"/>
               <h2 className='text-[1.5em] font-[500] '>Fruits & Veges</h2>
            </div>
               <div className='bg-white h-[220px] gap-2 shrink-0 flex-col w-full max-w-[220px] rounded-[20px] hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_15px_#ececec] flex justify-center items-center  '>
               <img src={icon4} alt="icon4"/>
               <h2 className='text-[1.5em] font-[500] '>Fruits & Veges</h2>
            </div>
               <div className='bg-white h-[220px] gap-2 shrink-0 flex-col w-full max-w-[220px] rounded-[20px] hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_15px_#ececec] flex justify-center items-center  '>
               <img src={icon5} alt="icon5"/>
               <h2 className='text-[1.5em] font-[500] '>Fruits & Veges</h2>
            </div>
           </section>

             <div className='flex justify-between px-5 items-center mt-7'>
                <h2 className='lg:text-[2em] text-[1.3em] font-[500]'>Newly Arrived Brands</h2>
                <div className='flex gap-7 items-center'>
                    <p className='text-[1.1em] text-[#747474] hidden lg:block hover:text-black duration-300 '>View All Categories →</p>
                    <div className='flex gap-4'>
                        <button onClick={left} className='bg-[#f2efef] text-[#747474] w-[42px] h-[42px] flex justify-center items-center rounded-[10px] text-[1.5em] font-[500] hover:bg-[#ffc43f] hover:text-white duration-300 '><IoIosArrowBack /></button>
                        <button onClick={right} className='bg-[#f2efef] text-[#747474] w-[42px] h-[42px] flex justify-center items-center rounded-[10px] text-[1.5em] font-[500] hover:bg-[#ffc43f] hover:text-white duration-300 '><IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
            <section ref={chnage} className=' gap-5 flex overflow-x-scroll mx-5 px-5 veges py-7'>
                <div className="shadow-[6px_6px_20px_#ececec] w-full max-w-[360px] shrink-0 rounded-[20px] p-5 flex items-center gap-3">
                    <img className='w-full max-w-[115px] rounded-[10px] object-contain' src={product1} alt="product1" />
                    <div>
                        <p className='text-[#595c5f] text-[1.1em]'>Amber Jar</p>
                        <p className=' text-[#747474] font-[500] text-[1.2em] '>Honey best nectar you wish to get</p>
                    </div>
                </div>
                 <div className="shadow-[6px_6px_20px_#ececec] w-full max-w-[360px] shrink-0  rounded-[20px] p-5 flex items-center gap-3">
                    <img className='w-full max-w-[115px] rounded-[10px] object-contain' src={product2} alt="product1" />
                    <div>
                        <p className='text-[#595c5f] text-[1.1em]'>Amber Jar</p>
                        <p className=' text-[#747474] font-[500] text-[1.2em] '>Honey best nectar you wish to get</p>
                    </div>
                </div>
                   <div className="shadow-[6px_6px_20px_#ececec] w-full max-w-[360px] shrink-0  rounded-[20px] p-5 flex items-center gap-3">
                    <img className='w-full max-w-[115px] rounded-[10px] object-contain' src={product3} alt="product1" />
                    <div>
                        <p className='text-[#595c5f] text-[1.1em]'>Amber Jar</p>
                        <p className=' text-[#747474] font-[500] text-[1.2em] '>Honey best nectar you wish to get</p>
                    </div>
                </div>
                   <div className="shadow-[6px_6px_20px_#ececec] w-full max-w-[360px] shrink-0   rounded-[20px] p-5 flex items-center gap-3">
                    <img className='w-full max-w-[115px] rounded-[10px] object-contain' src={product4} alt="product1" />
                    <div>
                        <p className='text-[#595c5f] text-[1.1em]'>Amber Jar</p>
                        <p className=' text-[#747474] font-[500] text-[1.2em] '>Honey best nectar you wish to get</p>
                    </div>
                </div>
                   <div className="shadow-[6px_6px_20px_#ececec] w-full max-w-[360px] shrink-0  rounded-[20px] p-5 flex items-center gap-3">
                    <img className='w-full max-w-[115px] rounded-[10px] object-contain' src={product1} alt="product1" />
                    <div>
                        <p className='text-[#595c5f] text-[1.1em]'>Amber Jar</p>
                        <p className=' text-[#747474] font-[500] text-[1.2em] '>Honey best nectar you wish to get</p>
                    </div>
                </div>
                   <div className="shadow-[6px_6px_20px_#ececec] w-full max-w-[360px] shrink-0  rounded-[20px] p-5 flex items-center gap-3">
                    <img className='w-full max-w-[115px] rounded-[10px] object-contain' src={product2} alt="product1" />
                    <div>
                        <p className='text-[#595c5f] text-[1.1em]'>Amber Jar</p>
                        <p className=' text-[#747474] font-[500] text-[1.2em] '>Honey best nectar you wish to get</p>
                    </div>
                </div>
            </section>

        {/* category map  */}
        <div className='text-center mt-10 flex gap-3 mx-2 lg:gap-6 justify-center flex-wrap'>
            <button onClick={() => setCat('')} className='px-4 bg-[#ffc43f] text-white py-1  rounded-[10px] hover:-translate-y-1.5 duration-500 ' >All</button>
            {
                category?.map((item , i) => (
                <button key={i} onClick={() => setCat(item.categoryName)} className='px-4  bg-[#50a2ff] text-white py-1  rounded-[10px] hover:-translate-y-1.5 duration-500 ' >{item.categoryName}</button>

                ))
            }
        </div>

           {/* Data olan hisse */}
           <div className='flex flex-col lg:flex-row flex-wrap gap-2 lg:gap-0 justify-center overflow-hidden lg:justify-between items-center px-5 mt-8 lg:mt-5'>
            <h2 className='lg:text-[2em] text-[1.5em] font-[500]'>Trending Products</h2>
           
           </div>
           <section className='flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6 mt-10'>
                {
                  CatPro &&  CatPro.slice(0,10).map(( item ,i) =>  (
               <div key={i} className='w-full max-w-[270px] rounded-[20px]  overflow-hidden  hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_20px_#ececec]'>
               <div className='bg-[#f8f8f8] m-4 rounded-[20px] relative flex flex-col justify-center items-center'>
                 <img className='max-w-[200px] w-full h-[200px] object-contain' src={item.image} alt={item.id} />
                    <div className='flex justify-between px-2 items-center absolute top-[10px]  left-0 right-0'>
                        {item.discount ? <p className='bg-[#a3be4c] w-[40px] text-[.8em] rounded-[5px] h-[20px] flex justify-center items-center text-white'>{item.discount}</p> : <div></div>}
                        <p className='w-[45px] h-[45px] bg-white rounded-[50%] flex justify-center items-center hover:bg-[#f03838] hover:text-white duration-300 ease-in-out text-[1.3em] border border-[#c3c3c3] '><FaRegHeart /></p>
                    </div>
               </div>
                <div className='px-3 pb-5'>
                    <h2 className='font-[500] text-[1.2em]'>{item.title}</h2>
                    <p className='flex items-center gap-3'>
                        <span className='text-[#747474]'>{item.unit}</span>
                        <span className='flex items-center gap-1'><FaStar className='text-[#ffc43f]' /> {item.rating}</span>
                    </p>
                    <p className='font-[700] text-[1.3em] '>$ {item.price}</p>
                    <div className='flex justify-between '>
                        <div className='flex gap-2 mt-2'>
                            <button className='border w-[25px] h-[25px] flex justify-center items-center text-[1.2em]  rounded-[5px] pb-1 border-[#e2e2e2]'>-</button>
                            <span>1</span>
                            <button className='border w-[25px] h-[25px] flex justify-center items-center text-[1.2em] rounded-[5px] pb-1 border-[#e2e2e2]'>+</button>
                        </div>
                        <button onClick={() => AddBasket(item.id , item.title , item.image , item.price)} className='text-[#fff] bg-blue-400 py-1 px-2 rounded-[10px] hover:bg-blue-950 duration-300 ease-in-out text-[1.1em]'>Add to Card</button>
                    </div>
                </div>
            </div>
                  )
                  )
                }
           </section>

           <section className='flex flex-col lg:flex-row flex-wrap justify-center overflow-hidden px-5 lg:justify-evenly gap-7 items-center mt-20'>
            <div className='bg-[#f9ebe7] w-full max-w-[720px] h-[280px] relative rounded-[15px] flex px-5 justify-between py-5 items-center '>
                <div className='flex flex-col gap-2 z-20'>   
                    <p className='text-[#ffc43f] font-[500] text-[1.2em] lg:text-[1.6em] '>Upto 25% Off</p>
                    <h2 className='lg:text-[2em] text-[1.5em] font-[500]'>Luxa Dark Chocolate</h2>
                    <p className='text-[#747474]  ' >Very tasty & creamy vanilla flavour creamy muffin</p>
                    <button className='bg-black text-white w-[130px] h-[40px] flex justify-center items-center rounded-[10px] '>SHOP NOW</button>
                </div>
                <img className='w-full max-w-[300px] mt-4 absolute right-[10px] z-10' src={image1} alt="image1" />
            </div>

            <div className='bg-[#e6f3fa] w-full max-w-[720px] h-[280px] relative rounded-[15px] flex px-5 justify-between py-5 items-center '>
                <div className='flex flex-col gap-2 z-20'>   
                    <p className='text-[#ffc43f] font-[500] lg:text-[1.6em] text-[1.2em] '>Upto 25% Off</p>
                    <h2 className='lg:text-[2em] text-[1.5em] font-[500]'>Creamy Muffins</h2>
                    <p className='text-[#747474]' >Very tasty & creamy vanilla flavour creamy muffin</p>
                    <button className='bg-black text-white w-[130px] h-[40px] flex justify-center items-center rounded-[10px] '>SHOP NOW</button>
                </div>
                <img className='w-full max-w-[300px] mt-4 absolute right-[10px] z-10' src={image2} alt="image2" />
            </div>
           </section>

                <div className='flex justify-between px-5 items-center mt-20'>
                <h2 className='lg:text-[2em] text-[1.3em] font-[500]'>Best selling products</h2>
                <div className='flex gap-7 items-center'>
                    <p className='text-[1.1em] text-[#747474] hidden lg:block hover:text-black duration-300 '>View All Categories →</p>
                    <div className='flex gap-4'>
                        <button onClick={changeSliderLeft} className='bg-[#f2efef] text-[#747474] w-[42px] h-[42px] flex justify-center items-center rounded-[10px] text-[1.5em] font-[500] hover:bg-[#ffc43f] hover:text-white duration-300 '><IoIosArrowBack /></button>
                        <button onClick={changeSliderRight}  className='bg-[#f2efef] text-[#747474] w-[42px] h-[42px] flex justify-center items-center rounded-[10px] text-[1.5em] font-[500] hover:bg-[#ffc43f] hover:text-white duration-300 '><IoIosArrowForward /></button>
                    </div>
                </div>
            </div>

           <section className='veges overflow-x-scroll flex mt-5  gap-6 px-2 mx-5' ref={ChnageSlider}>
             {
                  products &&  products.slice(10, 17).map(( item ,i) =>  (
               <div key={i} className='w-full max-w-[220px] shrink-0 my-10 rounded-[20px]  overflow-hidden  hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_20px_#ececec]'>
               <div className='bg-[#f8f8f8] m-4 rounded-[20px] relative flex flex-col justify-center items-center'>
                 <img className='max-w-[180px] w-full h-[200px] object-contain' src={item.image} alt={item.id} />
                    <div className='flex justify-between px-2 items-center absolute top-[10px]  left-0 right-0'>
                        {item.discount ? <p className='bg-[#a3be4c] w-[40px] text-[.8em] rounded-[5px] h-[20px] flex justify-center items-center text-white'>{item.discount}</p> : <div></div>}
                        <p className='w-[45px] h-[45px] bg-white rounded-[50%] flex justify-center items-center hover:bg-[#f03838] hover:text-white duration-300 ease-in-out text-[1.3em] border border-[#c3c3c3] '><FaRegHeart /></p>
                    </div>
               </div>
                <div className='px-3 pb-5'>
                    <h2 className='font-[500] text-[1.2em]'>{item.title}</h2>
                    <p className='flex items-center gap-3'>
                        <span className='text-[#747474]'>{item.unit}</span>
                        <span className='flex items-center gap-1'><FaStar className='text-[#ffc43f]' /> {item.rating}</span>
                    </p>
                    <p className='font-[700] text-[1.3em] '>$ {item.price}</p>
                    <div className='flex justify-between '>
                        <div className='flex gap-2 mt-2'>
                            <button className='border w-[25px] h-[25px] flex justify-center items-center text-[1.2em]  rounded-[5px] pb-1 border-[#e2e2e2]'>-</button>
                            <span>1</span>
                            <button className='border w-[25px] h-[25px] flex justify-center items-center text-[1.2em] rounded-[5px] pb-1 border-[#e2e2e2]'>+</button>
                        </div>
                        <button className=' text-[1.1em] bg-blue-400 px-2 py-1 rounded-[10px] text-white'>Add to Card</button>
                    </div>
                </div>
            </div>
                  )
                  )
                }
           </section>

        <section className='m-5 p-10 rounded-[20px]  min-h-[550px] bg-[#e6f3fb]  flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10'>
            <div className='max-w-[500px] w-full text-center lg:text-left '>
                <h2 className='text-[2.5em] lg:text-[3.3em] font-[500] lg:w-[90%]'>
                    Get <span className='text-[#ffc43f]'>25% Discount</span> on your first purchase
                </h2>
                <p className='text-[#747474] text-[1.1em] mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.
                </p>
            </div>
            <div className='flex flex-col gap-4 w-full max-w-[500px]'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#747474] text-[1.1em] font-[500]'>Name</p>
                    <input type="text" placeholder='Name' className='border pl-3 text-[#747474] bg-white w-full h-[50px] rounded-[8px] outline-none' />
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#747474] text-[1.1em] font-[500]'>Email</p>
                    <input type="email" placeholder='abc@gmail.com' className='border pl-3 text-[#747474] bg-white w-full h-[50px] rounded-[8px] outline-none' />
                </div>
                <div className='flex items-center gap-2 mt-2'>
                    <input type="checkbox" id="subscribe" className='w-4 h-4' />
                    <span className='text-[#747474]  cursor-pointer'>Subscribe to the newsletter</span>
                </div>
                <button className='bg-black text-white h-[50px] w-full max-w-[500px] rounded-[8px] font-[500] hover:bg-[#222] duration-300 mt-2'>
                    Submit
                </button>
            </div>
            
      </section>

         <div className='flex justify-between px-5 items-center mt-17'>
                <h2 className='lg:text-[2em] text-[1.3em] font-[500]'>Most popular products</h2>
                <div className='flex gap-7 items-center'>
                    <p className='text-[1.1em] text-[#747474] hidden lg:block hover:text-black duration-300 '>View All Categories →</p>
                    <div className='flex gap-4'>
                        <button onClick={leftPro}  className='bg-[#f2efef] text-[#747474] w-[42px] h-[42px] flex justify-center items-center rounded-[10px] text-[1.5em] font-[500] hover:bg-[#ffc43f] hover:text-white duration-300 '><IoIosArrowBack /></button>
                        <button onClick={rightPro}  className='bg-[#f2efef] text-[#747474] w-[42px] h-[42px] flex justify-center items-center rounded-[10px] text-[1.5em] font-[500] hover:bg-[#ffc43f] hover:text-white duration-300 '><IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
            
           <section className='veges overflow-x-scroll flex mt-5  gap-6 px-2 mx-5' ref={AllProducts}>
             {
                  products &&  products.map(( item ,i) =>  (
               <div key={i} className='w-full max-w-[220px] shrink-0 my-10 rounded-[20px]  overflow-hidden  hover:shadow-[0_0_35px_#ececec] hover:-translate-y-2.5  transition-transform  duration-300 shadow-[0_0_20px_#ececec]'>
               <div className='bg-[#f8f8f8] m-4 rounded-[20px] relative flex flex-col justify-center items-center'>
                 <img className='max-w-[180px] w-full h-[200px] object-contain' src={item.image} alt={item.id} />
                    <div className='flex justify-between px-2 items-center absolute top-[10px]  left-0 right-0'>
                        {item.discount ? <p className='bg-[#a3be4c] w-[40px] text-[.8em] rounded-[5px] h-[20px] flex justify-center items-center text-white'>{item.discount}</p> : <div></div>}
                        <p className='w-[45px] h-[45px] bg-white rounded-[50%] flex justify-center items-center hover:bg-[#f03838] hover:text-white duration-300 ease-in-out text-[1.3em] border border-[#c3c3c3] '><FaRegHeart /></p>
                    </div>
               </div>
                <div className='px-3 pb-5'>
                    <h2 className='font-[500] text-[1.2em]'>{item.title}</h2>
                    <p className='flex items-center gap-3'>
                        <span className='text-[#747474]'>{item.unit}</span>
                        <span className='flex items-center gap-1'><FaStar className='text-[#ffc43f]' /> {item.rating}</span>
                    </p>
                    <p className='font-[700] text-[1.3em] '>$ {item.price}</p>
                    <div className='flex justify-between '>
                        <div className='flex gap-2 mt-2'>
                            <button className='border w-[25px] h-[25px] flex justify-center items-center text-[1.2em]  rounded-[5px] pb-1 border-[#e2e2e2]'>-</button>
                            <span>1</span>
                            <button className='border w-[25px] h-[25px] flex justify-center items-center text-[1.2em] rounded-[5px] pb-1 border-[#e2e2e2]'>+</button>
                        </div>
                        <button className='text-[#747474] text-[1.1em]'>Add to Card</button>
                    </div>
                </div>
            </div>
                  )
                  )
                }
           </section>

           <div className='flex items-center justify-between px-5 mt-10' >
                <h2 className='lg:text-[2em] text-[1.3em] font-[500]'>Our Recent Blog</h2>
                <div className='flex text-[#747474] lg:text-[1.3em] fort-[500] items-center justify-center gap-2'><span>Read All Articles</span> <FaArrowRightLong /></div>
           </div>
           <section className='flex  flex-col lg:flex-row justify-center gap-6 flex-wrap mt-10 items-center px-5'>
                <div className='w-full max-w-[450px] shadow-[0_0_15px_#e7ebee] p-4 rounded-[15px]'>
                    <img  className='w-full max-w-[440px] rounded-[15px]' src={blog1} alt="blog1" />
                    <div className='text-[#747474] flex items-center gap-3 font-[500] mt-3'>
                        <p className='flex items-center gap-1'>
                            <span><CiCalendarDate className='text-[1.2em]' /></span>
                            <span className='uppercase'>22 Aug 2021</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <span><CiFileOn className='text-[1.2em]' /></span>
                            <span className='uppercase'>tips & tricks</span>
                        </p>
                    </div>
                  <h2 className='font-[500] text-[1.5em] mt-1'>Top 10 casual look ideas to dress up your kids</h2>
                    <p className='text-[#747474] pb-3 text-[1.1em] mt-1'>Lorem ipsum dolor sit amet, consectetur adipi elit. liquet eleifend viverra enim tincidunt donec quam.in arcu, hendrerit neque dolor morbi...</p>
                </div>

                 <div className='w-full max-w-[450px] shadow-[0_0_15px_#e7ebee] p-4 rounded-[15px]'>
                    <img  className='w-full max-w-[440px] rounded-[15px]' src={blog2} alt="blog2" />
                    <div className='text-[#747474] flex items-center gap-3 font-[500] mt-3'>
                        <p className='flex items-center gap-1'>
                            <span><CiCalendarDate className='text-[1.2em]' /></span>
                            <span className='uppercase'>25 Aug 2021</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <span><CiFileOn className='text-[1.2em]' /></span>
                            <span className='uppercase'>trending</span>
                        </p>
                    </div>
                  <h2 className='font-[500] text-[1.5em] mt-1'>Latest trends of wearing street wears supremely</h2>
                    <p className='text-[#747474] pb-3 text-[1.1em] mt-1'>Lorem ipsum dolor sit amet, consectetur adipi elit. liquet eleifend viverra enim tincidunt donec quam.in arcu, hendrerit neque dolor morbi...</p>
                </div>

                 <div className='w-full max-w-[450px] shadow-[0_0_15px_#e7ebee] p-4 rounded-[15px]'>
                    <img  className='w-full max-w-[440px] rounded-[15px]' src={blog3} alt="blog3" />
                    <div className='text-[#747474] flex items-center gap-3 font-[500] mt-3'>
                        <p className='flex items-center gap-1'>
                            <span><CiCalendarDate className='text-[1.2em]' /></span>
                            <span className='uppercase'>28 Aug 2021</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <span><CiFileOn className='text-[1.2em]' /></span>
                            <span className='uppercase'>inspiration</span>
                        </p>
                    </div>
                  <h2 className='font-[500] text-[1.5em] mt-1'>10 Different Types of comfortable clothes ideas for women</h2>
                    <p className='text-[#747474] pb-3 text-[1.1em] mt-1'>Lorem ipsum dolor sit amet, consectetur adipi elit. liquet eleifend viverra enim tincidunt donec quam.in arcu, hendrerit neque dolor morbi...</p>
                </div>
           </section>

           <section className='bg-[#fff9eb] mt-20 lg:mt-[140px] flex flex-col lg:py-[100px] lg:flex-row lg:relative py-8 lg:justify-end rounded-[30px] mx-5  lg:mx-10 items-center '>
                <img src={phone} alt="phone" className='w-full max-w-[320px] lg:absolute lg:left-[70px]'/>   
                <div className='flex flex-col justify-center lg:justify-start gap-2 w-full lg:max-w-[900px] px-4 text-[1.2em] pr-[70px] '>
                    <h2 className='font-[500] text-[1.8em] lg:text-[2em]'>Shop faster with foodmart App</h2>
                    <p className=' text-[#747474] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis. Amet blandit tortor praesent ante vitae. A, enim pretiummi senectus magna. Sagittis sed ptibus liberolectus non et psryroin.</p>
                    <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-3 mt-7'>
                        <img className='w-full max-w-[200px]' src={store1} alt="store1" />
                        <img className='w-full max-w-[200px]' src={store2} alt="store2" />
                    </div>
                </div>      
           </section>

           <div>
              <h2 className='font-[500] text-[1.8em] lg:text-[2em] mt-10 lg:mt-20 px-5 lg:text-start text-center'>People are also looking for</h2>
                <ul className='flex flex-wrap items-center gap-2 mx-5 mt-8'>
                    <li className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Blue diamon almonds</li>
                    <li  className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Angie's Boomchickapop Corn</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Salty kettle Corn</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Chobani Greek Yogurt</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Sweet Vanilla Yogurt</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Foster Farms Takeout Crispy wings</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Warrior Blend Organic</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Chao Cheese Creamy</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Chicken meatbells</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Blue diamon almonds</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Angie's Boomchickapop Corn</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Salty kettle Corn</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Chobani Greek Yogurt</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Sweet Vanilla Yogurt</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Foster Farms Takeout Crispy wings</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Warrior Blend Organic</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Chao Cheese Creamy</li>
                    <li   className='bg-[#fff9eb] text-[#747474] px-6 py-1.5 rounded-[10px] text-[1.1em] hover:bg-[#ffecbe] duration-500 ease-in-out hover:-translate-y-1 '>Chicken meatbells</li>
                </ul>
           </div>

           <section className='mt-15 flex flex-col lg:flex-row flex-wrap justify-center gap-5 items-center mx-5'>
                <div className='flex justify-between items-center gap-4 shadow-[0_0_10px_#e6e6e6] hover:shadow-[0_0_25px_#e6e6e6] hover:-translate-y-1.5 duration-500 ease-in-out py-6 px-3 w-full max-w-[280px] rounded-[20px] '>
                    <SlBasket className='text-[2.5em]' />
                    <div>
                        <p className='font-[500] text-[1.3em]  '>Free delivery</p>
                        <p className='text-[#747474]'>Lorem ipsum dolor sit ametst, consectetur adipi elit.</p>
                    </div>
                </div>

                  <div className='flex justify-between items-center gap-4 shadow-[0_0_10px_#e6e6e6]  hover:shadow-[0_0_25px_#e6e6e6] hover:-translate-y-1.5 duration-500 ease-in-out py-6 px-3 w-full max-w-[280px] rounded-[20px] '>
                    <MdOutlineSecurity  className='text-[2.5em]' />
                    <div>
                        <p className='font-[500] text-[1.3em]  '>100% secure payment</p>
                        <p className='text-[#747474]'>Lorem ipsum dolor sit ametst, consectetur adipi elit.</p>
                    </div>
                </div>

                  <div className='flex justify-between items-center gap-4 shadow-[0_0_10px_#e6e6e6]  hover:shadow-[0_0_25px_#e6e6e6] hover:-translate-y-1.5 duration-500 ease-in-out py-6 px-3 w-full max-w-[280px] rounded-[20px] '>
                    <FaLandmark className='text-[2.5em]' />
                    <div>
                        <p className='font-[500] text-[1.3em]  '>Quality guarantee</p>
                        <p className='text-[#747474]'>Lorem ipsum dolor sit ametst, consectetur adipi elit.</p>
                    </div>
                </div>

                  <div className='flex justify-between items-center gap-4 shadow-[0_0_10px_#e6e6e6]  hover:shadow-[0_0_25px_#e6e6e6] hover:-translate-y-1.5 duration-500 ease-in-out py-6 px-3 w-full max-w-[280px] rounded-[20px] '>
                    <BsChatHeartFill className='text-[2.5em]' />
                    <div>
                        <p className='font-[500] text-[1.3em]  '>guaranteed savings</p>
                        <p className='text-[#747474]'>Lorem ipsum dolor sit ametst, consectetur adipi elit.</p>
                    </div>
                </div>

                  <div className='flex justify-between items-center gap-4 shadow-[0_0_10px_#e6e6e6]  hover:shadow-[0_0_25px_#e6e6e6] hover:-translate-y-1.5 duration-500 ease-in-out py-6 px-3 w-full max-w-[280px] rounded-[20px] '>
                    <FiGift className='text-[2.5em]' />
                    <div>
                        <p className='font-[500] text-[1.3em]  '>Daily offers</p>
                        <p className='text-[#747474]'>Lorem ipsum dolor sit ametst, consectetur adipi elit.</p>
                    </div>
                </div>
           </section>
        </main>
    )
}

export default Main
