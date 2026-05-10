import React, { useState } from "react";
import MainLayout from "@/layout/MainLayout";
import SettingsCard from "@/components/settings/SettingsCard";
import ToggleItem from "@/components/settings/ToggleItem";
import ContactList from "@/components/settings/ContactList";
import { Sun, UserPlus, Download, Trash } from "lucide-react";

export default function Settings() {
  const [contacts, setContacts] = useState(["Andi", "Budi", "Sinta"]);
  const handleAddContact = (name) => {
    if (name && !contacts.includes(name)) {
      setContacts([...contacts, name]);
    }
  };

  const handleDeleteContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-10 px-4">
        
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your preferences and saved contacts
          </p>
        </header>
        <div className="space-y-2">
          
          <SettingsCard title="Appearance">
            <ToggleItem 
              label="Theme" 
              sublabel="Light mode" 
              icon={Sun} 
              defaultChecked={false}
            />
          </SettingsCard>

          <SettingsCard 
            title="Saved Contacts" 
            subtitle="Quick access to frequent split partners"
            badge={
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <UserPlus size={14} /> {contacts.length}
              </span>
            }>
            <ContactList 
              contacts={contacts} 
              onDeleteContact={handleDeleteContact}
              onAddContact={handleAddContact} />
          </SettingsCard>

          <SettingsCard title="Notifications">
            <ToggleItem 
              label="Payment reminders" 
              sublabel="Get notified when someone hasn't paid" 
              defaultChecked={true} />
            <ToggleItem 
              label="Payment confirmations" 
              sublabel="Get notified when payments are received" 
              defaultChecked={true} />
          </SettingsCard>

          <SettingsCard title="Account">
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-semibold dark:text-white">
                Export All Data 
                <Download size={18} className="text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition text-sm font-semibold">
                Clear Transaction History 
                <Trash size={18} />
              </button>
            </div>
          </SettingsCard>

        </div>
      </div>
    </MainLayout>
  );
}