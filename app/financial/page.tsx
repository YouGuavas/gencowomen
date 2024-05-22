import Table from '@/components/Table';
import links from '../../data/financial/financial.json';

export default function Home() {
	return <Table programs={links} />;
}
