import React, { useState } from 'react'
import { User, FileText, Briefcase, CheckCircle, Plus, X  } from "lucide-react"
import {assets} from '../assets/assets'

function AboutUs() {
  const [openItem, setOpenItem] = useState(0)

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index);
  };
  const faqItems = [
    {
      id: "01",
      question: "Can I upload a CV?",
      answer:
        "Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc",
    },
    {
      id: "02",
      question: "How long will the recruitment process take?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      id: "03",
      question: "What does the recruitment and selection process involve?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      id: "04",
      question: "Do you recruit for Graduates, Apprentices and Students?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      id: "05",
      question: "Can I receive notifications for any future jobs that may interest me?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ]
  return (
    <div>
      <div className='bg-black py-10 text-white text-center'> 
        <h1 className='text-3xl font-bold'>About Us</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Et nunc ut tempus duis nisl sed massa</h1>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700">
            Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis
            eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi
            faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.
          </p>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden">
        <img
          src={assets.AboutImage}
          alt="Featured image"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>

    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque
          rhoncus...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Step 1 */}
        <div className="border rounded-lg p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-teal-500 mb-6">
            <User className="w-8 h-8 text-teal-500" />
          </div>
          <h3 className="text-xl font-bold mb-3">Create Account</h3>
          <p className="text-gray-600">Nunc sed a nisl purus. Nibh dis faucibus proin lacus</p>
        </div>

        {/* Step 2 */}
        <div className="border rounded-lg p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-teal-500 mb-6">
            <FileText className="w-8 h-8 text-teal-500" />
          </div>
          <h3 className="text-xl font-bold mb-3">Upload Resume</h3>
          <p className="text-gray-600">Felis eu ultrices a sed massa. Commodo fringilla sed tempor</p>
        </div>

        {/* Step 3 */}
        <div className="border rounded-lg p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-teal-500 mb-6">
            <Briefcase className="w-8 h-8 text-teal-500" />
          </div>
          <h3 className="text-xl font-bold mb-3">Find Jobs</h3>
          <p className="text-gray-600">Commodo fringilla sed tempor risus laoreet ultricies ipsum</p>
        </div>

        {/* Step 4 */}
        <div className="border rounded-lg p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-teal-500 mb-6">
            <CheckCircle className="w-8 h-8 text-teal-500" />
          </div>
          <h3 className="text-xl font-bold mb-3">Apply Job</h3>
          <p className="text-gray-600">Nisi enim feugiat enim volutpat. Sem quis viverra</p>
        </div>
      </div>
    </div>

     <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-center mb-12 text-gray-700">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>

      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div key={item.id} className="border-b border-gray-200 last:border-0">
            <div className={`relative ${openItem === index ? "bg-[#f0f8f6] rounded-lg p-6 mb-6" : "pb-6"}`}>
              <div className="flex justify-between items-start cursor-pointer" onClick={() => toggleItem(index)}>
                <div className="flex gap-4 items-start">
                  <span className="text-[#3eb89e] font-medium text-xl">{item.id}</span>
                  <h3 className="text-xl font-medium">{item.question}</h3>
                </div>
                <button
                  className={`flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full ${
                    openItem === index ? "bg-white text-[#3eb89e]" : "text-[#3eb89e]"
                  }`}
                >
                  {openItem === index ? <X size={20} /> : <Plus size={20} />}
                </button>
              </div>

              {openItem === index && (
                <div className="mt-4 ml-10 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default AboutUs