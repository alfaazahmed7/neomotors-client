'use client';

import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddCarField = () => {
    const [tags, setTags] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const inputStyle =
        'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500';

    const selectStyle =
        'w-full bg-[#212529] rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white outline-none transition focus:border-blue-500';

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const carData = {
            userId: user.id,
            userImage: user.image,
            userName: user.name,
            name: form.name.value,
            brand: form.brand.value,
            category: form.category.value,
            year: Number(form.year.value),
            price: Number(form.price.value),
            currency: form.currency.value,
            image: form.image.value,
            shortDescription: form.shortDescription.value,
            description: form.description.value,
            mileage: form.mileage.value,
            fuelType: form.fuelType.value,
            transmission: form.transmission.value,
            horsepower: Number(form.horsepower.value),
            topSpeed: form.topSpeed.value,
            range: form.range.value,
            engine: form.engine.value,
            driveType: form.driveType.value,
            seats: Number(form.seats.value),
            doors: Number(form.doors.value),
            color: form.color.value,
            interiorColor: form.interiorColor.value,
            featured: form.featured.value === 'true',
            isNew: form.isNew.value === 'true',
            rating: Number(form.rating.value),
            reviews: Number(form.reviews.value),
            location: form.location.value,
            availability: form.availability.value,
            departureDate: selectedDate,
            tags: tags
                .split(',')
                .map(tag => tag.trim())
                .filter(tag => tag !== '')
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-car`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carData)
        });

        const data = await res.json();
        toast.success(`You have successfully add ${carData.name} in your list`);
    };

    return (
        <div className="min-h-screen bg-black px-4 py-8 text-white">

            {/* TOP SECTION */}
            <div className="mx-auto max-w-7xl mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                    <div>
                        <h1 className="text-2xl font-bold md:text-3xl">
                            Create a Car Listing
                        </h1>

                        <p className="mt-1 text-sm text-gray-400">
                            Add a new vehicle to your NeoMotors marketplace.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 md:items-end">
                        <span className="rounded-full bg-blue-500/10 px-4 py-1 text-xs text-blue-400">
                            Premium Listing System
                        </span>
                        <span className="text-xs text-gray-500">
                            All fields impact search ranking
                        </span>
                    </div>

                </div>
            </div>

            {/* FORM CONTAINER */}
            <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-5 md:p-8">

                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* BASIC INFO */}
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Basic Information</h2>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                            <input
                                name="name"
                                defaultValue="BMW M4 Competition"
                                placeholder="Car Name"
                                className={inputStyle}
                            />

                            <select name="brand" defaultValue="BMW" className={selectStyle}>
                                <option value="">Select Brand</option>
                                <option>BMW</option>
                                <option>Mercedes-Benz</option>
                                <option>Audi</option>
                                <option>Tesla</option>
                                <option>Porsche</option>
                                <option>Ferrari</option>
                                <option>Lamborghini</option>
                                <option>Toyota</option>
                                <option>Honda</option>
                                <option>Ford</option>
                                <option>Chevrolet</option>
                                <option>Nissan</option>
                            </select>

                            <select name="category" defaultValue="Sports Coupe" className={selectStyle}>
                                <option value="">Select Category</option>
                                <option>Sports Coupe</option>
                                <option>Sedan</option>
                                <option>SUV</option>
                                <option>Luxury</option>
                                <option>Hypercar</option>
                                <option>Convertible</option>
                                <option>Pickup Truck</option>
                                <option>Electric</option>
                                <option>Hatchback</option>
                            </select>

                            <input
                                type="number"
                                name="year"
                                defaultValue={2024}
                                placeholder="Year"
                                className={inputStyle}
                            />

                            <input
                                type="number"
                                name="price"
                                defaultValue={78500}
                                placeholder="Price"
                                className={inputStyle}
                            />

                            <select name="currency" defaultValue="USD" className={selectStyle}>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>BDT</option>
                                <option>GBP</option>
                            </select>

                        </div>
                    </div>

                    {/* MEDIA */}
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Media</h2>

                        <input
                            type="url"
                            name="image"
                            defaultValue="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200"
                            placeholder="Image URL"
                            className={inputStyle}
                        />
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Description</h2>

                        <textarea
                            name="shortDescription"
                            defaultValue="High-performance coupe built for speed and luxury."
                            rows={2}
                            className={inputStyle}
                        />

                        <textarea
                            name="description"
                            defaultValue="The BMW M4 Competition combines aggressive styling, race-inspired engineering, and luxury comfort."
                            rows={4}
                            className={inputStyle}
                        />
                    </div>

                    {/* PERFORMANCE */}
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Performance & Specs</h2>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                            <input name="mileage" defaultValue="8500 km" className={inputStyle} />

                            <select name="fuelType" defaultValue="Petrol" className={selectStyle}>
                                <option>Petrol</option>
                                <option>Diesel</option>
                                <option>Electric</option>
                                <option>Hybrid</option>
                            </select>

                            <select name="transmission" defaultValue="Automatic" className={selectStyle}>
                                <option>Automatic</option>
                                <option>Manual</option>
                            </select>

                            <input name="horsepower" defaultValue={503} type="number" className={inputStyle} />

                            <input name="topSpeed" defaultValue="290 km/h" className={inputStyle} />

                            <input name="range" defaultValue="580 km" className={inputStyle} />

                            <select name="engine" defaultValue="3.0L Twin-Turbo Inline-6" className={selectStyle}>
                                <option>1.5L Turbo</option>
                                <option>2.0L Turbo</option>
                                <option>3.0L Twin-Turbo Inline-6</option>
                                <option>V6</option>
                                <option>V8</option>
                                <option>V10</option>
                                <option>V12</option>
                                <option>Electric Motor</option>
                            </select>

                            <select name="driveType" defaultValue="RWD" className={selectStyle}>
                                <option>RWD</option>
                                <option>FWD</option>
                                <option>AWD</option>
                                <option>4WD</option>
                            </select>

                            <input name="seats" defaultValue={4} type="number" className={inputStyle} />

                            <input name="doors" defaultValue={2} type="number" className={inputStyle} />

                        </div>
                    </div>

                    {/* DESIGN */}
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Design & Appearance</h2>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

                            <select name="color" defaultValue="Black" className={selectStyle}>
                                <option>Black</option>
                                <option>White</option>
                                <option>Silver</option>
                                <option>Blue</option>
                                <option>Red</option>
                            </select>

                            <select name="interiorColor" defaultValue="Black" className={selectStyle}>
                                <option>Black</option>
                                <option>White</option>
                                <option>Brown</option>
                                <option>Red</option>
                                <option>Cream</option>
                            </select>

                            <select name="featured" defaultValue="true" className={selectStyle}>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>

                            <select name="isNew" defaultValue="true" className={selectStyle}>
                                <option value="true">Brand New</option>
                                <option value="false">Used</option>
                            </select>

                        </div>
                    </div>

                    {/* RATINGS */}
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Ratings & Reviews</h2>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                            <input name="rating" defaultValue={4.8} type="number" className={inputStyle} />
                            <input name="reviews" defaultValue={142} type="number" className={inputStyle} />

                        </div>
                    </div>

                    {/* LOCATION */}
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Location & Status</h2>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                            <input name="location" defaultValue="Berlin, Germany" className={inputStyle} />

                            <select name="availability" defaultValue="Available" className={selectStyle}>
                                <option>Available</option>
                                <option>Booked</option>
                                <option>Unavailable</option>
                            </select>

                        </div>
                    </div>

                    {/* TAGS */}
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Tags</h2>

                        <textarea
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="Sport, Luxury, Premium"
                            className={inputStyle}
                        />
                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 cursor-pointer"
                    >
                        Add Car
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddCarField;