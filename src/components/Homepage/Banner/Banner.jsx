import Link from "next/link";

const Banner = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center"
            style={{
                backgroundImage: "url('/banner.jpeg')",
            }}
        >
            <div className="text-white w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 mx-auto">
                <h2 className="text-4xl md:w-text-6xl lg:text-7xl font-extrabold mb-3">Neo Motor Cars</h2>
                <p className="max-w-[600px] text-white mb-4">“Drive the Future with Confidence — Premium vehicles, modern performance, and a seamless car buying experience tailored for every journey.”</p>
                <Link href={'/explore-cars'}>
                    <button className="px-4 z-30 py-3 bg-[#5fa8d3] rounded-sm text-white relative font-semibold overflow-hidden text-xl transition-all duration-700 after:content-[''] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#ef233c] after:left-5 after:bottom-0 after:translate-y-full after:rounded-sm after:transition-all after:duration-700 hover:after:scale-[300] hover:after:duration-700 cursor-pointer">
                        Explore Cars
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;