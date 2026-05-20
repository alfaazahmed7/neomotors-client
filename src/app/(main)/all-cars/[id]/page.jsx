import CarDetails from '@/components/Explore-Cars/CarDetails';

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`
    );
    const car = await res.json();

    return (
        <CarDetails car={car} />
    );
};

export default CarDetailsPage;