import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#db383c] px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-red-100 mt-2 font-medium">
            Last updated: 31/01/2026
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
          {/* Introduction */}
          <div className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to AdsTracking (“we”, “our”, “us”).
            </h2>
            <p className="mb-4">
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, disclose, and protect your information when you
              visit our website{" "}
              <a
                href="https://adstrackingbd.com"
                className="font-bold text-[#db383c] hover:underline"
              >
                https://adstrackingbd.com
              </a>{" "}
              or use our services.
            </p>
            <p className="text-gray-600 italic">
              By using our website or services, you agree to the terms of this
              Privacy Policy.
            </p>
          </div>

          {/* 1. Services */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">1.</span> Services
            </h2>
            <p className="mb-3">
              AdsTracking provides digital marketing services including but not
              limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#db383c]">
              <li>Social Media Advertising (Meta, Google, etc.)</li>
              <li>Pixel & Conversion Tracking</li>
              <li>Analytics & Reporting</li>
              <li>Website & Landing Page Support</li>
              <li>E-commerce & Shopify Solutions</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500 bg-gray-50 p-3 rounded">
              Service details, pricing, and scope are agreed upon separately
              with each client.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">2.</span>{" "}
              Eligibility
            </h2>
            <p className="mb-3">By using our services, you confirm that:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#db383c]">
              <li>You are at least 18 years old</li>
              <li>You have legal authority to enter into agreements</li>
              <li>All information you provide is accurate and truthful</li>
            </ul>
          </section>

          {/* 3. Payments & Fees */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">3.</span> Payments
              & Fees
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#db383c]">
              <li>Fees for services are communicated before work begins.</li>
              <li>
                Payments must be made as agreed (advance or milestone-based).
              </li>
              <li>
                All payments are non-refundable unless stated otherwise in
                writing.
              </li>
              <li>Late or unpaid invoices may result in service suspension.</li>
            </ul>
          </section>

          {/* 4. Client Responsibilities */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">4.</span> Client
              Responsibilities
            </h2>
            <p className="mb-3">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#db383c]">
              <li>
                Provide accurate access to ad accounts, websites, and assets
              </li>
              <li>
                Ensure your business complies with applicable laws and platform
                policies
              </li>
              <li>
                Not use our services for illegal, misleading, or prohibited
                activities
              </li>
            </ul>
            <p className="mt-3 font-semibold text-gray-800">
              AdsTracking is not responsible for ad account bans or policy
              violations caused by client content.
            </p>
          </section>

          {/* 5. Intellectual Property */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">5.</span>{" "}
              Intellectual Property
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#db383c]">
              <li>
                All content, branding, text, and materials on this website
                belong to AdsTracking unless stated otherwise.
              </li>
              <li>
                You may not copy, reproduce, or distribute our content without
                written permission.
              </li>
              <li>
                Campaign data, reports, and strategies shared remain our
                intellectual property unless agreed otherwise.
              </li>
            </ul>
          </section>

          {/* 6. Advertising Platform Policies */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">6.</span>{" "}
              Advertising Platform Policies
            </h2>
            <p className="mb-3">We operate in compliance with:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#db383c]">
              <li>Meta (Facebook) Advertising Policies</li>
              <li>Google Ads Policies</li>
              <li>Other third-party platform rules</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              We are not responsible for actions taken by platforms such as ad
              rejection, account restriction, or suspension.
            </p>
          </section>

          {/* Grid for shorter sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 7. Limitation of Liability */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                <span className="text-[#db383c] mr-2">7.</span> Limitation of
                Liability
              </h2>
              <p className="text-sm mb-2">
                AdsTracking shall not be liable for:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-2 text-sm marker:text-[#db383c]">
                <li>Loss of revenue, profit, or data</li>
                <li>Ad performance fluctuations</li>
                <li>Platform-related issues beyond our control</li>
              </ul>
              <p className="text-sm italic">
                Our liability shall not exceed the amount paid for the specific
                service.
              </p>
            </section>

            {/* 8. Termination */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                <span className="text-[#db383c] mr-2">8.</span> Termination
              </h2>
              <p className="text-sm mb-2">We reserve the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mb-2 text-sm marker:text-[#db383c]">
                <li>Suspend or terminate services if terms are violated</li>
                <li>Refuse service for unethical or illegal activities</li>
              </ul>
              <p className="text-sm">
                Clients may terminate services with written notice, subject to
                payment obligations.
              </p>
            </section>
          </div>

          {/* 9, 10, 11 Combined */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-[#db383c] text-3xl mr-2">9.</span>{" "}
                Third-Party Links & Tools
              </h2>
              <p>
                Our website may contain links to third-party websites or tools.
                We are not responsible for their content, policies, or
                practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-[#db383c] text-3xl mr-2">10.</span>{" "}
                Governing Law
              </h2>
              <p>
                These Terms shall be governed and interpreted according to the
                laws of Bangladesh, without regard to conflict of law
                principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-[#db383c] text-3xl mr-2">11.</span>{" "}
                Changes to Terms
              </h2>
              <p>
                We may update these Terms & Conditions at any time. Updates will
                be posted on this page with a revised date.
              </p>
            </section>
          </div>

          {/* 12. Contact Information */}
          
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b border-red-200 pb-4">
              Contact
              Information
            </h2>
            <p className="mb-6 text-gray-700">
              For questions regarding these Terms, please contact us:
            </p>

            <div className="space-y-4">
              {/* Website */}
              <div className="flex items-start group">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-[#db383c]">
                  <span className="text-xl">🌐</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Website
                  </p>
                  <a
                    href="https://adstrackingbd.com/"
                    className="text-gray-800 font-medium hover:text-[#db383c] transition-colors"
                  >
                    https://adstrackingbd.com/
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-[#db383c]">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Email
                  </p>
                  <a
                    href="mailto:support@adstrackingbd.com"
                    className="text-gray-800 font-medium hover:text-[#db383c] transition-colors"
                  >
                    support@adstrackingbd.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start group">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-[#db383c]">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Phone
                  </p>
                  <a
                    href="tel:+8801521527446"
                    className="text-gray-800 font-medium hover:text-[#db383c] transition-colors"
                  >
                    +8801521527446
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
