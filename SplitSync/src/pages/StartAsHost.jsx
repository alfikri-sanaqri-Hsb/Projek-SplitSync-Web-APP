import MainLayout from "@/layout/MainLayout";
import PageHeader from "@/components/StartAsHost/PageHeader";
import UploadBox from "@/components/StartAsHost/UploadBox";
import ManualInputButton from "@/components/StartAsHost/ManualInputButton";

export default function StartAsHost() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-16">

        <div className="max-w-4xl w-full mx-auto">

          <PageHeader />

          <UploadBox />

          <div className="my-10 text-center text-gray-500 dark:text-gray-400 text-2xl font-medium">
            or
          </div>

          <ManualInputButton />

        </div>

      </section>
    </MainLayout>
  );
}