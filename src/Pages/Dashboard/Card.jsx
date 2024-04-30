import { FaUserDoctor } from "react-icons/fa6";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";


const Card = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">

                <div className="card-body">
                    <figure className="w-14 h-14 rounded-full border-2 bg-[#ff922d]"><FaUserDoctor size={26} color="white" /></figure>
                    <h2 className="text-sm opacity-70">{`Total Doctor's`}</h2>

                    <div className="card-actions justify-end">
                        <p className="card-title">200</p>
                        <div className="flex gap-4">
                            <p ><span className="flex items-center text-xs"><TiArrowSortedUp size={22} color="blue" />155</span></p>
                            <p><span className="flex items-center text-xs"><TiArrowSortedDown size={22} color="red" />45</span></p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;