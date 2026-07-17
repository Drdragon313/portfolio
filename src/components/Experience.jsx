import { content } from "../Content";

const Experience = () => {
	const { experience } = content;

	return (
		<section className="bg-bg_light_primary py-16" id="experience">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="title" data-aos="fade-down">
					{experience.title}
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					{experience.subtitle}
				</h4>
				<br />

				<div className="grid md:grid-cols-2 gap-10 mt-8">
					{/* Work Experience */}
					<div data-aos="fade-right">
						<h3 className="text-xl font-bold font-Poppins text-white mb-6 flex items-center gap-2 border-b border-charcoal_border pb-2">
							<span className="w-2.5 h-2.5 bg-neon_cyan rounded-full inline-block animate-pulse shadow-neon"></span>
							Work Experience
						</h3>

						<div className="relative border-l border-charcoal_border ml-3 flex flex-col gap-8">
							{experience.work.map((item, i) => (
								<div key={i} className="relative pl-6 sm:pl-8 group">
									{/* Timeline marker */}
									<div className="absolute -left-1.5 top-1.5 w-3.5 h-3.5 bg-dark_primary border-2 border-neon_cyan rounded-full group-hover:bg-neon_cyan group-hover:scale-125 transition-all duration-300 shadow-neon"></div>

									<div className="bg-charcoal_card border border-charcoal_border rounded-xl p-4 sm:p-5 hover:border-neon_cyan/40 duration-300 transition-all">
										<span className="text-xs font-mono text-neon_cyan bg-neon_cyan/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
											{item.duration}
										</span>
										<h4 className="text-base sm:text-lg font-bold font-Poppins mt-3 text-white">
											{item.role}
										</h4>
										<h5 className="text-xs sm:text-sm font-semibold font-Poppins text-slate-300 mb-4">
											{item.company} <span className="text-slate-500 font-normal">| {item.location}</span>
										</h5>
										<ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm space-y-2 text-slate-400">
											{item.points.map((pt, index) => (
												<li key={index} className="leading-relaxed">
													{pt}
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Education */}
					<div data-aos="fade-left">
						<h3 className="text-xl font-bold font-Poppins text-white mb-6 flex items-center gap-2 border-b border-charcoal_border pb-2">
							<span className="w-2.5 h-2.5 bg-neon_purple rounded-full inline-block animate-pulse shadow-[0_0_10px_rgba(176,38,255,0.6)]"></span>
							Education
						</h3>

						<div className="relative border-l border-charcoal_border ml-3 flex flex-col gap-8">
							{experience.education.map((item, i) => (
								<div key={i} className="relative pl-6 sm:pl-8 group">
									{/* Timeline marker */}
									<div className="absolute -left-1.5 top-1.5 w-3.5 h-3.5 bg-dark_primary border-2 border-neon_purple rounded-full group-hover:bg-neon_purple group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(176,38,255,0.6)]"></div>

									<div className="bg-charcoal_card border border-charcoal_border rounded-xl p-4 sm:p-5 hover:border-neon_purple/40 duration-300 transition-all">
										<span className="text-xs font-mono text-neon_purple bg-neon_purple/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
											{item.duration}
										</span>
										<h4 className="text-base sm:text-lg font-bold font-Poppins mt-3 text-white">
											{item.degree}
										</h4>
										<h5 className="text-xs sm:text-sm font-semibold font-Poppins text-slate-300 mb-2">
											{item.institution}
										</h5>
										<p className="text-xs sm:text-sm leading-relaxed text-slate-400">
											{item.details}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
