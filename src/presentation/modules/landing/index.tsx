import Image from 'next/image';
import { Typography } from "@/presentation/ui/atoms/typography";
import { GearIcon } from "@radix-ui/react-icons";
import MobileIcon from "@/presentation/assets/svg/mobile-icon.svg";
import Mobile2Icon from "@/presentation/assets/svg/mobile-2-icon.svg";
import MapIcon from "@/presentation/assets/svg/map-icon.svg";
import { Button } from '@/presentation/ui/atoms/button';

export default function LandingModule() {
  return (
		<section className="flex w-full h-auto min-h-[1050px] justify-center items-start flex-wrap content-start bg-background">
			{/* Background Navbar */}
			<div className="relative flex w-full h-[700px] border-b border-neutral-200">
				<Image
					src={MapIcon}
					alt=""
					fill
					style={{ objectFit: "cover", opacity: 0.5 }}
					className='blur'
    		/>
				<div className="absolute left-10 bottom-20 flex w-full justify-start">
					<div className="flex w-full justify-start flex-wrap">
						<div className='flex w-1/2'>
							<Typography component="h1" variant={'h1'} className="text-card-foreground uppercase">
								Principales carácteristicas
							</Typography>
						</div>
						<div className='flex w-full mt-4'>
							<Typography component="p" variant={'muted'} className="uppercase">
								Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum 
							</Typography>
						</div>
						<div className='flex w-2/4 h-40 rounded-lg mt-8 p-6 bg-card-foreground'>
							<div className="grid grid-cols-5 grid-rows-5 gap-4 h-full">
								<div className="col-span-4 h-full">
									<Typography component="p" variant={'muted'} className="uppercase">
										Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum 
									</Typography>
								</div>
								<div className="row-span-5 col-start-5 h-full flex items-end justify-end">
									<Button variant={'secondary'}>
										Empezar
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Block Features */}
			<div className="flex w-full h-[750px] bg-neutral-100 p-10">
				<div className="relative w-full h-[600px] bg-primary border border-neutral-200 rounded-[16px] flex flex-col flex-nowrap px-6 pt-6">
					<div className="flex justify-center items-center h-60 flex-wrap mt-8">
						<div className="flex w-full justify-center">
							<Typography component="h1" variant={'h1'} className="text-primary-foreground uppercase">
								Principales carácteristicas
							</Typography>
						</div>
						<div className="flex w-2/5 justify-center">
							<Typography component="p" variant={'muted'} className="text-lg text-center">
								Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum 
							</Typography>
						</div>
					</div>
					<div className="flex justify-center items-center h-full">
						<div className="absolute -bottom-20 grid grid-cols-3 grid-rows-1 gap-12 flex w-full px-8 h-[400px]">
							<div className="bg-card flex rounded-[16px] p-6 shadow-md"></div>
							<div className="bg-card flex rounded-[16px] p-6 shadow-md"></div>
							<div className="bg-card flex rounded-[16px] p-6 shadow-md"></div>
						</div>
					</div>
				</div>
			</div>
			{/* Block Summary description */}
			<div className="flex w-full h-[700px] bg-neutral-100 p-10">
				<div className="flex w-full grid grid-cols-2 grid-rows-1 gap-8 px-2">
					<div className="w-full flex-wrap py-8 px-8">
						<div className="flex h-auto w-4/5 py-8">
							<Typography component="h1" variant={'h1'} className="text-secondary-foreground dark:text-card capitalize text-left">
								Let`s start Sending your package
							</Typography>
						</div>
						<div className="flex h-auto w-4/5">
							<Typography component="p" variant={'muted'} className="text-secondary-foreground dark:text-card text-left text-md leading-7">
								Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum ffadsf Lorem ipsum Lorem ipsum
							</Typography>
						</div>
						<div className="flex h-auto w-full mt-10 flex-wrap">
							{[...new Array(3)].map((_, key) => (
								<div key={key} className="flex h-auto w-full py-4 flex-nowrap">
									<div className='flex pr-4 w-auto h-20 items-center'>
										<div
											className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-background text-lg font-semibold text-secondary-foreground md:h-8 md:w-8 md:text-base"
										>
											<GearIcon className="h-4 w-4 transition-all group-hover:scale-110" />
											{/* <span className="sr-only">Acme Inc</span> */}
										</div>
									</div>
									<div className='flex px4 w-full flex-wrap'>
										<div className='w-full flex items-end'>
											<Typography component="h3" variant={'h3'} className="text-foreground dark:text-card capitalize text-left">
												Let`s start Sending your package
											</Typography>
										</div>
										<div className='w-full flex items-center'>
											<Typography component="p" variant={'muted'} className="text-foreground dark:text-card text-left text-md leading-7">
												Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum 
											</Typography>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="flex items-end justify-center">
						<div className='bg-card w-3/5 flex h-80 rounded-[16px] relative'>
							<Image
								priority
								src={MobileIcon}
								className='absolute top-10 -bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
								alt=""
								height={550}
							/>
						</div>
					</div>
				</div>

			</div>
			{/* Block Sumary description */}
			<div className="flex w-full h-[800px] bg-neutral-100 p-10 items-center">
				<div className='flex w-full border h-80 bg-background rounded-[16px] p-8'>
					<div className="flex w-full grid grid-cols-2 grid-rows-1 gap-8 px-2">
						<div className='h-full w-full flex relative'>
							<Image
									priority
									src={Mobile2Icon}
									className='absolute -rotate-6 top-10 left-40 transform -translate-x-1/2 -translate-y-1/2'
									alt=""
									height={550}
								/>
								<Image
									priority
									src={Mobile2Icon}
									className='absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
									alt=""
									height={550}
								/>
						</div>
						<div className='h-full w-full flex'>
							<div className="grid grid-cols-1 grid-rows-3 py-8 gap-4 w-full">
									<div className="flex w-1/2 justify-start items-center">
										<Typography component="h3" variant={'h3'} className="text-foreground capitalize text-left">
											Let`s start Sending your package
										</Typography>
									</div>
									<div className="flex w-full items-center">
										<Typography component="p" variant={'muted'} className="text-foreground text-left text-sm">
											Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem
										</Typography>
									</div>
									<div className="flex gap-4 justify-start items-center">
										<Button size={'lg'} variant={'secondary'}>Play store</Button>
										<Button size={'lg'} variant={'secondary'}>App store</Button>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
