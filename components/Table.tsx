import ResourceLink from './ResourceLink';
import { LinkType, TableProps } from '@/types/types';
const Table: React.FC<TableProps> = ({ links }) => {
	return (
		<>
			{links.map((link: LinkType, index) => {
				return <ResourceLink title={link.title} url={link.url} />;
			})}
		</>
	);
};
module.exports = { Table };
