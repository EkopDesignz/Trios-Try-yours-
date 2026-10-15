import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trios — Try Yours",
  description:
    "Discover opportunities, build meaningful professional connections, and take your next career step with Trios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}