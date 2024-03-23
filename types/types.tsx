import { ReactNode } from 'react';
import { Url } from 'url';

export interface LinkType {
	title: ReactNode;
	url: Url;
}
export interface ResourceLinkType extends LinkType {
	description: ReactNode;
}
export interface TableProps {
	links: ResourceLinkType[];
}
