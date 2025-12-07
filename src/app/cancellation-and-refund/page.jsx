import React from "react";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 text-white leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">Cancellation & Refund Policy</h1>
      <p className="mb-4 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mb-6">
        This Cancellation & Refund Policy applies to paid consultation bookings
        made on <strong>thegajendra.com</strong>. By booking a consultation
        slot, you agree to the terms described below. If you have questions,
        contact us at <strong>gajendra.og@gmail.com</strong>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Definitions</h2>
      <p className="mb-4">
        <strong>Client:</strong> the person or business who books a
        consultation.
        <br />
        <strong>Consultation:</strong> a scheduled paid session provided by
        Gajendra (advice, review, or technical guidance).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Cancellation by Client
      </h2>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>
          <strong>Full refund:</strong> If a Client cancels at least{" "}
          <strong>24 hours</strong> before the scheduled start time, the Client
          is eligible for a full refund (minus any non-refundable payment
          processing fees).
        </li>
        <li>
          <strong>Late cancellation (under 24 hours):</strong> cancellations
          made within 24 hours of the scheduled start are not eligible for a
          full cash refund. In such cases the Client may:
          <ul className="list-disc ml-6 mt-2">
            <li>
              Receive a one-time credit equal to{" "}
              <strong>50% of the booking amount</strong> applicable toward a
              future consultation (valid for 90 days), or
            </li>
            <li>Request a one-time reschedule (subject to availability).</li>
          </ul>
        </li>
        <li>
          <strong>No-show:</strong> If the Client fails to attend the scheduled
          consultation without prior notice, no refund or credit will be
          provided.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Rescheduling</h2>
      <p className="mb-4">
        Clients may request to reschedule a consultation if the request is made
        at least <strong>24 hours</strong> before the scheduled time.
        Reschedules are subject to availability and must be completed within{" "}
        <strong>90 days</strong> of the original booking. Repeated rescheduling
        may be declined.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Cancellation by thegajendra.com / Provider
      </h2>
      <p className="mb-4">
        If Gajendra must cancel a consultation for any reason (illness,
        emergency, technical issue), the Client will be offered either:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>A full refund, or</li>
        <li>A priority reschedule at a mutually agreeable time.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Refund Processing</h2>
      <p className="mb-4">
        Approved refunds are processed to the original payment method. Depending
        on the payment provider and bank, refunds may take{" "}
        <strong>5–10 business days</strong> to appear on your statement. Any
        non-refundable processing fees charged by third-party payment processors
        may be deducted from refunds.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Disputes & Chargebacks
      </h2>
      <p className="mb-4">
        If you initiate a chargeback with your payment provider, we will
        investigate and respond. Submitting a chargeback without first
        contacting us may delay resolution and could result in suspension of
        future bookings. We reserve the right to provide evidence (booking
        records, communication) to the payment processor.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Taxes, Fees & Third-Party Costs
      </h2>
      <p className="mb-4">
        Any taxes or regulatory fees required by law are the responsibility of
        the Client, unless otherwise stated at checkout. Third-party fees (for
        example: payment gateway fees) are not refundable by thegajendra.com.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        8. Special Circumstances
      </h2>
      <p className="mb-4">
        In exceptional cases (serious illness, verified emergencies, natural
        disasters), we may, at our discretion, make exceptions to this policy.
        Documentation may be requested.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        9. How to Request a Cancellation or Refund
      </h2>
      <p className="mb-4">
        Email <strong>gajendra.og@gmail.com</strong> with:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>Your booking reference or transaction ID</li>
        <li>Scheduled date and time of the consultation</li>
        <li>Reason for cancellation</li>
      </ul>
      <p className="mb-6">
        We aim to respond to refund or cancellation requests within{" "}
        <strong>2 business days</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        10. Modifications to This Policy
      </h2>
      <p className="mb-4">
        We may update this Cancellation & Refund Policy occasionally. The
        updated policy will be posted on this page with a revised "Last updated"
        date. Continued use of the website constitutes acceptance of the updated
        policy.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        This policy is intended to be a clear operational policy for our
        services and does not constitute legal advice. For legal questions,
        please consult a qualified attorney.
      </p>
    </div>
  );
};

export default Page;
