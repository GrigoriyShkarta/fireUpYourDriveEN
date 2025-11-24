export default function Price() {
	return (
		<div id={'price'} className='py-16 px-6 max-w-5xl mx-auto w-full'>
			<h2 className='text-3xl font-bold mb-8 text-center'>Price</h2>

			<div className='flex flex-col gap-8'>
        <div className='text-center mb-12'>
          <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-4 animate-pulse'>
            BLACK FRIDAY – Limited Offer!
          </div>
          <h2 className='text-4xl font-bold mb-4'>Promotional Prices</h2>
          <p className='text-red-600'>Discounts valid only until November 28</p>
        </div>
        
				{/* Basic option */}
				{/*<div className='bg-gray p-8 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between'>*/}
				{/*	<div>*/}
				{/*		<h3 className='text-2xl font-semibold mb-4'>Basic</h3>*/}
				{/*		<p className='text-4xl font-bold mb-4'>40 USD</p>*/}
				{/*		<ul className='space-y-2'>*/}
				{/*			<li className='flex items-center'>*/}
				{/*				<svg*/}
				{/*					className='w-5 h-5 mr-2 text-gray-500'*/}
				{/*					fill='none'*/}
				{/*					stroke='currentColor'*/}
				{/*					viewBox='0 0 24 24'*/}
				{/*					xmlns='http://www.w3.org/2000/svg'*/}
				{/*				>*/}
				{/*					<path*/}
				{/*						strokeLinecap='round'*/}
				{/*						strokeLinejoin='round'*/}
				{/*						strokeWidth='2'*/}
				{/*						d='M5 13l4 4L19 7'*/}
				{/*					></path>*/}
				{/*				</svg>*/}
				{/*				No feedback*/}
				{/*			</li>*/}
				{/*			<li className='flex items-center'>*/}
				{/*				<svg*/}
				{/*					className='w-5 h-5 mr-2 text-gray-500'*/}
				{/*					fill='none'*/}
				{/*					stroke='currentColor'*/}
				{/*					viewBox='0 0 24 24'*/}
				{/*					xmlns='http://www.w3.org/2000/svg'*/}
				{/*				>*/}
				{/*					<path*/}
				{/*						strokeLinecap='round'*/}
				{/*						strokeLinejoin='round'*/}
				{/*						strokeWidth='2'*/}
				{/*						d='M5 13l4 4L19 7'*/}
				{/*					></path>*/}
				{/*				</svg>*/}
				{/*				No certificate*/}
				{/*			</li>*/}
				{/*		</ul>*/}
				{/*	</div>*/}
    
				{/*	<a href='https://secure.wayforpay.com/payment/s11c3419854ab'>*/}
				{/*		<button className='mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded transition cursor-pointer'>*/}
				{/*			Choose*/}
				{/*		</button>*/}
				{/*	</a>*/}
				{/*</div>*/}

				{/* Premium option with "hot" style */}
				{/*<div className='relative p-8 rounded-lg shadow-md bg-gradient-to-br from-orange-500 to-red-600 text-white transform hover:scale-105 transition duration-300'>*/}
				{/*	/!* Decorative element "Recommended" *!/*/}
				{/*	<div className='absolute top-0 right-0 bg-yellow-400 text-red-800 font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg transform rotate-12 translate-x-2 -translate-y-2'>*/}
				{/*		Recommended*/}
				{/*	</div>*/}
				{/*	<h3 className='text-2xl font-semibold mb-4'>Premium</h3>*/}
				{/*	<p className='text-4xl font-bold mb-4'>60 USD</p>*/}
				{/*	<ul className='space-y-2'>*/}
				{/*		<li className='flex items-center'>*/}
				{/*			<svg*/}
				{/*				className='w-5 h-5 mr-2 text-yellow-300 flex-shrink-0'*/}
				{/*				fill='none'*/}
				{/*				stroke='currentColor'*/}
				{/*				viewBox='0 0 24 24'*/}
				{/*				xmlns='http://www.w3.org/2000/svg'*/}
				{/*			>*/}
				{/*				<path*/}
				{/*					strokeLinecap='round'*/}
				{/*					strokeLinejoin='round'*/}
				{/*					strokeWidth='2'*/}
				{/*					d='M5 13l4 4L19 7'*/}
				{/*				></path>*/}
				{/*			</svg>*/}
				{/*			Feedback available for 7 days after purchase*/}
				{/*		</li>*/}
				{/*		<li className='flex items-center'>*/}
				{/*			<svg*/}
				{/*				className='w-5 h-5 mr-2 text-yellow-300 flex-shrink-0'*/}
				{/*				fill='none'*/}
				{/*				stroke='currentColor'*/}
				{/*				viewBox='0 0 24 24'*/}
				{/*				xmlns='http://www.w3.org/2000/svg'*/}
				{/*			>*/}
				{/*				<path*/}
				{/*					strokeLinecap='round'*/}
				{/*					strokeLinejoin='round'*/}
				{/*					strokeWidth='2'*/}
				{/*					d='M5 13l4 4L19 7'*/}
				{/*				></path>*/}
				{/*			</svg>*/}
				{/*			Priority support*/}
				{/*		</li>*/}
				{/*		<li className='flex items-center'>*/}
				{/*			<svg*/}
				{/*				className='w-5 h-5 mr-2 text-yellow-300 flex-shrink-0'*/}
				{/*				fill='none'*/}
				{/*				stroke='currentColor'*/}
				{/*				viewBox='0 0 24 24'*/}
				{/*				xmlns='http://www.w3.org/2000/svg'*/}
				{/*			>*/}
				{/*				<path*/}
				{/*					strokeLinecap='round'*/}
				{/*					strokeLinejoin='round'*/}
				{/*					strokeWidth='2'*/}
				{/*					d='M5 13l4 4L19 7'*/}
				{/*				></path>*/}
				{/*			</svg>*/}
				{/*			Certificate of completion*/}
				{/*		</li>*/}
				{/*	</ul>*/}
				{/*	<a href='https://secure.wayforpay.com/payment/s58b007d1cb05'>*/}
				{/*		<button className='mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold py-2 px-4 rounded transition shadow-lg hover:shadow-xl cursor-pointer'>*/}
				{/*			Choose*/}
				{/*		</button>*/}
				{/*	</a>*/}
				{/*</div>*/}
        
        <div className='flex-1 relative p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white transform hover:scale-105 transition duration-300'>
          {/* Верхний стикер "Топ предложение" */}
          <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-red-800 font-bold px-8 py-2 rounded-full text-sm animate-bounce whitespace-nowrap'>
            🔥 TOP
          </div>
          
          {/* Стикер скидки */}
          <div className='absolute top-4 right-4 bg-black  text-red-600 font-bold px-3 py-1 rounded-full text-sm'>
            -50%
          </div>
          
          <h3 className='text-2xl font-semibold mb-4'>Premium</h3>
          
          {/* Старая цена */}
          <div className='mb-2'>
            <span className='text-yellow-200 line-through text-lg'>40 USD</span>
          </div>
          
          {/* Новая цена */}
          <p className='text-5xl font-bold mb-4 text-yellow-300'>20 USD</p>
          
          {/* Экономия */}
          <div className='bg-black bg-opacity-30 rounded-lg p-3 mb-4'>
            <p className='text-yellow-300 font-semibold'>✅ You save: 20 USD</p>
          </div>
          
          {/*<ul className='space-y-3'>*/}
          {/*  <li className='flex items-center'>*/}
          {/*    <svg className='w-5 h-5 mr-3 text-yellow-300 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>*/}
          {/*      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>*/}
          {/*    </svg>*/}
          {/*    Зі зворотнім зв&#39;язком протягом двух тижнів*/}
          {/*  </li>*/}
          {/*</ul>*/}
          
          <a href='https://secure.wayforpay.com/payment/s11c3419854ab'>
            <button className='flex items-center gap-2 mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-red-800 text-nowrap font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl cursor-pointer hover:scale-105 transform'>
              ⭐ Get the maximum benefit
            </button>
          </a>
        </div>
			</div>

			<p className='text-center mt-8'>
				Lifetime access to materials in the channel
			</p>
		</div>
	)
}
