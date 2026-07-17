import { useState } from "react";
import AppCard from "../common/AppCard";
export default function UpcomingAssignment() {
  const [assignments, setAssignments] = useState([
    {
      subject: "Statistics",
      title: "Past exam paper",
      dueDate: "Wednesday",
      priority: "High",
      completed: false,
    },
    {
      subject: "OOP",
      title: "Lab 4",
      dueDate: "Friday",
      priority: "Medium",
      completed: false,
    },
    {
      subject: "Discrete Structures",
      title: "Assignment 2",
      dueDate: "Friday",
      priority: "Low",
      completed: false,
    },
  ]);
  function completeAssignment(subject: string) {
    setAssignments(
      assignments.map((assignment) => {
        if (assignment.subject === subject) {
          return { ...assignment, completed: true };
        }
        return assignment;
      }),
    );
  }

  return (
    <AppCard title="Upcoming Assignment">
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div key={assignment.subject} className="rounded-xl border p-4">
            <h3 className="font-semibold">{assignment.subject}</h3>
            <p className="text-sm text-zinc-500">{assignment.title}</p>
            <p className="text-sm text-zinc-500">{assignment.dueDate}</p>
            <p className="text-sm text-zinc-500">{assignment.priority}</p>
            <button
              onClick={() => completeAssignment(assignment.subject)}
              className={`mt-2 rounded-lg px-4 py-2 text-white ${
                assignment.completed ? "bg-green-500" : "bg-blue-500"
              }`}
            >
              {assignment.completed ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        ))}
        <div className="rounded-xl border p-4"></div>
      </div>
    </AppCard>
  );
}
