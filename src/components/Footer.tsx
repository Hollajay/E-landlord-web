import logo from "../assets/images/Screenshot__903_-removebg-preview.png";

export const Footer = () => {
  return (
    <div className="p-12 w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">Join our newsletter</h3>
          <p className="text-gray-400">
            Stay updated with latest news and offers
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between bg-[#FF914C] p-2 rounded-2xl">
            <div className="">
              <input
                className="w-full h-full px-2  placeholder:text-white text-white font-mono outline-0 text-lg"
                placeholder="Enter your email.."
                type="text"
              />
            </div>
            <button className="p-2 bg-white rounded-3xl text-lg font-mono hover:text-[#FF914C]">
              Subscribe
            </button>
          </div>
          <p className="text-sm font-mono text-gray-400">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 w-full py-14">
        <div className="flex">
          <div>
            <img className="w-28" src={logo} alt="logo" />
          </div>
          <p></p>
        </div>

        <div className="flex">
          <ul>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Blog post</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="flex">
          <ul>
            <li>FAQ</li>
            <li>support</li>
            <li>Testimonials</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div>
          <ul className="flex">
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <p className="font-mono text-gray-400">© 2025 E-Landlord. All rights reserved.</p>
      </div>
    </div>
  );
};
