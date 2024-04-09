import { Program } from '@/types/types';
import Link from 'next/link';
import styles from '../styles/components/ResourceLink.module.css';

const ResourceLink: React.FC<Program> = (props) => {
	const { id, title, url } = props;
	const handleDescription = () => {
		const descriptionParent = document.getElementById(id ? id.toString() : '');
		const description = descriptionParent?.querySelector('p');
		description?.classList.toggle('hidden');
	};
	const renderProps = () => {
		if (url) {
			return Object.entries(props).map(([prop, value], index) => {
				if (prop !== 'title' && prop !== 'id') {
					prop === 'url' ? (prop = 'website') : null;
					if (prop !== 'description') {
						return (
							<li
								key={index}
								className="flex gap-1 overflow-x-scroll md:overflow-x-auto text-xs sm:text-sm md:text-md"
							>
								<strong className="capitalize">{`${prop}: `}</strong>
								<p>{value}</p>
							</li>
						);
					} else {
						return (
							<li
								key={index}
								className="flex flex-col text-left gap-1 sm:overflow-y-scroll md:overflow-y-auto"
							>
								<strong className="capitalize">{`${prop}: `}</strong>
								<p>{value}</p>
							</li>
						);
					}
				}
			});
		} else {
			return <>Error: no url!</>;
		}
	};
	return (
		<>
			<Link
				className={`${styles.link} col-span-1 background-2 color-7 flex flex-col gap-2`}
				href={url ? url.toString() : 'error'}
			>
				<h2>{title}</h2>
				<ul className="flex flex-col gap-1">{renderProps()}</ul>
			</Link>
		</>
	);
};
export default ResourceLink;
