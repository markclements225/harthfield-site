import ContactForm from '@/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-soft-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-charcoal mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-charcoal leading-relaxed mb-8">
            We'd love to hear from you. Whether you have a property you're interested in selling,
            or you're looking for your next home, let's start a conversation.
          </p>

          {/* Contact Information */}
          <div className="space-y-4 text-charcoal">
            <div>
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:mcleme9@gmail.com" className="hover:text-sage transition-colors">
                mcleme9@gmail.com
              </a>
            </div>
            <div>
              <span className="font-medium">Phone:</span>{' '}
              <a href="tel:+1234567890" className="hover:text-sage transition-colors">
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
