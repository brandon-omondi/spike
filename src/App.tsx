import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import slogo from '@/assets/ss-logo.png';
import laptop from '@/assets/laptop-s.png';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          className="lg:w-1/2 space-y-8"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.img
            src={slogo}
            alt="Spike Solutions Logo"
            className="h-16"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold">we'll<br />be back soon!</h1>
            <p className="text-lg text-gray-400">
              Our team is working hard to resolve the issue.
              You can subscribe to our mailing list order to get notified.
            </p>
          </motion.div>

          <motion.form 
            className="space-y-4"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-400">Email</label>
              <Input
                type="email"
                id="email"
                placeholder="john.doe@gmail.com"
                className="bg-transparent border-gray-700 focus:border-blue-500"
              />
            </div>
            <Button className="w-full bg-white text-black hover:bg-gray-200 transition-colors">
              Subscribe
            </Button>
          </motion.form>
        </motion.div>

        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={laptop}
            alt="Laptop Display"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </motion.div>
      </main>

      <motion.footer 
        className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-sm text-gray-400">
          © 2025 Copyright Spike solutions | All Rights Reserved
        </p>
        
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </motion.footer>
    </div>
  );
}

export default App;