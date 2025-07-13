// "use client"

// import type React from "react"

// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useState } from "react"
// import { Mail, Phone, User, Building } from "lucide-react"

// export default function Component() {
//   const [open, setOpen] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     company: "",
//     jobTitle: "",
//     subject: "",
//     message: "",
//     inquiryType: "",
//   })

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     try {
//       // Here you would typically send the data to your backend or email service
//       // For example, using Formspree, EmailJS, or your own API endpoint
//       console.log("Form submitted:", formData)

//       // Simulate API call delay
//       await new Promise((resolve) => setTimeout(resolve, 2000))

//       // Reset form and close modal on success
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         company: "",
//         jobTitle: "",
//         subject: "",
//         message: "",
//         inquiryType: "",
//       })
//       setOpen(false)

//       // You could show a success toast here
//       alert("Thank you for your message! We'll get back to you soon.")
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       alert("There was an error sending your message. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">TechCorp Solutions</h1>
//           <p className="text-lg text-gray-600 mb-8">
//             Leading the future of technology with innovative solutions for your business needs.
//           </p>

//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
//                 <Mail className="mr-2 h-5 w-5" />
//                 Contact Us
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle className="text-2xl">Get in Touch</DialogTitle>
//                 <DialogDescription>
//                   Fill out the form below and our team will get back to you within 24 hours.
//                 </DialogDescription>
//               </DialogHeader>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="firstName">
//                       First Name <span className="text-red-500">*</span>
//                     </Label>
//                     <div className="relative">
//                       <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                       <Input
//                         id="firstName"
//                         placeholder="John"
//                         className="pl-10"
//                         value={formData.firstName}
//                         onChange={(e) => handleInputChange("firstName", e.target.value)}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="lastName">
//                       Last Name <span className="text-red-500">*</span>
//                     </Label>
//                     <Input
//                       id="lastName"
//                       placeholder="Doe"
//                       value={formData.lastName}
//                       onChange={(e) => handleInputChange("lastName", e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email">
//                     Email Address <span className="text-red-500">*</span>
//                   </Label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="john.doe@company.com"
//                       className="pl-10"
//                       value={formData.email}
//                       onChange={(e) => handleInputChange("email", e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                       <Input
//                         id="phone"
//                         type="tel"
//                         placeholder="+1 (555) 123-4567"
//                         className="pl-10"
//                         value={formData.phone}
//                         onChange={(e) => handleInputChange("phone", e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="company">Company</Label>
//                     <div className="relative">
//                       <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                       <Input
//                         id="company"
//                         placeholder="Company Name"
//                         className="pl-10"
//                         value={formData.company}
//                         onChange={(e) => handleInputChange("company", e.target.value)}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="jobTitle">Job Title</Label>
//                     <Input
//                       id="jobTitle"
//                       placeholder="e.g. Marketing Manager"
//                       value={formData.jobTitle}
//                       onChange={(e) => handleInputChange("jobTitle", e.target.value)}
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="inquiryType">Inquiry Type</Label>
//                     <Select
//                       value={formData.inquiryType}
//                       onValueChange={(value) => handleInputChange("inquiryType", value)}
//                     >
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select inquiry type" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="general">General Inquiry</SelectItem>
//                         <SelectItem value="sales">Sales</SelectItem>
//                         <SelectItem value="support">Technical Support</SelectItem>
//                         <SelectItem value="partnership">Partnership</SelectItem>
//                         <SelectItem value="media">Media & Press</SelectItem>
//                         <SelectItem value="careers">Careers</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="subject">
//                     Subject <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="subject"
//                     placeholder="Brief description of your inquiry"
//                     value={formData.subject}
//                     onChange={(e) => handleInputChange("subject", e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="message">
//                     Message <span className="text-red-500">*</span>
//                   </Label>
//                   <Textarea
//                     id="message"
//                     placeholder="Please provide details about your inquiry, including any specific requirements or questions you may have..."
//                     className="min-h-[120px]"
//                     value={formData.message}
//                     onChange={(e) => handleInputChange("message", e.target.value)}
//                     required
//                   />
//                 </div>

//                 <DialogFooter className="flex flex-col sm:flex-row gap-2">
//                   <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isSubmitting}>
//                     Cancel
//                   </Button>
//                   <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </Button>
//                 </DialogFooter>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div className="p-6 bg-gray-50 rounded-lg">
//             <h3 className="font-semibold text-lg mb-2">Innovation</h3>
//             <p className="text-gray-600">Cutting-edge solutions for modern challenges</p>
//           </div>
//           <div className="p-6 bg-gray-50 rounded-lg">
//             <h3 className="font-semibold text-lg mb-2">Reliability</h3>
//             <p className="text-gray-600">Trusted by thousands of businesses worldwide</p>
//           </div>
//           <div className="p-6 bg-gray-50 rounded-lg">
//             <h3 className="font-semibold text-lg mb-2">Support</h3>
//             <p className="text-gray-600">24/7 customer support and assistance</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
