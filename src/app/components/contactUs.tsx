// "use client";

// import { MapPin, Mail, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function ContactSection() {
//   return (
//     <div className=" p-4 sm:p-6 my-10 lg:p-10" id="contact-section">
//       <div className="max-w-7xl mx-auto  lg:px-16">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="section-title">Get in Touch <br/> with Us</h2>
//           <p className="section-description">
//             Ready to embrace digital accessibility and create an inclusive
//             future? Let&#39;s close the gap together—through technology!
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid lg:grid-cols-2 lg:gap-16 justify-center items-center">
//           {/* Left Side - Contact Information */}
//           <div className="space-y-12">
//             {/* Our Locations */}
//             <div className="flex items-start space-x-4">
//               <div className="flex items-center justify-center flex-shrink-0 mt-1">
//                 <MapPin className="w-6 h-6 text-[#34c85a]" />
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   Our Location
//                 </h3>
//                 <div className="space-y-1 text-gray-500">
//                   <p> Winneba - Central Region, Ghana.</p>
//                 </div>
//               </div>
//             </div>

//             {/* Email Us */}
//             <div className="flex items-start space-x-4">
//               <div className=" flex items-center justify-center flex-shrink-0 mt-1">
//                 <Mail className="w-6 h-6 text-[#34c85a]" />
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-2xl font-bold text-gray-900"> Our Email</h3>
//                 <div className="space-y-1 text-gray-500">
//                   <p>info@ddtech.com.gh</p>
//                   <p>contact@ddtech.com.gh</p>
//                 </div>
//               </div>
//             </div>

//             {/* Call Us */}
//             <div className="flex items-start space-x-4">
//               <div className=" flex items-center justify-center flex-shrink-0 mt-1">
//                 <Phone className="w-6 h-6 text-[#34c85a]" />
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-2xl font-bold text-gray-900">Call Us</h3>
//                 <div className="space-y-1 text-gray-500">
//                   <p>0202621904</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Get In Touch Card */}
//           <div className="bg-white rounded-3xl p-12 shadow-lg">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h3 className="text-3xl text-center  font-bold text-gray-900">
//                   Reach Out to Our Team
//                 </h3>
//                 <p className="text-lg text-gray-600 leading-relaxed text-center">
//                   Whether you&#39;re a business, school, or individual looking
//                   for web solutions, IT training, or assistive technology,
//                   we&#39;re here to help.
//                 </p>
//               </div>

//               <div>
//                 <a
//                   href="https://mail.google.com/mail/?view=cm&fs=1&to=info@ddtech.com.gh"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Button className="w-full bg-[#34c85a] hover:bg-[#2ca74e] text-white py-6 text-lg font-semibold rounded-xl">
//                     Email Us Today
//                   </Button>
//                 </a>
//                 <Button
//                   variant="outline"
//                   className="w-full mt-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-6 text-lg font-semibold rounded-xl bg-transparent"
//                 >
//                   Schedule a Consultation
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import {  Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactBanner() {
  return (
    <section
      id="contact-section"
      className="relative my-20 bg-[url('/images/employees.jpg')]   bg-cover bg-center bg-no-repeat py-24 px-4 sm:px-6 lg:px-16 flex items-center justify-center text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0 " />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Get in Touch with Us
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Ready to embrace digital accessibility and create an inclusive future?
          Lets close the gap together—through technology!
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Email Block */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-left space-y-3">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#34c85a]" /> Our Emails
            </h3>
            <p className="text-white text-sm">info@ddtech.com.gh</p>
            <p className="text-white text-sm">contact@ddtech.com.gh</p>
          </div>

          {/* Call Block */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-left space-y-3">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#34c85a]" /> Call Us
            </h3>
            <p className="text-white text-sm">0202621904</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@ddtech.com.gh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="bg-[#34c85a] hover:bg-[#2ca74e] text-white py-6 text-lg font-semibold rounded-xl w-full sm:w-auto">
              Email Us Today
            </Button>
          </a>
          <Button
            variant="outline"
            className="border-2 border-white text-black hover:bg-white hover:text-black py-6 text-lg font-semibold rounded-xl w-full sm:w-auto"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
