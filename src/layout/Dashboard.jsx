import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            This is Dashboard
            <Outlet />
        </div>
    );
};

export default Dashboard;