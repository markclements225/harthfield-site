'use client';

import { useState } from 'react';
import ContactForm from '@/components/sections/ContactForm';
import TextUsForm from '@/components/sections/TextUsForm';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import { MessageCircle } from 'lucide-react';

export default function ContactPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTextUsSuccess = () => {
    setShowSuccess(true);
    setIsModalOpen(false);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-soft-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-black mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We'd love to hear from you. Whether you have a property you're interested in selling,
            or you're looking for your next home, let's start a conversation.
          </p>

          {/* Contact Information */}
          <div className="space-y-4 text-gray-700 mb-8">
            <div>
              <span className="font-medium text-black">Email:</span>{' '}
              <a href="mailto:info@harthfield.com" className="hover:text-black transition-colors">
                info@harthfield.com
              </a>
            </div>
            <div>
              <span className="font-medium text-black">Phone:</span>{' '}
              <a href="tel:+6158995100" className="hover:text-black transition-colors">
                (615) 899-5100
              </a>
            </div>
          </div>

          {/* Text Us Button - COMMENTED OUT until Twilio A2P verification complete */}
          {/* <div className="flex gap-4 items-center">
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="secondary"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Text Us
            </Button>
            <span className="text-sm text-gray-600">
              Prefer texting? Click here for a quick response.
            </span>
          </div> */}

          {/* Success Message */}
          {/* {showSuccess && (
            <div className="mt-6 bg-sage/10 border border-sage text-charcoal px-4 py-3 text-sm">
              Thanks! We'll text you shortly.
            </div>
          )} */}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>

      {/* Text Us Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Text Us"
      >
        <p className="text-charcoal mb-6">
          Fill out the form below and we'll send you a text message to continue the conversation.
        </p>
        <TextUsForm onSuccess={handleTextUsSuccess} />
      </Modal>
    </div>
  );
}
