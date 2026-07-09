import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />
      
      <div className="relative z-20">
        <Navbar />
        
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-sm mb-8">Last Updated: 30-06-2025</p>
            
            <div className="space-y-6 text-sm leading-relaxed">
              <p>At Alphamovil Digital Solutions LLP, accessible one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and how we use it.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Consent</h2>
              <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and marketing purposes</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">GDPR Data Protection Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access – You have the right to request copies of your personal data</li>
                <li>The right to rectification – You have the right to request correction of inaccurate information</li>
                <li>The right to erasure – You have the right to request erasure of your personal data</li>
                <li>The right to restrict processing – You have the right to request restricted processing</li>
                <li>The right to data portability – You have the right to request data transfer</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Terms and Conditions</h2>
              <p>The Platform is owned by Alphamovil Digital Solutions LLP, a company incorporated under the Companies Act, 1956. Your use of the Platform and services are governed by these Terms of Use.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
              <p>The content provided on this platform, including all yoga classes, videos, and related materials, is intended for general fitness and wellness purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Users are advised to consult a qualified healthcare professional before starting any new exercise program, especially if they have any pre-existing medical conditions, injuries, or concerns. By participating in these classes, you acknowledge that you do so voluntarily and at your own risk. The platform and its instructors shall not be held responsible for any injuries, damages, or losses that may occur as a result of using this content. Individual results may vary.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law and Jurisdiction</h2>
              <p>These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising out of or relating to the use of this website shall be subject to the exclusive jurisdiction of the courts located in Gurgaon, Haryana.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact Number: 9667687077</li>
                <li>Full Address: B-123, SUNCITY, SECTOR-54, Gurgaon, Haryana, 122011</li>
                <li>Email ID: <a href="mailto:bd@alphamovil.com" className="text-purple-400 hover:text-purple-300">bd@alphamovil.com</a></li>
              </ul>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
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
