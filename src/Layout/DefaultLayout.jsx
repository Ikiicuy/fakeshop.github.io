import Menu from "../Komponen/Menu";

export default function DefaultLayout({ children }) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Container untuk halaman */}
      <div className="flex-grow">{children}</div>
      {/* Bottom Navigation */}
      <Menu />
    </div>
  );
}
