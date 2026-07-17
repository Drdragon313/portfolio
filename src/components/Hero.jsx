import { content } from "../Content";

const Hero = () => {
	const { hero } = content;

	return (
		<section id="home" className="relative min-h-screen flex items-center bg-dark_primary overflow-hidden pt-20">
			{/* Motion Graphics: Background Grid & Glowing Mesh */}
			<div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none z-0"></div>
			
			{/* Motion Graphics: Floating Neon Orbs */}
			<div className="neon-blob bg-neon_cyan w-80 h-80 -top-20 -left-20 animate-glow-pulse"></div>
			<div className="neon-blob bg-neon_purple w-96 h-96 bottom-10 right-[-10%] animate-glow-pulse" style={{ animationDelay: "2s" }}></div>

			<div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10 py-12">
				{/* Text Details & Stats Column */}
				<div className="md:col-span-7 flex flex-col gap-6" data-aos="fade-right">
					<span className="text-neon_cyan font-mono text-xs md:text-sm tracking-widest uppercase bg-neon_cyan/10 px-3 py-1.5 rounded-full w-fit">
						Expert Web Architect
					</span>
					
					<h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-Poppins leading-tight tracking-tight text-white">
						Architecting the <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon_cyan to-neon_purple text-glow">
							Digital Frontier
						</span>
					</h1>

					<p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
						Hi, I'm <strong className="text-white font-semibold">{hero.firstName} {hero.LastName}</strong>. I specialize in building high-performance, enterprise-grade applications, bridging the gap between architectural precision and premium user experiences.
					</p>

					{/* Action Button */}
					<div className="mt-2">
						<button className="btn font-mono text-sm tracking-wider">
							<a
								href="https://www.linkedin.com/in/muhammad-ahmad-492517170/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								{hero.btnText}
							</a>
						</button>
					</div>

					{/* Responsive Statistics Grid (Stitch Spec) */}
					<div className="flex flex-row flex-wrap gap-8 md:gap-12 mt-6 pt-6 border-t border-charcoal_border/40">
						{hero.hero_content.map((content, i) => (
							<div key={i} className="flex flex-col gap-1.5 min-w-[120px]">
								<h3 className="text-4xl md:text-5xl font-black font-Poppins text-white tracking-tight flex items-baseline gap-1">
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon_cyan to-neon_purple text-glow">
										{content.count}
									</span>
								</h3>
								<p className="text-slate-400 font-mono text-[10px] md:text-xs uppercase tracking-widest leading-relaxed">
									{content.text}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Profile Picture Box (Glowing glass-card) */}
				<div className="md:col-span-5 relative group w-full max-w-md mx-auto md:mx-0" data-aos="fade-left">
					{/* Glowing frame overlay */}
					<div className="absolute -inset-1 bg-gradient-to-r from-neon_cyan to-neon_purple rounded-[2rem] opacity-30 group-hover:opacity-75 blur-lg transition duration-700"></div>
					
					<div className="relative rounded-[2rem] overflow-hidden glass-card aspect-square border border-charcoal_border/80 flex items-center justify-center p-3">
						<img
							src={hero.image}
							alt={`${hero.firstName} Profile`}
							className="w-full h-full object-cover rounded-[1.8rem] filter grayscale group-hover:grayscale-0 group-hover:scale-105 duration-700 transition-all shadow-md"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
