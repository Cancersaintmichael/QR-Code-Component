import QrCode from "./components/QrCode";

function App() {
  const content = [
    {
      id: 1,
      title: "Improve your front-end skills by building projects",
      description:
        "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
    },
  ];
  return (
    <>
      {content.map((content) => (
        <QrCode
          key={content.id}
          title={content.title}
          description={content.description}
        />
      ))}
    </>
  );
}

export default App;
