import "@/globals/globals.css"

// providing metadata as a backup ig

export const metadata = {
  title: 'Reproka Website',
  description: 'no content here for now ig idk'
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
