import "@/globals/globals.css"

// providing metadata as a backup ig

export const metadata = {
  title: 'Reproka Website',
  description: 'Welcome to Reproka. This website is currently under construction.'
}

export const viewport = {
  themeColor: '#06105a'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
