import FadeIn from "./FadeIn";

const certificates = [

  {
    title: "🏆 ISRO Def-Space Summer Internship",
    issuer: "Bharat Space Education Research Centre (BSERC)",
    subtitle: "Cybersecurity Internship • 120 Hours • 2026",
    image: "/certificates/isro.jpg",
  },
  {
    title: "☕ Java Programming",
    issuer: "GeeksforGeeks",
    subtitle: "Java Fundamentals • Training Program",
    image: "/certificates/java.jpg",
  },
  {
    title: "🛡️ Cybersecurity Hackathon",
    issuer: "University Participant",
    subtitle: "Team Competition • Cybersecurity Challenge",
    image: "/certificates/hackathon.jpg",
  },
];
export default function CertificateSection() {
  return (
    <section
      id="certificates"
      className="bg-[#F4F1EC] py-28 px-8"
    >
      <h2
        className="text-center font-black uppercase mb-20 text-[#0C0C0C]"
        style={{ fontSize: "clamp(3rem,12vw,160px)" }}
      >
        Certificates
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {certificates.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="flex flex-col h-[640px] overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2">

              <img
                src={item.image}
                className="w-full h- object-contain bg-gray-50 p-4"
                alt={item.title}
              />

              <div className="flex flex-col flex-1 p-6">

                <h3 className="text-xl font-bold text-[#0C0C0C]">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.issuer}
                </p>
                
                <p className="text-cyan-600 font-medium mt-1">
                    {item.subtitle}
                </p>
                <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-auto rounded-full bg-black px-5 py-3 text-white hover:bg-gray-800 transition"
                >
                View Certificate
                </a>
              </div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}