import { useState } from "react";
import { content } from "../Content";

const Skills = () => {
	const { skills } = content;
	const [activeCategory, setActiveCategory] = useState(0);

	return (
		<section className="bg-dark_primary py-16" id="skills">
			{/* content */}
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="title" data-aos="fade-down">
					{skills.title}
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					{skills.subtitle}
				</h4>
				<br />

				{/* Category Tabs */}
				<div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center mb-10" data-aos="fade-down">
					{skills.categories.map((cat, i) => (
						<button
							key={i}
							onClick={() => setActiveCategory(i)}
							className={`px-3 py-1.5 sm:px-5 sm:py-2 rounded-full font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 border
								${
									activeCategory === i
										? "bg-neon_cyan text-dark_primary border-neon_cyan shadow-neon scale-105"
										: "bg-charcoal_card text-slate-400 border-charcoal_border hover:text-white hover:border-slate-600"
								}
							`}
						>
							{cat.name}
						</button>
					))}
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
					{skills.categories[activeCategory].skills.map((skill, i) => (
						<div
							key={i}
							data-aos="fade-up"
							data-aos-delay={i * 50}
							className="bg-charcoal_card/50 sm:cursor-pointer relative group flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 rounded-xl border border-charcoal_border hover:border-neon_cyan/30 hover:shadow-[0_0_15px_rgba(0,241,254,0.12)] transition-all duration-300 text-center sm:text-left"
						>
							<div className="w-12 h-12 flex items-center justify-center bg-dark_primary/80 rounded-lg p-2 border border-charcoal_border group-hover:border-neon_cyan/20 duration-300 shrink-0">
								<img
									src={skill.logo}
									alt={skill.name}
									className="max-w-full max-h-full object-contain group-hover:scale-110 duration-300"
								/>
							</div>
							<div>
								<h6 className="text-white font-bold font-Poppins text-xs sm:text-sm leading-snug">
									{skill.name}
								</h6>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
