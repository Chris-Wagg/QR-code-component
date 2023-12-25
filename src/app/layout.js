import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-outfit',
	weight: ['400', '700'],
})

export const metadata = {
	title: 'QR code',
	description: 'Frontend Mentor QR code chalenge',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={outfit.className}>{children}</body>
		</html>
	)
}
