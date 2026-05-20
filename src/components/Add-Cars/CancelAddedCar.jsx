"use client";

import { AlertDialog, Button, ModalTrigger } from "@heroui/react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { FaTimes, FaTrash } from "react-icons/fa";

const CancelAddedCar = ({ car }) => {
    const carId = car._id;

    const handleCancelAddedCar = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-car/${carId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        });
        if (!res.ok) {
            throw new Error('Failed to cancel booking');
        }

        const result = await res.json();
        toast.success(`You have successfully cancel ${car.name} from your added cars list`);
        window.location.reload();
    };

    return (
        <AlertDialog>

            <ModalTrigger>
                <button className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white cursor-pointer">
                    <FaTrash />
                    Delete
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
                                This will permanently delete your <strong>{car.name}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleCancelAddedCar}
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

export default CancelAddedCar;