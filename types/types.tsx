export type Submenu = Array<Link>;
export interface Link {
	title: Text;
	url: Text;
}
export interface TableProps {
	links: Link[];
}
