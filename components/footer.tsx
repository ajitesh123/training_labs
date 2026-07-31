import { Briefcase, Mail, MessageSquare, Users } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 border-b border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-lg">Training Labs</span>
            </div>
            <p className="text-sm text-white/70">
              Sales training and coaching for revenue teams that want practice,
              not just content.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Courses</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#courses" className="hover:text-white transition">
                  Discovery Calls
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition">
                  Objection Handling
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition">
                  Product Demos
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition">
                  Manager Coaching
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Training Labs. All rights
            reserved.
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/70 hover:text-white transition"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition"
              title="Community"
            >
              <MessageSquare size={20} />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition"
              title="Teams"
            >
              <Users size={20} />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition"
              title="Careers"
            >
              <Briefcase size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
