
const AppointmentList = () => {
    const appointmentList = [
        {
            appointment_id: 1,
            date: "27 Dec, 2023",
            time: "05:00 PM",
            patients: 2,
        },
        {
            appointment_id: 2,
            date: "27 Dec, 2023",
            time: "06:15 PM",
            patients: 5,
        },
        {
            appointment_id: 3,
            date: "28 Dec, 2023",
            time: "06:15 PM",
            patients: 6,
        },
        {
            appointment_id: 4,
            date: "30 Dec, 2023",
            time: "06:15 PM",
            patients: 6,
        },
        {
            appointment_id: 5,
            date: "31 Dec, 2023",
            time: "06:15 PM",
            patients: 6,
        },
    ]


    const isToday= (date) => {
        const today = new Date();
        const dateToCheck = new Date(date);
        console.log(today);
      
        if (today.toDateString() === dateToCheck.toDateString()) {
          return true;
        }

        return false;
      }

    return (
        <div>
            <h1 className="text-4xl text-center">Appointments</h1>

            <div className="overflow-x-auto m-10">
                <table className="table table-zebra text-center">
                    {/* table head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Patients</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    {/* table body */}
                    <tbody>
                        {
                            appointmentList.map((appointment, index) => (
                                <tr key={appointment.appointment_id}>
                                    <th>{index + 1}</th>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td className="btn btn-sm" >{appointment.patients}</td>
                                    <td>
                                        {
                                            isToday(appointment.date) ? (
                                                <span className="badge badge-success">Today</span>
                                            ) : (
                                                <span className="badge badge-primary">Upcoming</span>
                                            )
                                        }
                                    </td>
                                </tr>
                            ))  
                        }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AppointmentList;