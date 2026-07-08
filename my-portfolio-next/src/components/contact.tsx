"use client";

import React, { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import EditorialShell from "@/components/editorial/EditorialShell";
import Eyebrow from "@/components/editorial/Eyebrow";
import SectionHeader from "@/components/editorial/SectionHeader";
import StatBlock from "@/components/editorial/StatBlock";

// ── ContactSlip: editorial submission form ──────────────────────────────────
function ContactSlip() {
    const { t } = useLanguage();
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "bad">("idle");

    const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((f) => ({ ...f, [k]: e.target.value }));
        if (errors[k]) setErrors((er) => ({ ...er, [k]: "" }));
    };

    const validate = () => {
        const er: Record<string, string> = {};
        if (!form.name.trim()) er.name = "Name is required";
        if (!form.email.trim()) er.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Not a valid email";
        if (!form.subject.trim()) er.subject = "Subject is required";
        if (!form.message.trim()) er.message = "Message cannot be empty";
        else if (form.message.trim().length < 10) er.message = "A little more detail, please";
        return er;
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        const er = validate();
        setErrors(er);
        if (Object.keys(er).length) { setStatus("bad"); return; }
        setStatus("sending");

        try {
            const res = await fetch("https://email-sender-one-dun.vercel.app/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    receiver_email: "abdulhaseebsohail115@gmail.com",
                }),
            });
            if (res.ok) {
                setStatus("ok");
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("bad");
            }
        } catch {
            setStatus("bad");
        }
    };

    return (
        <form className="slip" onSubmit={submit} noValidate>
            <div className="slip-head">
               <p className="max-w-full break-words leading-relaxed">Want to build something awesome? <br /> (Or just want to sponsor my next coffee?)</p>
                <span className="slip-doc-no ml-0 text-left sm:ml-3 sm:text-right">
                    {t.contact.form.subject} · No. {new Date().getFullYear()}
                </span>
            </div>
            <div className="slip-body">
                {status === "ok" && (
                    <div className="notice notice-ok" role="status">
                        <span className="n-badge">✓</span>
                        <span>
                            <span className="n-title">{t.common?.success || "Message sent"} </span>
                            {t.contact.form.successMsg || "Thanks — I'll get back to you within a couple of days."}
                        </span>
                    </div>
                )}
                {status === "bad" && (
                    <div className="notice notice-bad" role="alert">
                        <span className="n-badge">!</span>
                        <span>
                            <span className="n-title">{t.common?.error || "Check the form"} </span>
                            {t.contact.form.errorMsg || "A few fields need attention before this can send."}
                        </span>
                    </div>
                )}

                <div className="field-lg">
                    <label htmlFor="cf-name">
                        {t.contact.form.name} <span className="req">* required</span>
                    </label>
                    <input
                        id="cf-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={set("name")}
                        className={errors.name ? "err" : ""}
                        autoComplete="name"
                        placeholder={t.contact.form.namePlaceholder}
                    />
                    {errors.name && <div className="err-msg">↳ {errors.name}</div>}
                </div>

                <div className="slip-two-col">
                    <div className="field-lg">
                        <label htmlFor="cf-email">
                            {t.contact.form.email} <span className="req">* required</span>
                        </label>
                        <input
                            id="cf-email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={set("email")}
                            className={errors.email ? "err" : ""}
                            autoComplete="email"
                            placeholder={t.contact.form.emailPlaceholder}
                        />
                        {errors.email && <div className="err-msg">↳ {errors.email}</div>}
                    </div>
                    <div className="field-lg">
                        <label htmlFor="cf-subject">
                            {t.contact.form.subject} <span className="req">* required</span>
                        </label>
                        <input
                            id="cf-subject"
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={set("subject")}
                            className={errors.subject ? "err" : ""}
                            placeholder={t.contact.form.subjectPlaceholder}
                        />
                        {errors.subject && <div className="err-msg">↳ {errors.subject}</div>}
                    </div>
                </div>

                <hr className="slip-perf" />

                <div className="field-lg">
                    <label htmlFor="cf-message">
                        {t.contact.form.message} <span className="req">* required</span>
                    </label>
                    <textarea
                        id="cf-message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={set("message")}
                        className={errors.message ? "err" : ""}
                        placeholder={t.contact.form.messagePlaceholder}
                    />
                    {errors.message && <div className="err-msg">↳ {errors.message}</div>}
                </div>

                <button
                    type="submit"
                    className="btn-submit"
                    disabled={status === "sending"}
                >
                    {status === "sending"
                        ? <>{t.common?.loading || "Sending"}<span className="arr">…</span></>
                        : <>{t.contact.form.send} <span className="arr">→</span></>}
                </button>
            </div>
        </form>
    );
}

