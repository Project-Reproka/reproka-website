import '@/globals/globals.css'
import SecondRootLayout from './layoutcontent'

// providing metadata as a default in case a page doesnt specify it
export const metadata = {
  title: 'Project Reproka',
  description: 'Welcome to Reproka. This website is currently under construction.'
}

export const viewport = {
  themeColor: '#06105a'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SecondRootLayout>
          {children}
        </SecondRootLayout>
      </body>
    </html>
  )
}
