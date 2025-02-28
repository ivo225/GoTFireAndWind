
import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "@/constants/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone/10 border-t border-stone/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Main Navigation */}
          <div>
            <h3 className="font-cinzel text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-accent hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-cinzel text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-accent hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Credits */}
          <div className="md:col-span-2">
            <h3 className="font-cinzel text-lg font-semibold mb-4">About This Encyclopedia</h3>
            <p className="text-accent mb-4">
              This comprehensive encyclopedia is powered by the API of Ice and Fire, 
              providing detailed information about George R.R. Martin's incredible universe. 
              All content is curated for fans, by fans.
            </p>
            <p className="text-accent text-sm">
              "A Song of Ice and Fire" and all associated names, characters, and places are 
              trademarks of George R.R. Martin and the respective rights holders.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent text-sm">
              © {currentYear} Ice & Fire Encyclopedia. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-accent hover:text-primary transition-colors text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
