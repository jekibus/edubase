import { component$, useSignal } from "@builder.io/qwik"
import { QwikLogo } from "../icons/qwik";

export default component$(() => {
  const open = useSignal(false);
  return (
    <div class='px-4 sm:px-6'>
      <nav class='flex items-center max-w-screen-xl pt-5 mx-auto'>
        <div class='flex items-center justify-between w-full'>
          <div class='items-center justify-between hidden lg:flex md:space-x-6 lg:space-x-10'>
            <a href="/">
              <div class="relative p-0.5 group">
                <span class="relative z-10 text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">Home</span>
                <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
              </div>
            </a>
            <a href="/about-us.html">
              <div class="relative p-0.5 group">
                <span class="relative z-10 text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">About</span>
                <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
              </div>
            </a>

            <div class='relative'>
              <button
                type='button'
                aria-expanded="false"
                onClick$={() => open.value = !open.value}
              >
                <div class="relative p-0.5 group">
                  <span class="relative z-10 flex items-center text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">
                    Programs

                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1.5 w-5 h-5 transform duration-300 ease-in-out" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>

                  </span>
                  <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                </div>
              </button>
              { open.value && 
              <div
                class='absolute z-20 w-screen max-w-xs p-4 mt-3 -translate-x-1/2 bg-white border shadow-lg left-1/2 border-gray-50 rounded-2xl'
              >
                <div
                  onClick$={() => open.value = false}
                >
                  <a href='/program.html' class='block w-full py-4 transition duration-200 ease-in-out rounded-xl sm:p-5 hover:bg-purple-25 group'>
                    <h5 class='text-lg font-semibold text-purple-600'>
                      Toddler Program
                    </h5>
                    <p class='mt-1 text-sm text-purple-800 opacity-90'>
                      Curabitur non nulla sit amet nisl tempu convallis quis ac lectus.
                    </p>
                  </a>
                  <hr class="my-1 border-purple-200/30 sm:my-2" />
                  <a href='/program.html' class='block w-full py-4 transition duration-200 ease-in-out rounded-xl sm:p-5 hover:bg-purple-25 group'>
                    <h5 class='text-lg font-semibold text-purple-600'>
                      Preschool
                    </h5>
                    <p class='mt-1 text-sm text-purple-800 opacity-90'>
                      Curabitur non nulla sit amet nisl tempu convallis quis ac lectus.
                    </p>
                  </a>
                  <hr class="my-1 border-purple-200/30 sm:my-2" />
                  <a href='/program.html' class='block w-full py-4 transition duration-200 ease-in-out rounded-xl sm:p-5 hover:bg-purple-25 group'>
                    <h5 class='text-lg font-semibold text-purple-600'>
                      Kindergarten
                    </h5>
                    <p class='mt-1 text-sm text-purple-800 opacity-90'>
                      Curabitur non nulla sit amet nisl tempu convallis quis ac lectus.
                    </p>
                  </a>
                  <hr class="my-1 border-purple-200/30 sm:my-2" />
                  <a href='/program.html' class='block w-full py-4 transition duration-200 ease-in-out rounded-xl sm:p-5 hover:bg-purple-25 group'>
                    <h5 class='text-lg font-semibold text-purple-600'>
                      Elementary School
                    </h5>
                    <p class='mt-1 text-sm text-purple-800 opacity-90'>
                      Curabitur non nulla sit amet nisl tempu convallis quis ac lectus.
                    </p>
                  </a>
                  <hr class="my-1 border-purple-200/30 sm:my-2" />
                  <a href='/program.html' class='block w-full py-4 transition duration-200 ease-in-out rounded-xl sm:p-5 hover:bg-purple-25 group'>
                    <h5 class='text-lg font-semibold text-purple-600'>
                      Summer Camp
                    </h5>
                    <p class='mt-1 text-sm text-purple-800 opacity-90'>
                      Curabitur non nulla sit amet nisl tempu convallis quis ac lectus.
                    </p>
                  </a>
                </div>
              </div>
              }
            </div>

            <a href="/gallery.html">
              <div class="relative p-0.5 group">
                <span class="relative z-10 text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">Gallery</span>
                <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
              </div>
            </a>
            <a href="/parents.html">
              <div class="relative p-0.5 group">
                <span class="relative z-10 text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">Parents</span>
                <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
              </div>
            </a>
            <a href="/contact.html">
              <div class="relative p-0.5 group">
                <span class="relative z-10 text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">Contact</span>
                <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
              </div>
            </a>
          </div>

          <div class='hidden lg:block'>
            <a class="text-lg font-semibold text-purple-900 bg-yellow-500 btn hover:bg-yellow-600" href="contact.html">
              Enroll today
            </a>
          </div>

          <div class="flex-grow-0 flex-shrink-0 block w-48 lg:hidden sm:w-52">
            <a href="index.html">
              <QwikLogo />
            </a>
          </div>

          <div class='block lg:hidden'>
            <button
              class='relative z-50 w-6 h-5 transition duration-500 ease-in-out transform rotate-0 cursor-pointer group focus:outline-none' onClick$={() => open.value = !open.value}
            >
              <span class='absolute top-0 left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-purple-900 rounded-full opacity-100 group-hover:bg-purple-600'></span>
              <span class='absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-purple-900 rounded-full opacity-100 top-2 group-hover:bg-purple-600'></span>
              <span class='absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-purple-900 rounded-full opacity-100 top-2 group-hover:bg-purple-600'></span>
              <span class='absolute left-0 block w-full h-1 transition duration-200 ease-in-out transform rotate-0 bg-purple-900 rounded-full opacity-100 top-4 group-hover:bg-purple-600'></span>
            </button>
            
            { open.value && 
            <div
              class='absolute top-0 left-0 z-40 w-screen px-4 py-16 overflow-y-scroll bg-gradient-to-tr from-purple-600 to-purple-600 sm:px-8'
              onClick$={() => open.value = false}
              >
              <div class='flex flex-col items-center justify-center w-full h-full'>

                <div class='flex flex-col items-center w-full mx-auto space-y-6 justify-evenly'>
                  <a href="/">
                    <div class="relative p-0.5 group">
                      <span class="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">Home</span>
                      <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                    </div>
                  </a>

                  <a href="/about-us.html">
                    <div class="relative p-0.5 group">
                      <span class="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">About</span>
                      <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                    </div>
                  </a>

                  <a href="/gallery.html">
                    <div class="relative p-0.5 group">
                      <span class="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">Gallery</span>
                      <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                    </div>
                  </a>

                  <a href="/parents.html">
                    <div class="relative p-0.5 group">
                      <span class="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">Parents</span>
                      <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                    </div>
                  </a>

                  <a href="/contact.html">
                    <div class="relative p-0.5 group">
                      <span class="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">Contact</span>
                      <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                    </div>
                  </a>

                  <a class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold leading-normal text-center text-purple-900 duration-300 ease-in-out bg-yellow-400 rounded-full" href="#">
                    Enroll today
                  </a>

                </div>

                <hr class='w-full my-8 border-purple-200 sm:my-10 border-opacity-30' />

                <div class='w-full max-w-md mx-auto'>
                  <p class='text-lg font-semibold tracking-wider text-center text-purple-200 uppercase sm:text-left'>
                    Programs
                  </p>
                  <div class='grid gap-4 mt-4 justify-items-center sm:justify-items-start sm:grid-cols-2 sm:gap-x-8'>
                    <a href="/program.html">
                      <div class="relative p-0.5 group">
                        <span class="relative z-10 text-xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">Toddler Program</span>
                        <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                      </div>
                    </a>

                    <a class='sm:justify-self-end' href="/program.html">
                      <div class="relative p-0.5 group">
                        <span class="relative z-10 text-xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">Preschool</span>
                        <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                      </div>
                    </a>

                    <a href="/program.html">
                      <div class="relative p-0.5 group">
                        <span class="relative z-10 text-xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">Kindergarten</span>
                        <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                      </div>
                    </a>

                    <a class='sm:justify-self-end' href="/program.html">
                      <div class="relative p-0.5 group">
                        <span class="relative z-10 text-xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">Elementary School</span>
                        <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                      </div>
                    </a>

                    <a href="/program.html">
                      <div class="relative p-0.5 group">
                        <span class="relative z-10 text-xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">Summer Camp</span>
                        <span class="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100"></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        </div >
      </nav >
    </div >
  )
});