// ── Main Contact component ──────────────────────────────────────────────────
export default function Contact() {
    const { t } = useLanguage();

    const downloadCV = () => {
        const url = `https://drive.google.com/uc?export=download&id=1FjJxMQu_gHo1MurLQnyjD2TZ0o5z_re1`;
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${t.siteConfig.name.replace(" ", "_")}_CV.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const contactRows = [
        { key: "Email", value: t.siteConfig.email },
        { key: "Phone", value: t.siteConfig.phone },
        { key: "Location", value: t.siteConfig.location },
        { key: "GitHub", value: t.siteConfig.socials?.github?.replace("https://", "") || "" },
        { key: "LinkedIn", value: t.siteConfig.socials?.linkedin?.replace("https://", "") || "" },
    ];

    return (
        <div className="editorial-page overflow-x-clip pb-24" id="contact">
            {/* ── HEADER ── */}
            <EditorialShell className="py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                    <div>
                        <Eyebrow num={5}>Resume — Contact</Eyebrow>
                        <h1 className="editorial-display editorial-title-lg mt-3 max-w-full break-words">
                            EXP<span className="text-primary">·</span>ER
                            <br />
                            <span className="border-b-[10px] border-foreground">IENCE</span>.
                        </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={downloadCV}
                            className="editorial-button editorial-button-invert w-full sm:w-auto"
                        >
                            ↓ {t.about.downloadCV} <span className="text-primary">·</span> pdf
                        </button>
                    </div>
                </div>
            </EditorialShell>

            {/* ── EXPERIENCE LIST ── */}
            <EditorialShell>
                <div className="border-t-4 border-border">
                    {t.about.experience.history.map((exp: any) => (
                        <article
                            key={exp.id}
                            className="grid gap-6 border-b border-border py-8 md:grid-cols-[160px_1.2fr_2fr]"
                        >
                            <div>
                                <div className="editorial-mono text-[11px] tracking-[0.1em] text-primary">
                                    {exp.date}
                                </div>
                                <div className="editorial-mono mt-1 text-[10px] uppercase tracking-[0.1em] text-muted">
                                    {exp.location}
                                </div>
                            </div>
                            <div>
                                <div className="editorial-display text-[clamp(26px,3vw,48px)] leading-none">
                                    {exp.title.toUpperCase()}
                                </div>
                                <div className="editorial-mono mt-2 text-[13px]">
                                    {exp.company}{" "}
                                    <span className="text-muted">· {exp.type}</span>
                                </div>
                            </div>
                            <ul className="space-y-2 text-[15px] leading-[1.55]">
                                <li className="flex gap-2">
                                    <span className="text-primary editorial-display">·</span>
                                    <span className="text-muted">{exp.description}</span>
                                </li>
                                {exp.points.map((point: any, idx: number) => (
                                    <li key={idx} className="flex gap-2">
                                        <span className="text-primary editorial-display">·</span>
                                        <span>{point.text || point}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </EditorialShell>

            {/* ── SELECTED IMPACT ── */}
            <EditorialShell className="pt-20">
                <SectionHeader num="·" kicker="Selected Impact" title="The Numbers." />
                <div className="mt-8 grid gap-6 border-y-4 border-border py-8 md:grid-cols-4">
                    <StatBlock value="2+" label={t.about.stats.experience} />
                    <StatBlock value={`${t.projects.items.length}+`} label={t.about.stats.projects} />
                    <StatBlock value="3" label="Languages" />
                    <StatBlock value="AI" label="Delivery focus" />
                </div>
            </EditorialShell>

            {/* ── CONTACT ── */}
            <EditorialShell className="pt-20">
                <SectionHeader num="·" kicker="Contact" title="Say Hello." />
                <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
                    {/* Left: contact info + availability box */}
                    <div>
                        <div className="contact-info-grid">
                            {contactRows.map(({ key, value }) =>
                                value ? (
                                    <React.Fragment key={key}>
                                        <div className="editorial-mono text-[11px] uppercase tracking-[0.12em] text-muted pt-1">
                                            {key}
                                        </div>
                                        <div className="border-b border-border pb-3 text-[17px]">
                                            {key === "Email" || key === "GitHub" || key === "LinkedIn" ? (
                                                <a
                                                    href={
                                                        key === "Email"
                                                            ? `mailto:${value}`
                                                            : key === "GitHub"
                                                            ? t.siteConfig.socials?.github
                                                            : t.siteConfig.socials?.linkedin
                                                    }
                                                    target={key !== "Email" ? "_blank" : undefined}
                                                    rel="noopener noreferrer"
                                                    className="contact-link"
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                value
                                            )}
                                        </div>
                                    </React.Fragment>
                                ) : null
                            )}
                        </div>

                        {/* Availability box */}
                        <div className="editorial-frame editorial-frame-thick availability-box">
                            <div className="editorial-mono text-[11px] uppercase tracking-[0.12em] text-primary font-bold">
                                Currently open to
                            </div>
                            <ul className="mt-3 space-y-1 text-[17px] leading-[1.6]">
                                <li>· Full-stack & AI Engineering roles</li>
                                <li>· Freelance / Contract projects</li>
                                <li>· Open Source collaboration</li>
                                <li>
                                    ·{" "}
                                    <span className="text-muted">
                                        Available {t.siteConfig.availability || "immediately"}
                                    </span>
                                </li>
                            </ul>
                            <div className="availability-tag">
                                {t.siteConfig.availability || "Available"} →
                            </div>

                            {/* Social links */}
                            <div className="mt-6 flex gap-3">
                                {t.siteConfig.socials?.github && (
                                    <a
                                        href={t.siteConfig.socials.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="editorial-button"
                                        title="GitHub"
                                    >
                                        <Github size={18} />
                                    </a>
                                )}
                                {t.siteConfig.socials?.linkedin && (
                                    <a
                                        href={t.siteConfig.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="editorial-button"
                                        title="LinkedIn"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right: ContactSlip form */}
                    <ContactSlip />
                </div>
            </EditorialShell>
        </div>
    );
}
