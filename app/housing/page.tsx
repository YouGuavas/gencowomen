import Table from '@/components/Table';
import links from '../../data/housing/housing.json';

export default function Home() {
	return <Table programs={links} />;
}
