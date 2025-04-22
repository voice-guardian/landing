const SuccessMessage = () => {
  return (
    <div className="flex flex-col items-center py-4">
      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
      <p className="text-gray-400 text-center">Our team will get back to you shortly with your detailed report.</p>
    </div>
  );
};

export default SuccessMessage; 