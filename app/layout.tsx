import Header from '@/component/layout/Navbar';
import Footer from '@/component/layout/Footer';
import "./globals.css";

export const metadata = {
  title: 'Bio Agro Energy',
  description: 'Bio Agro Energy Pvt. Ltd - Leading Ethanol Manufacturing Company',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}