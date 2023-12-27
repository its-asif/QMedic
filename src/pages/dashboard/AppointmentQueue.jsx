
const AppointmentQueue = () => {

    const appointmentQueueData = {
        doctor: "Dr. Ayesha Rahman",
        hospital: "Crescent Hospital and Diagnostic Center",
        patients: [
            {
                id : 1,
                name: "Mahedi Hassen",
                appointmentTime: "06:15 PM",
                isPresent: false,
            },
            {
                id : 2,
                name: "Mahedi Hassen",
                appointmentTime: "06:45 PM",
                isPresent: true,
            }
        ]
    }

    return (
        <div>
            <h1 className="text-4xl text-center">Appointment Queue</h1>
            <h2 className="text-xl ml-10">{appointmentQueueData.doctor}</h2>
            <h2 className="text-xl ml-10">{appointmentQueueData.hospital}</h2>
            
            <div className="overflow-x-auto m-10">
                <table className="table">
                    {/* table head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Patient Name</th>
                        <th>Appointment Time</th>
                        <th>Attendence</th>
                    </tr>
                    </thead>
                    {/* table body */}
                    <tbody>
                        {
                            appointmentQueueData.patients.map((patient, index) => (
                                <tr key={patient.id}>
                                    
                                    <th>{index + 1}</th>
                                    <td>{patient.name}</td>
                                    <td>{patient.appointmentTime}</td>

                                    {/* checkbox */}
                                    <td>
                                        <input type="checkbox" 
                                        checked={patient.isPresent} 
                                        className="checkbox checkbox-primary" />
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

export default AppointmentQueue;