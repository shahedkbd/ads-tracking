import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-[#db383c] px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-red-100 mt-2 font-medium">
            Last updated: 31/01/2026
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
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

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">1.</span>{" "}
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect the following types of information:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#db383c]">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Personal Information
                </h3>
                <p className="text-sm mb-3">
                  When you contact us or use our services:
                </p>
                <ul className="list-disc pl-5 space-y-1 marker:text-[#db383c]">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business information</li>
                  <li>Any other information you voluntarily provide</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Automated Information
                </h3>
                <p className="text-sm mb-3">When you visit our website:</p>
                <ul className="list-disc pl-5 space-y-1 marker:text-gray-400">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring URLs</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">2.</span> Use of
              Cookies & Tracking Technologies
            </h2>
            <p className="mb-3">
              AdsTracking uses cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-[#db383c]">
              <li>Improve website performance</li>
              <li>Analyze user behavior</li>
              <li>Track conversions and events</li>
              <li>Run advertising and remarketing campaigns</li>
            </ul>

            <p className="mb-2 font-semibold text-gray-800">
              We may use third-party tools such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-gray-600">
              <li>Meta (Facebook) Pixel</li>
              <li>Google Analytics</li>
              <li>Google Ads Conversion Tracking</li>
            </ul>
            <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded">
              These tools may collect data in accordance with their own privacy
              policies. You can disable cookies through your browser settings if
              you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">3.</span> How We
              Use Your Information
            </h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#db383c]">
              <li>Provide and manage our services</li>
              <li>Communicate with you</li>
              <li>Improve our website and offerings</li>
              <li>Run and optimize advertising campaigns</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4 font-bold text-gray-900">
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">4.</span> Sharing
              of Information
            </h2>
            <p className="mb-3">
              We may share information only when necessary:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#db383c]">
              <li>
                With trusted service providers (analytics, ads platforms,
                hosting)
              </li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights, property, or safety</li>
            </ul>
            <p className="mt-2 text-sm text-gray-500">
              All third parties are required to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">5.</span> Data
              Security
            </h2>
            <p className="mb-3">
              We take reasonable technical and organizational measures to
              protect your personal data from unauthorized access, disclosure,
              alteration, or destruction.
            </p>
            <p className="text-sm text-gray-500 italic">
              However, no method of transmission over the internet is 100%
              secure.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                <span className="text-[#db383c] mr-2">6.</span> Third-Party
                Links
              </h2>
              <p className="text-sm">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of those
                websites.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                <span className="text-[#db383c] mr-2">7.</span> Your Privacy
                Rights
              </h2>
              <p className="text-sm mb-2">
                Depending on your location, you may have the right to access,
                correct, delete, or withdraw consent regarding your data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                <span className="text-[#db383c] mr-2">8.</span> Children’s
                Information
              </h2>
              <p className="text-sm">
                AdsTracking does not knowingly collect personal information from
                children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                <span className="text-[#db383c] mr-2">9.</span> Policy Changes
              </h2>
              <p className="text-sm">
                We may update this Privacy Policy. Changes will be posted here
                with an updated date.
              </p>
            </section>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b border-red-200 pb-4">
              Contact Us
            </h2>
            <p className="mb-6 text-gray-700">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>

            <div className="space-y-4">
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

export default PrivacyPolicy;
