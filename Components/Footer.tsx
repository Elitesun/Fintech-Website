const Footer = () => {
return (
<div>
    <footer className="bg-black py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <a className="text-2xl font-bold flex items-center space-x-2" href="/">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                        <path
                            d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                    </svg>
                    <span>Alex</span>
                </a>
                <p className="mt-4 text-gray-400">Creating extraordinary digital experiences.</p>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Development</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketing</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">License</a></li>
                </ul>
            </div>
        </div>
    </footer>

</div>
);
}

export default Footer;