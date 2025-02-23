import "@/globals/globals.css";

export const metadata = {
  title: "Reproka Website",
  description: "no content here for now ig idk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
