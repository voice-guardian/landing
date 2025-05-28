import MainLayout from "@/components/layouts/MainLayout";
import PartnerLogos from "@/components/PartnerLogos";
import StaticLogoRow from "@/components/StaticLogoRow";

const Index = () => (
  <div
    className="min-h-screen flex flex-col items-center justify-center relative"
    style={{
      backgroundImage: 'url(/images/home-bg.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    {/* Overlay for readability */}
    {/* <div className="absolute inset-0 bg-black/60 z-0" /> */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
      {/* Desktop: absolute, left-aligned */}
      <div className="hidden md:block">
        <div className="absolute left-[100px] top-[450px] text-left">
          <span className="libre-carlson italic text-[86px] leading-none text-white">Augment </span>{' '}
          <span className="font-inter text-[86px] leading-none text-white">your legal team.</span>
          <div className="mt-8">
            <span className="font-inter text-[32px] text-white font-normal">Delegate the busy work to Third Chair so your in-house legal team <br/>can focus on what moves the needle.</span>
          </div>
        </div>
      </div>
      {/* Tablet/Mobile: centered, proportional */}
      <div className="flex flex-col items-center justify-center w-full pt-[100px] md:hidden px-4">
        <span className="libre-carlson italic text-[54px] sm:text-[54px] leading-none text-white text-center">Augment </span>{' '}
        <span className="font-inter text-[48px] sm:text-[48px] leading-none text-white text-center">your legal team.</span>
        <div className="mt-6 w-full">
          <span className="font-inter text-[18px] sm:text-lg text-white font-normal text-center block w-full px-2">Delegate the busy work to Third Chair so your in-house legal team <br className="hidden sm:block"/>can focus on what moves the needle.</span>
        </div>
      </div>
    </div>
    {/* Static logo row 20px above the section end */}
    <div className="absolute bottom-[0px] left-0 w-full flex justify-center">
      <StaticLogoRow />
    </div>
  </div>
);

const IndexPage = () => (
  <MainLayout>
    <Index />
  </MainLayout>
);

export default IndexPage;
