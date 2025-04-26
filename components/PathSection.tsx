export default function PathSection() {
	return (
		<section className='py-16 px-6 max-w-5xl mx-auto'>
			<h2 className='text-3xl font-bold mb-8 text-center'>
				The path of the marathon participants
			</h2>
			<div className='grid md:grid-cols-2 gap-10 text-lg'>
				<div className='relative rounded-2xl overflow-hidden shadow-[0_0_0_2px_#ffb52c]'>
					<div className='bg-[url("../assets/start.jpg")] bg-cover bg-no-repeat p-6 relative z-10'>
						<div className='absolute inset-0 bg-black/60 z-0' />
						<div className='relative z-10 text-white'>
							<h3 className='text-2xl font-semibold mb-4'>Point A:</h3>
							<ul className='space-y-4'>
								<li>
									– They want to add drive, but don&apos;t know where to start.
								</li>
								<li>– Tried wheezing, but it sounds unstable.</li>
								<li>– Discomfort or rapid fatigue occurs.</li>
								<li>– They are convinced that drive is harmful.</li>
								<li>
									– They don&apos;t know how to introduce drive into a song.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='relative rounded-2xl overflow-hidden shadow-[0_0_0_2px_#ffb52c]'>
					<div className=' p-6 rounded-2xl relative bg-[url("../assets/end.jpg")] bg-cover bg-no-repeat h-full'>
						<div className='absolute inset-0 bg-black/60 z-0' />
						<div className='relative z-10'>
							<h3 className='text-2xl font-semibold mb-4'>Point B:</h3>
							<ul className='space-y-4'>
								<li>+ Understand the mechanics of the drive.</li>
								<li>+ They know how to make a clean, powerful drive.</li>
								<li>+ They know how to organically implement it into songs.</li>
								<li>+ They feel freedom in their vocals.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
