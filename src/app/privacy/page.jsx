import React from "react";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 text-white leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <p className="mb-6">
        At <strong>thegajendra.com</strong> (“Website”), we are committed to
        protecting your privacy. This Privacy Policy explains how we collect,
        use, and safeguard your personal information when you book consultation
        services or interact with our Website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-4">We may collect the following types of information:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Personal identification details:</strong> Name, email, phone
          number, business details, etc.
        </li>
        <li>
          <strong>Booking information:</strong> Consultation date, service type,
          payment details (handled securely by third-party payment gateways).
        </li>
        <li>
          <strong>Technical information:</strong> IP address, browser type,
          device information, usage analytics.
        </li>
        <li>
          <strong>Communication data:</strong> Messages, notes, or documents you
          share for consultation preparation.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To process and confirm your consultation booking.</li>
        <li>To communicate regarding your consultation or service updates.</li>
        <li>To improve website performance and user experience.</li>
        <li>
          To provide personalized consultation based on your business needs.
        </li>
        <li>To meet legal, accounting, or regulatory requirements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Payment Information & Security
      </h2>
      <p className="mb-4">
        We do not store or handle your credit/debit card details directly. All
        payments are securely processed by trusted third-party payment gateways
        (such as Razorpay/Stripe/UPI platforms).
      </p>
      <p className="mb-4">
        These providers use industry-standard encryption and security practices
        to protect your financial information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Cookies & Tracking Technologies
      </h2>
      <p className="mb-4">
        Our Website may use cookies or similar technologies to enhance your
        experience. These cookies help with:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Analytics and performance tracking.</li>
        <li>Remembering user preferences.</li>
        <li>Improving load times and navigation.</li>
      </ul>
      <p className="mb-4">
        You may disable cookies in your browser settings, but some features of
        the Website may not function properly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Sharing of Information
      </h2>
      <p className="mb-4">
        We do <strong>not</strong> sell, trade, or rent your personal
        information to third parties.
      </p>
      <p className="mb-4">We may share information only with:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Service providers</strong> such as payment gateways or hosting
          platforms necessary to operate this Website.
        </li>
        <li>
          <strong>Legal authorities</strong> if required by law, court order, or
          government regulation.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Data Security Measures
      </h2>
      <p className="mb-4">
        We implement reasonable technical and organizational measures to
        safeguard your information. However, no online system is 100% secure,
        and we cannot guarantee absolute protection.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
      <p className="mb-4">You have the right to:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Request access to the data we store about you.</li>
        <li>Request corrections or updates to your information.</li>
        <li>
          Request deletion of your personal data (subject to legal limits).
        </li>
        <li>Opt out of marketing or promotional communication.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Retention</h2>
      <p className="mb-4">
        We retain your information only for as long as necessary to:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Provide consultation services.</li>
        <li>Maintain booking/payment records.</li>
        <li>Comply with legal and accounting obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Third-Party Links</h2>
      <p className="mb-4">
        Our Website may contain links to third-party sites. We are not
        responsible for the privacy practices or content of those websites. We
        encourage users to read the privacy policies of external sites.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        10. Children’s Privacy
      </h2>
      <p className="mb-4">
        Our services are not intended for individuals under the age of 16. We do
        not knowingly collect information from children.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        11. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. The updated version
        will be posted on this page with the “Last updated” date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
      <p className="mb-4">
        If you have any questions regarding this Privacy Policy or your data,
        please contact:
        <br />
        <strong>Email:</strong> gajendra.og@gmail.com
      </p>

      <p className="mt-10">
        By using this Website and booking a consultation, you consent to the
        terms described in this Privacy Policy.
      </p>
    </div>
  );
};

export default Page;
