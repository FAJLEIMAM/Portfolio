import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    title: 'Cybersecurity Intern – Def-Space (ISRO)',
    description:
      'Completed a cybersecurity internship focused on network security, vulnerability assessment, threat investigation, and cybersecurity best practices. Gained practical experience in security analysis and cyber defense.',
  },
  {
    number: '02',
    title: 'AI-Powered Phishing Detection',
    description:
      'Built PhishGuard AI, an intelligent phishing detection platform that analyzes suspicious URLs using machine learning and provides real-time security recommendations.',
  },
  {
    number: '03',
    title: 'Digital Forensics & OSINT',
    description:
      'Performed digital investigations using OSINT techniques, network reconnaissance, and forensic analysis to identify security threats and gather digital evidence.',
  },
  {
    number: '04',
    title: 'Network Security',
    description:
      'Hands-on experience with Linux, Wireshark, Nmap, Splunk, Suricata, Maltego, Recon-ng, and OPNsense for network monitoring, traffic analysis, and vulnerability assessment.',
  },
  {
    number: '05',
    title: 'Continuous Learning',
    description:
      'Continuously improving cybersecurity skills through internships, personal projects, Capture The Flag challenges, and practical security research.',
  },
];

const ServicesSection = () => {
  return (
    <section
      className="bg-[#F4F1EC] py-24 px-6 md:px-10"
      id="services"
    >
      <h2
        className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience & Expertise
      </h2>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(12,12,12,0.15)',
                ...(i === SERVICES.length - 1
                  ? { borderBottom: '1px solid rgba(12,12,12,0.15)' }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black text-[#0C0C0C] leading-none"
                style={{ fontSize: 'clamp(3rem,10vw,140px)' }}
              >
                {service.number}
              </div>

              <div className="group flex flex-col gap-4 pt-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] leading-tight relative inline-block w-fit"
                  style={{ fontSize: 'clamp(1rem,2.2vw,2.1rem)' }}
                >
                  {service.title}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#0C0C0C]/60 transition-all duration-500 group-hover:w-full" />
                </h3>

                <p
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.9rem,1.6vw,1.2rem)',
                    opacity: 0.65,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;