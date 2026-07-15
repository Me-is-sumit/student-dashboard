export default function Counter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return (
    <div className="rounded-xl border p-4">
      <h2 className="text-xl font-bold">Counter</h2>
      <p>{count}</p>
      <button
        onClick={increase}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Increase
      </button>
    </div>
  );
}
