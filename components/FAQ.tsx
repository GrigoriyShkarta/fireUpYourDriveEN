'use client'

import { useState } from 'react'

export default function FAQ() {
	// State to track the open question
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	// Function to toggle the question state
	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='bg-[url("../assets/faq_fire.jpg")] bg-cover bg-center py-12 w-full'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8 text-center'>
					FREQUENTLY ASKED QUESTIONS
				</h2>
				<div className='space-y-4'>
					{faqData.map((item, index) => (
						<div key={index} className='rounded-lg overflow-hidden'>
							<button
								onClick={() => toggleQuestion(index)}
								className='flex justify-between items-center w-full p-4 text-left text-xl font-semibold focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50 bg-black/80 hover:bg-black/90 transition-colors duration-200 cursor-pointer'
							>
								<span className='text-white'>{item.question}</span>
								<svg
									className={`w-6 h-6 text-white transition-transform duration-200 ${
										openIndex === index ? 'transform rotate-180' : ''
									}`}
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M19 9l-7 7-7-7'
									/>
								</svg>
							</button>
							<div
								className={`transition-all duration-300 ease-in-out overflow-hidden ${
									openIndex === index
										? 'max-h-96 opacity-100'
										: 'max-h-0 opacity-0'
								}`}
							>
								<div className='px-4 py-4 text-gray-200 bg-black/70'>
									{item.answer}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

// FAQ data
const faqData = [
	{
		question: '❓ Can I participate if I am a beginner?',
		answer:
			'The marathon is designed for intermediate and advanced levels. If you are just starting out, it might be difficult to complete this marathon. I recommend first taking my basic topic marathons.',
	},
	{
		question: '❓ Is drive technique safe for the voice?',
		answer:
			'Yes, if performed correctly! I will teach you this technique without harming your voice.',
	},
	{
		question: '❓ What is included in the marathon program?',
		answer:
			"Six video lessons, presentations, and author's rock exercises. " +
			'The "Premium" plan also includes a week of feedback and a marathon completion certificate.',
	},
	{
		question: '❓ How does feedback work?',
		answer:
			'You can send your exercise or song recordings via Telegram, and I will provide personalized recommendations on technique, sound, and mistakes.',
	},
	{
		question: '❓ Do I need special equipment to participate?',
		answer:
			'Any device with internet access and video recording capability (even a smartphone) is enough.',
	},
	{
		question: '❓ Can I get a certificate?',
		answer:
			'Yes, if you choose the "Premium" plan! After successfully completing the marathon, you will receive a certificate confirming your new skills and knowledge.',
	},
]
