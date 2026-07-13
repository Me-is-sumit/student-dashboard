import AppCard from "../common/AppCard";

const AttendanceData = [
  {
    subject: "Statistics",
    classAttended: 20,
    totalClasses: 25,
  },
  {
    subject: "OOP",
    classAttended: 15,
    totalClasses: 20,
  },
  {
    subject: "Discrete Structures",
    classAttended: 18,
    totalClasses: 22,
  },
  {
    subject: "Mathematics II",
    classAttended: 22,
    totalClasses: 25,
  },
  {
    subject: "Microprocessors",
    classAttended: 10,
    totalClasses: 15,
  },
];
export default function AttendanceTracker() {
  return (
    <AppCard title="Attendance Tracker">
      <div className="space-y-4">
        {AttendanceData.map((attendance) => (
          <div key={attendance.subject} className="rounded-xl border p-4">
            <h3 className="font-semibold">{attendance.subject}</h3>
            <p className="text-sm text-zinc-500">
              Classes Attended: {attendance.classAttended}
            </p>
            <p className="text-sm text-zinc-500">
              Total Classes: {attendance.totalClasses}
            </p>
            <p className="text-sm text-zinc-500">
              Percentage:{" "}
              {(
                (attendance.classAttended / attendance.totalClasses) *
                100
              ).toFixed(2)}
              %
            </p>
          </div>
        ))}
      </div>
    </AppCard>
  );
}
