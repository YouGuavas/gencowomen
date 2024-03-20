import styles from '../styles/components/Nav.module.css';
import navLinks from '../data/nav.json';
import { Dropdown } from './Dropdown';
export function Nav() {
	const renderNavLink = (link: any) => {
		if (link.urls) {
			return (
				<select>
					{link.urls.map((submenu: any, index: number) => {
						return <Dropdown submenu={submenu} key={index} />;
					})}
				</select>
			);
		} else if (link.url) {
			return <a href={link.url}>{link.text}</a>;
		}
	};
	return (
		<nav className={`${styles.nav}`}>
			<ul>
				{navLinks.map((link, index) => {
					return <li key={index}>{renderNavLink(link)}</li>;
				})}
			</ul>
		</nav>
	);
}
