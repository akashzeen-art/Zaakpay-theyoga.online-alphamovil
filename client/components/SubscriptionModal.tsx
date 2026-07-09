import { useState } from "react";
import { X } from "lucide-react";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
}

const plans = [
  { key: "weekly",    label: "Weekly",    price: 79,  original: 158, discount: "50% OFF" },
  { key: "monthly",   label: "Monthly",   price: 149, original: 298, discount: "50% OFF" },
  { key: "quarterly", label: "Quarterly", price: 199, original: 398, discount: "50% OFF" },
];

export default function SubscriptionModal({ isOpen, onClose, onSubscribe }: SubscriptionModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("weekly");

  if (!isOpen) return null;

  const handleMobileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile || mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setStep(2);
  };

  const handlePlanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("isSubscribed", "true");
    localStorage.setItem("userMobile", mobile);
    localStorage.setItem("subscribedPlan", selectedPlan);
    onSubscribe();
    setStep(1);
    setMobile("");
    setSelectedPlan("weekly");
  };

  const handleClose = () => {
    onClose();
    setStep(1);
    setMobile("");
    setError("");
    setSelectedPlan("weekly");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 animate-fade-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Step 1 — Mobile */}
        {step === 1 && (
          <form onSubmit={handleMobileSubmit}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Enter Mobile Number</h3>
            <div className="mb-6">
              <input
                type="tel"
                id="mobileInput"
                placeholder="Enter your phone number"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value.replace(/\D/g, "").slice(0, 10));
                  setError("");
                }}
                maxLength={10}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
                autoFocus
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              Subscribe Now
            </button>
          </form>
        )}

        {/* Step 2 — Plan */}
        {step === 2 && (
          <form onSubmit={handlePlanSubmit}>
            <div className="text-center mb-4 text-gray-600">Mobile: {mobile}</div>

            {plans.map((plan) => (
              <label
                key={plan.key}
                className={`block mb-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  selectedPlan === plan.key
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 hover:border-purple-400"
                }`}
              >
                <input
                  type="radio"
                  name="plan"
                  className="mr-3"
                  value={plan.key}
                  checked={selectedPlan === plan.key}
                  onChange={() => setSelectedPlan(plan.key)}
                />
                <span className="font-semibold">{plan.label}</span>
                <span className="ml-2 text-purple-600 font-bold">₹{plan.price}</span>
                <span className="ml-2 line-through text-gray-400">₹{plan.original}</span>
                <span className="ml-2 text-green-600 text-sm font-semibold">{plan.discount}</span>
              </label>
            ))}

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
