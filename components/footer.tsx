import Image from 'next/image';
import SectionHeaders from './SectionHeaders';

const Footer = () => {
  return (
    <footer className="bg-white border-t flex">
      <div className="mx-auto py-10">
        <div className="flex items-center justify-center mb-16">
          <section className="text-center my-8">
            <SectionHeaders
              subHeader={'untuk informasi lebih lanjut'}
              mainHeader={'Hubungi Kami'}
            />
            <div className="mt-8">
              <a
                className="text-4xl underline text-gray-500"
                href="tel:+6282215100376"
              >
                +62 822-1510-0376
              </a>
            </div>
          </section>
        </div>
        <p className="text-center text-xs text-black">
          &copy; 2024 Aline Inc. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
