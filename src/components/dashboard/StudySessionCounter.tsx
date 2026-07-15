import { useState } from "react";
import AppCard from "../common/AppCard";
export default function StudySessionCounter() {
  const [sessionCount, setSessionCount] = useState(0);
  function increaseSessionCount() {
    setSessionCount((prevCount) => prevCount + 1);
    console.log(sessionCount);
  }
  function resetSessionCount() {
    setSessionCount(0);
    console.log(sessionCount);
  }
  return (
    <AppCard title="Study Session Counter">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">{sessionCount}</h2>
        <button
          onClick={increaseSessionCount}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white"
        >
          + Add Session
        </button>
        <button
          onClick={resetSessionCount}
          className="rounded-lg bg-red-500 px-4 py-2 text-white"
        >
          Reset Counter
        </button>
      </div>
      <p className="mt-4 text-lg font-semibold">
        Total Study Sessions: {sessionCount}
      </p>
    </AppCard>
  );
}
