import { Users, CalendarDays } from "lucide-react";

export default function BillHeader({
  title,
  date,
  participants,
  status,
}) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-8 text-white">

      <div className="flex justify-between items-start">

        <div>

          <h1 className="text-4xl font-bold mb-4">
            {title}
          </h1>

          <div className="flex items-center gap-6 text-white/90">

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>{date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} />
              <span>{participants} Orang</span>
            </div>

          </div>

        </div>

        <span className="
          bg-white/20
          px-5
          py-2
          rounded-full
          text-sm
          font-bold
          uppercase
        ">
          {status}
        </span>

      </div>

    </div>
  );
}

