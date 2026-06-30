import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { DATA } from '../Context/DataContext'

function Detail() {
     function SlugIfy(text){
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    }
    const {slug} = useParams()
    const {products} = useContext(DATA)
    const proDetail = products.find(item => SlugIfy(item.title) === slug)

  if(!proDetail){
    return <section className="flex items-center h-full sm:p-16 bg-gray-50 text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 text-red-700">
			<path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
			<rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
			<polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
			<polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
		</svg>
		<p className="text-3xl">Looks like our services are currently offline</p>
		<a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-[#ffc43f] text-black">Back to homepage</a>
	</div>
</section>

  }
  return (
 <>
  <div className=" bg-white pt-10 lg:pt-20 px-4 md:px-10 lg:px-20 font-sans lg:mt-[10px] mb-[60px]">
  <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-10 lg:gap-16 bg-white p-6 md:p-10 rounded-[30px] shadow max-w-[1200px] mx-auto">

    <div className="w-full lg:w-1/2 bg-gray-100 rounded-[20px] p-6 flex justify-center items-center min-h-[300px] md:min-h-[400px]">
      <img 
        className="w-full max-w-[350px]  hover:rotate-6 h-auto object-contain transition-transform duration-300 hover:scale-105" 
        src={proDetail?.image} 
        alt={proDetail?.title} 
      />
    </div>
    <div className="w-full lg:w-1/2 flex flex-col gap-5">
      <div>
        <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm">100% Natural</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mt-1">
          {proDetail?.title}
        </h1>
      </div>
      <div className="flex items-center gap-6 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full text-yellow-500 font-semibold text-sm">
          <span>★</span> 
          <span className="text-gray-700">{proDetail?.rating}</span>
        </div>
        <span className="text-gray-300">|</span>
        <p className="text-gray-500 text-sm">
          Ölçü: <span className="text-black font-semibold">{proDetail?.unit}</span>
        </p>
      </div>
      <div className="bg-[#ffc43f] p-4 rounded-xl inline-block max-w-[100px]">
        <span className="text-3xl font-bold text-black">$ {proDetail?.price}</span>
      </div>
      <p className="text-gray-600 leading-relaxed text-base hover:text-black duration-300">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias saepe, enim quis est autem aliquam cupiditate hic quibusdam. Quibusdam, saepe laudantium? Omnis dicta sunt quaerat aspernatur nihil iusto, labore quidem cupiditate cum earum ex consectetur perspiciatis numquam saepe, ipsam amet!
      </p>

    </div>
  </section>
</div>
 </>
  )
}

export default Detail
