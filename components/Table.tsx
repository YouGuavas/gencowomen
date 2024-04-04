import ResourceLink from './ResourceLink';
import {
	LinkType,
	TableProps,
	Program,
	TablePropsMain,
	TablePropsResource,
} from '@/types/types';
import styles from '../styles/components/Table.module.css';
import NavigationLink from './NavigationLink';

const Table: React.FC<TableProps> = (props) => {
	const renderTable = () => {
		if ('links' in props) {
			const { links } = props as TablePropsMain; // Type assertion to TablePropsMain

			return links.map((link: LinkType, index: number) => {
				return (
					<NavigationLink
						id={link.id}
						key={index}
						title={link.title}
						url={link.url}
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
					email={program.email}
					phone={program.phone}
					address={program.address}
					description={program.description}
				/>
			));
		} else {
			return null;
		}
	};

	return (
		<main
			className={`p-6 grid md:grid-cols-3 grid-cols-1 grid-rows-3 gap-2 ${styles.table} background-6`}
		>
			{renderTable()}
		</main>
	);
};

export default Table;
