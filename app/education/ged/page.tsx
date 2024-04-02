import Table from '@/components/Table';
import links from '@/data/education/ged.json';

export default function Home() {
	return <Table programs={links} />;
}
