import Table from '@/components/Table';
import links from '../../data/legal/legal.json';

export default function Home() {
	return (
		<>
			<p>needs update - incorrect info</p>
			<Table programs={links} />
		</>
	);
}
