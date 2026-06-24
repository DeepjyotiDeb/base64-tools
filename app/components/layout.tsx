import { Link, Outlet } from "react-router";

// const inter = Inter({ subsets: ['latin'] });

export default function layout() {
  return (
    <div className="min-h-screen flex flex-col container mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between gap-4 border-b border-slate-200/70 pb-4 dark:border-slate-800">
        <h1 className="text-2xl font-bold tracking-tight">Base64 Tools</h1>
        <nav className="flex items-center gap-2 text-sm font-medium">
          <Link
            to="/"
            className="rounded-full border border-slate-200 px-3 py-1.5 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Base 64 to Image
          </Link>
          <Link
            to="/base64-to-pdf"
            className="rounded-full border border-slate-200 px-3 py-1.5 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Base64 to PDF
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
