import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Certification {
  id: number;
  title: string;
  image: string;
  skills: string[];
  certUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "IBM Data Science Certificate",
    image: "/IBM.jpg",
    skills: ["IBM","IBM SKillsBuild", "Data Science"],
    certUrl: "https://drive.google.com/file/d/1gBcysgyBt0AdhbPQajyaKBnE8D8XzwZN/view?usp=sharing"
  },
  {
    id: 2,
    title: "Oracle Certificate Professional",
    image: "/OracleAnalytics.jpg",
    skills: ["Oracle", "Oracle Analytics Cloud"],
    certUrl: "https://drive.google.com/file/d/1PXMHbGT2VzofwiyXlPGihbF7Ywzv2WLg/view?usp=sharing"
  },
  {
    id: 3,
    title: "IEEE",
    image: "/IEEE.gif",
    skills: ["IEEE-JCT", "International conference"],
    certUrl: "https://drive.google.com/file/d/1nO3OmcklAH3PMqOWnYGMo3Q4RrUZqdef/view?usp=sharing"
  },
  {
    id: 4,
    title: "Internship Certificate",
    image: "/Inlighnx.png",
    skills: ["InLighnX Global Pvt. Ltd.","Intern", "Data Analytics"],
    certUrl: "https://drive.google.com/file/d/1ng3BA4U-xirn9luG9_GC2fPwnGnhUscP/view?usp=sharing"
  }
];

export default function CertificationsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const handleViewCertificate = (cert: Certification) => {
    if (cert.certUrl) {
      window.open(cert.certUrl, "_blank"); // Open certificate link
    } else {
      console.log(`No certificate link available for ${cert.title}`);
    }
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`fade-in mb-16 ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-center text-primary mb-4">
            My Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            A collection of certifications I have earned to strengthen my
            technical skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              onViewCertificate={handleViewCertificate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({
  cert,
  onViewCertificate
}: {
  cert: Certification;
  onViewCertificate: (cert: Certification) => void;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Card
      ref={ref}
      className={`project-card bg-card border border-border rounded-lg overflow-hidden fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-48 object-contain p-2"
      />

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary mb-4">
          {cert.title}
        </h3>

        <div className="flex gap-2 mb-4 flex-wrap">
          {cert.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
            >
              {skill}
            </span>
          ))}
        </div>

        <Button
          variant="outline"
          onClick={() => onViewCertificate(cert)}
          className="border border-primary text-primary px-4 py-2 rounded text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          View Certificate
        </Button>
      </CardContent>
    </Card>
  );
}
