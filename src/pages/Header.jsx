import logo from '../assets/logo.png'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { MdCancelPresentation } from "react-icons/md";
import { useContext, useState } from 'react';
import { BASKET } from '../Context/BasketContext';
import { ImCancelCircle } from "react-icons/im";
import { IoMdTrash } from "react-icons/io";
import { DATA } from '../Context/DataContext';

function Header({AddBasket}) {
    function closeMenubar() {
        let overlay = document.getElementById('overlay')
        let menu = document.getElementById('menu')
        menu.style.right = '-100%'
        menu.style.transition = '.5s ease-in-out'
        overlay.style.display = 'none'
        overlay.style.transition = '.3s ease-in-out'
    }
    function openMneubar() {
        let overlay = document.getElementById('overlay')
        let menu = document.getElementById('menu')
        menu.style.right = '0'
        menu.style.transition = '.5s ease-in-out'
        overlay.style.display = 'block'
        overlay.style.transition = '.3s ease-in-out'
    }
    const [openSebet , setOpenSebet] = useState(false)
    const {sebet ,Increase , Decrease , removeItem } = useContext(BASKET)
    const Total = sebet.reduce((total , item) => {
        return total + (item.price * item.count)
    } , 0)

    const [search , setSearch] = useState('')
    const {products} = useContext(DATA)
    const filterProducts = search && search && products !== 0 ?
        products.filter(item => 
            item.title.toLowerCase().includes(search.toLowerCase())
        ) : []
       
    return (
        <>
        
            <header className='relative  ' >
               <div className='bg-white flex justify-between items-center h-[70px] lg:h-[90px] px-5 fixed w-full top-0 z-50 '>
                 <img className='w-[40%] lg:w-[15%]' src={logo} alt="" />
                <div className=' flex items-center rounded-[16px] text-[#3b3c3d] bg-[#f8f8f8] justify-between px-5 w-[600px] h-[50px] hidden  lg:flex'>
                    <select className='text-[#747474]'>
                        <option className='font-[Open_Sans]'>All Categories</option>
                        <option>Groceries</option>
                        <option>Drinks</option>
                        <option>Chocolates</option>
                    </select>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className='text-[1.2em] text-[#333333] w-full max-w-[340px] hover:border hover:border-[#89b0f5] hover:shadow-[0_0_6px_#89b0f5] rounded-[10px] duration-300 h-[40px] pl-2 outline-none ' type="text" placeholder='Search for more than 20,000 products' />
                    <FaMagnifyingGlass className='text-[#747474] text-[1.2em]' />
                </div>

                <div className=' gap-12 items-center hidden lg:flex'>
                    <div>
                        <p className='text-[#595c5f] text-right text-[1.1em] font-[Open_Sans] '>For Support?</p>
                        <p className=' text-[1.3em] font-[Nunito]  '>+980-34984089</p>
                    </div>
                    <div className='flex gap-3'>
                   <div className='flex relative'>
                         <p className='bg-[#f8f8f8] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center text-[1.2em] '><FaShoppingBasket onClick={() => setOpenSebet(true)} /></p>
                          <span className='absolute -right-[5px] -top-[5px] bg-[#50a2ff] text-white w-[18px] h-[18px] rounded-[50%] text-[.8em] flex justify-center items-center '>{sebet.length}</span>
                   </div>
                        <p className='bg-[#f8f8f8] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center text-[1.5em] '><CiHeart /></p>
                    </div>
                    <div>
                        <p className='text-[#595c5f] text-[1.1em]'>Your Card </p>
                        <p className='font-[500] text-[1.3em]'>$1290.00</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 md:hidden lg:hidden'>
                <div className='flex relative'>
                         <p className='bg-[#f8f8f8] h-[23px] w-[23px] rounded-[50%] flex justify-center items-center '><FaShoppingBasket onClick={() => setOpenSebet(true)} /></p>
                          <span className='absolute -right-[5px] -top-[5px] bg-[#50a2ff] text-white w-[13px] h-[13px] rounded-[50%] text-[.7em] flex justify-center items-center '>{sebet.length}</span>
                   </div>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className='text-[1.2em] text-[#333333] w-full max-w-[120px] hover:border hover:border-[#89b0f5] hover:shadow-[0_0_6px_#89b0f5] rounded-[10px] duration-300 h-[40px] pl-2 outline-none ' type="text" placeholder='Search...' />
                   
                </div>
               </div>
              
                  <div className=' absolute bg-white  w-full max-w-[380px] max-h-[500px]  overflow-y-scroll  top-[40px] lg:top-[70px] left-[4%] lg:left-[35%] z-49 border border-white rounded-[20px]'>
                        {search && (
                            filterProducts.length === 0 ? (
                                <p className='font-[700]'>Məhsul yoxdur</p>
                            ) :
                            (
                                filterProducts.map((item , i) => (
                                    <div key={i} className='flex justify-between px-3 items-center py-2'>
                                        <img className='w-[70px]' src={item.image} alt="" />
                                        <p>{item.title}</p>
                                        <p className='font-[700]'><span className='text-orange-400 text-[1.2em]'>$</span> {item.price}</p>
                                    </div>
                                ))
                            )
                        )}
                 </div>
              
            </header>
           
            <div className=' gap-8 items-center mt-6 pl-6 hidden lg:flex'>
                <select className='text-[#333333]'>
                    <option>All Categories</option>
                    <option>Groceries</option>
                    <option>Drinks</option>
                    <option>Chocolates</option>
                </select>
                <ul className='flex gap-9 text-[#333333]'>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Accessories</li>
                    <li>Pages</li>
                    <li>Brand</li>
                    <li>Sale</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div><p className=' flex lg:hidden justify-center items-center text-[1.8em] text-[#595c5f] border-[#d9d9d9]  mt-[70px] ml-5 border w-[40px] h-[40px] rounded-[5px] '><HiBars3BottomLeft onClick={openMneubar} /></p></div>

            <div id='overlay' className='bg-[#00000097] fixed top-0 hidden w-full h-full z-55 hidden'></div>
            <div id='menu' className='bg-white w-full h-full fixed right-[-100%] z-65 top-0'>
                <div><MdCancelPresentation onClick={closeMenubar} className='text-[1.8em] m-3' /></div>
                <div className='flex justify-center'>
                    <select className='w-full max-w-[340px] mt-3 outline-none border px-5 py-3 rounded-[10px]  border-[#9e9e9e]'>
                        <option>Shop by Departments</option>
                        <option>Groceries</option>
                        <option>Drinks</option>
                        <option>Chocalates</option>
                    </select>
                </div>
                <ul className='flex flex-col gap-4 px-3 mt-8'>
                    <li className='border-b border-b-[#9e9e9e] font-[500] text-[#333333]'>Women</li>
                    <li className='border-b border-b-[#9e9e9e] font-[500] text-[#333333]'>Men</li>
                    <li className='border-b border-b-[#9e9e9e] font-[500] text-[#333333]'>Kids</li>
                    <li className='border-b border-b-[#9e9e9e] font-[500] text-[#333333]'>Accessories</li>
                    <li className='border-b border-b-[#9e9e9e] font-[500] text-[#333333]'>Pages</li>
                    <li className='border-b border-b-[#9e9e9e] font-[500] text-[#333333]'>Brand</li>
                    <li className='border-b border-b-[#9e9e9e] font-[500] text-[#333333]'>Sale</li>
                    <li className='border-b border-b-[#9e9e9e] font-[500] text-[#333333]'>Blog</li>
                </ul>
            </div>
                {/* sebet modal */}
             {
                openSebet && (
                <section className='flex justify-center items-center fixed inset-0 w-full h-[100vh] z-[100]'>
                <div id='lay' onClick={() => setOpenSebet(false)} className='bg-[#000000ae] absolute inset-0 w-full h-full z-99 '></div>
                 <div className='bg-white fixed w-full max-w-[500px] mx-3 py-3 overflow-hidden max-h-[460px] rounded-[20px] z-100'>
                    <div className='flex justify-end p-3'><p onClick={() => setOpenSebet(false)} ><ImCancelCircle  className='text-[1.3em] text-amber-600'/></p></div>

                    <ul className='overflow-y-auto max-h-[400px]'>
                        {sebet?.map((item , i) => {
                            return <li key={i}>

                                <div className='flex justify-between items-center px-3 '> 
                                    <img className='w-[80px]' src={item.image} alt="" />
                                    <h3 className='font-[500] text-[1.2em] '>{item.title}</h3>
                                    <p> $ {item.price * item.count}</p>
                                   <div className='flex items-center gap-2'>
                                    <button onClick={() => Decrease (item.id)} className='w-[18px] h-[18px] border flex justify-center items-center p-2  rounded-[5px] font-[700] '>-</button>
                                    <span>{item.count}</span>
                                    <button onClick={() =>  Increase(item.id)}  className='w-[18px] h-[18px] border flex justify-center items-center p-2  rounded-[5px] font-[700] '>+</button>
                                   </div>
                                   <IoMdTrash onClick={() => removeItem(item.id)} className='text-red-700 text-[1.1em]' />
                                </div>
                              
                            </li>
                        })}
                         <div className='flex justify-end p-3'> <p className='font-[500]'>Cəm  $ {Total}</p></div>
                    </ul>
                </div>
               </section>
                )
             }
        </>
    )
}

export default Header
