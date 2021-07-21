import React, { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import ActiveLink from '../Helper/ActiveLink'
import Image from 'next/image'

type Props = {
    SideBarClose:Boolean
}

const SideBar = ({SideBarClose}:Props) => {
    const [btnMobileView,setButtonMobileView]:any = useState();
    const [sidebarElement,setSidebarElement]:any = useState();
    console.log("sidebat load")
    useEffect(()=>{

        const btn = document.querySelector(".mobile-menu-button");
        const sidebar = document.querySelector(".sidebar");

        // add our event listener for the click
        btn.addEventListener("click", () => {
            sidebar.classList.toggle("-translate-x-full");
        });
    },[SideBarClose])
    return(
        <>
        <div className="dashboard-page-height sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        
            {/* logo */}
            

            {/* nav */}
            <nav>
                <div className='sidebar-link-height'>

                    <ActiveLink activeClassName="active" href="/profile-page">
                        
                        {/* <Link href="/profile-page"> */}
                            <a href="/profile-page" className="block text-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                Dashboard
                            </a>
                        {/* </Link> */}
                    </ActiveLink>
                    <a href="" className="block text-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Password Manager
                    </a>
                    <a href="" className="block text-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Scan
                    </a>
                    <a href="" className="block text-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Antivirus
                    </a>
                    <a href="" className="block text-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Patching
                    </a>
                    <a href="" className="block text-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Security & Training
                    </a>
                    <a href="" className="block text-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Policy & Procedures
                    </a>
                    <ActiveLink activeClassName="active" href="/pci-manager">

                        <a className="block text-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                            PCI Manager
                        </a>
                    </ActiveLink>
                </div>
                <div>
                <a href="" className="block text-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                       Settings
                    </a>
                    <a href="" className="block text-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Support
                    </a>
                </div>
            </nav>
        </div>
        </>
    )
}

export default SideBar;