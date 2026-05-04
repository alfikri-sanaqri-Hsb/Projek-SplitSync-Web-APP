import MainLayout from "@/layout/MainLayout";
import ActionButton from "@/components/ActionButton";
import ContinueSession from "@/components/ContinueSession";
import { Users, Link as LinkIcon } from "lucide-react";

export default function Desktop() {
  const handleHost = () => console.log("Starting as Host...");
  const handleJoin = () => console.log("Joining via Link...");
  const handleView = () => console.log("Viewing history...");

  return (
    <MainLayout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Start Your Split Session
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Choose how you want to begin splitting your bill
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-8">
          <ActionButton 
            title="Start As Host" 
            icon={Users} 
            onClick={handleHost} 
          />
          <ActionButton 
            title="Join Via Link" 
            icon={LinkIcon} 
            onClick={handleJoin} 
          />
        </div>

        <ContinueSession onSecondaryClick={handleView} />

      </div>
    </MainLayout>
  );
}