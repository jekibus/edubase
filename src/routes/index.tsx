import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="flex items-center justify-center h-screen">
        <h1 class="mr-3">Hi 👋</h1>
        <p>
          Can't wait to see what you build with <span class="bg-green-200 px-1">Edubase</span>
          <br />
          Happy coding.
        </p>
      </div>
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
