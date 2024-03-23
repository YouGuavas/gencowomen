import { Link, TableProps } from '@/types/types';
const Table: React.FC<TableProps> = ({ links }) => {
	return (
		<div>
			{links.map((link: Link, index) => {
				const title = <>{link.title}</>;
				return <div>{title}</div>;
			})}
		</div>
	);
};
module.exports = { Table };
