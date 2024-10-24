import { FaFileDownload } from "react-icons/fa";

const ideaTemplate = () => {
  return(
    <section className="bg-inherit">
    <div className="p-8 md:p-12 lg:px-16 lg:py-20 sm:max-lg:pt-20">
      <div className="mx-auto max-w-5xl text-center mt-20">
        <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl lg:pb-10 sm:max-lg:pb-5"
          style={{ fontFamily: "blanka" }}
        >
          IDEA TEMPLATE
        </h1>
        <p
          className="mx-auto mt-10 text-white max-w-xl sm:text-xl/relaxed  sm:max-lg:pb-5 lg:pb-10"
          style={{ fontFamily: "Varela" }}
        >
          Download the idea template from the download button bellow. Edit the
          template and submit your idea using devfolio given in the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="flex justify-center gap-4 w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/files/ideaTemplate.pptx"
            download="Idea Template"
          >
            DOWNLOAD <FaFileDownload className="text-lg" />
          </a>
        </div>
      </div>
    </div>
    <div className="pt-20"></div>
  </section>

  );

}
export default ideaTemplate;