import ResourceLink from './ResourceLink';
import { ResourceLinkType, TableProps } from '@/types/types';
const Table: React.FC<TableProps> = ({ links }) => {
	return (
		<ul className="p-12 grid grid-cols-3 gap-2">
			{links.map((link: ResourceLinkType, index) => {
				return (
					<ResourceLink
						key={index}
						title={link.title}
						url={link.url}
						description={link.description}
					/>
				);
			})}
		</ul>
	);
};
module.exports = { Table };
