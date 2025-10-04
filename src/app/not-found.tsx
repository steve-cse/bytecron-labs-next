import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-[#b2b2b2]">
          Page Not Found
        </h2>
        <p className="text-[#b2b2b2] mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-[#db0042] hover:text-[#c00039] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
