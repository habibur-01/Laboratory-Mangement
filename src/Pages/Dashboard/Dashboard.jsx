import { FaUserDoctor } from "react-icons/fa6";
import HeaderTitle from "../../Components/Shared/HedaerTitle/HeaderTitle";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FaBed, FaUser, FaUserInjured } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { Bar, BarChart, CartesianGrid, Legend,  Rectangle,  Tooltip, XAxis, YAxis } from "recharts";
import { LuTestTube2 } from "react-icons/lu";


const Dashboard = () => {
    const data = [
        {
            name: 'Total Tests',
            amt: 1000
        },
        {
            name: 'Pending',

            amt: 400,
        },
        {
            name: 'Completed',
            amt: 600,
        },


    ];
    const dataCultures = [
        {
            name: 'Total',
            amt: 1000
        },
        {
            name: 'Pending',

            amt: 1200,
        },
        {
            name: 'Completed',
            amt: 800,
        },


    ];
    return (
        <div className="  ">
            <HeaderTitle title={'Dashboard'}></HeaderTitle>
            <div className="grid grid-cols-4 gap-6">
                <div className="card w-80 bg-base-100 shadow-xl">

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
                <div className="card w-80 bg-base-100 shadow-xl">

                    <div className="card-body">
                        <figure className="w-14 h-14 rounded-full border-2 bg-[#5246a0]"><FaUserInjured size={26} color="white" /></figure>
                        <h2 className="text-sm opacity-70">{`Total Patient's`}</h2>

                        <div className="card-actions justify-end">
                            <p className="card-title">1000</p>
                            <div className="flex gap-4">
                                <p ><span className="flex items-center text-xs"><TiArrowSortedUp size={22} color="blue" />755</span></p>
                                <p><span className="flex items-center text-xs"><TiArrowSortedDown size={22} color="red" />150</span></p>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">

                    <div className="card-body">
                        <figure className="w-14 h-14 rounded-full border-2 bg-[#5246a0]"><FaBed size={26} color="white" /></figure>
                        <h2 className="text-sm opacity-70">{`Total Bed`}</h2>

                        <div className="card-actions justify-end">
                            <p className="card-title">1100</p>
                            <div className="flex gap-4">
                                <p ><span className="flex items-center text-xs"><TiArrowSortedUp size={22} color="blue" />1000</span></p>
                                <p><span className="flex items-center text-xs"><TiArrowSortedDown size={22} color="red" />100</span></p>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">

                    <div className="card-body">
                        <figure className="w-14 h-14 rounded-full border-2 bg-[#e6e33b]"><FaUser size={26} color="white" /></figure>
                        <h2 className="text-sm opacity-70">{`Total Staff`}</h2>

                        <div className="card-actions justify-end">
                            <p className="card-title">212</p>
                            <div className="flex gap-4">
                                <p ><span className="flex items-center text-xs"><TiArrowSortedUp size={22} color="blue" />200</span></p>
                                <p><span className="flex items-center text-xs"><TiArrowSortedDown size={22} color="red" />12</span></p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <h1 className="text-lg pb-10">Total Survey</h1>
                <div className="bg-base-100 w-full rounded-md py-10 flex border-b-2">
                    <div className="w-[25%] flex flex-col justify-center items-center border-r-2">
                        <figure className="mb-4"><GrTest size={30} color="#5246a0" /></figure>
                        <h2 className="text-lg font-semibold">1000</h2>
                        <p className="text-sm opacity-70 mt-2">Total Tests</p>
                    </div>
                    <div className="w-[25%] flex flex-col justify-center items-center border-r-2">
                        <figure className="mb-4"><GrTest size={30} color="#5246a0" /></figure>
                        <h2 className="text-lg font-semibold">600</h2>
                        <p className="text-sm opacity-70 mt-2">Completed Tests</p>
                    </div>
                    <div className="w-[25%] flex flex-col justify-center items-center border-r-2">
                        <figure className="mb-4"><GrTest size={30} color="#5246a0" /></figure>
                        <h2 className="text-lg font-semibold">400</h2>
                        <p className="text-sm opacity-70 mt-2">Pending Tests</p>
                    </div>
                    <div className="w-[25%] flex flex-col justify-center items-center ">
                        {/* <ResponsiveContainer width="100%" height="100%"> */}
                        <BarChart
                            width={350}
                            height={200}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amt" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />

                        </BarChart>
                        {/* </ResponsiveContainer> */}
                    </div>

                </div>
                <div className="bg-base-100 w-full rounded-md py-10 flex ">
                    <div className="w-[25%] flex flex-col justify-center items-center border-r-2">
                        <figure className="mb-4"><LuTestTube2 size={25} color="#188cd1" /></figure>
                        <h2 className="text-lg font-semibold">2000</h2>
                        <p className="text-sm opacity-70 mt-2">Total Tests</p>
                    </div>
                    <div className="w-[25%] flex flex-col justify-center items-center border-r-2">
                        <figure className="mb-4"><LuTestTube2 size={25} color="#188cd1" /></figure>
                        <h2 className="text-lg font-semibold">800</h2>
                        <p className="text-sm opacity-70 mt-2">Completed Tests</p>
                    </div>
                    <div className="w-[25%] flex flex-col justify-center items-center border-r-2">
                        <figure className="mb-4"><LuTestTube2 size={25} color="#188cd1" /></figure>
                        <h2 className="text-lg font-semibold">1200</h2>
                        <p className="text-sm opacity-70 mt-2">Pending Tests</p>
                    </div>
                    <div className="w-[25%] flex flex-col justify-center items-center ">
                        <BarChart
                            width={350}
                            height={200}
                            data={dataCultures}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amt" fill="#188cd1" activeBar={<Rectangle fill="pink" stroke="blue" />} />

                        </BarChart>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;