import { Table } from '@/components/Table';
import links from '../../data/healthcare.json';

export default function Home() {
	return <Table links={links} />;
}
