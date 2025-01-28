import { FiSend } from "react-icons/fi"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className=" rounded-full" />
              <img src="/img/Logo.svg" alt="logo"  className="md-w-full xl:w-[200px] w-[80px]" />
            </div>
            <div className="flex items-center gap-2 bg-[#222] rounded-lg p-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent border-none outline-none flex-1 text-sm"
                required
              />
              <button className="text-white hover:text-purple-400">
                <FiSend size={20} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-medium mb-4">Home</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Hero Section
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium mb-4">Properties</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Valuation Mastery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Strategic Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Negotiation Wizardry
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Closing Success
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Property Management
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            <span>©2023 Estatein. All Rights Reserved</span>
            <Link href="#" className="ml-4 hover:text-purple-400">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

