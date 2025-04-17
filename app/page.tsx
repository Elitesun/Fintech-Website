"use client";

import Feature from "@/Components/Feature";
import Gallery from "@/Components/Gallery";
import Hero from "@/Components/Hero";
import Nav from "@/Components/Nav";

const page = () => {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Feature/>
      </main>
    </div>

  );
}

export default page;