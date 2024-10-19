import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'
import About from './components/About'
import Mission from './components/Mission'
import Experties from './components/Experties'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased '>
      <Hero />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Experties />
      <Review />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
