"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageHero from "@/app/components/reusable/page-hero"
import { services } from "@/lib/data/servicesData"
import ContactModal from "@/app/components/contactModal"






export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = Number.parseInt(params.id as string)
  const service = services.find((s) => s.id === serviceId)
  
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero title="Our Services" backgroundImage={service.image}/>
      {/* Header Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-[#34c85a]  mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <p className=" text-red-500 hover:text-red-600 text-lg font-medium mb-2">INCLUSIVE TECHNOLOGY</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {service.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-[#34c85a]">{service.title.split(" ").slice(-1)}</span>
            </h1>
            <div className="w-16 h-1 bg-[#34c85a] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">{service.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                
              </div>
            </div>

            {/* Right - Service Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-[#34c85a] mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Services Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {service.detailedServices.map((detailService, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#34c85a]/10 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#34c85a] rounded"></div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{detailService.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{detailService.description}</p>

                <div className="space-y-2">
                  {detailService.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="h-3 w-3 text-[#34c85a] mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about how our {service.title.toLowerCase()} can help transform your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactModal/>
              <Button
                variant="outline"
                size="lg"
                className="border-[#34c85a] text-[#34c85a] hover:bg-[#34c85a] hover:text-white px-8 py-3 rounded-full bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
