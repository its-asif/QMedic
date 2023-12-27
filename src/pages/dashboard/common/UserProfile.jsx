
const UserProfile = () => {
    const userData = {
        name: 'Rifat Zaman',
        email: 'zamanR@femail.com',
        nickname: 'Rifat',
        phone: '01700000000',
        image: "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/333299714_727972668862574_5237370152911858889_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=D33IOWRPZ20AX-yJJNK&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBugvTLBv24SW4fyhMQ-tnrxUckoW60fTv74XSmtqw9Zw&oe=65914EB5",
        age: 69,
        bloodGroup: 'B+',
        labTests : [
            {
                test_id: 1,
                testName: 'Blood Test',
                date: '27 Dec, 2023',
                link: 'https://www.google.com',
            },
            {
                test_id: 2,
                testName: 'MRI Test',
                date: '17 Sept, 2023',
                link: 'https://www.google.com',
            },
            {
                test_id: 3,
                testName: 'Urine Test',
                date: '31 Mar, 2022',
                link: 'https://www.google.com',
            },
        ],
        prescriptions: [
            {
                prescription_id: 1,
                date: '27 Dec, 2023',
                link: 'https://www.google.com',
            },
            {
                prescription_id: 2,
                date: '18 Sept, 2023',
                link: 'https://www.google.com',
            }
        ]
    }

    return (
        <div className=" mt-5 mx-20">
            {/* user personal details */}
            <div className="flex items-center gap-5 ">
                {/* profile picture */}
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={userData.image} />
                    </div>
                </div>
                {/* text */}
                <div className="flex gap-2 justify-center items-center">
                    <h1 className="text-4xl font-semibold">{userData.name}</h1>
                    <h2  className="text-3xl">({userData.nickname})</h2>

                    <div className="text-6xl mb-2">·</div>

                    <h2 className="text-3xl">{userData.age}</h2>
                    
                    <div className="text-6xl mb-2">·</div>

                    <h2 className="text-3xl">{userData.bloodGroup}</h2>
                </div>
            </div>

            {/* Show reports */}
            <div className="mt-10">
                {/* Lab Tests */}
                <div className="flex  gap-x-24">
                    <h1 className="text-2xl">Lab Tests :</h1>
                    
                    <div>
                        <ul className="list-disc">
                            {
                                userData.labTests.map((test, index) =>  (
                                    <li className="mb-2" >
                                        <a href={test.link} className="font-semibold hover:underline">
                                        {test.testName }
                                        </a>, {test.date}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* Prescription */}
                <div className="flex  gap-x-16 mt-6">
                    <h1 className="text-2xl">Prescription :</h1>
                    
                    <div>
                        <ul className="list-disc">
                            {
                                userData.prescriptions.map((test, index) =>  (
                                    <li className="font-semibold hover:underline mb-2" >
                                        <a href={test.link}>{test.date}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;