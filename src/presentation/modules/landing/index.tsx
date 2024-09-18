import { Typography } from "@/presentation/ui/atoms/typography";
import style from './index.module.css'

export default function LandingModule() {
  return (
		<section className="flex w-full h-auto min-h-[1050px] justify-center items-start mt-24 flex-wrap content-start">
			<div className='w-full bg-gradient-to-t from-purple-600 via-neutral-800 to-black'>
				<div className="flex w-full h-auto py-4 flex-wrap">
					<div className="flex w-full h-auto justify-center items-center">
						<Typography
							variant='h1'
							component='h1'
							className='lg:text-5xl text-white py-4 lg:leading-10 inline-block'
						>
							Donde los desarrolladores
						</Typography>
					</div>
					<div className="flex w-full h-auto justify-center items-center mt-6">
						<Typography
							variant='h1'
							component='h1'
							className='lg:text-7xl py-6 lg:leading-10 bg-gradient-to-r from-purple-600 via-white to-purple-600 inline-block text-transparent bg-clip-text'
						>
							sufren juntos
						</Typography>
					</div>
				</div>
				<div className="flex w-full h-auto flex-wrap mt-10 justify-center items-center">
					<div className={`${style.shadowBox} flex w-3/5 h-[450px] bg-white border rounded-tr-lg rounded-tl-lg`}>

					</div>
				</div>
			</div>
			<div className={`flex w-full h-[300px] flex-wrap justify-center items-center border-b-2 border-purple-600`}>
					
			</div>
		</section>
  );
}
