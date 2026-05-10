import MainLayout from "@/layout/MainLayout";
import StartAsHostCard from "@/components/desktop/StartAsHostCard";
import JoinViaLinkCard from "@/components/desktop/JoinViaLinkCard";
import ContinueSession from "@/components/desktop/ContinueSession";
import DesktopIllustration from "@/assets/desktop-image.png";
export default function Desktop() {
  return (
    <MainLayout>
      <div className="min-h-[80vh] flex flex-col items-center px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Start Your Split Session
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
            Choose how you want to begin splitting your bill
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-25 w-full max-w-5xl mb-6">
          <StartAsHostCard onClick={() => console.log("Hosting...")} />
          <JoinViaLinkCard onClick={() => console.log("Joining...")} />
        </div>

        <ContinueSession onSecondaryClick={() => console.log("Viewing Session...")} />

        <div className="w-full max-w-5xl mt-20">
          <div className="overflow-hidden rounded-[32px] shadow-lg">
            <img 
              src={DesktopIllustration} 
              alt="Hands working together" 
              className="w-full h-auto object-cover max-h-[700px]"
            />
          </div>
        </div>

      </div>
    </MainLayout>
  );
}