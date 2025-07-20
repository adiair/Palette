import { ArrowRight, Rocket, Slack } from "lucide-react";


export default function Preview({ palette, onClose }) {
    if (!palette || palette.length < 3) return null

    const bgColor = palette[0].hex
    const headingColor = palette[2].hex
    const buttonColor = palette[1].hex
    const hero = palette[3].hex
    const footer = palette[4].hex

    return (
        <section
            className="relative mt-10 rounded-2xl shadow-2xl border-4 border-gray-700 p-6 
                min-h-[600px] flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-md border-2 border-white/40 backdrop-blur-lg">

            {/* Close Button */}
            <button
                className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-gray-700 hover:bg-red-500 transition-all duration-200 text-white text-xs font-semibold shadow-md"
                onClick={onClose}>
                ✕ Close
            </button>

            {/* Navbar */}
            <nav
                className="w-full mt-12 max-w-5xl mb-4 flex justify-between px-8 items-center ">
                <div className="flex">
                    <div className="bg-white  bg-opacity-10 backdrop-blur-md border-3 border-white/20
                    w-8 h-8 rounded-full transition-all mr-2 duration-800"
                        style={{ background: footer }}
                    ></div>
                    <h1 className="text-2xl font-bold text-black hover:text-blue-400 transition-colors duration-200">
                        Logo
                    </h1>
                </div>
                <ul className="flex gap-4 text-sm  font-medium">
                    {['Nav-', '-Bar'].map((item, idx) => (
                        <li key={idx}
                            className="bg-white opacity-80 bg-opacity-10 backdrop-blur-md border border-white/20
                            px-4 py-2 hover:text-white text-black font-semibold bg-gray-700 hover:bg-blue-500 
                            transition-all duration-400 cursor-pointer rounded-full shadow-sm"
                            style={{ background: bgColor }}>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hero Section */}
            <div
                className="p-8 rounded-2xl transition-all duration-800 bg-white bg-opacity-10 backdrop-blur-md border border-white/20
                text-black font-semibold shadow-md w-full max-w-2xl bg-gray-800 bg-opacity-60 backdrop-blur-sm"
                style={{ background: headingColor }}>

                <h1 className="text-3xl sm:text-4xl opacity-70 text-bold mb-6 font-extrabold ">
                    Welcome Message!
                </h1>

                {/* Button */}
                <button
                    className="bg-white bg-opacity-10 opacity-70 backdrop-blur-md border border-white/20 mt-4 mb-2 flex px-6 py-3 text-xs rounded-full text-black font-bold shadow-md hover:shadow-2xl 
                        bg-gradient-to-r border-2 from-blue-500 to-teal-400 hover:scale-105 transition-transform duration-800"
                    style={{ background: buttonColor }}>
                    <Rocket className="h-4 text-white w-4 mr-2" />
                    Button
                    <ArrowRight className="h-4 pl-2 " />
                </button>


                {/* Description */}
                <p className="text-sm mt-5 opacity-60 flex text-black">
                    This is going to be the description of the page.
                </p>

                {/* Features */}
                <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {['⚡ Card 1', '⚡ Card 2'].map((feature, idx) => (
                        <div key={idx}
                            className="bg-white w-48 overflow-hidden bg-opacity-10 backdrop-blur-md border border-white/20
                            shadow-md hover:shadow-3xl opacity-80
                            p-5 bg-gray-700 border-2 rounded-2xl shadow-lg  
                            hover:scale-[1.02] transition-all duration-800"
                            style={{ background: hero }}>

                            <h3 className="text-base font-semibold text-black mb-2">{feature}</h3>

                            <p className="text-black opacity-60 text-xxs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem rem minima in quo? commodi laborum.
                            </p>

                            {/* Button */}
                            <button
                                className="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 mt-4 mb-2 flex px-6 py-3 text-xs rounded-full text-black font-bold shadow-xl 
                            bg-gradient-to-r border-2 border-black opacity-95 from-blue-500 to-teal-400 shadow-md "
                                style={{ background: footer }}>
                                <Slack className="h-4 text-white  w-4 mr-2" />
                                Button
                                <ArrowRight className="h-4 pl-2 " />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 mt-2 ml-2">
                    <div className="bg-white bg-opacity-10 opacity-80 backdrop-blur-md border-2 border-white/20
                    w-10 mt-2 h-10 rounded-full transition-all duration-400"
                        style={{ background: bgColor }}
                    ></div>
                    <div className="bg-white bg-opacity-10 opacity-80 backdrop-blur-md border-2 border-white/20
                    w-10 mt-2 h-10 rounded-full transition-all duration-400"
                        style={{ background: buttonColor }}
                    ></div>
                    <div className="bg-white bg-opacity-10 opacity-80 backdrop-blur-md border-2 border-white/20
                    w-10 mt-2 h-10 rounded-full transition-all duration-400"
                        style={{ background: footer }}
                    ></div>
                </div>

            </div>


            {/* Footer */}
            <footer className="p-2 mt-2 rounded-full border shadow-lg font-semibold rounded-2xl w-full text-center text-md text-bold"
                style={{ color: footer }}>
                -- FOOTER --
            </footer>
        </section>

    )
}

