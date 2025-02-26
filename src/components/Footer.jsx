export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-2 mt-2">
      <div className="flex justify-center items-center">
        <p className="my-2 mb-1">
          &copy; {new Date().getFullYear()} <strong>Ryan Holland</strong>
        </p>
        <a
          href="https://github.com/ryangholland"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white ml-2"
        >
          <img
            src="/images/github.png"
            alt="GitHub Cat Logo"
            width="20"
            height="20"
            className="inline-block"
          />
        </a>
      </div>
    </footer>
  );
}
