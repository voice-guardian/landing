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
      <div className="absolute" style={{ left: 100, top: 450 }}>
        <span className="libre-carlson italic text-[86px] text-white leading-none">Augment </span>{' '}
        <span className="font-inter text-[86px] text-white leading-none">your legal team.</span>
        <div className="mt-8">
          <span className="font-inter text-[32px] text-white font-normal">Delegate the busy work to Third Chair so your in-house legal team <br/>can focus on what moves the needle.</span>
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
