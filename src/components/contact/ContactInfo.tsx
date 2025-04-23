
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

// Contact information component for the left side
const ContactInfo = () => (
  <div className="glass rounded-2xl p-8 md:p-10">
    <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
    <div className="space-y-6">
      <div className="flex items-start">
        <MapPin className="h-6 w-6 text-techpurple-500 mr-4 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
          <p className="text-gray-600">
            841, 1st Block, Solaris Business Hub, Nr. Parshwanath Jain Mandir Bhuyangdev, Sola Rd, Ahmedabad, Gujarat 380013
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <Mail className="h-6 w-6 text-techpurple-500 mr-4 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-2">Email Us</h3>
          <p className="text-gray-600">
            info@cognitivedatablocks.com
            <br />
            support@cognitivedatablocks.com
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <Phone className="h-6 w-6 text-techpurple-500 mr-4 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-2">Call Us</h3>
          <p className="text-gray-600">
            +91 98989 62002
            <br />
            +91 97263 11611
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfo;
