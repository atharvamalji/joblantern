const Footer = () => {
    return (
        <footer className="flex justify-center py-16 bg-black text-white border-stone-300">
            <div className="w-full md:w-[100rem] px-4 space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="font-extrabold text-2xl">
                        Job<span className="text-green-500">Lantern</span>
                    </p>
                    <div>
                        <ul className="flex space-x-4">
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="grid md:grid-cols-4 gap-8 divide-stone-300">
                        <div className="text-center md:text-start">
                            <p className="font-bold text-lg">Features</p>
                            <ul className="text-sm">
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>

                        <div className="text-center md:text-start">
                            <p className="font-bold text-lg">Company</p>
                            <ul className="text-sm">
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-xs text-center">{new Date().getFullYear()} © JobLantern</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
