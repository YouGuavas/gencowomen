import Table from '@/components/Table';
import links from '../../data/education.json';

export default function Home() {
	return <Table links={links} />;
}
