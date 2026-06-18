import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Courses from './sections/Courses';
import WhyChooseUs from './sections/WhyChooseUs';
import Faculty from './sections/Faculty';
import Results from './sections/Results';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import InstagramFeed from './sections/InstagramFeed';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Faculty />
        <Results />
        <Testimonials />
        <Gallery />
        <InstagramFeed />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
