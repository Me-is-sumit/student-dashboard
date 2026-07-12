import AppCard from "../common/AppCard";

const assignmentData = [
  {
    subject: "Statistics",
    title: "Past exam paper",
    dueDate: "Wednesday",
    priority: "High",
  },
  {
    subject: "OOP",
    title: "Lab 4",
    dueDate: "Friday",
    priority: "Medium",
  },
  {
    subject: "Discrete Structures",
    title: "Assignment 2",
    dueDate: "Friday",
    priority: "Low",
  },
];
export default function UpcomingAssignment() {
  return (
    <AppCard title="Upcoming Assignment">
      <div className="space-y-4">
        {assignmentData.map((assignment) => (
          <div key={assignment.subject} className="rounded-xl border p-4">
            <h3 className="font-semibold">{assignment.subject}</h3>
            <p className="text-sm text-zinc-500">{assignment.title}</p>
            <p className="text-sm text-zinc-500">{assignment.dueDate}</p>
            <p className="text-sm text-zinc-500">{assignment.priority}</p>
          </div>
        ))}
      </div>
    </AppCard>
  );
}
