import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="flex justify-between items-center p-4 bg-blue-400">
          <h2 className="font-bold text-4xl">Bloggy</h2>
          <Link
            href={"/create"}
            className="p-3 bg-white text-blue-600 rounded-lg "
          >
            Create new blog
          </Link>
        </div>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
