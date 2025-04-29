interface SuccessMessageProps {
  companies: string[];
  totalUses: number;
}

const SuccessMessage = ({ companies, totalUses }: SuccessMessageProps) => {
  return (
    <div className="flex flex-col items-center py-4">
      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>

      {totalUses > 0 ? (
        <>
          <p className="text-gray-300 text-center mb-3 font-semibold">
            We found <span className="text-purple-400">{totalUses}</span> potential copyright uses
          </p>
          
          {companies.length > 0 && (
            <div className="w-full mb-3">
              <p className="text-gray-300 mb-2 text-center">Including uses by:</p>
              <div className="bg-black/30 rounded-lg p-3 max-h-40 overflow-y-auto">
                <ul className="flex flex-col space-y-1">
                  {companies.map((company, index) => (
                    <li key={index} className="text-purple-300 flex items-center">
                      <span className="text-xs mr-2">•</span>
                      <span className="text-sm">@{company}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          <p className="text-gray-400 text-center text-sm mt-2">
            Our team will review these uses and get back to you with a detailed report.
          </p>
        </>
      ) : (
        <p className="text-gray-400 text-center">
          Our team will search for potential uses of your music and get back to you shortly with a detailed report.
        </p>
      )}
    </div>
  );
};

export default SuccessMessage; 