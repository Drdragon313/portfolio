import { useState } from "react";
import { content } from "../Content";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
	const { Projects } = content;
	const [activeCategory, setActiveCategory] = useState("All");

	// Unique categories list
	const categories = ["All", "Healthcare", "SaaS / FinTech", "Tools / NPM"];

	// Filtered projects list
	const filteredProjects = activeCategory === "All"
		? Projects.project_content
		: Projects.project_content.filter(p => p.category === activeCategory);

	return (
		<section className="bg-dark_primary py-16" id="projects">
			<div className="max-w-6xl mx-auto px-6">
				<div>
					<h2 className="title" data-aos="fade-down">
						{Projects.title}
					</h2>
					<h4 className="subtitle" data-aos="fade-down">
						{Projects.subtitle}
					</h4>
					<br />
				</div>

				{/* Filter Tabs */}
				<div className="flex flex-wrap gap-2 mb-10 justify-start" data-aos="fade-down">
					{categories.map((cat, idx) => (
						<button
							key={idx}
							onClick={() => setActiveCategory(cat)}
							className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-mono text-[10px] sm:text-xs font-semibold tracking-wider transition-all duration-300 border
								${
									activeCategory === cat
										? "bg-neon_cyan text-dark_primary border-neon_cyan shadow-neon scale-105"
										: "bg-charcoal_card text-slate-400 border-charcoal_border hover:text-white hover:border-slate-600"
								}
							`}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map((content, i) => (
						<div
							key={i}
							data-aos="fade-up"
							data-aos-delay={i * 50}
							className="bg-charcoal_card/50 backdrop-blur-sm border border-charcoal_border rounded-2xl p-6 duration-300 transition-all hover:border-neon_cyan/30 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.12)] flex flex-col justify-between"
						>
							<div>
								{/* Category Tag */}
								<span className="text-[10px] font-mono font-bold tracking-widest text-neon_purple bg-neon_purple/10 px-2 py-0.5 rounded uppercase">
									{content.category}
								</span>

								<h4 className="text-xl font-bold font-Poppins mt-3 mb-2 text-white">
									{content.title}
								</h4>
								
								<p className="text-sm text-slate-400 font-normal leading-relaxed mb-4">
									{content.descriptions}
								</p>
							</div>

							<div>
								{/* Tech Tags */}
								<div className="flex flex-wrap gap-1.5 mb-5">
									{content.tags?.map((tag, tIdx) => (
										<span key={tIdx} className="text-[10px] font-Poppins font-medium bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded">
											{tag}
										</span>
									))}
								</div>

								{/* Action Link */}
								<div className="border-t border-charcoal_border/60 pt-4 flex items-center justify-between">
									{content.link ? (
										<a
											href={content.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neon_cyan hover:underline transition-all group"
										>
											Visit Live Link
											<FiExternalLink className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" size={13} />
										</a>
									) : (
										<span className="text-xs font-mono font-bold text-slate-500">
											Private Repository
										</span>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
