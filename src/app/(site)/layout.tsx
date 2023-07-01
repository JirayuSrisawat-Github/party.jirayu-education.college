import "@/styles/tailwind.css";
import className from "@/lib/layout";

export const metadata = {
  title: "Jirayu-education | Party",
  description: "Jirayu-education",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link rel="shortcut icon" type="image/png" href="/jirayu_logo.png" />
      </head>
      <body className={className}>{props.children}</body>
    </html>
  );
}
