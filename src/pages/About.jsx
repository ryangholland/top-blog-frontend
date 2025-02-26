export default function About() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-5">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">About FastCasts</h1>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-6">
        FastCasts is a collection of blog posts that provide quick summaries of
        long podcasts. The goal is to distill key insights from in-depth
        discussions into short, digestible articles.
      </p>

      {/* GitHub Links */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Project Repositories</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://github.com/yourusername/fastcasts-api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              📡 FastCasts API
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername/fastcasts-user"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              🎨 FastCasts User Frontend
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername/fastcasts-admin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              🛠 FastCasts Admin Dashboard
            </a>
          </li>
        </ul>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-gray-100 border border-gray-300 p-4 rounded-md text-gray-600 text-sm">
        <p>
          <strong>Disclaimer:</strong> This project is for personal use and
          learning purposes only. It is not affiliated with or endorsed by any
          of the podcasts summarized here. All content is derived from publicly
          available sources.
        </p>
      </div>
    </div>
  );
}
