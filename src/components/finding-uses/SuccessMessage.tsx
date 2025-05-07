interface SuccessMessageProps {
  companies: string[];
  totalUses: number;
}

const SuccessMessage = ({ companies, totalUses }: SuccessMessageProps) => {
  // Limit the number of companies shown in the success message
  const displayedCompanies = companies.slice(0, 3);
  const remainingCount = companies.length - 3;

  return (
    <div className="flex flex-col items-center py-2">
      {/* Success animation */}
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-full flex items-center justify-center mb-2 animate-pulse">
          <div className="absolute inset-0 rounded-full blur-md bg-green-500/20"></div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-green-400 relative z-10 animate-bounce" 
            style={{ animationDuration: '2s' }}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Success message */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto my-3"></div>
        <p className="text-gray-300 mb-1">
          Your revenue report is on its way
        </p>
      </div>

      {/* Details section */}
      {totalUses > 0 ? (
        <div className="w-full">
          <div className="bg-gradient-to-r from-purple-900/10 to-purple-800/5 rounded-lg p-5 border border-purple-900/20 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-purple-300 font-medium">Potential Revenue</h4>
              <span className="text-white font-bold">{totalUses} uses</span>
            </div>
            
            {companies.length > 0 && (
              <>
                <div className="h-px w-full bg-purple-900/20 mb-3"></div>
                <h4 className="text-purple-300 font-medium text-sm mb-2">Top Brands Using Your Content:</h4>
                <ul className="space-y-2">
                  {displayedCompanies.map((company, index) => (
                    <li key={index} className="flex items-center text-white">
                      <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                      <span>{company}</span>
                    </li>
                  ))}
                  
                  {remainingCount > 0 && (
                    <li className="text-gray-400 text-sm pl-4">
                      + {remainingCount} more brands
                    </li>
                  )}
                </ul>
              </>
            )}
          </div>
          
          <p className="text-gray-400 text-center text-sm">
            Our team will review these opportunities and contact you shortly with licensing options and next steps.
          </p>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-purple-900/10 to-purple-800/5 rounded-lg p-5 border border-purple-900/20 mb-4">
          <p className="text-gray-300 text-center">
            Our team will search for potential uses of your music and get back to you with a detailed revenue report.
          </p>
        </div>
      )}
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Check your inbox in the next 24 hours for our detailed analysis.
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage; 