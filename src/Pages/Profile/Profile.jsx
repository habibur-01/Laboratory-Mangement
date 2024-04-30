import { Link } from "react-router-dom";
import HeaderTitle from "../../Components/Shared/HedaerTitle/HeaderTitle";


const Profile = () => {
    return (
        <div className="">
            <HeaderTitle title={'Profile'}></HeaderTitle>
            <div className="mx-20  flex gap-10">
                <div className="w-96 min-h-fit mt-10">
                    
                             <img src="https://i.ibb.co/xC59s8d/team-3.jpg" className="w-full h-[400px -16px] p-4 border-2 overflow-x-hidden"></img> 
                    
                    <div className="my-4">
                        <Link to={"/dashboard/updateProfile"}><button className="btn w-full bg-[#5369f8] text-white">Edit Profile</button></Link>
                    </div>

                </div>
                <div className="bg-base-200 p-6 text-black min-h-content flex-1">
                    <h1 className="text-lg text-center border-b-4 pb-2">Personal Data</h1>
                    <div className="space-y-2 mx-4 mt-2">
                        <div className="flex justify-between">
                            <div>
                                <p>Name</p>
                            </div>
                            <div>
                                <p>Adam Miles</p>
                            </div>
                        </div>

                        <div className="flex justify-between  ">
                            <div>
                                <p>Email</p>
                            </div>
                            <div>
                                <p>example@example.com</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>Staff ID</p>
                            </div>
                            <div>
                                <p>10254565</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>Date Of Birth</p>
                            </div>
                            <div>
                                <p>31/12/1999</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;