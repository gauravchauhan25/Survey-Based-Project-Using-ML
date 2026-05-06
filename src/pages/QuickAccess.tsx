export default function QuickAccess() {
  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="flex justify-center mt-10">
        <a
          href="/poster.jpeg"
          download="poster.jpeg"
          className="bg-blue-700 hover:bg-blue-600 transition px-6 py-2 rounded-lg font-medium shadow-md text-white"
        >
          Download
        </a>
      </div>

      <div className="my-7 flex items-center justify-center px-4">
        <img
          src="/poster.jpeg"
          alt="Poster"
          className="w-full max-w-lg rounded-xl shadow-lg"
        />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10"></div>
    </div>
  );
}
