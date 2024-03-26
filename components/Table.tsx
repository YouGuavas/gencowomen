import ResourceLink from './ResourceLink';
import { LinkType, TableProps } from '@/types/types';
import styles from '../styles/components/Table.module.css';
const Table: React.FC<TableProps> = ({ links, resourceTrue }) => {
	const renderTable = (resourceTrue: boolean) => {
		if (resourceTrue) {
			return links.map((link: LinkType, index: number) => {
				return (
					<ResourceLink
						id={link.id}
						key={index}
						title={link.title}
						url={link.url}
						description={link.description}
					/>
				);
			});
		} else {
			return links.map((link: LinkType, index: number) => {
				return (
					<ResourceLink
						id={link.id}
						key={index}
						title={link.title}
						url={link.url}
						description={false}
					/>
				);
			});
		}
	};
	return (
		<ul
			className={`p-12 grid grid-cols-3 grid-rows-3 gap-2 ${styles.table} background-3`}
		>
			{renderTable(resourceTrue)}
		</ul>
	);
};
export default Table;
