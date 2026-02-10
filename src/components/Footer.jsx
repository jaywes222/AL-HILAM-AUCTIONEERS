import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Company",
    links: [
      { to: "/about-us", name: "About Us" },
      { to: "/our-services", name: "Services" },
      { to: "/storage-facilities", name: "Our Storage Facilities" },
      { to: "/our-clients", name: "Our Clients" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { to: "/contact-us", name: "Contact Us" },
      { href: "", name: "Terms and Conditions" },
      { href: "", name: "Privacy Policy" },
    ],
  },
];

const branches = [
  {
    name: "Nairobi (HQ)",
    address: "Jeevan Bharati Building",
    phones: ["+254 723 261 696", "+254 113 091 409"],
    email: "info.alhilam@gmail.com ",
    highlight: true,
  },
  {
    name: "Mombasa",
    address: "Coast House",
    phones: ["+254 742 187 032", "+254 723 261 696"],
    email: "alhilambackoffice@gmail.com",
  },
];

function Footer() {
  return (
    <footer className="relative bg-secondary text-blue-dark">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 pt-14 pb-6">

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Brand */}
          <div className="space-y-3 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-blue-dark">
              Al-Hilam Auctioneers
            </h1>
            <p className="text-grey-darker text-sm max-w-xs">
              Professional Auctioneers & Asset Recovery
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h2 className="font-bold text-lg text-blue-dark">
                  {section.title}
                </h2>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.href ? (
                        <a
                          href={link.href}
                          className="text-grey-darker hover:text-primary transition"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.to}
                          className="text-grey-darker hover:text-primary transition"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Locations */}
          <div className="flex-1 space-y-6">
            <h2 className="font-bold text-lg text-blue-dark">
              Our Locations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className={`p-4 rounded-xl border text-xs transition
                    ${
                      branch.highlight
                        ? "border-primary/40 bg-white/50"
                        : "border-blue-soft/40 bg-white/30"
                    }
                  `}
                >
                  <p className="font-semibold text-sm flex items-center gap-2 mb-1 text-blue-dark">
                    <FaMapMarkerAlt className="text-primary text-xs" />
                    {branch.name}
                  </p>

                  <p className="text-grey-darker mb-2">
                    {branch.address}
                  </p>

                  {/* Phones */}
                  <div className="space-y-1">
                    {branch.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-1 text-grey-darker hover:text-primary transition"
                      >
                        <FaPhoneAlt className="text-[10px]" />
                        <span className="break-all">{phone}</span>
                      </a>
                    ))}
                  </div>

                  {/* Email */}
                  <a
                    href={`mailto:${branch.email}`}
                    className="flex items-center gap-1 mt-2 text-grey-darker hover:text-primary transition"
                  >
                    <FaEnvelope className="text-[10px]" />
                    <span className="break-all">{branch.email}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-3 text-sm text-grey-darker pt-4">
              <FaClock className="text-primary flex-shrink-0" />
              <span>
                Mon – Fri: 8:00 AM – 5:00 PM · Sat: 8:00 AM – 1:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-blue-soft/40 text-center text-sm text-grey-darker">
          <p>&copy; Al-Hilam Auctioneers | All Rights Reserved</p>
          <p className="text-xs mt-2">
            Powered by{" "}
            <a
              href="https://www.linkedin.com/in/wesley-jack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              SkeptiKrafts
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
