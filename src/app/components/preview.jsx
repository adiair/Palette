import { ArrowRight, Rocket, Slack } from "lucide-react";


export default function Preview({ palette, onClose }) {
    if (!palette || palette.length < 5) return null;

    const bgColor = palette[0].hex;
    const headingColor = palette[2].hex;
    const buttonColor = palette[1].hex;
    const hero = palette[3].hex;
    const footer = palette[4].hex;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-sm p-4">
            <section className="relative rounded-2xl shadow-xl border-4 border-white/80 p-5 max-h-[90vh] overflow-y-auto w-full max-w-xl bg-black/40 backdrop-blur-lg">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute animate-pulse hover:scale-105 transition-transform duration-300 top-4 right-4 px-4 py-1.5 rounded-full bg-gray-700 hover:bg-red-500 text-white text-sm font-semibold shadow transition duration-200"
                >
                    ✕ Close
                </button>

                {/* Navbar */}
                <nav className="w-full max-w-6xl mb-2 flex flex-row sm:flex-row justify-between px-3 sm:px-8 items-center mt-10">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <div
                            className="w-6 h-6 rounded-full mr-1 border border-white/20 backdrop-blur-md"
                            style={{ background: footer }}
                        ></div>
                        <h1 className="text-lg sm:text-2xl font-bold text-white hover:text-blue-400 transition">
                            Preview : Logo
                        </h1>
                    </div>
                    <ul className="flex gap-1 sm:gap-4 text-xs">
                        {["Nav-", "-Bar"].map((item, idx) => (
                            <li
                                key={idx}
                                className="px-2 py-1  text-xs rounded-full text-black font-semibold shadow-sm border border-white/20 bg-opacity-10 backdrop-blur-md hover:bg-blue-500 hover:text-white transition"
                                style={{ background: bgColor }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Hero Section */}
                <div
                    className="w-full max-w-3xl p-4 sm:p-10 rounded-2xl opacity-90 bg-opacity-80 shadow-md backdrop-blur-sm border border-white/20"
                    style={{ background: headingColor }}
                >
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-black mb-2">
                        Welcome Message!
                    </h1>

                    <button
                        className="flex items-center gap-2 text-xs sm:text-base font-bold text-black px-4 py-2 rounded-md shadow-md border-2 bg-gradient-to-r from-blue-500 to-teal-400 hover:scale-105 transition-transform duration-300"
                        style={{ background: buttonColor }}
                    >
                        <Rocket className="w-4 h-4 text-white" />
                        Button
                        <ArrowRight className="w-2 h-4 text-black" />
                    </button>

                    <p className="text-xs font-semibold mt-2 text-black">
                        This is going to be the description of the page.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                        {["⚡ Card 1", "⚡ Card 2"].map((feature, idx) => (
                            <div
                                key={idx}
                                className="rounded-2xl p-3 shadow-lg transition-transform duration-300 hover:scale-[1.02] border-2"
                                style={{ background: hero }}
                            >
                                <h3 className="text-sm font-semibold text-black mb-2">
                                    {feature}
                                </h3>
                                <p className="text-xxs text-black">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                                </p>
                                <button
                                    className="flex items-center gap-2 mt-2 px-5 py-2 text-xxs font-bold text-black rounded-full shadow-md border-2 bg-gradient-to-r from-blue-500 to-teal-400"
                                    style={{ background: footer }}
                                >
                                    <Slack className="w-3 h-3 text-white" />
                                    Button
                                    <ArrowRight className="w-3 h-3 text-white" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Color Dots */}
                    <div className="flex gap-4 mt-2 ml-2">
                        {[bgColor, buttonColor, footer].map((color, idx) => (
                            <div
                                key={idx}
                                className="w-10 h-10 rounded-full border-2 border-white/20 backdrop-blur-md opacity-80"
                                style={{ background: color }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <footer
                    className="mt-2 px-4 py-2 w-full text-center font-semibold text-md rounded-lg bg-black/20 shadow-lg"
                    style={{ color: footer }}
                >
                    -- FOOTER --
                </footer>
            </section>
        </div>
    );
}
