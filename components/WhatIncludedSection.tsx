export default function WhatIncludedSection() {
	return (
		<section className='py-16 w-full bg-[url("../assets/bg-container.jpg")] bg-no-repeat bg-cover text-white relative'>
			<div className='absolute inset-0 bg-black/60 z-0' />
			<div className='relative z-10 container mx-auto px-6 max-w-[1024px]'>
				<h2 className='text-3xl font-bold mb-8 text-center'>
					What is included in the marathon?
				</h2>
				<ul className='mx-auto space-y-6 text-lg'>
					<li>
						🎤 In-depth analysis of the &quot;drive&quot; technique — you will
						understand how this extreme technique works, what makes it unique,
						and how to master it correctly without harming your voice.
					</li>
					<li>
						🛠 Step-by-step exercises for gradual development of extreme sound,
						strengthening the vocal apparatus, and achieving full control over
						the technique.
					</li>
					<li>
						🎶 Practice on stylistic rock exercises and fragments from famous
						songs — we will learn how to incorporate drive into singing so that
						it sounds natural and musical.
					</li>
					{/* <li>
						📚 PDF summaries for each lesson — key points, technical nuances,
						and helpful tips in a convenient format.
					</li> */}
					<li>
						📩 Personalized feedback from me — I will help you hear your
						mistakes, adjust your technique, and guide you towards achieving the
						desired sound.
					</li>
					<li>
						🏆 Certificate of marathon completion — a confirmation of your new
						skills that you can add to your portfolio or use as proof of
						professional development.
					</li>
				</ul>
			</div>
		</section>
	)
}
