import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_2ufuzm2",
      "template_zef9108",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "MbKBnLxIU7K6Xy1YX"
    );

    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    toast({
      title: "Error sending message",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`fade-in mb-16 ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-center text-primary mb-4" data-testid="contact-title">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto" data-testid="contact-description">
            Let's work together to bring your ideas to life. I'm always excited to take on new challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div
            ref={leftRef}
            className={`slide-in-left space-y-8 ${leftVisible ? 'visible' : ''}`}
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4" data-testid="contact-email">
                  <Mail className="text-primary text-xl w-6 h-6" />
                  <span className="text-muted-foreground">sivakulanthaisamy1804@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-phone">
                  <Phone className="text-primary text-xl w-6 h-6" />
                  <span className="text-muted-foreground">+91 6380603146</span>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-location">
                  <MapPin className="text-primary text-xl w-6 h-6" />
                  <span className="text-muted-foreground">Erode, India</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-white-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/siva-kulanthaisamy-1776352a9/"
                  className="text-white-600 hover:text-white-600 transition-colors text-2xl"
                  data-testid="social-linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/sivasks2004"
                  className="text-white-600 hover:text-white transition-colors text-2xl"
                  data-testid="social-github"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div
            ref={rightRef}
            className={`slide-in-right ${rightVisible ? 'visible' : ''}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input w-full px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground"
                  placeholder="Your Name"
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Gmail
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input w-full px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground"
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input w-full px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Your Message"
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-accent transition-all disabled:opacity-50"
                data-testid="button-send-message"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
