import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Mohammed Bouhaja',
  email: 'mohammed.bouhaja@gmail.com',
  imageUrl:
  'https://media.licdn.com/dms/image/v2/D4E03AQE-aHMLErTfJw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1661775170754?e=1737590400&v=beta&t=W8Q3-Sbn05hDq9SAVZ-6ecjnh2DeayPfdF38OOLP7qA'
  }
const navigation = [
  { name: 'About', href: '#about', current: false },
  { name: 'Formations', href: '#formations', current: false },
  { name: 'Experience', href: '#experience', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Contact', href: 'mailto:mohammedbouhaja@example.com?subject=Contact from Website', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      <div className={`min-h-full ${darkMode ? 'bg-[#01161E] text-white' : 'bg-white text-black'}`}>
        <Disclosure as="nav" className="bg-[#598392] dark:bg-[#124559]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0"></div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-[#000] dark:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Dark Mode Button */}
                  <button
                    onClick={toggleDarkMode}
                    type="button"
                    className="relative rounded-full  dark:bg-[#124559] bg-[#598392] p-1 text-gray-400 hover:text-white "
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Toggle dark mode</span>
                    {darkMode ? <SunIcon className="size-6" aria-hidden="true" /> : <MoonIcon className="size-6" aria-hidden="true" />}
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm ">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                      </MenuButton>
                    </div>
                  </Menu>
                </div>
              </div>
              
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <button
                  onClick={toggleDarkMode}
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-[#598392] dark:bg-[#124559] p-1 text-gray-400 hover:text-white "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Toggle dark mode</span>
                  {darkMode ? <SunIcon className="size-6" aria-hidden="true" /> : <MoonIcon className="size-6" aria-hidden="true" />}
                </button>
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-[#598392] dark:bg-[#124559] p-2 text-gray-400 hover:bg-[#598392] dark:hover:bg-[#124559] hover:text-white ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
                
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{user.name}</div>
                  <div className="text-sm font-medium text-gray-400">{user.email}</div>
                </div>
                <button
                  onClick={toggleDarkMode}
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-[#598392] dark:bg-[#124559] p-1 text-gray-400 hover:text-white "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Toggle dark mode</span>
                  {darkMode ? <SunIcon className="size-6" aria-hidden="true" /> : <MoonIcon className="size-6" aria-hidden="true" />}
                </button>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  )
}
