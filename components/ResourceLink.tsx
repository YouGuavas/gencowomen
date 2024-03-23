import { LinkType } from '@/types/types';
import Link from 'next/link';
import styles from '../styles/components/ResourceLink.module.css';

const ResourceLink: React.FC<LinkType> = ({ title, url }) => {
	return (
		<>
			<Link className={`${styles.link}`} href={url}>
				{title}
			</Link>
		</>
	);
};
export default ResourceLink;
