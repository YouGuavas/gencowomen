import { ReactNode } from 'react';
import { Url } from 'url';

export interface LinkType {
	id: ReactNode;
	title: ReactNode;
	url: Url;
}
export interface Program extends LinkType {
	description: ReactNode;

	address: ReactNode;
	email: ReactNode;
	phone: ReactNode;
}
export type LinkTypes = LinkType | Program;

export interface TablePropsMain {
	links: Array<LinkType>;
	resourceTrue: boolean;
}
export interface TablePropsResource {
	programs: Array<Program>;
	resourceTrue: boolean;
}
export type TableProps = TablePropsMain | TablePropsResource;
