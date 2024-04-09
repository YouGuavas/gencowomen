'use client';

import { useState } from 'react';
import Link from 'next/link';
import navLinks from '../data/nav.json';

export function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav
			className={`background-2 rounded-md md:p-1 flex flex-col md:flex-row gap-1 md:gap-2 text-xs md:text-base`}
		>
			<button
				onClick={toggleMenu}
				className="md:hidden p-2 w-10 content-center justify-center text-center transition duration-700 ease-in-out"
				aria-label="Toggle Menu"
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					{isMenuOpen ? (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					) : (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					)}
				</svg>
			</button>
			<div
				className={`flex flex-col md:flex-row ${
					isMenuOpen || window.innerWidth > 767 ? 'block' : 'hidden'
				} transition-max-height duration-700 ease-in-out overflow-hidden`}
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
