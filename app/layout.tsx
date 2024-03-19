import './globals.css';
import { Inter } from 'next/font/google';
import { Nav } from '../components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: "Women's Resources",
	description: 'Resources for women in and around Flint, MI',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Nav />
				{children}
			</body>
		</html>
	);
}
