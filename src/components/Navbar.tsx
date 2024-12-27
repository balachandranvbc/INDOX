import React from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import AnimatedCoinLogo from './logo/AnimatedCoinLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <AnimatedCoinLogo />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-2">
              INDO X
            </span>
          </div>
          {/* Rest of the navbar code remains the same */}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#tokenomics">Tokenomics</MobileNavLink>
            <MobileNavLink href="#roadmap">Roadmap</MobileNavLink>
            <MobileNavLink href="#community">Community</MobileNavLink>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center">
              <Wallet size={20} />
              Buy INDO X
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </a>
);

export default Navbar;