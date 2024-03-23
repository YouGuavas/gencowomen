import ResourceLink from './ResourceLink';
import { ResourceLinkType, TableProps } from '@/types/types';
import styles from '../styles/components/Table.module.css';
const Table: React.FC<TableProps> = ({ links }) => {
	return (
		<ul
			className={`p-12 grid grid-cols-3 grid-rows-3 gap-2 ${styles.table} background-3`}
		>
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
