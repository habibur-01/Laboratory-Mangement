import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo/logo-light.png"
import { MdKeyboardArrowDown, MdOutlineDashboard } from "react-icons/md";
import { FaFileInvoiceDollar, FaList, FaUser } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { FaMagnifyingGlassLocation, FaUserDoctor } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { LuTestTube2 } from "react-icons/lu";
import { GiHypodermicTest } from "react-icons/gi";
import { useState } from "react";
import "./styles.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-64 bg-black h-full text-white">
            <div className="py-4 border-b-2 px-6">
                <img src={logo} alt="logo" className="w-16 object-cover" />
            </div>
            <div className="px-4">
                <div className=" flex items-center gap-4 text-sm px-2 py-4 border-b-[1px]">
                    <img src="https://i.ibb.co/xC59s8d/team-3.jpg" className="w-10 h-10 rounded-full overflow-hidden" alt="" />
                    <p>Adam Miles</p>
                </div>
                <div className="">
                    <ul>
                        <li className="sidebar"><NavLink to={"/"}><span className="flex items-center gap-2 py-3"><MdOutlineDashboard size={20} />Dashboard</span></NavLink></li>
                        <li className="sidebar"><NavLink to={"/profile"}><span className="flex items-center gap-2 py-3"><FaUser size={20} />Profile</span></NavLink></li>
                        <li className="sidebar"><NavLink to={"/invoices"}><span className="flex items-center gap-2 py-3"><FaFileInvoiceDollar size={20} />Invoices</span></NavLink></li>
                        <li className="sidebar"><NavLink to={"/reports"}><span className="flex items-center gap-2 py-3"><TbReport size={20} />Reports</span></NavLink></li>
                        <li className="sidebar"><NavLink to={"/branches"}><span className="flex items-center gap-2 py-3"><FaMagnifyingGlassLocation size={20} />Branches</span></NavLink></li>
                        <li className="sidebar"><NavLink to={"/tests"}><span className="flex items-center gap-2 py-3"><GrTest size={20} />Tests</span></NavLink></li>
                        <li className="sidebar"><NavLink to={"/cultures"}><span className="flex items-center gap-2 py-3"><LuTestTube2 size={20} />Cultures</span></NavLink></li>
                        <li className="sidebar"><NavLink to={"/cultureOption"}><span className="flex items-center gap-2 py-3"><LuTestTube2 size={20} />Culture Options</span></NavLink></li>
                        <li className="sidebar"><NavLink to={"/antibiotics"}><span className="flex items-center gap-2 py-3"><GiHypodermicTest size={20} />Antibiotics</span></NavLink></li>
                        <li className="sidebar"><NavLink to={"/doctor"}><span className="flex items-center gap-2 py-3"><FaUserDoctor size={20} />Doctor </span></NavLink></li>
                        <li className="relative " onClick={() => setIsOpen(!isOpen)}><NavLink ><span className="flex items-center gap-2 py-3"><FaList size={20} />Price List <span><MdKeyboardArrowDown size={18} /></span></span></NavLink>
                            {
                                isOpen && <><ul className="absolute left-5">
                                    <li className="sidebar"><NavLink to={"/testPrice"}><span className="flex items-center gap-2 py-3 text-sm"><GrTest size={18} />Test</span></NavLink></li>
                                    <li className="sidebar"><NavLink to={"/culturePrice"}><span className="flex items-center gap-2 py-3 text-sm"><LuTestTube2 size={18} />Culture Options</span></NavLink></li>
                                </ul></>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;