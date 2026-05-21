'use client';
import { useState } from 'react';
import { Modal, Button, ModalTrigger } from '@heroui/react';
import {
    FaCheckCircle,
    FaStickyNote,
    FaUserTie,
    FaArrowRight,
} from 'react-icons/fa';

const BookingFormField = ({ handleBooking, user }) => {
    const [driverNeeded, setDriverNeeded] = useState('No');
    const [isBooked, setIsBooked] = useState(false);

    const handleConfirmBooking = async () => {
        await handleBooking();

        if (user) {
            setIsBooked(true);
        }
    };

    return (
        <Modal>

            {/* OPEN BUTTON */}
            <ModalTrigger className="w-full">
                <button
                    className={`w-full rounded-2xl border py-4 text-lg font-bold transition duration-300 cursor-pointer ${isBooked
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-white/15 text-white hover:bg-white hover:text-black'
                        }`}
                >
                    {isBooked ? 'Booked' : 'Book Now'}
                </button>
            </ModalTrigger>

            {/* BACKDROP */}
            <Modal.Backdrop className="bg-black/70 backdrop-blur-md">
                {/* CONTAINER */}
                <Modal.Container className="flex items-center justify-center p-4">
                    {/* DIALOG */}
                    <Modal.Dialog className="w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-[#111827] shadow-[0_20px_80px_rgba(0,0,0,0.7)]">
                        {/* HEADER */}
                        <Modal.Header className="border-b border-white/10 px-6 py-5 md:px-8">
                            <div>
                                <p className="mb-2 text-xs uppercase tracking-[4px] text-gray-400">
                                    Neo Motors
                                </p>

                                <Modal.Heading className="text-2xl font-bold text-white md:text-3xl">
                                    Complete Your Booking
                                </Modal.Heading>

                                <p className="mt-2 text-sm text-gray-400">
                                    Reserve your luxury driving experience.
                                </p>
                            </div>
                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="max-h-[70vh] overflow-y-auto px-6 py-6 md:px-8">
                            <form
                                className="space-y-6"
                            >
                                {/* DRIVER NEEDED */}
                                <div>
                                    <label className="mb-4 flex items-center gap-3 text-sm font-medium text-gray-300">
                                        <FaUserTie className="text-blue-400" />
                                        Driver Needed
                                    </label>

                                    <div className="grid grid-cols-2 gap-4">
                                        {/* YES */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setDriverNeeded('Yes')
                                            }
                                            className={`rounded-2xl border p-4 text-left transition duration-300 ${driverNeeded === 'Yes'
                                                ? 'border-green-500 bg-green-500/10'
                                                : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-white">
                                                        Yes
                                                    </h3>

                                                    <p className="mt-1 text-sm text-gray-400">
                                                        Professional chauffeur
                                                    </p>
                                                </div>

                                                {driverNeeded === 'Yes' && (
                                                    <FaCheckCircle className="text-green-400" />
                                                )}
                                            </div>
                                        </button>

                                        {/* NO */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setDriverNeeded('No')
                                            }
                                            className={`rounded-2xl border p-4 text-left transition duration-300 ${driverNeeded === 'No'
                                                ? 'border-green-500 bg-green-500/10'
                                                : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-white">
                                                        No
                                                    </h3>

                                                    <p className="mt-1 text-sm text-gray-400">
                                                        Self driving experience
                                                    </p>
                                                </div>

                                                {driverNeeded === 'No' && (
                                                    <FaCheckCircle className="text-green-400" />
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* SPECIAL NOTE */}
                                <div>
                                    <label className="mb-4 flex items-center gap-3 text-sm font-medium text-gray-300">
                                        <FaStickyNote className="text-yellow-400" />
                                        Special Note
                                    </label>

                                    <textarea
                                        name="specialNote"
                                        rows={5}
                                        placeholder="Pickup instructions, custom requests, or additional information..."
                                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-white/20"
                                    />
                                </div>

                                {/* FOOTER */}
                                <Modal.Footer className="mt-2 flex flex-col-reverse gap-3 px-0 pb-0 pt-2 sm:flex-row sm:justify-end">
                                    <Button
                                        slot="close"
                                        variant="outline"
                                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-gray-300 hover:bg-white/[0.06]"
                                    >
                                        Cancel
                                    </Button>

                                    <Button
                                        slot="close"
                                        onClick={handleConfirmBooking}
                                        className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-gray-200 cursor-pointer"
                                    >
                                        Confirm Booking

                                        <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookingFormField;