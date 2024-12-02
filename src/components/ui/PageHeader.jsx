export default function PageHeader({ title }) {
  return (
    <div className="px-4 py-3 border-b border-yt-light-black">
      <h1 className="text-xl font-semibold text-white">{title}</h1>
    </div>
  );
}