import ResourceLink from './ResourceLink';
import {
	LinkType,
	TableProps,
	Program,
	TablePropsMain,
	TablePropsResource,
} from '@/types/types';
import styles from '../styles/components/Table.module.css';

const Table: React.FC<TableProps> = (props) => {
	const { resourceTrue } = props;
	const renderTable = () => {
		if ('links' in props) {
			const { links } = props as TablePropsMain; // Type assertion to TablePropsMain

			return links.map((link: LinkType, index: number) => {
				return (
					<ResourceLink
						id={link.id}
						key={index}
						title={link.title}
						url={link.url}
						description={resourceTrue ? link.description : false}
					/>
				);
			});
		} else if ('programs' in props) {
			const { programs } = props as TablePropsResource;
			return programs.map((program: Program, index: number) => (
				<ResourceLink
					id={program.id}
					key={index}
					title={program.title}
					url={program.url}
					description={resourceTrue ? program.description : false}
				/>
			));
		} else {
			return null;
		}
	};

	return (
		<main
			className={`p-12 grid grid-cols-3 grid-rows-3 gap-2 ${styles.table} background-3`}
		>
			{renderTable()}
		</main>
	);
};

export default Table;
