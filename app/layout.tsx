import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navigation";
import Footer from "./components/Footer/index.jsx";

import { state } from "@/store";
import { projectsHandler } from "./lib/actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Saviour Eking',
    default: 'Saviour Eking',
  },
  description: 'Welcome to my digital showcase!',
  metadataBase: new URL('https://acme-ledger.vercel.app')
  // description: 'The official Next.js Learn Dashboard built with App Router.',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const store = makeStore();
  // await store.dispatch(fetchProjects());
  let store = state.projects;
  if (store.length === 0) {
    store = await projectsHandler()
  }
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`${inter.className} p-4 container mx-auto flex flex-col min-h-screen`}>
        <NavBar />
        <main className="mt-20 md:mt-10 text-text container flex-grow px-4 md:px-0">
          {/* {children} */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
