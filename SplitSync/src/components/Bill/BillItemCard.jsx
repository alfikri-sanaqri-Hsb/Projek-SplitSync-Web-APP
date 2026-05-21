import { Clock3, CheckCircle2 } from "lucide-react";

export default function BillItemCard({ item }) {

  const isPaid = item.payment_status === "completed";

  return (
    <div className="
      bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 flex justify-between items-center
    ">

      <div className="flex items-center gap-4">

        <div>
          {isPaid ? (
            <CheckCircle2 className="text-green-500" />
          ) : (
            <Clock3 className="text-orange-500" />
          )}
        </div>

        <div>

          <h3 className="text-xl font-bold dark:text-white">
            {item.item_name}
          </h3>

          <p className="text-indigo-500 italic font-medium">
            Dipesan oleh: {item.participant_name || "-"}
          </p>

        </div>

      </div>

      <div className="text-right">

        <h2 className="text-3xl font-extrabold dark:text-white">
          Rp {Number(item.price).toLocaleString("id-ID")}
        </h2>

        <span className="
          inline-block mt-2 px-3 py-1 rounded-full text-sm font-bold bg-orange-100 text-orange-600
        ">
          {item.payment_status}
        </span>

      </div>

    </div>
  );
}

