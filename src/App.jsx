// src/App.jsx
import MainLayout from "./layouts/MainLayout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// function App() {
//   return (
//     <MainLayout>
//       <Header />

//       {/* add top padding equal to header height */}
//       <div className="pt-20">
//         <section id="home"><Hero /></section>
//         <section id="how-it-works"><HowItWorks /></section>
//         <section id="why-us"><WhyChooseUs /></section>
//         <section id="testimonials"><Testimonials /></section>
//         <section id="contact"><ContactForm /></section>
//         <Footer />
//       </div>
//     </MainLayout>
//   );
// }

//

import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <MainLayout>
      <Header />
      <div className="pt-20">
        <section id="home">
          <Hero />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="why-us">
          <WhyChooseUs />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
        <Footer />
      </div>

      {/* Chat widget in mock mode: */}
      <ChatWidget />

      {/* Or, for real OpenAI responses: */}
      {/* <ChatWidget realMode={true} /> */}
    </MainLayout>
  );
}
export default App;
