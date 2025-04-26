import { FC } from 'react'
import Head from 'next/head'
import ForWhomSection from '@/components/ForWhomSection '
import HeroSection from '@/components/HeroSection'
import PathSection from '@/components/PathSection'
import WhatIncludedSection from '@/components/WhatIncludedSection'
import ExamplesSection from '@/components/ExamplesSection'
import AboutAuthor from '@/components/AboutAuthor'
import Overview from '@/components/Overview'
import StudentCase from '@/components/StudentCase'
// import Carousel from '@/components/Carousel'
import Price from '@/components/Price'
import FAQ from '@/components/FAQ'
import Button from '@/components/Button'

const Home: FC = () => {
	return (
		<>
			<Head>
				<title>Fire Up Your Drive — Vocal Marathon</title>
				<meta
					name='description'
					content='Master drive — a powerful extreme vocal technique that will make your voice rock-hard, hoarse, and confident!'
				/>
			</Head>
			<main className='flex flex-col items-center w-full overflow-x-hidden tracking-wider'>
				<HeroSection />
				<ExamplesSection />
				<ForWhomSection />
				<WhatIncludedSection />
				<PathSection />
				<Overview />
				<StudentCase />
				{/* <Carousel /> */}
				<AboutAuthor />
				<Price />
				<FAQ />

				<Button />
			</main>
		</>
	)
}

export default Home
