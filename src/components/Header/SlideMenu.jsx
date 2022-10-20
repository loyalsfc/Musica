import NavItems from "../sideNav/NavItems"

import profileIcon from '../../assets/icons/profile.svg'
import logoutIcon from '../../assets/icons/logout.svg'
import { Link } from 'react-router-dom'
import { useRef } from "react"

function SlideMenu({handleClick}){
    
    return(
        <nav className="-top-full navMenuSlideDown transition-all w-full h-full fixed end-0 bg-dark-alt z-50 p-10 pt-[7rem] -ml-6 lg:hidden">
            <button onClick={handleClick} className="absolute text-white top-4 right-4 text-2xl"><i className="fa-solid fa-xmark"></i></button>
            {/* <div> */}
                <Link to="/" className="flex" onClick={handleClick}>
                    <svg width="22" height="22" onClick={()=>setPlaylistBG(false)} className='mb-14 transition-all mr-8 hover:scale-125' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="1">
                        <path d="M8.38171 19.0503V16.239C8.3817 15.5266 8.96099 14.9478 9.67852 14.9433H12.3132C13.0339 14.9433 13.6182 15.5234 13.6182 16.239V19.0421C13.6182 19.66 14.1203 20.1622 14.7427 20.1667H16.5401C17.3796 20.1688 18.1855 19.8392 18.7799 19.2507C19.3742 18.6621 19.7083 17.8629 19.7083 17.0294V9.0437C19.7083 8.37045 19.4077 7.73183 18.8875 7.29989L12.781 2.45142C11.7136 1.60337 10.1891 1.63077 9.15323 2.51661L3.17805 7.29989C2.6333 7.7191 2.30772 8.35961 2.29163 9.0437V17.0213C2.29163 18.7584 3.71006 20.1667 5.45978 20.1667H7.21623C7.51587 20.1688 7.80399 20.0522 8.01664 19.8426C8.2293 19.633 8.34889 19.3478 8.34888 19.0503H8.38171Z" fill="#FACD66"/>
                        </g>
                    </svg>
                    <p className="text-white">Home</p>
                </Link>
                <Link to="/collection" className="flex" onClick={handleClick}>
                    <svg width="22" height="22" onClick={()=>setPlaylistBG(false)} className='mb-14 mr-8 transition-all hover:scale-125' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5834 4.35416H14.6667V2.98832C14.6667 2.22749 14.0434 1.60416 13.2825 1.60416H8.71754C7.95671 1.60416 7.33337 2.22749 7.33337 2.98832V4.35416H6.41671C5.40837 4.35416 4.58337 5.17916 4.58337 6.18749V6.30666C4.87671 6.22416 5.17921 6.18749 5.50004 6.18749H16.5C16.8209 6.18749 17.1234 6.22416 17.4167 6.30666V6.18749C17.4167 5.17916 16.5917 4.35416 15.5834 4.35416Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M12.7692 15.5192C12.4759 15.5192 12.2467 15.7575 12.2467 16.0417C12.2467 16.3258 12.485 16.5642 12.7692 16.5642C13.0534 16.5642 13.2917 16.3258 13.2917 16.0417C13.2917 15.7575 13.0534 15.5192 12.7692 15.5192Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M8.31413 16.3258C8.02079 16.3258 7.79163 16.5642 7.79163 16.8483C7.79163 17.1325 8.02996 17.3708 8.31413 17.3708C8.59829 17.3708 8.83663 17.1325 8.83663 16.8483C8.83663 16.5642 8.60746 16.3258 8.31413 16.3258Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M17.4167 7.68167C17.1234 7.59917 16.8209 7.5625 16.5 7.5625H5.50004C5.17921 7.5625 4.87671 7.59917 4.58337 7.68167C3.00671 8.09417 1.83337 9.53333 1.83337 11.2292V16.7292C1.83337 18.7458 3.48337 20.3958 5.50004 20.3958H16.5C18.5167 20.3958 20.1667 18.7458 20.1667 16.7292V11.2292C20.1667 9.53333 18.9934 8.09417 17.4167 7.68167ZM14.6667 12.1733V16.0417C14.6667 17.0867 13.8142 17.9392 12.7692 17.9392C11.7242 17.9392 10.8717 17.0867 10.8717 16.0417C10.8717 14.9967 11.7242 14.1442 12.7692 14.1442C12.9525 14.1442 13.1267 14.1808 13.2917 14.2267V13.0717L10.2209 13.9058V16.8483C10.2209 16.8575 10.2209 16.8667 10.2117 16.8758C10.2025 17.9117 9.35004 18.755 8.31421 18.755C7.26921 18.755 6.41671 17.9025 6.41671 16.8483C6.41671 15.7942 7.26921 14.9508 8.31421 14.9508C8.49754 14.9508 8.67171 14.9875 8.84587 15.0333V13.3833V11.9625C8.84587 11.1742 9.34087 10.5325 10.0925 10.3308L12.5217 9.66167C13.3009 9.45083 13.7959 9.6525 14.0709 9.86333C14.3459 10.0742 14.6667 10.4867 14.6667 11.3025V12.1733Z" fill="#EFEEE0" fillOpacity="0.25"/>
                    </svg>
                    <p>My collection</p>
                </Link>
                <div className="flex">
                    <svg width="22" height="22" className='mb-14 mr-8 transition-all hover:scale-125' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.10419 1.83333V4.58333H6.41669C6.17835 4.58333 5.94919 4.5925 5.72919 4.62916V1.83333C5.72919 1.45749 6.04085 1.14583 6.41669 1.14583C6.79252 1.14583 7.10419 1.45749 7.10419 1.83333Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M15.5833 4.58333H6.41665C6.17831 4.58333 5.94915 4.5925 5.72915 4.62916C3.36415 4.90416 1.83331 6.65499 1.83331 9.16666V15.5833C1.83331 18.3333 3.66665 20.1667 6.41665 20.1667H15.5833C18.3333 20.1667 20.1666 18.3333 20.1666 15.5833V9.16666C20.1666 6.41666 18.3333 4.58333 15.5833 4.58333ZM7.22331 14.6667C5.95831 14.6667 4.93165 13.64 4.93165 12.375C4.93165 11.11 5.95831 10.0833 7.22331 10.0833C8.48831 10.0833 9.51498 11.11 9.51498 12.375C9.51498 13.64 8.48831 14.6667 7.22331 14.6667ZM13.1816 14.8958H12.7233C12.3475 14.8958 12.0358 14.5842 12.0358 14.2083C12.0358 13.8325 12.3475 13.5208 12.7233 13.5208H13.1816C13.5575 13.5208 13.8691 13.8325 13.8691 14.2083C13.8691 14.5842 13.5575 14.8958 13.1816 14.8958ZM16.39 14.8958H15.9316C15.5558 14.8958 15.2441 14.5842 15.2441 14.2083C15.2441 13.8325 15.5558 13.5208 15.9316 13.5208H16.39C16.7658 13.5208 17.0775 13.8325 17.0775 14.2083C17.0775 14.5842 16.7658 14.8958 16.39 14.8958ZM16.39 11.2292H12.7233C12.3475 11.2292 12.0358 10.9175 12.0358 10.5417C12.0358 10.1658 12.3475 9.85416 12.7233 9.85416H16.39C16.7658 9.85416 17.0775 10.1658 17.0775 10.5417C17.0775 10.9175 16.7658 11.2292 16.39 11.2292Z" fill="#EFEEE0" fillOpacity="0.25"/>
                    </svg>
                    <p>Radio</p>
                </div>
                <div className="flex">
                    <svg width="22" height="22" viewBox="0 0 22 22" className='mb-14 mr-8 transition-all hover:scale-125' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3125 7.205H1.83331V14.8408C1.83331 14.8958 1.83331 14.9508 1.84248 14.9967H10.3125V7.205Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M7.04919 5.83H10.3125V1.83333H7.07669V5.71999C7.07669 5.75666 7.05836 5.79333 7.04919 5.83Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M5.70168 5.72V1.98C3.66668 2.40166 2.33751 3.75833 1.95251 5.83H5.72001C5.71085 5.79333 5.70168 5.75666 5.70168 5.72Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M14.8683 1.83333H11.6875V5.83H14.8683V1.83333Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M16.2342 5.83001H20.0475C19.6625 3.74001 18.315 2.37417 16.2434 1.97084V5.80251C16.2434 5.81167 16.2342 5.82084 16.2342 5.83001Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M16.2433 20.0292C18.2508 19.635 19.5708 18.3517 20.0017 16.3717H16.2433V20.0292Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M14.8683 16.3717H11.6875V20.1667H14.8683V16.3717Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M11.6875 14.9967H20.1575C20.1667 14.9508 20.1667 14.8958 20.1667 14.8408V7.205H11.6875V14.9967Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M10.3125 16.3717H7.07666V20.1667H10.3125V16.3717Z" fill="#EFEEE0" fillOpacity="0.25"/>
                        <path d="M1.99835 16.3717C2.42919 18.3333 3.73085 19.6167 5.70169 20.02V16.3717H1.99835Z" fill="#EFEEE0" fillOpacity="0.25"/>
                    </svg>
                    <p>Music Video</p>
                </div>
                <div className='flex'>
                    <img src={profileIcon} className="mb-14 mr-8 transition-all hover:scale-125"/>
                    <p>Profile</p>
                </div>
                <div className="flex">
                    <img src={logoutIcon} className="mr-8 transition-all hover:scale-125"/>
                    <p>Logout</p>
                </div>
            </nav>
        // </div>
    )
}

export default SlideMenu