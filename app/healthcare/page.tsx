import Table from '@/components/Table';
import links from '../../data/healthcare/healthcare.json';

export default function Home() {
	return <Table programs={links} />;
}
