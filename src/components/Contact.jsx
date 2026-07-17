import { createElement } from "react";
import { content } from "../Content";

const Contact = () => {
	const { Contact } = content;

	return (
		<section className="bg-dark_primary py-16 border-t border-charcoal_border/40" id="contact">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="title" data-aos="fade-down">
					{Contact.title}
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					{Contact.subtitle}
				</h4>
				<br />
				
				<div className="mt-8 flex justify-center w-full">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
						{Contact.social_media.map((item, i) => (
							<a
								key={i}
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								data-aos="fade-up"
								data-aos-delay={i * 100}
								className="flex flex-col items-center gap-4 p-6 bg-charcoal_card/50 backdrop-blur-sm border border-charcoal_border rounded-2xl hover:border-neon_cyan/40 hover:shadow-[0_0_15px_rgba(0,243,255,0.12)] transition-all duration-300 group text-center"
							>
								<div className="w-12 h-12 rounded-xl bg-dark_primary/80 border border-charcoal_border flex items-center justify-center text-slate-400 group-hover:text-neon_cyan group-hover:border-neon_cyan/30 duration-300 text-2xl shadow-sm">
									{createElement(item.icon)}
								</div>
								<div className="flex flex-col items-center justify-center">
									<span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1">
										{item.text === "LinkedIn" || item.text === "GitHub" ? "Social" : "Direct"}
									</span>
									<span className="font-Poppins font-semibold text-slate-300 group-hover:text-white text-xs md:text-sm break-all leading-normal">
										{item.text}
									</span>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
