import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
	const { nav } = content;
	const [showMenu, setShowMenu] = useState(false);
	const [active, setActive] = useState(0);

	return (
		<div className="w-full flex justify-center">
			<div
				className="sm:cursor-pointer fixed top-10 left-2 z-[999] rounded-lg bg-charcoal_card/70 border border-charcoal_border p-2 text-white hover:text-neon_cyan hover:border-neon_cyan/50 duration-300 shadow-lg"
				onClick={() => setShowMenu(!showMenu)}
			>
				<HiMenuAlt2 size={34} />
			</div>
			<nav
				className={`fixed z-[999] flex items-center gap-2 sm:gap-5 bg-charcoal_card/85 border border-charcoal_border/80 px-3 py-2 sm:px-6 sm:py-3 backdrop-blur-md rounded-full text-slate-400 duration-300 max-w-[90%] sm:max-w-fit ${
					showMenu ? "bottom-10" : "bottom-[-100%]"
				}`}
			>
				{nav.map((item, i) => (
					<a
						key={i}
						href={item.link}
						onClick={() => setActive(i)}
						className={`text-lg sm:text-xl p-2 sm:p-2.5 rounded-full sm:cursor-pointer transition-all duration-300
     ${i === active ? "bg-neon_cyan text-dark_primary shadow-neon scale-105 sm:scale-110" : "hover:text-neon_cyan hover:scale-105"} `}
					>
						{createElement(item.icon)}
					</a>
				))}
			</nav>
		</div>
	);
};

export default Navbar;
