import AddCarCardPage from '@/components/Add-Car/AddCarCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const MyAddedCarsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session.user;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/add-car/${user.id}`
    );
    const addedCars = await res.json();

    return (
        <div className="bg-black px-4 py-14 text-white">
            <div className="mx-auto mb-10 max-w-6xl">
                <h1 className="text-3xl font-bold md:text-4xl">
                    My Added Cars
                </h1>

                <p className="mt-2 text-sm text-white/60 md:text-base">
                    Manage all the cars you added to NeoMotors.
                </p>
            </div>

            <div className="space-y-6">
                {addedCars?.map((car) => (
                    <AddCarCardPage
                        key={car._id}
                        car={car}
                    />
                ))}
            </div>

            {/* EMPTY STATE */}
            {addedCars.length === 0 && (
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 px-6 py-20 text-center">
                    <h2 className="text-2xl font-bold">
                        No Cars Added Yet
                    </h2>

                    <p className="mt-3 max-w-md text-white/60">
                        You haven’t added any cars to NeoMotors yet.
                    </p>
                </div>
            )}
        </div>
    );
};

export default MyAddedCarsPage;