export default function NoLayout({ children }) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Container untuk halaman */}
      <div className="flex-grow">{children}</div>
    </div>
  );
}
