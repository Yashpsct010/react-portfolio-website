import "./index.css"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <Helmet>
          <title>Yash Parmar | Professional Web Developer & Software Engineer</title>
          <meta name="description" content="Yash Parmar - Professional Web Developer and Software Engineer based in India. Specializing in React, JavaScript, and modern web development." />
          <meta name="keywords" content="Yash Parmar, Yash Parmar Developer, web developer, React developer, JavaScript developer, frontend engineer" />
          <meta property="og:title" content="Yash Parmar - Professional Web Developer & Software Engineer" />
          <meta property="og:description" content="Portfolio of Yash Parmar, showcasing professional web development projects and software engineering expertise." />
          <link rel="canonical" href={window.location.href} />
        </Helmet>
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Home />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </HelmetProvider>
  )
}

export default App
