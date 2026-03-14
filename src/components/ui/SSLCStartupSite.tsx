"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

/*
SSLC STARTUP WEBSITE
Upgrades Added:
• AI style animated hero
• Real portfolio projects
• Developer dashboard preview
• Floating AI chatbot support
• Responsive SaaS layout
• Contact info integrated
*/

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="20" fill="#2563EB" />
        <path
          d="M30 65L45 35L60 65"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-bold text-lg text-blue-600">SSLC Startup</span>
    </div>
  );
}

export default function SSLCStartupSite() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  /* chatbot state */
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 I'm SSLC AI. How can I help you?" },
  ]);

  function sendChat() {
    if (!chatInput) return;

    const newMessages = [
      ...messages,
      { role: "user", text: chatInput },
      {
        role: "bot",
        text: "Thanks for your message! Our team will contact you soon.",
      },
    ];

    setMessages(newMessages);
    setChatInput("");
  }

  async function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      });

      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setService("");
      setMessage("");
    } catch {
      alert("Failed to send message.");
    }
  }

  const portfolio = [
    {
      title: "Startup SaaS Platform",
      desc: "Full SaaS platform with authentication and dashboard.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
    },
    {
      title: "Business Website",
      desc: "Modern responsive company website.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200",
    },
    {
      title: "Analytics Dashboard",
      desc: "Developer analytics platform UI.",
      image:
        "https://images.unsplash.com/photo-1551281044-8c8c1a8b1a8a?q=80&w=1200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* NAVBAR */}
      <nav className="flex flex-col md:flex-row md:justify-between items-center px-6 md:px-10 py-6 border-b bg-white/80 backdrop-blur gap-4">
        <Logo />

        <div className="flex gap-6 text-sm font-medium">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-28 px-6 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-[700px] h-[700px] bg-blue-300 rounded-full blur-3xl opacity-30 top-[-200px] left-1/2 -translate-x-1/2"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Build AI‑Ready Software
        </motion.h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10">
          SSLC Startup builds modern SaaS platforms, developer tools and
          scalable web applications.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
            Start Your Project
          </Button>

          <Button variant="outline" className="px-6 py-3 rounded-xl">
            View Portfolio
          </Button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-10 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Web Development",
            "Software Development",
            "API Development",
            "System Architecture",
            "Maintenance",
            "Technical Support",
          ].map((title, i) => (
            <Card key={i} className="bg-white shadow hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-slate-600 mt-2">
                  Professional scalable development solutions.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="px-6 md:px-10 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, i) => (
            <Card key={i} className="overflow-hidden shadow hover:shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* DASHBOARD */}
      <section id="dashboard" className="px-6 md:px-10 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Developer Dashboard
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">Projects</h3>
              <p className="text-sm text-slate-600">Manage builds</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">Analytics</h3>
              <p className="text-sm text-slate-600">Track usage</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">Deployments</h3>
              <p className="text-sm text-slate-600">Release updates</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-10 pb-24 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>

        <div className="bg-white border rounded-xl p-6 mb-6">
          <div className="font-medium">SSLC Startup</div>
          <div className="text-sm text-slate-600">sslcstartup@gmail.com</div>
          <div className="text-sm text-slate-600">+91 7983235870</div>
        </div>

        <form onSubmit={handleContact} className="space-y-4">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />

          <Textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Send Message
          </Button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t text-slate-500">
        <div>SSLC Startup</div>
        <div className="text-sm">sslcstartup@gmail.com</div>
        <div className="text-sm">+91 7983235870</div>
        <div className="text-xs mt-2">
          © 2026 SSLC Startup — Secure Software & Smart Developers
        </div>
      </footer>

      {/* FLOATING AI CHATBOT */}
      <div className="fixed bottom-6 right-6">
        {chatOpen && (
          <div className="w-72 bg-white border rounded-xl shadow-xl p-4 mb-3">
            <div className="h-40 overflow-y-auto text-sm space-y-2 mb-2">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={m.role === "bot" ? "text-blue-600" : "text-gray-700"}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                className="border rounded px-2 py-1 text-sm w-full"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask something..."
              />

              <button
                onClick={sendChat}
                className="bg-blue-600 text-white px-3 rounded"
              >
                Send
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
        >
          AI
        </button>
      </div>
    </div>
  );
}
