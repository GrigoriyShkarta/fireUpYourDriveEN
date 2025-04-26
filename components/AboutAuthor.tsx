import Image from 'next/image'
import author from '@/assets/author.png'

export default function AboutAuthor() {
	return (
		<div className='container mx-auto pt-16 lg:flex justify-between items-center'>
			<Image
				src={author}
				alt='YS Vocal Coach'
				className='mx-auto lg:w-[400px] lg:h-[300px]'
			/>

			<div className='p-[1rem] flex flex-col gap-6 lg:py-0'>
				<p className='text-[18px]'>
					Hi! I&apos;m Yana — a teacher of contemporary, rock, and extreme
					vocals, a singer, musician, and singer-songwriter. I have over 15
					years of experience in music and 8 years in vocal coaching. I&apos;m
					the author of educational products for vocalists and vocal coaches,
					and I also run a vocal blog where I share helpful tips and techniques.
				</p>
				<p className='text-[18px]'>
					Throughout my career, I&apos;ve taught thousands of vocal lessons,
					organized vocal marathons attended by hundreds of participants, held
					dozens of masterclasses on extreme techniques for vocalists and
					coaches, and released my own rock vocal exercise collection called
					&quot;Rock Etudes.&quot;
				</p>
				<p className='text-[18px]'>
					My goal is to help vocalists and teachers master advanced vocal
					techniques and develop their skills to the highest level.
				</p>
			</div>
		</div>
	)
}
