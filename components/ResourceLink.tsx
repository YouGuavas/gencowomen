import { LinkType } from '@/types/types';
import Link from 'next/link';
import styles from '../styles/components/ResourceLink.module.css';

const ResourceLink: React.FC<LinkType> = ({ title, url, description }) => {
	console.log('b-' + url);
	return (
		<>
			<Link
				className={`flex flex-col row-span-1 ${styles.link} background-4 color-5`}
				href={url}
			>
				<span>{title}</span>
				{description ? <span>{description}</span> : <></>}
			</Link>
		</>
	);
};
export default ResourceLink;
