
export default function MainLayout({ children }) {
  return (
    <div className="bg-white min-h-screen text-black">
      <main className="p-6">{children}</main>
    </div>
  );
}