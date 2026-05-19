import { Trash2 } from "lucide-react";
import ParticipantInput from "./ParticipantInput";

export default function EditableBillItem({
  item,
  index,
  onChange,
  onDelete,
}) {

  const handleFieldChange = (field, value) => {

    const updatedItem = {
      ...item,
      [field]: value,
    };

    onChange(index, updatedItem);
  };

  return (
    <div className="
      bg-gray-50
      dark:bg-gray-800
      rounded-2xl
      p-5
      space-y-4
    ">

      <div className="flex justify-between items-start gap-4">

        <div className="flex-1 space-y-3">

          {/* ITEM NAME */}
          <input
            type="text"
            value={item.item_name}
            onChange={(e) =>
              handleFieldChange("item_name", e.target.value)
            }
            className="
              w-full
              text-xl
              font-bold
              bg-transparent
              border-b
              border-gray-300
              dark:border-gray-700
              focus:outline-none
              dark:text-white
            "
          />

          {/* PRICE */}
          <input
            type="number"
            value={item.price}
            onChange={(e) =>
              handleFieldChange("price", e.target.value)
            }
            className="
              w-full
              bg-white
              dark:bg-gray-900
              border
              border-gray-300
              dark:border-gray-700
              rounded-xl
              px-4
              py-2
              dark:text-white
            "
          />

          {/* PARTICIPANT */}
          <ParticipantInput
            value={item.participant_name}
            onChange={(value) =>
              handleFieldChange("participant_name", value)
            }
          />

        </div>

        {/* DELETE BUTTON */}
        <button
          onClick={() => onDelete(index)}
          className="
            p-3
            rounded-xl
            bg-red-100
            hover:bg-red-200
            text-red-500
            transition
          "
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}
