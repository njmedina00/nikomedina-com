import './App.css';

import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
// import ValueProp from './components/ValueProp'
// import Process from './components/Process'
import Contact from './components/Contact';

const sections = [
  { id: 'hero', component: <Hero /> },
  { id: 'services', component: <Services /> },
  // { id: 'why', component: <ValueProp /> },
  // { id: 'process', component: <Process /> },
  { id: 'contact', component: <Contact /> },
];

function App() {
  const [visibleSections] = useState([
    'hero',
    'services',
    'why',
    'process',
    'contact',
  ]);

  // function toggleSection(id: string) {
  //   setVisibleSections((prev) =>
  //     prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
  //   );
  // }

  return (
    <>
      <Header />
      <main>
        {sections
          .filter((section) => visibleSections.includes(section.id))
          .map((section) => (
            <div key={section.id}>{section.component}</div>
          ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
