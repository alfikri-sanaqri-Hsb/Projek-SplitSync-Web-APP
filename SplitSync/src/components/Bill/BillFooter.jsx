export default function BillFooter({ total }) {

  return (
    <div className="
      mt-8
      pt-6
      border-t
      border-gray-200
      dark:border-gray-700
      flex
      justify-between
      items-center
    ">

      <h2 className="text-xl font-bold text-gray-700 dark:text-white">
        Total
      </h2>

      <h2 className="text-3xl font-extrabold text-indigo-600">
        Rp {Number(total).toLocaleString("id-ID")}
      </h2>

    </div>
  );
}

