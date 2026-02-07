import { Link } from "react-router-dom";
import { FaPalette, FaMagic, FaMusic } from "react-icons/fa";

const Home = () => {
	const features = [
		{
			icon: <FaPalette className="text-blue-600 text-2xl" />,
			title: "Curated Themes",
			desc: "Choose from festive birthday designs or romantic Valentine's aesthetics to match the mood.",
		},
		{
			icon: <FaMagic className="text-blue-600 text-2xl" />,
			title: "AI-Powered Content",
			desc: "Stuck for words? Use Gemini AI to generate heartwarming messages tailored for your loved one.",
		},
		{
			icon: <FaMusic className="text-blue-600 text-2xl" />,
			title: "Set the Tone",
			desc: "Add a celebratory track or a romantic melody to play the moment they open their link.",
		},
	];

	const steps = [
		{
			num: 1,
			title: "Pick an Occasion",
			desc: "Select a template for a Birthday or Valentine's Day to start your digital greeting.",
		},
		{
			num: 2,
			title: "Pour Your Heart Out",
			desc: "Write your heartfelt message, use AI to craft the perfect words, and customize the styles.",
		},
		{
			num: 3,
			title: "Send the Surprise",
			desc: "Copy the unique link and text it to your special someone to brighten their day.",
		},
	];

	return (
		<div>
			<section className="max-w-7xl mx-auto w-full">
				<h1 className="text-[#0084FF] font-black text-[clamp(3rem,15vw,6rem)] sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight uppercase select-none">
					Moments
				</h1>

				<div className="flex flex-col-reverse sm:grid grid-cols-6 md:grid-cols-10 gap-4 sm:gap-8">
					<div className="pt-2 md:pt-4 col-span-3 md:col-span-4">
						<p className="text-stone-800 text-sm md:text-base max-w-xs leading-relaxed font-medium">
							From birthdays to Valentine's, Wishly helps you turn celebrations
							into simple links you can share with anyone.
						</p>
					</div>
					<div className="pt-2 md:pt-4 col-span-3 md:col-span-6">
						<h1 className="text-[#0084FF] font-black text-[clamp(3rem,15vw,6rem)] sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight uppercase select-none">
							Matter
						</h1>
					</div>
				</div>
			</section>

			<div className="flex justify-center my-10">
				<img src="/blue-circ.svg" alt="Decoration" className="animate-pulse" />
			</div>

			{/* Features */}
			<section className="max-w-7xl mx-auto w-full mb-24">
				<h2 className="text-3xl font-bold mb-8 tracking-tight text-center">
					Features
				</h2>

				<div className="grid md:grid-cols-3 gap-6">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-2xl border border-stone-200 text-center hover:border-blue-400 transition-colors duration-300"
						>
							<div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
								{feature.icon}
							</div>
							<h3 className="text-xl font-bold mb-3">{feature.title}</h3>
							<p className="text-stone-500 leading-relaxed text-sm">
								{feature.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* How It Works */}
			<section className="max-w-7xl mx-auto w-full mb-24">
				<div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 hover:border-blue-400 transition-colors duration-300">
					<h2 className="text-3xl font-bold mb-8 tracking-tight text-center">
						How It Works
					</h2>

					<div className="grid md:grid-cols-3 gap-10">
						{steps.map((step, index) => (
							<div key={index} className="text-center relative">
								<div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-5 font-bold text-lg shadow-sm">
									{step.num}
								</div>
								<h3 className="font-bold text-lg mb-2">{step.title}</h3>
								<p className="text-stone-500 text-sm leading-relaxed">
									{step.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="relative max-w-7xl mx-auto w-full py-20 text-center mb-24 overflow-hidden rounded-3xl">
				<img
					src="/blue-rect.svg"
					alt="Background"
					className="absolute inset-0 w-full h-full object-cover -z-10"
				/>
				<h2 className="text-3xl font-bold mb-8 tracking-tight">
					Ready to Create a Surprise?
				</h2>
				<Link to="/sign-up" className="inline-block">
					<button className="button-container rounded-full font-bold">
						<span className="circle1"></span>
						<span className="circle2"></span>
						<span className="circle3"></span>
						<span className="circle4"></span>
						<span className="circle5"></span>
						<span className="text">Try Now</span>
					</button>
				</Link>
			</section>
		</div>
	);
};

export default Home;
