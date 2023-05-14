import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const open = useSignal(false);
  return (
    <>
      <section class='py-20 bg-yellow-100 sm:py-28'>

        <div class='px-4 mx-auto lg:max-w-screen-lg sm:px-6 lg:px-8'>

          <div class='max-w-2xl'>
            <h2 class='text-purple-900 h2'>
              Frequently asked questions
            </h2>
            <p class='max-w-2xl mt-4 text-xl leading-relaxed text-purple-800 lg:text-left'>
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </p>
          </div>

          <ul class='relative mt-12 space-y-6'>

            <div>
              <img class='absolute hidden h-auto w-28 -left-60 top-10 2xl:block' src='images/question-mark.svg' alt='question' />
              <img class='absolute hidden h-auto w-28 -right-60 bottom-10 2xl:block' src='images/bulb.svg' alt='bulb' />
            </div>

            <li class='w-full px-5 py-6 bg-white sm:px-12 sm:py-8 rounded-3xl'>

              <button class='flex items-center justify-between w-full text-lg sm:text-xl group' onClick$={() => open.value = !open.value}>
                <span class='font-medium text-left text-purple-900 duration-300 ease-in-out group-hover:text-purple-600'>What are your hours and schedules?</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-5 h-6 ml-3 text-purple-700 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class='relative overflow-hidden duration-700 max-h-0' >
                <div class='mt-3 text-base leading-relaxed text-purple-800 sm:text-lg'>
                  Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.
                </div>
              </div>

            </li>

            <li class='w-full px-5 py-6 bg-white sm:px-12 sm:py-8 rounded-3xl'>

              <button class='flex items-center justify-between w-full text-lg sm:text-xl group' onClick$={() => open.value = !open.value}>
                <span class='font-medium text-left text-purple-900 duration-300 ease-in-out group-hover:text-purple-600'>What is your Discipline Policy?</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-5 h-6 ml-3 text-purple-700 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class='relative overflow-hidden duration-700 max-h-0' x-ref="question1" x-bind:style="open ? 'max-height: ' + $refs.question1.scrollHeight + 'px' : ''">
                <div class='mt-3 text-base leading-relaxed text-purple-800 sm:text-lg'>
                  Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.
                </div>
              </div>

            </li>

            <li class='w-full px-5 py-6 bg-white sm:px-12 sm:py-8 rounded-3xl'>

              <button class='flex items-center justify-between w-full text-lg sm:text-xl group' onClick$={() => open.value = !open.value}>
                <span class='font-medium text-left text-purple-900 duration-300 ease-in-out group-hover:text-purple-600'>Do you accommodate allergies and dietary restrictions?</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-5 h-6 ml-3 text-purple-700 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class='relative overflow-hidden duration-700 max-h-0' x-ref="question1">
                <div class='mt-3 text-base leading-relaxed text-purple-800 sm:text-lg'>
                  Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.
                </div>
              </div>

            </li>

            <li class='w-full px-5 py-6 bg-white sm:px-12 sm:py-8 rounded-3xl'>

              <button class='flex items-center justify-between w-full text-lg sm:text-xl group' onClick$={() => open.value = !open.value}>
                <span class='font-medium text-left text-purple-900 duration-300 ease-in-out group-hover:text-purple-600'>Do you offer any transportation options?</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-5 h-6 ml-3 text-purple-700 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class='relative overflow-hidden duration-700 max-h-0' x-ref="question1" x-bind:style="open ? 'max-height: ' + $refs.question1.scrollHeight + 'px' : ''">
                <div class='mt-3 text-base leading-relaxed text-purple-800 sm:text-lg'>
                  Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.
                </div>
              </div>

            </li>

            <li class='w-full px-5 py-6 bg-white sm:px-12 sm:py-8 rounded-3xl'>

              <button class='flex items-center justify-between w-full text-lg sm:text-xl group' onClick$={() => open.value = !open.value}>
                <span class='font-medium text-left text-purple-900 duration-300 ease-in-out group-hover:text-purple-600'>
                  Do you welcome parent involvement? Can I stop by unannounced?
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-5 h-6 ml-3 text-purple-700 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class='relative overflow-hidden duration-700 max-h-0' x-ref="question1" x-bind:style="open ? 'max-height: ' + $refs.question1.scrollHeight + 'px' : ''">
                <div class='mt-3 text-base leading-relaxed text-purple-800 sm:text-lg'>
                  Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.
                </div>
              </div>

            </li>

            <li class='w-full px-5 py-6 bg-white sm:px-12 sm:py-8 rounded-3xl'>

              <button class='flex items-center justify-between w-full text-lg sm:text-xl group' onClick$={() => open.value = !open.value}>
                <span class='font-medium text-left text-purple-900 duration-300 ease-in-out group-hover:text-purple-600'>
                  What is your children-to-teacher ratio?
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-5 h-6 ml-3 text-purple-700 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class='relative overflow-hidden duration-700 max-h-0' x-ref="question1" x-bind:style="open ? 'max-height: ' + $refs.question1.scrollHeight + 'px' : ''">
                <div class='mt-3 text-base leading-relaxed text-purple-800 sm:text-lg'>
                  Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.
                </div>
              </div>

            </li>

          </ul>

        </div>

      </section>
    </>
  )
});