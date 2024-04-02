import { Program } from '@/types/types';
import Link from 'next/link';
import styles from '../styles/components/ResourceLink.module.css';

const ResourceLink: React.FC<Program> = (props) => {
	const { id, title, url } = props;
	const renderProps = () => {
		if (url) {
			return Object.entries(props).map(([prop, value], index) => {
				if (prop !== 'title' && prop !== 'id') {
					prop === 'url' ? (prop = 'website') : null;
					return (
						<li key={index}>
							<strong className="capitalize">{`${prop}: `}</strong>
							{value}
						</li>
					);
				}
			});
		} else {
			return <>Error: no url!</>;
		}
	};
	return (
		<>
			<Link
				className={`${styles.link} background-2 color-7 flex flex-col gap-1`}
				href={url ? url.toString() : 'error'}
			>
				<h2>{title}</h2>
				<ul>{renderProps()}</ul>
			</Link>
		</>
	);
};
export default ResourceLink;
