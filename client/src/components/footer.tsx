export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground" data-testid="footer-copyright">
            © 2024 <span className="text-primary">Adeline Palmerston</span> - All Rights Reserved
          </p>
          <p className="text-sm text-muted-foreground mt-2" data-testid="footer-tech">
            Crafted with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
