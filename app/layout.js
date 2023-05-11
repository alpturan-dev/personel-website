import './globals.css'
import { Open_Sans } from 'next/font/google'

const open_Sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdurrahman Alpturan',
  description: 'Abdurrahman Alpturan Personel Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_Sans.className}>{children}</body>
    </html>
  )
}
