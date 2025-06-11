import Header from './components/Header';
import BackgroundSwitcher from './components/BackgroundSwitcher';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Education from './components/Education';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <Header />
            <div className="mt-16">
              <BackgroundSwitcher />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="prose max-w-none dark:prose-invert font-serif text-lg mb-2">
              <p>
                A design and product leader transitioning into international affairs, 
                focusing on geopolitical stability, democratic resilience, and 
                technology innovation.
              </p>
            </div>
            <Education />
            <Experience />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
} 