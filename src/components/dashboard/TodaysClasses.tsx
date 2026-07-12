import AppCard from "../common/AppCard";

const classes = [
  {
    subject: "Mathematics 2",
    room: "Room 108",
    time: "6:30 AM- 8:00 AM",
  },
  {
    subject: "Workshop",
    room: "Room 108",
    time: "8:30 AM- 9:30 AM",
  },
  {
    subject: "Discrete Structures",
    room: "Room 108",
    time: "10:00 AM- 11:30 AM",
  },
];
export default function TodaysClasses() {
  return (
    <AppCard title="Today's Classes">
      <div className="space-y-4">
        {classes.map((course) => (
          <div key={course.subject} className="rounded-xl border p-4">
            <h3 className="font-semibold">{course.subject}</h3>
            <p className="text-sm text-zinc-500">{course.room}</p>
            <p className="text-sm text-zinc-500">{course.time}</p>
          </div>
        ))}
      </div>
    </AppCard>
  );
}
