import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./pages/Home";

const pageBackground = {
  background:
    "radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.16), transparent 26%), radial-gradient(circle at 84% 12%, rgba(118, 196, 255, 0.24), transparent 24%), linear-gradient(135deg, #8a43d6, #3347d9)",
};

function App() {
  return (
    <main
      className="min-h-screen px-7 py-7 text-white"
      style={pageBackground}
    >
      <Navbar />
      
      {/* Здесь React Router будет подставлять нужную страницу в зависимости от URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Когда создашь другие страницы, просто добавь их сюда: */}
        {/* <Route path="/goals" element={<GoalsPage />} /> */}
        {/* <Route path="/tasks" element={<TasksPage />} /> */}
        {/* <Route path="/analytics" element={<AnalyticsPage />} /> */}
      </Routes>
    </main>
  );
}

export default App;