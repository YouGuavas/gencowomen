import styles from '../styles/components/Nav.module.css';
import navLinks from '../data/nav.json';
export function Nav() {
	return (
		<nav className={`${styles.nav} background-2`}>
			<ul className="flex gap-2">
				{navLinks.map((link, index) => {
					return (
						<li key={index}>
							{' '}
							<a href={link.url}>{link.text}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
