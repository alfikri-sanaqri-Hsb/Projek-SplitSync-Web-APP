import MainLayout from "@/layout/MainLayout";
import Card from "@/components/Card";

export default function Desktop() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Saldo">
          <p className="text-xl font-semibold text-green-600">
            Rp 1.000.000
          </p>
        </Card>

        <Card title="Pengeluaran">
          <p className="text-xl font-semibold text-red-500">
            Rp 300.000
          </p>
        </Card>

        <Card title="Pemasukan">
          <p className="text-xl font-semibold text-blue-500">
            Rp 1.300.000
          </p>
        </Card>
      </div>
    </MainLayout>
  );
}