import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

// Fix for default marker icon in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const offices = [
  {
    name: "Head Office",
    address: "Jeevan Bharati, 2nd Floor Room 209, Nairobi, Kenya",
    phones: ["+254 723 261 696", "+254 113 091 409"],
    email: "info.alhilam@gmail.com",
    coords: [-1.288253, 36.821028],
    color: "primary",
  },
  {
    name: "Mombasa Branch",
    address: "Mombasa Trade Centre, 4th Floor Office 8, Nkrumah Road",
    phones: ["+254 742 187 032", "+254 723 261 696"],
    email: "alhilambackoffice@gmail.com",
    coords: [-4.043477, 39.668206],
    color: "primary",
  },
];

function ContactUs() {
  return (
    <section className="relative w-full bg-secondary/30 px-4 md:px-12 py-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-blue-dark mb-8">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-primary to-blue-dark"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-light">

            {offices.map((office, idx) => (
              <div
                key={idx}
                className={`space-y-4 p-6 rounded-2xl border transition-all duration-300 bg-secondary/30 border-blue-dark/20 hover:border-primary hover:shadow-xl hover:shadow-primary/10`}
              >
                <p className="font-semibold flex items-center gap-2 text-base text-blue-dark">
                  <FaMapMarkerAlt className="text-primary" />
                  {office.name}
                </p>
                <p className="text-blue-dark/70 leading-relaxed">{office.address}</p>

                <div className="space-y-3 pt-2">
                  {office.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      className="group flex items-center gap-3 text-blue-dark/70 transition-colors duration-300 hover:text-primary"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <FaPhoneAlt className="text-xs text-primary" />
                      </div>
                      <span>{phone}</span>
                    </a>
                  ))}

                  <a
                    href={`mailto:${office.email}`}
                    className="group flex items-center gap-3 text-blue-dark/70 transition-colors duration-300 hover:text-primary"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <FaEnvelope className="text-xs text-primary" />
                    </div>
                    <span>{office.email}</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Working Hours */}
            <div className="sm:col-span-2 p-6 rounded-2xl bg-secondary/30 border border-blue-dark/20 hover:border-primary transition-all duration-300">
              <p className="font-semibold flex items-center gap-2 text-base mb-2 text-blue-dark">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FaClock className="text-primary" />
                </div>
                Working Hours
              </p>
              <p className="text-blue-dark/70 leading-relaxed">
                Mon – Fri: 8:00 AM – 5:00 PM · Sat: 8:00 AM – 1:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Leaflet Map */}
        <div className="flex-1 sticky top-32 rounded-2xl overflow-hidden shadow-lg shadow-blue-dark/10 border border-blue-dark/20 h-[600px]">
          <MapContainer
            center={offices[0].coords}
            zoom={6}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {offices.map((office, idx) => (
              <Marker key={idx} position={office.coords}>
                <Popup>
                  <strong>{office.name}</strong>
                  <br />
                  {office.address}
                  <br />
                  {office.phones.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;
