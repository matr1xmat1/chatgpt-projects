import "./globals.css";

export const metadata = {
  title: "Inbox Control Center",
  description: "Bulk unsubscribe and enforce never-resubscribe rules",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
