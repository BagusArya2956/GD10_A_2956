import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-900">Login</h1>
        <p className="mt-2 text-sm text-gray-600">
          Halaman login belum menjadi bagian guided Chapter 10.
        </p>
        <Link
          href="/dashboard/invoices"
          className="mt-6 inline-flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500"
        >
          Buka Invoices
        </Link>
      </div>
    </main>
  );
}
