import MainLayout from "@/layout/MainLayout";
import Card from "@/components/Card";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <Card title="SplitSync">
        <p>Welcome to SplitSync</p>
      </Card>

    </MainLayout>
  );
}