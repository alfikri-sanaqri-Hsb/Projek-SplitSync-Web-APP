export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      <h2 className="font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}