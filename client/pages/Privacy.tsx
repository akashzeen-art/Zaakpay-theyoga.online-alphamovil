import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />

      <div className="relative z-20">
        <Navbar />

        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-sm text-white/60 mb-8">Last Updated: 14-07-2025</p>

            <div className="space-y-6 text-sm leading-relaxed text-white/90">

              <p>
                This Privacy Policy describes how Alphamovil Digital Solution LLP ("we", "us", or "our") collects, uses, discloses, and protects your personal information when you visit or make a purchase from <strong>https://theyoga.online/</strong> (the "Site") or use any of our services (collectively, the "Services").
              </p>
              <p>
                By using our Services, you agree to the collection and use of information as outlined in this Privacy Policy. If you do not agree, please do not use the Services.
              </p>

              {/* 1 */}
              <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2>

              <h3 className="text-lg font-bold text-white mt-4">a) Information You Provide Directly</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contact details: Name, phone number, email address, postal address</li>
                <li>Subscription details: Plan purchase history, billing information</li>
                <li>Account information: Login credentials, preferences</li>
                <li>Customer support queries and feedback</li>
              </ul>

              <h3 className="text-lg font-bold text-white mt-4">b) Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited, time spent, and referring URLs</li>
              </ul>
              <p>This data is gathered using technologies like cookies and other tracking tools to enhance your browsing experience and improve our services.</p>

              <h3 className="text-lg font-bold text-white mt-4">c) Third-Party Sources</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Payment gateways (e.g., to process transactions)</li>
                <li>Analytics providers (e.g., to analyze traffic and usage patterns)</li>
                <li>Advertising or marketing platforms (e.g., to optimize campaign performance)</li>
              </ul>

              {/* 2 */}
              <h2 className="text-2xl font-bold text-white mt-8">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Process and fulfill subscription orders</li>
                <li>Communicate with you about subscriptions, updates, or issues</li>
                <li>Improve the functionality and user experience of the platform</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send promotional emails, newsletters, and marketing offers (you can opt out anytime)</li>
                <li>Monitor and prevent fraudulent transactions and abuse of our Services</li>
              </ul>

              {/* 3 */}
              <h2 className="text-2xl font-bold text-white mt-8">3. How We Share Your Information</h2>
              <p>Your personal information may be shared only in limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>With service providers such as payment processors, hosting providers, and email service platforms</li>
                <li>With business partners to conduct joint promotions or events (only with your consent)</li>
                <li>With legal authorities where required by law, to protect our rights or in connection with a legal claim</li>
                <li>With affiliates or during business restructuring, such as mergers or acquisitions</li>
              </ul>
              <p className="mt-3">We do not sell your personal information. We do not share sensitive personal information for targeted advertising purposes.</p>

              {/* 4 */}
              <h2 className="text-2xl font-bold text-white mt-8">4. Cookies and Tracking Technologies</h2>
              <p>
                Cookies help us provide, protect, and improve our services. They enable functionalities like remembering your preferences and measuring user activity. You can manage or disable cookies in your browser settings. However, disabling cookies may affect certain features or functionalities of the website.
              </p>

              {/* 5 */}
              <h2 className="text-2xl font-bold text-white mt-8">5. Content Validity and Access Terms</h2>
              <p>
                The Yoga is a Video-on-Demand (VOD) yoga subscription service. Access to content is granted upon successful subscription to one of the following plans:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Weekly Plan</strong> — 7 days of full access to all yoga content on the platform</li>
                <li><strong>Monthly Plan</strong> — 30 days of full access to all yoga content on the platform</li>
                <li><strong>Quarterly Plan</strong> — 90 days of full access to all yoga content on the platform</li>
              </ul>
              <p className="mt-3">
                Access to content is valid only for the duration of the active subscription period. Upon expiry, access will be revoked until the subscription is renewed. The Yoga reserves the right to modify, update, or remove content from the platform at any time without prior notice.
              </p>

              {/* 6 */}
              <h2 className="text-2xl font-bold text-white mt-8">6. Usage Restrictions</h2>
              <p>By using our Services, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Download, reproduce, or redistribute any video content without explicit written permission</li>
                <li>Share your account credentials with others</li>
                <li>Use the platform for any unlawful or unauthorized purpose</li>
                <li>Attempt to reverse-engineer or tamper with the platform's technology</li>
              </ul>

              <h3 className="text-lg font-bold text-white mt-4">Children's Privacy</h3>
              <p>
                Our Services are not intended for users under the age of 16. We do not knowingly collect personal data from children. If you believe a child has submitted personal information through our platform, please contact us immediately at <a href="mailto:bd@alphamovil.com" className="text-purple-400 hover:text-purple-300">bd@alphamovil.com</a> and we will take prompt steps to delete such information from our records.
              </p>

              {/* 7 */}
              <h2 className="text-2xl font-bold text-white mt-8">7. User-Generated Content</h2>
              <p>
                If you post content (e.g., reviews or comments) on public areas of the Site, it becomes publicly accessible. We are not responsible for how others use this information.
              </p>

              {/* 8 */}
              <h2 className="text-2xl font-bold text-white mt-8">8. External Links</h2>
              <p>
                Our website may include links to third-party sites. We are not responsible for the privacy or security practices of these external platforms. Please review their privacy policies separately.
              </p>

              {/* 9 */}
              <h2 className="text-2xl font-bold text-white mt-8">9. Security and Retention</h2>
              <p>
                We take reasonable precautions to protect your personal information. However, no online transmission or storage is completely secure. We retain your information only as long as necessary for our business purposes or to meet legal requirements.
              </p>

              {/* 10 */}
              <h2 className="text-2xl font-bold text-white mt-8">10. Disclaimer</h2>
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-5">
                <p>
                  The content provided on this platform, including all yoga classes, videos, and related materials, is intended for general fitness and wellness purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Users are advised to consult a qualified healthcare professional before starting any new exercise program, especially if they have any pre-existing medical conditions, injuries, or concerns.
                </p>
                <p className="mt-3">
                  By participating in these classes, you acknowledge that you do so voluntarily and at your own risk. The platform and its instructors shall not be held responsible for any injuries, damages, or losses that may occur as a result of using this content. Individual results may vary.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8">9. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Access and update your personal information</li>
                <li>Delete your data</li>
                <li>Opt out of marketing communications</li>
                <li>Restrict or object to certain data processing</li>
                <li>Request data portability</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8">Governing Law and Jurisdiction</h2>
              <p>These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising out of or relating to the use of this website shall be subject to the exclusive jurisdiction of the courts located in Gurgaon, Haryana.</p>

              <h2 className="text-2xl font-bold text-white mt-8">Contact Information</h2>
              <p>To make any such request, or for privacy-related inquiries, please contact us:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Contact Number: 9667687077</li>
                <li>Full Address: B-123, SUNCITY, SECTOR-54, Gurgaon, Haryana, 122011</li>
                <li>Email ID: <a href="mailto:bd@alphamovil.com" className="text-purple-400 hover:text-purple-300">bd@alphamovil.com</a></li>
              </ul>

            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <Link to="/" className="text-purple-400 hover:text-purple-300">← Back to Home</Link>
            </div>
          </div>
        </div>

        <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white text-sm">
            <p className="mb-2">&copy; 2025, Alphamovil All Rights Reserved</p>
            <div className="flex gap-2 justify-center">
              <Link to="/terms" className="hover:text-white/80">Terms of Services</Link>
              <span>|</span>
              <Link to="/refund" className="hover:text-white/80">Refund Policy</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
