import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
	const { Testimonials } = content;
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<section className="bg-bg_light_primary py-16">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="title" data-aos="fade-down">
					{Testimonials.title}
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					{Testimonials.subtitle}
				</h4>
				<br />
				<Swiper
					direction={"vertical"}
					pagination={{
						clickable: true
					}}
					data-aos="fade-up"
					loop={true}
					spaceBetween={20}
					slidesPerView={1.7}
					onSlideChange={(e) => {
						setActiveIndex(e.realIndex);
					}}
					modules={[Pagination]}
					className="w-full md:h-80 h-[32rem] max-w-3xl"
				>
					{Testimonials.testimonials_content.map((content, i) => (
						<SwiperSlide key={i}>
							<div
								className={`duration-500 bg-charcoal_card border p-6 h-full rounded-2xl flex items-center gap-6 md:flex-row flex-col
                ${activeIndex === i ? "border-neon_cyan shadow-[0_0_15px_rgba(0,243,255,0.1)] scale-100 opacity-100" : "border-charcoal_border scale-95 opacity-55 blur-[1px]"}`}
							>
								<div className="w-14 h-14 rounded-full border border-charcoal_border overflow-hidden shrink-0">
									<img src={content.img} alt="..." className="w-full h-full object-cover" />
								</div>
								<div>
									<p className="sm:text-sm text-xs leading-relaxed italic text-slate-300">
										{content.review}
									</p>
									<h6 className="text-neon_cyan font-semibold font-Poppins text-sm mt-3">
										{content.name}
									</h6>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
