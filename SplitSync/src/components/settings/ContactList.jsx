import React from "react";
import { UserPlus, Trash2 } from "lucide-react";

export default function ContactList({ contacts, onAddContact, onDeleteContact }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add new contact..."
          className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition dark:text-white"/>
        <button 
          onClick={onAddContact}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition">
          <UserPlus size={18} /> Add
        </button>
      </div>

      <div className="space-y-2">
        {contacts.map((name, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl group hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold">
                {name.charAt(0).toUpperCase()}
              </div>
              <span className="font-medium text-sm dark:text-white">{name}</span>
            </div>
            
            <button
              onClick={() => onDeleteContact(index)}
              className="text-red-400 hover:text-red-600 p-2 opacity-0 group-hover:opacity-100 transition">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}