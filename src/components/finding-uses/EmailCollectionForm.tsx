import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EmailCollectionFormProps {
  onSubmit: (email: string) => void;
  companies?: string[];
  totalUses?: number;
}

const EmailCollectionForm = ({ onSubmit, companies = [], totalUses = 0 }: EmailCollectionFormProps) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSubmit(email);
  };

  // Limit the number of companies shown in the preview
  const displayedCompanies = companies.slice(0, 5);
  const hasMoreCompanies = companies.length > 5;

  return (
    <>
      <div className="text-center mb-6">
        <div className="inline-block mb-4 relative">
          
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">
          {totalUses > 0 
            ? `We Found ${totalUses} Potential Uses!` 
            : "We Found Potential Earnings!"}
        </h3>
        
  
      </div>
      
      {totalUses > 0 && companies.length > 0 && (
        <div className="mb-4">
          <h4 className="text-gray-300 text-sm font-medium mb-2">Violating Companies found:</h4>
          <div className="bg-gray-800 rounded p-3">
            {displayedCompanies.map((company, index) => (
              <span key={index} className="text-white text-sm">
                {company}{index < displayedCompanies.length - 1 ? ", " : ""}
              </span>
            ))}
            
            {hasMoreCompanies && (
              <span className="text-gray-400 text-sm ml-1">
                + {companies.length - 5} more
              </span>
            )}
          </div>
        </div>
      )}
      
      <div className="space-y-5">
        <p className="text-gray-300 text-sm leading-relaxed">
          Enter your email to receive a detailed report on the uses you can claim from copyright uses. 
        </p>
        
        <form onSubmit={handleSubmit} className="w-full space-y-3">
          <div>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-gray-500"
              required
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-900/20"
          >
            Get My Audit Report
          </Button>
          
     
        </form>
      </div>
    </>
  );
};

export default EmailCollectionForm; 