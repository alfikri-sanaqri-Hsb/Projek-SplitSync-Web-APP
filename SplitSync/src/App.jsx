import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Desktop from "@/pages/Desktop";
import History from "@/pages/History";
import ProtectedRoute from "@/components/ProtectedRoute";
import Demo from "@/pages/Demo";
import NotFound from "@/pages/NotFound";
import Settings from "@/pages/Settings";
import StartAsHost from "@/pages/StartAsHost";
import HistoryDetail from "@/pages/HistoryDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/desktop" element={<ProtectedRoute><Desktop /></ProtectedRoute>} />

        <Route path="/startashost" element={ <ProtectedRoute> <StartAsHost /> </ProtectedRoute> } />

        <Route
          path="/history"
          element={<ProtectedRoute> <History /> </ProtectedRoute>} />

        <Route 
          path="/history/:id" 
          element={<ProtectedRoute><HistoryDetail /></ProtectedRoute>} />    

        <Route path="/settings" element={<Settings />} />     

        <Route path="*" element={<NotFound />} />

        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;