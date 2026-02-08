import React from "react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#db383c] px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-red-100 mt-2 font-medium">
            Last updated: 31/01/2026
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
          {/* Introduction */}
          <div className="border-b border-gray-100 pb-8">
            <p className="mb-4 text-lg">
              This Cookie Policy explains how AdsTracking uses cookies and
              similar technologies when you visit{" "}
              <a
                href="https://adstrackingbd.com"
                className="font-bold text-[#db383c] hover:underline"
              >
                https://adstrackingbd.com
              </a>{" "}
            </p>
          </div>

          {/* 1. What Are Cookies? */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">1.</span> What Are
              Cookies?
            </h2>
            <p className="mb-3">
              Cookies are small text files stored on your device when you visit
              a website. They help improve your browsing experience and allow us
              to analyze and improve our services.
            </p>
          </section>

          {/* 2. Types of Cookies We Use */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">2.</span> Types of
              Cookies We Use
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Essential Cookies */}
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#db383c] shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Essential Cookies
                </h3>
                <p className="text-sm mb-3 text-gray-600">
                  Required for basic website functionality, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm marker:text-[#db383c]">
                  <li>Page navigation</li>
                  <li>Security features</li>
                  <li>Form submissions</li>
                </ul>
                <p className="text-xs mt-3 font-semibold text-[#db383c]">
                  These cookies cannot be disabled.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-300 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-sm mb-3 text-gray-600">
                  Used to understand how visitors interact with our website:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm marker:text-gray-400">
                  <li>Pages visited</li>
                  <li>Traffic sources</li>
                  <li>Time spent on pages</li>
                </ul>
                <p className="text-xs mt-3 text-gray-500">
                  Tools used may include Google Analytics.
                </p>
              </div>

              {/* Advertising Cookies */}
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-300 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Advertising & Tracking
                </h3>
                <p className="text-sm mb-3 text-gray-600">
                  Used to track conversions and performance:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm marker:text-gray-400">
                  <li>Track conversions</li>
                  <li>Run remarketing ads</li>
                  <li>Measure campaign performance</li>
                </ul>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs font-semibold">Includes:</p>
                  <ul className="list-disc pl-5 text-xs marker:text-gray-400">
                    <li>Meta (Facebook) Pixel</li>
                    <li>Google Ads Tracking</li>
                  </ul>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-300 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Functional Cookies
                </h3>
                <p className="text-sm mb-3 text-gray-600">
                  Help remember user preferences such as:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm marker:text-gray-400">
                  <li>Language</li>
                  <li>Region</li>
                  <li>Form autofill</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Third-Party Cookies */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">3.</span>{" "}
              Third-Party Cookies
            </h2>
            <p className="mb-2">
              Some cookies are set by third-party services we use.
            </p>
            <p className="text-gray-500 italic">
              These providers have their own privacy and cookie policies.
            </p>
          </section>

          {/* 4. Managing Cookies */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-[#db383c] text-3xl mr-2">4.</span> Managing
              Cookies
            </h2>
            <p className="mb-3">
              You can control or delete cookies through your browser settings:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#db383c]">
              <li>Block all cookies</li>
              <li>Allow selected cookies</li>
              <li>Delete stored cookies</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500 bg-gray-50 p-3 rounded border border-gray-100">
              Note: Disabling cookies may affect website functionality.
            </p>
          </section>

          {/* 5 & 6 Combined Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 5. Consent */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                <span className="text-[#db383c] mr-2">5.</span> Consent
              </h2>
              <p className="text-sm leading-relaxed">
                By continuing to use our website, you consent to our use of
                cookies unless you disable them via browser or cookie banner
                settings.
              </p>
            </section>

            {/* 6. Changes */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                <span className="text-[#db383c] mr-2">6.</span> Policy Changes
              </h2>
              <p className="text-sm leading-relaxed">
                We may update this Cookie Policy periodically. Changes will be
                posted on this page with an updated date.
              </p>
            </section>
          </div>


          {/* 7. Contact Us - Updated Light Theme */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b border-red-200 pb-4">
              Contact Us
            </h2>
            <p className="mb-6 text-gray-700">
              If you have questions about our Cookie Policy:
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

export default CookiePolicy;
