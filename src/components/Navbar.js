import { useState } from "react"
import SnapLogo from "../images/logo.svg"
import OpenNav from "../images/icon-menu.svg"
import CloseNav from "../images/icon-close-menu.svg"
// Nav Icons
import TodoIcon from "../images/icon-todo.svg"
import CalendarIcon from "../images/icon-calendar.svg"
import RemindersIcon from "../images/icon-reminders.svg"
import PlanningIcon from "../images/icon-planning.svg"

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const [featuresExpanded, setFeaturesExpanded] = useState(false)
    const [companyExpanded, setCompanyExpanded] = useState(false)

    function toggleNav() {
        setShowNav(prevState => !prevState)
    }

    function toggleFeatures() {
        setFeaturesExpanded(prevState => !prevState)
    }

    function toggleCompany() {
        setCompanyExpanded(prevState => !prevState)
    }

    return <nav className="flex justify-between items-center px-4 py-6 lg:px-10 lg:py-3">
        <a className="shrink-0" href="."><img className="pointer-events-none" src={SnapLogo} alt="Snap Logo" /></a>
        <button className="lg:hidden shrink-0" onClick={toggleNav}><img className="pointer-events-none z-10" src={OpenNav} alt="Open Navbar" /></button>
        <div className={`${showNav ? "bg-snap-black pointer-events-auto" : "bg-transparent pointer-events-none"} transition left-0 top-0 fixed w-screen h-screen opacity-80 lg:hidden`} />
        <div className={`flex flex-col lg:flex-row gap-4 lg:gap-10 text-snap-gray w-56 lg:w-auto lg:h-auto lg:mr-auto lg:ml-10 px-6 py-6 fixed lg:relative items-start right-0 top-0 ${showNav ? "scale-x-100" : "scale-x-0"} lg:scale-100 origin-right transition h-screen bg-snap-white`}>
            <button className="shrink-0 ml-auto mb-4 focus:outline-none lg:hidden" onClick={toggleNav}>
                <img className="pointer-events-none z-10" src={CloseNav} alt="Open Navbar" />
            </button>
            <button className="flex items-center gap-4 lg:gap-2 lg:text-lg focus:outline-none hover:text-snap-black stroke-snap-gray hover:stroke-snap-black" onClick={toggleFeatures}>
                <span>Features</span>
                <svg className={`fill-snap-white rotate-0 transition ${featuresExpanded && "rotate-180"}`} width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="1.5" d="m1 1 4 4 4-4" /></svg>
            </button>
            <ul className={`flex flex-col gap-5 lg:gap-4 ${!featuresExpanded && "hidden"} ml-4 mt-1 mb-4 lg:absolute lg:p-6 lg:text-lg lg:bg-snap-white lg:rounded-xl top-16 -left-16`}>
                <li className="flex items-center w-full cursor-pointer">
                    <div className="w-5 lg:w-4 mr-3 flex justify-center"><img className="h-5 lg:h-4 justify-self-center" src={TodoIcon} alt="" /></div>
                    <span className="leading-none mt-1">Todo List</span>
                </li>
                <li className="flex items-center w-full cursor-pointer">
                    <div className="w-5 lg:w-4 mr-3 flex justify-center"><img className="h-5 lg:h-4 justify-self-center" src={CalendarIcon} alt="" /></div>
                    <span className="leading-none mt-1">Calendar</span>
                </li>
                <li className="flex items-center w-full cursor-pointer">
                    <div className="w-5 lg:w-4 mr-3 flex justify-center"><img className="h-5 lg:h-4 justify-self-center" src={RemindersIcon} alt="" /></div>
                    <span className="leading-none mt-1">Reminders</span>
                </li>
                <li className="flex items-center w-full cursor-pointer">
                    <div className="w-5 lg:w-4 mr-3 flex justify-center"><img className="h-5 lg:h-4 justify-self-center" src={PlanningIcon} alt="" /></div>
                    <span className="leading-none mt-1">Planning</span>
                </li>
            </ul>
            <button className="flex items-center gap-4 lg:gap-2 lg:text-sm focus:outline-none hover:text-snap-black stroke-snap-gray hover:stroke-snap-black" onClick={toggleCompany}>
                <span>Company</span>
                <svg className={`fill-snap-white rotate-0 transition ${companyExpanded && "rotate-180"}`} width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="1.5" d="m1 1 4 4 4-4" /></svg>
            </button>
            <ul className={`flex flex-col gap-5 lg:gap-4 ${!companyExpanded && "hidden"} ml-5 mt-1 mb-4 lg:absolute lg:p-6 lg:text-sm lg:bg-snap-white lg:rounded-xl top-16 left-32`}>
                <li className="cursor-pointer">History</li>
                <li className="cursor-pointer">Our Team</li>
                <li className="cursor-pointer">Blog</li>
            </ul>
            <button className="lg:text-sm focus:outline-none hover:text-snap-black">Careers</button>
            <button className="lg:text-sm focus:outline-none hover:text-snap-black">About</button>
        </div>
        <div className="hidden lg:flex text-snap-gray text-sm gap-8">
            <button className="px-4 py-2 hover:text-snap-black">Login</button>
            <button className="px-4 py-2 hover:text-snap-black border-2 border-snap-gray hover:border-snap-black rounded-xl">Register</button>
        </div>
    </nav>;
}