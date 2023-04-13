import QrCodeImage from "./assets/image-qr-code.png";

function App() {
  return (
    <>
      <div className="bg-grayish-blue h-screen w-full flex flex-grow justify-center items-center">
        <div className="bg-white shadow-lg rounded-[18px] p-4 flex flex-col gap-6">
          <div className="rounded-[18px] overflow-hidden w-[300px]">
            <img src={QrCodeImage} />
          </div>
          <div className="flex flex-col max-w-[250px] mx-auto text-center">
            <h1 className="text-dark-blue font-bold text-2xl">
              Improve your front-end skills by building projects
            </h1>
            <p className="text-paragraph text-light-gray">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
