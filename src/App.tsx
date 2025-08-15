
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";



function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>} />
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App
