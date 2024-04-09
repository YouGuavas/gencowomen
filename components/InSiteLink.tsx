import { LinkTypes, LinkType, Program } from '@/types/types';
import Link from 'next/link';
import styles from '../styles/components/ResourceLink.module.css';

const InSiteLink: React.FC<LinkTypes> = (props) => {
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
				className={`${styles.link} text-sm md:text-lg h-40 md:h-64 font-semibold background-2 color-7 flex flex-col content-center justify-center`}
				href={url ? url.toString() : 'error'}
			>
				{renderLinks()}
			</Link>
		</>
	);
};
export default InSiteLink;
