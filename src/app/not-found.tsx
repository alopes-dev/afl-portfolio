import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">{`The page you're looking for doesn't exist.`}</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700">
        Return Home
      </Link>
    </main>
  );
}
