import {NavLink, Outlet} from 'react-router-dom'
const Dashboard = () => {
    return (
        <div className="flex gap-8 mx-4 justify-between">
            <div className="w-64 min-h-full  bg-orange-500">
                <ul className=" m-4 mb-4 space-y-2 flex flex-col gap-4 text-left font-medium  leading-6 text-[16px] text-white">
                    <li className="hover:text-black">
                        <NavLink to="/dashboard">My dashboard</NavLink>
                    </li>
                    <li  className="hover:text-black">
                        <NavLink to="/dashboard/add-sub-admin">Add Sub Admin</NavLink>
                    </li>
                    <li  className="hover:text-black">
                        <NavLink to="/dashboard/add-master-agent">Add Super Agent</NavLink>
                    </li>
                    <li  className="hover:text-black">
                        <NavLink to="/dashboard/add-super-agent">Add Master Agent</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;