import React from "react";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 text-white leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
      <p className="mb-4 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mb-6">
        <strong>Thegajendra.com</strong> is a service provider that sells
        digital consultation sessions and related digital deliverables. We do{" "}
        <strong>not</strong> ship physical products to customers. This page
        explains how orders and deliveries work for our services and what
        information (if any) we may request for billing or invoicing purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. No Physical Shipping
      </h2>
      <p className="mb-4">
        All purchases on thegajendra.com are for{" "}
        <strong>consultation services</strong> and digital materials only (for
        example: meeting invites, digital reports, checklists, or links). We do
        not offer physical goods, nor do we ship parcels, merchandise, or
        printed materials.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How Service Delivery Works
      </h2>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>
          <strong>Booking confirmation:</strong> After successful payment you
          will receive an email confirmation containing booking details, the
          scheduled date/time, and any pre-meeting instructions.
        </li>
        <li>
          <strong>Calendar invite:</strong> A calendar invitation
          (Google/Outlook) is typically sent immediately or within 24 hours of
          payment.
        </li>
        <li>
          <strong>Digital deliverables:</strong> Any files, reports, or links
          promised as part of a consultation will be shared electronically
          (email, drive link, or direct message) within the timeframe described
          at checkout or during the consultation.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Billing Address & Invoices
      </h2>
      <p className="mb-4">
        Some payment gateways and accounting requirements request a billing or
        shipping address. If asked, you may provide a billing address for
        invoicing or tax purposes. Providing an address does not imply that a
        physical shipment will be sent—it is used only for billing, receipts, or
        regulatory compliance.
      </p>
      <p className="mb-4">
        If you require an invoice for your records, please contact{" "}
        <strong>support@thegajendra.com</strong> with your booking reference and
        invoicing details; we will issue an electronic invoice (PDF) within a
        reasonable time.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Taxes & Duties</h2>
      <p className="mb-4">
        Applicable taxes (GST, VAT, etc.) are applied as required by local law
        and displayed at checkout. Since there are no physical shipments,
        customs duties and import taxes do not apply. Clients are responsible
        for any taxes that apply in their own jurisdiction.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Refunds & Cancellations
      </h2>
      <p className="mb-4">
        Refunds and cancellations for consultation bookings are governed by our{" "}
        <strong>Cancellation & Refund Policy</strong>. Because services and
        digital deliverables are delivered electronically, our refund rules may
        differ from physical product merchants. Please review the Cancellation &
        Refund Policy or contact support for questions about a specific booking.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Third-Party Payment Processors
      </h2>
      <p className="mb-4">
        Payments are processed by trusted third-party payment providers (for
        example: Stripe, Razorpay, or others). These providers may request
        billing or address details to comply with their own verification and
        fraud-prevention checks. We do not share your payment card details with
        any third party; card data is handled securely by the payment processor.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. What If You Need Physical Materials?
      </h2>
      <p className="mb-4">
        If, in a rare case, you request physical printed materials or in-person
        deliverables (this is not a standard offering), we will:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Confirm availability and any additional fees in writing before
          charging.
        </li>
        <li>Provide an estimated delivery method and timeline.</li>
        <li>
          Collect a shipping address solely for the purpose of fulfilling that
          agreed exception.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
      <p className="mb-4">
        If you have questions about billing, invoices, or this Shipping Policy,
        please contact:
        <br />
        <strong>Email:</strong> gajendra.og@gmail.com
      </p>

      <p className="mt-8 text-sm text-gray-600">
        This Shipping Policy is intended to clarify delivery expectations for
        digital services and to satisfy requirements from payment gateways. It
        does not replace other policies (Privacy Policy, Terms & Conditions, or
        Cancellation & Refund Policy). By completing a purchase you acknowledge
        that you have read and accept this policy.
      </p>
    </div>
  );
};

export default Page;
