import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Desktop from "@/pages/Desktop";
import History from "@/pages/History";
import HistoryDetail from "@/pages/HistoryDetail";
import Settings from "@/pages/Settings";
import StartAsHost from "@/pages/StartAsHost";
import UploadReceipt from "@/pages/UploadReceipt";
import ReceiptResult from "@/pages/ReceiptResult";

import ProtectedRoute from "@/components/ProtectedRoute";

import Demo from "@/pages/Demo";
import NotFound from "@/pages/NotFound";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* PUBLIC */}
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/demo"
          element={<Demo />}
        />

        {/* PROTECTED */}
        <Route
          path="/desktop"
          element={
            <ProtectedRoute>
              <Desktop />
            </ProtectedRoute>
          }
        />

        <Route
          path="/startashost"
          element={
            <ProtectedRoute>
              <StartAsHost />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history/:id"
          element={
            <ProtectedRoute>
              <HistoryDetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* OCR RECEIPT */}
        <Route
          path="/upload-receipt"
          element={
            <ProtectedRoute>
              <UploadReceipt />
            </ProtectedRoute>
          }
        />

        <Route
          path="/receipt-result"
          element={
            <ProtectedRoute>
              <ReceiptResult />
            </ProtectedRoute>
          }
        />

        {/* NOT FOUND */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;