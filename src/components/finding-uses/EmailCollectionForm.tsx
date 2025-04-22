import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EmailCollectionFormProps {
  onSubmit: (email: string) => void;
}

const EmailCollectionForm = ({ onSubmit }: EmailCollectionFormProps) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSubmit(email);
  };

  return (
    <>
      <h3 className="text-xl font-bold text-white mb-2">We Found Potential Earnings!</h3>
      <p className="text-gray-400 mb-4">Enter your email to receive a detailed report on the money you can claim from copyright uses.</p>
      
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={handleEmailChange}
          className="w-full mb-3 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <Button 
          type="submit"
          className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
        >
          Get My Report
        </Button>
      </form>
    </>
  );
};

export default EmailCollectionForm; 