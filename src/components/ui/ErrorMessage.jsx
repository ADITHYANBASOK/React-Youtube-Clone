export default function ErrorMessage({ message }) {
  return (
    <div className="flex items-center justify-center p-4 bg-red-500/10 rounded-lg">
      <p className="text-red-500">{message}</p>
    </div>
  );
}