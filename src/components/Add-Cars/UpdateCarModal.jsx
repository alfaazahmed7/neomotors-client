"use client";

import { FaEdit, FaCarSide, FaImage, FaMapMarkerAlt } from "react-icons/fa";
import { MdDescription, MdAttachMoney } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import {
    Button,
    Input,
    Label,
    Modal,
    ModalTrigger,
    Surface,
} from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const UpdateCarModal = ({ car }) => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedCar = Object.fromEntries(formData.entries());

        const { data: tokenData } = await authClient.token();
        // console.log(tokenData, 'tokenData');

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-car/${car._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData.token}`
            },
            body: JSON.stringify(updatedCar)
        });
        const data = await res.json();
        toast.success(`You have successfully edit ${car.name} details`);
        window.location.reload();
    }

    return (
        <Modal>
            <ModalTrigger>
                <button className="flex cursor-pointer items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20">
                    <FaEdit />
                    Update
                </button>
            </ModalTrigger>

            <Modal.Backdrop className="bg-black/70 backdrop-blur-sm">
                <Modal.Container placement="center">
                    <Modal.Dialog className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0F0F10] text-white shadow-2xl shadow-black/40">
                        <Modal.CloseTrigger className="text-white/60 hover:text-white" />

                        {/* Header */}
                        <Modal.Header className="border-b border-white/10 bg-gradient-to-r from-zinc-900 to-black px-8 py-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
                                        <FaCarSide className="text-xl" />
                                    </div>

                                    <div>
                                        <Modal.Heading className="text-2xl font-bold tracking-tight text-white">
                                            Update Car
                                        </Modal.Heading>

                                        <p className="text-sm text-zinc-400">
                                            You can edit your listed car details.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Modal.Header>

                        {/* Body */}
                        <Modal.Body className="bg-[#111111] px-8 py-7">
                            <Surface
                                variant="default"
                                className="border border-white/10 bg-zinc-900/60 p-6 shadow-inner"
                            >
                                <form
                                    onSubmit={onSubmit}
                                    className="grid grid-cols-1 gap-5 md:grid-cols-2"
                                >

                                    {/* Price */}
                                    <div className="space-y-2">
                                        <Label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                                            <MdAttachMoney className="text-blue-400" />
                                            Price
                                        </Label>

                                        <Input
                                            id="price"
                                            name="price"
                                            type="number"
                                            placeholder="Enter car price"
                                            className={{
                                                inputWrapper:
                                                    "bg-black/40 border border-white/10 hover:border-blue-500/50 focus-within:border-blue-500 h-12 rounded-xl",
                                                input: "text-white placeholder:text-zinc-500",
                                            }}
                                        />
                                    </div>

                                    {/* Availability */}
                                    <div className="space-y-2">
                                        <Label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                                            <IoCheckmarkDoneCircle className="text-green-400" />
                                            Availability
                                        </Label>

                                        <select
                                            id="availability"
                                            name="availability"
                                            className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none transition-all duration-300 hover:border-blue-500/50 focus:border-blue-500"
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="bg-zinc-900">
                                                Select Availability
                                            </option>

                                            <option value="Available" className="bg-zinc-900">
                                                Available
                                            </option>

                                            <option value="Unavailable" className="bg-zinc-900">
                                                Unavailable
                                            </option>
                                        </select>
                                    </div>

                                    {/* Brand */}
                                    <div className="space-y-2">
                                        <Label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                                            <FaCarSide className="text-purple-400" />
                                            Brand
                                        </Label>

                                        <select
                                            id="brand"
                                            name="brand"
                                            className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none transition-all duration-300 hover:border-blue-500/50 focus:border-blue-500"
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="bg-zinc-900">
                                                Select Car Brand
                                            </option>
                                            <option value="toyota" className="bg-zinc-900">
                                                Toyota
                                            </option>
                                            <option value="honda" className="bg-zinc-900">
                                                Honda
                                            </option>
                                            <option value="bmw" className="bg-zinc-900">
                                                BMW
                                            </option>
                                            <option value="mercedes" className="bg-zinc-900">
                                                Mercedes-Benz
                                            </option>
                                            <option value="audi" className="bg-zinc-900">
                                                Audi
                                            </option>
                                            <option value="tesla" className="bg-zinc-900">
                                                Tesla
                                            </option>
                                            <option value="ford" className="bg-zinc-900">
                                                Ford
                                            </option>
                                            <option value="chevrolet" className="bg-zinc-900">
                                                Chevrolet
                                            </option>
                                            <option value="nissan" className="bg-zinc-900">
                                                Nissan
                                            </option>
                                            <option value="hyundai" className="bg-zinc-900">
                                                Hyundai
                                            </option>
                                            <option value="kia" className="bg-zinc-900">
                                                Kia
                                            </option>
                                            <option value="lexus" className="bg-zinc-900">
                                                Lexus
                                            </option>
                                        </select>
                                    </div>

                                    {/* Location */}
                                    <div className="space-y-2">
                                        <Label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                                            <FaMapMarkerAlt className="text-red-400" />
                                            Location
                                        </Label>

                                        <Input
                                            id="location"
                                            name="location"
                                            placeholder="Enter car location"
                                            className={{
                                                inputWrapper:
                                                    "bg-black/40 border border-white/10 hover:border-blue-500/50 focus-within:border-blue-500 h-12 rounded-xl",
                                                input: "text-white placeholder:text-zinc-500",
                                            }}
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2 md:col-span-2">
                                        <Label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                                            <MdDescription className="text-yellow-400" />
                                            Description
                                        </Label>

                                        <textarea
                                            id="shortDescription"
                                            name="shortDescription"
                                            rows={4}
                                            placeholder="Write car description..."
                                            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-blue-500"
                                        />
                                    </div>

                                    {/* Image URL */}
                                    <div className="space-y-2 md:col-span-2">
                                        <Label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                                            <FaImage className="text-pink-400" />
                                            Image URL
                                        </Label>

                                        <Input
                                            id="image"
                                            name="image"
                                            type="text"
                                            placeholder="Paste image link here..."
                                            className="w-full bg-black/40 border border-white/10 hover:border-blue-500/50 focus-within:border-blue-500 h-12 rounded-xl text-white placeholder:text-zinc-500"
                                        />
                                    </div>

                                    {/* Footer */}
                                    <Modal.Footer className="border-t border-white/105">
                                        <div className="flex w-full items-center justify-start gap-3">
                                            <Button
                                                slot="close"
                                                variant="secondary"
                                                className="rounded-xl border border-white/10 bg-zinc-800 px-5 text-white hover:bg-zinc-700"
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                slot="close"
                                                type="submit"
                                                className="rounded-xl bg-blue-600 px-6 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
                                            >
                                                Update Car
                                            </Button>
                                        </div>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateCarModal;