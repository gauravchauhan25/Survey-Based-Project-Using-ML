export default function Questionnaire() {
  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-badge bg-yellow-400 text-slate-900">
            Survey
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Data Privacy Awareness Survey
          </h1>
          <p className="text-blue-200">
            Takes less than 5 minutes. Completely anonymous.
          </p>
        </div>
      </div>

      <div className="my-20 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <div className="backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 text-center">
            <h1 className="text-2xl font-semibold mb-4">
              Data Privacy Awareness Survey
            </h1>

            <p className="mb-4 text-sm leading-relaxed">
              Hello, We are BCA final-year students conducting a research study
              on awareness of data privacy laws, focusing on the Information
              Technology Act, 2000 and the Digital Personal Data Protection Act,
              2023.
            </p>

            <p className="mb-4 text-sm leading-relaxed ">
              This survey is for academic purposes only. We collect minimal,
              non-identifiable information (such as course and year of study)
              and do not collect personal details like your name or contact
              information. We act as the Data Fiduciary, and your responses will
              be kept confidential, securely stored, and used strictly for
              research and survey purposes.
            </p>

            <p className="mb-6 text-sm leading-relaxed">
              Your responses will only be used for analysis in our study. We
              request you to kindly fill out this form.
            </p>

            <button className="bg-blue-700 hover:bg-blue-600 transition px-6 py-2 rounded-lg font-medium shadow-md text-white">
              <a
                href="https://forms.gle/18iKEMjiwCCE1Qi76"
                target="_blank"
              >
              Start Survey
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-10"></div>
    </div>
  );
}
