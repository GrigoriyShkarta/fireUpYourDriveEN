'use client'

import { useEffect, useState } from 'react'

export default function Button() {
	const [isPriceVisible, setIsPriceVisible] = useState(false)

	const scrollToPrice = () => {
		const priceSection = document.getElementById('price')
		if (priceSection) {
			priceSection.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			const priceSection = document.getElementById('price')
			if (!priceSection) return

			const rect = priceSection.getBoundingClientRect()
			// Проверяем, виден ли раздел Price (верхняя часть в области видимости)
			const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
			setIsPriceVisible(isVisible)
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Проверить сразу при загрузке

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Не показывать кнопку, если Price уже на экране
	if (isPriceVisible) return null

	return (
		<button
			onClick={scrollToPrice}
			className='inline-block mt-4 bg-[#ffb52c] hover:bg-orange-500 transition rounded-xl px-6 py-3 text-black text-lg font-semibold fixed bottom-2 w-[300px] text-center z-[100]'
		>
			BUY NOW
		</button>
	)
}
