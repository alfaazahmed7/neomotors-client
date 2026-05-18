import {
    FaShieldAlt,
    FaTags,
    FaCheckCircle,
    FaTruck,
    FaHeadset,
    FaBolt,
} from "react-icons/fa";

const features = [
    {
        icon: FaCheckCircle,
        title: "Verified Listings",
        desc: "Every car is carefully inspected and verified to ensure authenticity and quality.",
    },
    {
        icon: FaTags,
        title: "Best Price Guarantee",
        desc: "We ensure competitive pricing so you always get the best deal in the market.",
    },
    {
        icon: FaShieldAlt,
        title: "Secure Transactions",
        desc: "Safe and encrypted payment system for a worry-free buying experience.",
    },
    {
        icon: FaTruck,
        title: "Fast Delivery",
        desc: "Quick and reliable vehicle delivery right to your doorstep.",
    },
    {
        icon: FaHeadset,
        title: "24/7 Support",
        desc: "Our support team is always available to assist you anytime.",
    },
    {
        icon: FaBolt,
        title: "Instant Booking",
        desc: "Reserve your dream car instantly with a smooth booking system.",
    },
];

const WhyChooseNeoMotors = () => {
    return (
        <section className="relative w-full text-white py-20 px-6 md:px-16">
            {/* Glow background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                    Why Choose <span className="text-white/70">NeoMotors</span>
                </h2>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                    We don’t just sell cars — we deliver trust, performance, and a premium buying experience.
                </p>

                {/* Grid */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-[#111111] border border-white/10 rounded-2xl p-6 text-left hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition">
                                        <Icon className="text-white text-xl" />
                                    </div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                </div>

                                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseNeoMotors;