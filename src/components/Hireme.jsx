import { content } from "../Content";

const Hireme = () => {
	const { Hireme } = content;

	return (
		<section className="bg-dark_primary py-16">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="title" data-aos="fade-down">
					{Hireme.title}
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					{Hireme.subtitle}
				</h4>
				<br />
				<div className="flex items-center justify-center md:flex-row flex-col-reverse">
					<div
						data-aos="fade-left"
						className="border border-charcoal_border w-full max-w-sm bg-charcoal_card/50 backdrop-blur-sm
           p-8 mb-2 shadow-xl rounded-2xl rounded-br-[6rem] sm:min-w-[40rem]"
					>
						<p className="leading-relaxed text-slate-300 text-sm md:text-base">{Hireme.para}</p>
						<br />
						<button className="btn">
							<a
								href="https://www.linkedin.com/in/muhammad-ahmad-492517170/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{Hireme.btnText}
							</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hireme;
