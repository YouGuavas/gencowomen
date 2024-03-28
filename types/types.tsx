import { ReactNode } from 'react';
import { Url } from 'url';

export interface LinkType {
	id: ReactNode;
	title: ReactNode;
	url: ReactNode;
	description: ReactNode;
}
export interface Program extends LinkType {
	address: ReactNode;
}

export interface TablePropsMain {
	links: Array<LinkType>;
	resourceTrue: boolean;
}
export interface TablePropsResource {
	programs: Array<Program>;
	resourceTrue: boolean;
}
export type TableProps = TablePropsMain | TablePropsResource;
