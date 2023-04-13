import QrCodeImage from "../assets/image-qr-code.png";

type QrCodeProps = {
  title: string;
  description: string;
};

export default function QrCode({ title, description }: QrCodeProps) {
  return (
    <>
      <div className="bg-grayish-blue h-screen w-full flex flex-grow justify-center items-center">
        <div className="bg-white shadow-lg rounded-[18px] p-4 flex flex-col gap-6">
          <div className="rounded-[18px] overflow-hidden w-[300px]">
            <img src={QrCodeImage} />
          </div>
          <div className="flex flex-col max-w-[260px] mx-auto text-center gap-4">
            <h1 className="text-dark-blue font-bold text-[22px]">{title}</h1>
            <p className="text-paragraph text-light-gray text-[15px] tracking-wide pb-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
