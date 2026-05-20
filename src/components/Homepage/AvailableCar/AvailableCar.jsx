import CarCardPage from "@/components/Explore-Cars/CarCard";

const AvailableCar = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`);
    const data = await res.json();
    const cars = data.filter(car => car.isNew).slice(0, 6);

    return (
        <div className="bg-[#151719] py-20">
            <div className="w-10/12 mx-auto">
                <div className="text-center pb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Vehicles</h2>
                    <p className="text-[#6c757d] max-w-[700px] mx-auto">Explore vehicles built for every lifestyle and budget. From sleek sedans to powerful SUVs, NeoMotors combines performance, technology, and everyday comfort.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        cars.map(car => (
                            <CarCardPage
                                key={car._id}
                                car={car}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableCar;