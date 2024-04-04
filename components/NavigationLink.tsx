import { LinkTypes, LinkType, Program } from '@/types/types';
import Link from 'next/link';
import styles from '../styles/components/ResourceLink.module.css';

const NavigationLink: React.FC<LinkTypes> = (props) => {
	const { id, title, url } = props;
	const renderLinks = () => {
		return (
			<>
				<h2>{title}</h2>
			</>
		);
	};
	return (
		<>
			<Link
				className={`${styles.link} background-2 color-7 flex flex-col content-center`}
				href={url ? url.toString() : 'error'}
			>
				{renderLinks()}
			</Link>
		</>
	);
};
export default NavigationLink;
