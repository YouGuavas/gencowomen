import ResourceLink from './ResourceLink';
import { ResourceLink, TableProps } from '@/types/types';
const Table: React.FC<TableProps> = ({ links }) => {
	return (
		<>
			{links.map((link: ResourceLink, index) => {
				const title = <>{link.title}</>;
				return <div>{title}</div>;
			})}
		</>
	);
};
module.exports = { Table };
