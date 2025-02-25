export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navbar */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">My Blog</h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6 bg-gray-100">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© {new Date().getFullYear()} My Blog</p>
      </footer>
    </div>
  );
}
