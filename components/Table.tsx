import ResourceLink from './ResourceLink';
import { LinkType, TableProps } from '@/types/types';
const Table: React.FC<TableProps> = ({ links }) => {
	return (
		<ul className="p-12 grid grid-cols-3 gap-2">
			{links.map((link: LinkType, index) => {
				return <ResourceLink title={link.title} url={link.url} />;
			})}
		</ul>
	);
};
module.exports = { Table };
