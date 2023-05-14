import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import About from '~/components/about';
import Footer from '~/components/footer';
import Cat from '~/components/footer/cat';
import Header from '~/components/header';
import HeroHome from '~/components/hero/home';
import Faq from '~/components/home/faq';
import Features from '~/components/home/features';
import Programs from '~/components/home/programs';
import Testimonial from '~/components/home/testimonial';

export default component$(() => {
  return (
    <>
    <div class='bg-gradient-to-b from-purple-25 to-purple-50'>
      <Header />
      <HeroHome />
    </div>

    <div class='w-full h-40 sm:h-48 xl:h-52 bg-gradient-to-b from-purple-50 to-yellow-100'></div>

    <Features />

    <About />

    <Programs />

    <Testimonial />

    <Faq />

    <Cat />

    <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Edubase',
  meta: [
    {
      name: 'description',
      content: 'The best education website platform for your favorite schoolsQwik site description',
    },
  ],
};
