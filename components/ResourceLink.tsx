import { LinkType } from '@/types/types';
import Link from 'next/link';

const ResourceLink: React.FC<LinkType> = ({ title, url }) => {
	return (
		<>
			<Link href={url}>{title}</Link>
		</>
	);
};
export default ResourceLink;
