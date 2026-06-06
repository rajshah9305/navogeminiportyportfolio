"use client";

import { useState } from "react";

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message })
      });
      
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="container ct-content">
        <div className="label reveal" style={{ justifyContent: "center" }}>Initiate Project</div>
        <h2 className="ct-title reveal del-1">Let&apos;s build <span>something robust.</span></h2>
        
        {status === "success" ? (
          <div className="reveal del-2" style={{ padding: "40px", border: "1px solid var(--border)", borderRadius: "8px", background: "rgba(16, 185, 129, 0.1)", color: "#10b981", margin: "0 auto 60px", maxWidth: "500px" }}>
            Message received successfully. I will get back to you soon.
          </div>
        ) : (
          <form className="reveal del-2" onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto 60px", textAlign: "left" }}>
            <div style={{ marginBottom: "24px" }}>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: "100%", padding: "16px", background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-main)", borderRadius: "4px", fontFamily: "var(--font-mono)" }}
                className="interactive"
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <textarea 
                placeholder="Project Details" 
                required 
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                style={{ width: "100%", padding: "16px", background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-main)", borderRadius: "4px", fontFamily: "var(--font-mono)", resize: "vertical" }}
                className="interactive"
              ></textarea>
            </div>
            <button type="submit" disabled={status === "loading"} className="btn btn-primary interactive" style={{ width: "100%" }}>
              {status === "loading" ? "Sending..." : "Submit Inquiry"}
            </button>
            {status === "error" && <p style={{ color: "#ef4444", marginTop: "12px", textAlign: "center" }}>Failed to send message. Please try again.</p>}
          </form>
        )}
        
        <p className="p-lg reveal del-3" style={{ margin: "0 auto" }}>Currently accepting inquiries for Q3 2025 architecture consulting and full-stack development contracts.</p>
      </div>
    </section>
  );
}
