import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { BiLogOutCircle } from "react-icons/bi";


const Main = () => {
    return (
        <div className="flex">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="flex-1">
                <div className="w-full h-12 bg-black/90 border-b-2 flex justify-end items-center text-white py-2 pr-10">            
                        <li className="list-none flex  items-center gap-1"> <span><BiLogOutCircle /></span>Log out</li>
                </div>
                <div className=" w-full h-screen bg-base-200 px-12">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Main;