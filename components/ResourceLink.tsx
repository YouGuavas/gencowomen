import { ResourceLinkType } from '@/types/types';
import Link from 'next/link';
import styles from '../styles/components/ResourceLink.module.css';

const ResourceLink: React.FC<ResourceLinkType> = ({
	title,
	url,
	description,
}) => {
	const jsxURL = <>{url}</>;
	return (
		<>
			<Link className={`flex flex-col ${styles.link}`} href={url}>
				<span>{title}</span>
				{description ? <span>{description}</span> : <></>}
			</Link>
		</>
	);
};
export default ResourceLink;
