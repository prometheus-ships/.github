import { Hero } from "../sections/Hero";
import { Stats } from "../sections/Stats";
import { Products } from "../sections/Products";
import { OpenSource } from "../sections/OpenSource";
import { Mission } from "../sections/Mission";
import { Values } from "../sections/Values";
import { Careers } from "../sections/Careers";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <OpenSource />
      <Mission />
      <Values />
      <Careers />
      <Contact />
    </>
  );
}
