import { ReactNode } from 'react';
import { Url } from 'url';

export interface LinkType {
	title: ReactNode;
	url: Url;
}
export interface TableProps {
	links: LinkType[];
}
