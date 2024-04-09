import Link from 'next/link';
import navLinks from '../data/nav.json';
export function Nav() {
	return (
		<nav className={`background-1 rounded-md p-1 flex gap-2`}>
			{navLinks.map((link, index) => {
				return (
					<Link
						key={index}
						className="text-xs md:text-base p-2 py-4 color-7 hover-color-6 background-1 hover-background-2 duration-700 rounded-md uppercase font-medium tracking-wider"
						href={link.url}
					>
						{link.text}
					</Link>
				);
			})}
		</nav>
	);
}
