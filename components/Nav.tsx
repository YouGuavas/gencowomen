import styles from '../styles/components/Nav.module.css';
import Link from 'next/link';
import navLinks from '../data/nav.json';
export function Nav() {
	return (
		<nav className={`${styles.nav} background-2`}>
			<ul className="flex gap-2">
				{navLinks.map((link, index) => {
					return (
						<li key={index}>
							{' '}
							<Link href={link.url}>{link.text}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
