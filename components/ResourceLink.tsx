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
								className="text-left flex gap-1 text-xs md:text-base"
							>
								<strong className="capitalize">{`${prop}: `}</strong>
								<p className="text-left overflow-x-scroll md:overflow-x-auto">
									{value}
								</p>
							</li>
						);
					} else {
						return (
							<li
								key={index}
								className="flex flex-col text-left gap-1 sm:overflow-y-scroll md:overflow-y-auto text-xs md:text-base"
							>
								<strong className="capitalize">{`${prop}: `}</strong>
								<p className="text-xs md:text-base">{value}</p>
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
				<h2 className="text-xs md:text-base font-semibold">{title}</h2>
				<ul className="flex flex-col gap-1">{renderProps()}</ul>
			</Link>
		</>
	);
};
export default ResourceLink;
