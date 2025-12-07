import React from "react";

const Page = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-16 text-white leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-6">
        Thank you for your interest in <strong>thegajendra.com</strong>. For any
        questions related to consultation services, business inquiries,
        collaboration opportunities, or technical support, feel free to reach
        out using the details below.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Email</h2>
      <p className="mb-4">
        <strong>gajendra.og@gmail.com</strong>
        <br />
        This is the fastest way to reach us. We typically respond within 24–48
        hours.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Business Inquiries</h2>
      <p className="mb-4">
        For partnerships, consulting collaborations, or large project
        discussions, reach out at:
        <br />
        <strong>gajendra.og@gmail.com</strong>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Social Media</h2>
      <p className="mb-4">
        You can also connect with me through social platforms:
      </p>

      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Instagram:</strong> instagram.com/gajendrakumark_
        </li>
        <li>
          <strong>LinkedIn:</strong> linkedin.com/in/mrgajendrakumar
        </li>
        <li>
          <strong>Twitter (X):</strong> twitter.com/mrgajendrakumar
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Address</h2>
      <p className="mb-4">
        Raipur, Chhattisgarh
        <br />
        India
      </p>

      <p className="mt-10">
        We're always happy to hear from you. Whether you have a question,
        feedback, or want to book a consultation, just drop an email and we’ll
        get back to you soon.
      </p>
    </div>
  );
};

export default Page;
