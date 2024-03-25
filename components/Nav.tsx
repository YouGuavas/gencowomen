import styles from '../styles/components/Nav.module.css';
import Link from 'next/link';
import navLinks from '../data/nav.json';
export function Nav() {
	return (
		<nav className={`${styles.nav} background-2`}>
			<ul className="flex gap-2">
				{navLinks.map((link, index) => {
					return (
						<Link href={link.url}>
							<li
								className="background-2 hover-background-3 duration-700 rounded p-2 uppercase font-extralight tracking-wider"
								key={index}
							>
								{link.text}
							</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
}
