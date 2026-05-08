import Link from "next/link";

export default function Home() {
  return (
    <main className="homePage">
      <h1>Next Annotation Monorepo</h1>
      <p>Open the mock annotation flow from the link below.</p>
      <Link href="/annotation" className="homeLink">
        Go to /annotation
      </Link>
    </main>
  );
}
