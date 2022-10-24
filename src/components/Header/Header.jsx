import logo from '../../assets/icons/logo.svg'
import SlideMenu from './SlideMenu'
import { Context } from '../../Context'
import { useContext } from 'react'

function Header(){
    const {setPlaylistBG} = useContext(Context)

    const toggleMobileMenu = () => {
        document.querySelector('.navMenuSlideDown').classList.toggle('-top-full')
        document.querySelector('.navMenuSlideDown').classList.toggle('top-0')
    }

    const handleClick = (e) => {
        toggleMobileMenu()
        setPlaylistBG(false)
        document.querySelectorAll('.nav-link').forEach(item => {
            console.log(item)
            item.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    }


    return(
        <header className='py-6 flex items-center text-primary-grey overflow-auto'>
            <button className='text-2xl text-white mr-5 lg:hidden ' onClick={toggleMobileMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2330_441)">
                        <path d="M4 8H20" stroke="#EFEEE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 16H20" stroke="#EFEEE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2330_441">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <img src={logo} height={34} alt="logo" className='mr-[35px]' />
            <nav className='flex items-center justify-end  w-full'>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z" stroke="white" strokeOpacity="0.25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26.25 26.25L20.8125 20.8125" stroke="white" strokeOpacity="0.25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

                <input type="search" className="hidden lg:block ml-5 bg-transparent placeholder:text-primary-grey focus:outline-0 block w-full" placeholder='Search artist'/>
            </nav>
            <SlideMenu handleClick={handleClick}/>
        </header>
    )
}

export default Header