import React from 'react';

const Navbar: React.FC = () => {
    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'Quem Somos', href: '#quem-somos' },
        { title: 'Radar Social', href: 'https://link-para-seu-sistema.com', target: '_blank' },
        { title: 'Blog', href: '#blog' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">

                <a href="#home" >
                    <img src="src/assets/images/logo.png" alt="Radar Social Logo" className="h-15" />
                </a>

                <nav>
                    <div className="text-xl flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                target={link.target || '_self'}
                                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                className="font-medium text-[#3F2B80] transition-all duration-300 hover:text-[#3F2B80] hover:underline"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </nav>

                <a
                    href="#download"
                    className="bg-[#FFCD00] text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
                >
                    Baixar o App
                </a>

            </div>
        </header>
    );
};

export default Navbar;