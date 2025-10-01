'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animation
      gsap.from('.contact-card', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-card',
          start: 'top 80%',
        },
      });

      // Form elements animation
      gsap.from('.form-field', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={contactRef} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>
        <Card className="contact-card">
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="contact-form space-y-6">
              <div className="form-field">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border rounded-md bg-background"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border rounded-md bg-background"
                />
              </div>
              <div className="form-field">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-2 border rounded-md bg-background resize-none"
                />
              </div>
              <div className="form-field">
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
