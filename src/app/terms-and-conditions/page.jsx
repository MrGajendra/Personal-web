import React from "react";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 text-white leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <p className="mb-6">
        Welcome to <strong>thegajendra.com</strong> (“Website”). By accessing,
        booking a consultation, or using any services offered on this Website,
        you agree to be bound by the following Terms and Conditions. If you do
        not agree, please refrain from using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Definitions</h2>
      <p className="mb-4">
        <strong>“Consultation Services”</strong> refers to paid sessions offered
        by Gajendra Kumar, including technical consultation, business guidance,
        website development advice, software strategy, and any service-related
        recommendations.
      </p>
      <p className="mb-4">
        <strong>“Client”</strong> refers to any individual or business booking a
        consultation slot from this Website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Service Description
      </h2>
      <p className="mb-4">
        Gajendra provides consultation services based on experience and
        expertise in software development, web technologies, business strategy,
        and digital systems. All advice is given based on the information shared
        by the Client.
      </p>
      <p className="mb-4">
        The service does <strong>not</strong> include implementation,
        coding/development work, or long-term project execution unless agreed to
        separately under a different contract.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Booking & Payments
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>All bookings must be made through the official website.</li>
        <li>
          Payments must be completed before a consultation slot is confirmed.
        </li>
        <li>Prices may vary and are subject to change without prior notice.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Refund & Cancellation Policy
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Cancellations made <strong>24 hours before</strong> the slot may be
          eligible for rescheduling.
        </li>
        <li>
          No refunds are provided once the consultation is delivered or if the
          client fails to attend.
        </li>
        <li>
          If Gajendra cancels the consultation, a full refund or reschedule will
          be offered.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Client Responsibilities
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>The client must provide accurate and complete information.</li>
        <li>
          Gajendra is not responsible for poor outcomes caused by incomplete or
          incorrect information from the client.
        </li>
        <li>
          The client is responsible for taking notes and implementing the advice
          provided.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. No Guarantee of Results
      </h2>
      <p className="mb-4">
        All consultation advice is based on expertise and best practices.
        However, results may vary depending on execution, market conditions,
        business decisions, and other factors. The Website does not guarantee
        specific business outcomes, revenue growth, or performance improvements.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        7. Intellectual Property
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          All content shared during the consultation (strategies, frameworks,
          documents, etc.) is the intellectual property of Gajendra.
        </li>
        <li>
          Clients may not resell, redistribute, or publish any consultation
          material without written permission.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        8. Limitation of Liability
      </h2>
      <p className="mb-4">
        Gajendra shall not be held liable for any direct, indirect, incidental,
        or consequential damages resulting from:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Use or misuse of the consultation advice.</li>
        <li>Business decisions made by the client.</li>
        <li>Technical implementation errors by third parties.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        9. Privacy & Confidentiality
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          All client information shared during consultation remains private.
        </li>
        <li>
          Gajendra does not sell, share, or misuse client data for any other
          purpose.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
      <p className="mb-4">
        These Terms may be updated occasionally. Continued use of the Website
        signifies acceptance of the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
      <p className="mb-4">
        For questions regarding these Terms, please contact:
        <br />
        <strong>Email:</strong> gajendra.og@gmail.com
      </p>

      <p className="mt-10">
        By using this Website and booking a consultation, you acknowledge that
        you have read, understood, and agreed to these Terms & Conditions.
      </p>
    </div>
  );
};

export default Page;
