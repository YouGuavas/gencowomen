import { ReactNode } from 'react';
import { Url } from 'url';

export interface LinkType {
	id: ReactNode;
	title: ReactNode;
	url: string;
	description: ReactNode;
}

export interface TableProps {
	links: Array<LinkType>;
	resourceTrue: boolean;
}
