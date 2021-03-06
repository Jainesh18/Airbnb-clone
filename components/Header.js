import Image from 'next/image';
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    SearchIcon,
    UsersIcon
} from '@heroicons/react/solid'

function Header() {
    return (
        <header
            className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* Left */}
            <div
                className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left' />
            </div>
            {/* Middle */}
            <div
                className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input
                    className='pl-5 text-sm text-gray-600 
                placeholder-gray-400 flex-grow bg-transparent outline-none'
                    type='text'
                    palceholder='Start Your Search' />
                <SearchIcon
                    className='h-8 hidden md:inline-flex md:mx-2 
                bg-red-400 text-white rounded-full p-2 cursor-pointer' />
            </div>
            {/* Right */}
            <div className='flex items-center justify-end space-x-4'>
                <p className='hidden md:inline-flex'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>
                <div className='flex items-center space-x-2 cursor-pointer border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>
        </header>
    )
}

export default Header;