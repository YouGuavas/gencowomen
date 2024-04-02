import { ReactNode } from 'react';
import { Url } from 'url';

export interface LinkType {
	id: ReactNode;
	title: ReactNode;
	url: ReactNode;
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
}
export interface TablePropsResource {
	programs: Array<Program>;
}
export type TableProps = TablePropsMain | TablePropsResource;
