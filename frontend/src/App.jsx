import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import CV from "./pages/CV.jsx";
import Projects from "./pages/Projects.jsx";
import GardenHome from "./pages/GardenHome.jsx";
import NoteView from "./pages/NoteView.jsx";
import GraphView from "./pages/GraphView.jsx";
import TreeView from "./pages/TreeView.jsx";
import SearchView from "./pages/SearchView.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/garden" element={<TreeView />} />
        <Route path="/garden/notes" element={<GardenHome />} />
        <Route path="/garden/tree" element={<TreeView />} />
        <Route path="/garden/note/:id" element={<NoteView />} />
        <Route path="/garden/graph" element={<GraphView />} />
        <Route path="/garden/search" element={<SearchView />} />
        <Route path="/garden/tags" element={<SearchView />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
