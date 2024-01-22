export const CvButton: React.FC = () => {
  const downloadCv = () => {
    const publicUrl: string = import.meta.env.BASE_URL;
    const pdfUrl = publicUrl + "CV_Josef_Staněk.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <button
      onClick={downloadCv}
      className=" border-2 border-red-500 text-red-500 font-bold uppercase px-6 py-2 hover:scale-110 duration-500 "
    >
      CV
    </button>
  );
};
