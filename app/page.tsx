"use client";

import Feature from "@/Components/Feature";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Nav from "@/Components/Nav";
import Pricing from "@/Components/Pricing";
import Testimony from "@/Components/Testimony";

const page = () => {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Feature/>
        <Pricing/>
        <Testimony/>
        <Footer/>
      </main>
    </div>

  );
}

export default page;