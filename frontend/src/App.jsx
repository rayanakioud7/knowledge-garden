import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import CV from "./pages/CV.jsx";
import Projects from "./pages/Projects.jsx";
import GardenHome from "./pages/GardenHome.jsx";
import GardenLibrary from "./pages/GardenLibrary.jsx";
const GardenAtlas = lazy(() => import("./pages/GardenAtlas.jsx"));
const NoteView = lazy(() => import("./pages/NoteView.jsx"));
const GraphView = lazy(() => import("./pages/GraphView.jsx"));
const TreeView = lazy(() => import("./pages/TreeView.jsx"));
import SearchView from "./pages/SearchView.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/garden" element={<GardenLibrary />} />
        <Route path="/garden/atlas" element={<Suspense fallback={<div className="p-10 label">Loading maps…</div>}><GardenAtlas /></Suspense>} />
        <Route path="/garden/notes" element={<GardenHome />} />
        <Route path="/garden/tree" element={<Suspense fallback={<div className="p-10 label">Loading tree…</div>}><TreeView /></Suspense>} />
        <Route path="/garden/note/:id" element={<Suspense fallback={<div className="p-10 label">Opening note…</div>}><NoteView /></Suspense>} />
        <Route path="/garden/graph" element={<Suspense fallback={<div className="p-10 label">Loading graph…</div>}><GraphView /></Suspense>} />
        <Route path="/garden/search" element={<SearchView />} />
        <Route path="/garden/tags" element={<SearchView />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
