import { content } from "../Content";

const Services = () => {
	const { services } = content;
	return (
		<section id="services" className="bg-bg_light_primary py-16">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="title" data-aos="fade-down">
					{services.title}
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					{services.subtitle}
				</h4>
				<br />
				<div className="grid md:grid-cols-3 gap-6">
					{services.service_content.map((content, i) => (
						<div
							key={i}
							data-aos="fade-up"
							data-aos-delay={i * 200}
							className="duration-300 cursor-pointer border border-charcoal_border rounded-2xl text-center bg-charcoal_card/60 backdrop-blur-sm p-8 hover:-translate-y-2 hover:border-neon_cyan/40 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] flex flex-col items-center"
						>
							<div className="w-16 h-16 rounded-2xl bg-dark_primary/80 border border-charcoal_border flex items-center justify-center p-3.5 mb-6">
								<img src={content.logo} alt="..." className="w-full h-full object-contain" />
							</div>
							<h6 className="mb-4 text-white font-bold font-Poppins text-lg">{content.title}</h6>
							<p className="leading-relaxed text-sm text-slate-400">{content.para}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
