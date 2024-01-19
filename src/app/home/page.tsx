'use client'

export default function Home() {
  return (
    <div className="bg-sky-900 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="w-full max-w-[1460px] mt-24 mb-10 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[3.33] object-contain object-center w-[563px] overflow-hidden max-w-full self-start"
              />
              <div className="text-white text-4xl leading-[50px] self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                Maximize your career opportunities through powerful networking{" "}
              </div>
              <div className="text-sky-100 text-2xl font-medium leading-7 self-stretch mt-6 max-md:max-w-full">
                Join the ranks of over 100,000+ individuals who have turned
                their dreams into reality by connecting with real
                people—employees, hiring managers, and recruiters.{" "}
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="text-stone-50 text-2xl leading-8 justify-center items-center bg-fuchsia-800 grow px-16 py-3.5 rounded-[60px] max-md:px-5">
                  Try for free!
                </div>
                <div className="text-stone-50 text-2xl leading-8 justify-center items-center bg-sky-700 grow px-16 py-3.5 rounded-[60px] max-md:px-5">
                  Try for free!
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[0.72] object-contain object-center w-full overflow-hidden grow rounded-[50%] max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
