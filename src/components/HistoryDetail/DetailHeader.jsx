import { Calendar, Users } from "lucide-react";

export default function DetailHeader({ title, date, participants, status }) {
  return (
    <div className="p-8 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-black mb-2">{title}</h1>
          <div className="flex gap-4 text-sm opacity-90">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> 
              {new Date(date).toLocaleDateString('id-ID', { dateStyle: 'long' })}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" /> 
              {participants} Orang
            </div>
          </div>
        </div>
        <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest">
          {status}
        </span>
      </div>
    </div>
  );
}