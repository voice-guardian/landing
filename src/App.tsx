import AppRouter from '@/routes';
import { useMobileUseCaseMenu } from '@/context/MobileUseCaseMenuContext';
import { X } from 'lucide-react';

function App() {
  const { open, setOpen } = useMobileUseCaseMenu();
  return (
    <>
      <AppRouter />
      {open && (
        <div className="fixed inset-0 min-h-screen w-screen z-[9999]">
          {/* Overlay - clicking it closes the menu */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-[9999]"
            onClick={() => setOpen(false)}
          />
          {/* Menu content - clicking inside does NOT close the menu */}
          <div
            className="fixed inset-0 flex flex-col items-center justify-center min-h-screen w-screen z-[99999]"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white text-3xl">
              <X />
            </button>
            <div className="flex flex-col items-center justify-center gap-8 w-full">
              <a
                href="/enforcement"
                className="text-white text-2xl font-semibold text-center"
                onClick={() => setOpen(false)}
              >
                IP enforcement
              </a>
              <div className="text-white text-2xl font-semibold text-center flex items-center gap-2">
                Registrations
                <span className="ml-2 bg-white/30 text-[10px] text-gray-700 px-2.5 py-0.5 rounded-sm font-semibold leading-tight" style={{lineHeight: '1.1'}}>Coming soon</span>
              </div>
              <div className="text-white text-2xl font-semibold text-center flex items-center gap-2">
                Compliance
                <span className="ml-2 bg-white/30 text-[10px] text-gray-700 px-2.5 py-0.5 rounded-sm font-semibold leading-tight" style={{lineHeight: '1.1'}}>Coming soon</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
