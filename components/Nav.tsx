'use client';

import { useState } from 'react';
import Link from 'next/link';
import navLinks from '../data/nav.json';

export function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const renderHamburger = () => {};
	return (
		<nav
			className={`background-2 rounded-md md:p-1 flex flex-row md:flex-row gap-1 md:gap-2 text-xs md:text-base`}
		>
			<div
				className={`flex flex-col md:flex-row transition-max-height duration-700 ease-in-out overflow-hidden`}
				style={{ maxHeight: '500px' }}
			>
				{navLinks.map((link, index) => (
					<Link
						onClick={toggleMenu}
						className="px-1 py-2 md:px-2 md:py-4 color-7 hover-color-6 background-2 hover-background-1 duration-700 rounded-md uppercase font-medium tracking-wider content-center"
						key={index}
						href={link.url}
					>
						{link.text}
					</Link>
				))}
			</div>
		</nav>
	);
}
