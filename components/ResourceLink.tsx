import { LinkTypes, LinkType, Program } from '@/types/types';
import Link from 'next/link';
import styles from '../styles/components/ResourceLink.module.css';

const ResourceLink: React.FC<LinkTypes> = (props) => {
	const { id, title, url } = props;
	const renderLinks = () => {
		console.log(props);
		return (
			<>
				<h2>{title}</h2>
				{}
			</>
		);
	};
	return (
		<>
			<Link className={`flex flex-col row-span-3`} href={url}>
				<div className={`${styles.link} background-2 color-7`}>
					{renderLinks()}
				</div>
			</Link>
		</>
	);
};
export default ResourceLink;
