import FadeIn from "./FadeIn";

const EDUCATION = [
  {
    year: "2024 – 2028",
    title: "Bachelor of Technology (Computer Science & Engineering)",
    institute: "Centurion University of Technology and Management",
    extra: "CGPA: 8.69",
  },
  {
    year: "2024",
    title: "Intermediate (12th)",
    institute: "Narayan Karmyogi Vidyalaya",
    extra: "60.2%",
  },
  {
    year: "2022",
    title: "Matriculation (10th)",
    institute: "Uchch Madhyamik Vidyalaya",
    extra: "65%",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="bg-[#0C0C0C] text-white py-24 px-6 md:px-10"
    >
      <h2
        className="text-center font-black uppercase mb-20"
        style={{ fontSize: "clamp(3rem,12vw,160px)" }}
      >
        Education
      </h2>

      <div className="max-w-5xl mx-auto">
        {EDUCATION.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="border-b border-white/10 py-8">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                {item.year}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-[#0C0C0C] mt-2">
                {item.institute}
              </p>

              <p className="text-cyan-400 mt-1">
                {item.extra}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;