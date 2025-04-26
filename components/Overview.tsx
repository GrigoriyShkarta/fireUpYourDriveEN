'use client'

import { useState } from 'react'
import Image from 'next/image'

import lesson1 from '@/assets/lesson1.jpg'
import lesson2 from '@/assets/lesson2.jpg'
import lesson3 from '@/assets/lesson3.jpg'
import lesson4 from '@/assets/lesson4.jpg'
import lesson5 from '@/assets/lesson5.jpg'

export default function Overview() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='bg-[url("../assets/faq_fire.jpg")] bg-cover py-12 w-full'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8 text-center'>CONTENT</h2>
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
								className={`transition-all duration-300 ease-in-out overflow-hidden  ${
									openIndex === index
										? 'max-h-96 opacity-100 md:max-h-full'
										: 'max-h-0 opacity-0'
								}`}
							>
								<div className='px-4 pb-4 text-gray-200 bg-black/70 flex flex-col gap-2 p-2'>
									<Image src={item.img} alt={'lesson'} />
									<p>{item.answer}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

const faqData = [
	{
		question: '🎥 Lesson 1 "Supraglottic Structures"',
		img: lesson1,
		answer:
			'A practical video with an exercise that will help you feel and properly engage the supraglottic structures. Perfect for developing control and awareness of your sound!',
	},
	{
		question: '🎯 Lesson 2 "Finding Drive"',
		img: lesson2,
		answer:
			'You’ll discover the powerful vocal technique "drive" — learn how this technique is done and get seven effective ways to find it.',
	},
	{
		question: '🔥 Lesson 3 "Anchoring Drive"',
		img: lesson3,
		answer:
			'You’ll learn how to apply the technique to vowels, consonants, and syllables. Lots of practice for deep mastery.',
	},
	{
		question: '🎼 Lesson 4 "Stabilizing Drive"',
		img: lesson4,
		answer:
			'You’ll learn to control drive within vocal phrases in both Ukrainian and English using stylized rock exercises. Your technique will become confident, stable, and musical.',
	},
	{
		question: '🎤 Lesson 5 "Practicing Drive in Songs"',
		img: lesson5,
		answer:
			'We move to the main goal — applying the drive technique in songs. You’ll feel your vocals come alive with new colors!',
	},
]
