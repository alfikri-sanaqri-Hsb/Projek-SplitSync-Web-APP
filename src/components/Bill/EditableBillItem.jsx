import ParticipantInput from "./ParticipantInput";

export default function EditableBillItem({
  item,
  index,
  onItemChange,
}) {

  const handleFieldChange = (field, value) => {
    if (!onItemChange) return;

    onItemChange(index, {
      ...item,
      [field]: value,
    });
  };

  return (
    <div
      className="
        bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm
      "
    >
      <div className="space-y-4">

        <div>
          <label className="block text-sm font-semibold mb-2 dark:text-white">
            Item Name
          </label>

          <input
            type="text"
            value={item.item_name || ""}
            onChange={(e) =>
              handleFieldChange("item_name", e.target.value)
            }
            className="
              w-full border rounded-xl px-4 py-3 dark:bg-gray-800 dark:text-white
            "
          />
        </div>

        <div>
        <label className="block text-sm font-semibold mb-2 dark:text-white">
            Price
        </label>

        <input
            type="number"
            value={item?.price === 0 ? "" : (item?.price || "")}
            onChange={(e) =>
            handleFieldChange(
                "price",
                e.target.value === "" ? 0 : Number(e.target.value)
                )
            }
            placeholder="Masukkan harga item..."
            className="
            w-full border rounded-xl px-4 py-3 dark:bg-gray-800 dark:text-white
            "
        />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 dark:text-white">
            Ordered By
          </label>

          <ParticipantInput
            value={item?.participant_name || ""}
            onChange={(value) =>
              handleFieldChange(
                "participant_name",
                value
              )
            }
          />
        </div>

      </div>
    </div>
  );
}