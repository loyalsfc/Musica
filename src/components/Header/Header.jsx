import logo from '../../assets/icons/logo.svg'


function Header(){
    return(
        <header className='py-6 flex items-center text-primary-grey'>
            <img src={logo} height={34} alt="logo" className='mr-[35px]' />
            <nav className='flex items-center'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" className="ml-5 bg-transparent placeholder:text-primary-grey focus:outline-0 block w-full" placeholder='Search artist'/>
            </nav>

        </header>
    )
}

export default Header