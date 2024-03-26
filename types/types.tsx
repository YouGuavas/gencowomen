import { ReactNode } from 'react';
import { Url } from 'url';

export interface LinkType {
	id: ReactNode;
	title: ReactNode;
	url: string;
}
export interface ResourceLinkType extends LinkType {
	description: ReactNode;
}

export type TableProps = TablePropsA | TablePropsB;

export interface TablePropsA {
	links: Array<LinkType>;
	resourceTrue: boolean;
}
export interface TablePropsB {
	links: Array<ResourceLinkType>;
	resourceTrue: boolean;
}
