'use client';
import { useState } from 'react';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0  backdrop-blur-md px-4 md:px-6 z-50">
            <div className="max-w-7xl mx-auto py-4">
                <div className="flex items-center justify-between">
                    <a className="text-2xl font-bold flex items-center space-x-2" href="/">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                            <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                        </svg>
                        <span>Alex</span>
                    </a>

                    <div className={`md:flex items-center space-x-8 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-black/90 p-4 space-y-4 md:space-y-0 md:relative md:top-0 md:bg-transparent md:p-0 md:flex-row' : 'hidden'}`}>
                        <a className="text-lg hover:text-gray-300 transition-colors" href="/">Home</a>
                        <a className="text-lg hover:text-gray-300 transition-colors" href="/content">Content</a>
                        <a className="text-lg hover:text-gray-300 transition-colors" href="/about">About</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a href="/signup" className="hidden md:block px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-medium">
                            Sign Up
                        </a>
                        <button 
                            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;