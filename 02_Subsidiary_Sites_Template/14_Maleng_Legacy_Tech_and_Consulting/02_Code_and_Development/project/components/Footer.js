export default function Footer() {
  const year = new Date().getFullYear();
  const parentUrl = process.env.NEXT_PUBLIC_PARENT_URL || 'https://www.malenglegacy.co.za';

  return (
    <footer id="contact" className="bg-primary/60 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-3">Maleng Legacy Subsidiary</h3>
            <p className="text-sm text-gray-300">Standalone operating website template.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-accent transition">Services</a></li>
              <li><a href="#why-choose-us" className="hover:text-accent transition">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="mailto:info@malenglegacy.co.za" className="hover:text-accent transition">info@malenglegacy.co.za</a></li>
              <li><a href="tel:+27738847449" className="hover:text-accent transition">+27 73 884 7449</a></li>
              <li><a href={parentUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Visit Parent Site</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-xs text-gray-400 text-center">
          © {year} Maleng Legacy Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
