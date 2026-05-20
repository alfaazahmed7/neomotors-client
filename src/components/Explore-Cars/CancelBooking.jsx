"use client";

import { AlertDialog, Button, ModalTrigger } from "@heroui/react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

const CancelBooking = ({ bookingId, booking }) => {

    const handleCancelBooking = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        });
        if (!res.ok) {
            throw new Error('Failed to cancel booking');
        }

        const result = await res.json();
        toast.success(`You have successfully cancel ${booking.carName} booking`);
        window.location.reload();
    };

    return (
        <AlertDialog>

            <ModalTrigger>
                <button className="group flex w-[190px] items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-400 hover:border-red-500/40 hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] cursor-pointer">
                    Cancel Booking
                    <FaTimes className="text-xs" />
                </button>
            </ModalTrigger>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete your <strong>{booking.carName}</strong> booking and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleCancelBooking}
                                slot="close"
                                variant="danger"
                            >
                                Cancel Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}

export default CancelBooking;