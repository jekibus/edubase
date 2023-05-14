import { component$ } from "@builder.io/qwik";
import ContactHeader from "./contact-header";
import Navigation from "./navigation";

export default component$(() => {
  return (
      <header>
        <ContactHeader />
        <Navigation />
      </header>
  )
});