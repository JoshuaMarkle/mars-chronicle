import { NewspaperIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-paper dark:bg-black border-t border-black/10 dark:border-white/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <NewspaperIcon className="w-6 h-6 text-accent-red" />
              <span className="font-playfair font-bold text-lg">THE MARS CHRONICLE</span>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70">
              Exploring the frontier of Mars exploration through the lens of AI progress.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Sections</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-accent-red transition-colors">
                <a href="#exploration">Mars Exploration</a>
              </li>
              <li className="hover:text-accent-red transition-colors">
                <a href="#humans">Human Factors</a>
              </li>
              <li className="hover:text-accent-red transition-colors">
                <a href="#robots">Robotics Advancement</a>
              </li>
              <li className="hover:text-accent-red transition-colors">
                <a href="#future">Future Perspectives</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Stay Connected</h3>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates on Mars exploration and AI advancements.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-white dark:bg-black/60 border border-black/20 dark:border-white/20 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-accent-red"
              />
              <button className="bg-accent-red hover:bg-accent-red/90 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 text-center text-sm text-black/60 dark:text-white/60">
          <p>© {new Date().getFullYear()} The Mars Chronicle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;