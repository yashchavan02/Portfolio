import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Linkedin, Github, MapPin, Check, ArrowUpRight } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'
import { profile } from '@/data/profile'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initial: FormState = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const validate = (data: FormState) => {
    const e: Partial<FormState> = {}
    if (!data.name.trim()) e.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Please enter a valid email'
    if (!data.subject.trim()) e.subject = 'Please add a subject'
    if (data.message.trim().length < 10)
      e.message = 'Message should be at least 10 characters'
    return e
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) return
    setSending(true)
    const body = encodeURIComponent(
      `Hi Yash,\n\n${form.message}\n\n— ${form.name} (${form.email})`,
    )
    const subject = encodeURIComponent(form.subject)
    window.location.href = `mailto:${profile.social.email}?subject=${subject}&body=${body}`
    await new Promise((r) => setTimeout(r, 400))
    setSending(false)
    setSent(true)
    setForm(initial)
    window.setTimeout(() => setSent(false), 4000)
  }

  const onChange = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((s) => ({ ...s, [k]: e.target.value }))
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }))
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-narrow">
        <SectionReveal>
          <div className="mb-16">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#4B5694' }} /> Contact
            </span>
            <h2 className="section-heading mt-5 text-balance">
              Let's build something{' '}
              <span style={{ color: '#4B5694' }}>together</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          {/* Left — Direct line + channels */}
          <SectionReveal delay={0.05}>
            <div>
              <p
                className="text-xl md:text-2xl leading-snug font-display"
                style={{ color: 'rgba(240, 236, 228, 0.7)' }}
              >
                The fastest way to reach me is{' '}
                <span style={{ color: '#4B5694' }}>email</span>. I usually reply within 24 hours.
              </p>

              {/* Direct email — prominent */}
              <a
                href={`mailto:${profile.social.email}`}
                className="group block mt-10 p-6 rounded-2xl transition"
                style={{
                  background: 'rgba(75, 86, 148, 0.04)',
                  border: '1px solid rgba(75, 86, 148, 0.1)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.4)' }}>
                    direct line
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:rotate-45"
                    style={{ color: 'rgba(240, 236, 228, 0.3)' }}
                  />
                </div>
                <div className="font-display text-base sm:text-lg md:text-xl break-words" style={{ color: '#f0ece4' }}>
                  {profile.social.email}
                </div>
              </a>

              {/* Other channels */}
              <div className="mt-8 flex flex-col gap-5">
                {[
                  { icon: Linkedin, label: 'LinkedIn', value: 'yashchavan02', href: profile.social.linkedin },
                  { icon: Github, label: 'GitHub', value: 'yashchavan02', href: profile.social.github },
                  { icon: MapPin, label: 'Based in', value: profile.location },
                ].map((ch) => {
                  const inner = (
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="group flex items-center gap-4 p-4 rounded-xl transition-colors"
                      style={{
                        background: 'rgba(240, 236, 228, 0.025)',
                        border: '1px solid rgba(240, 236, 228, 0.06)',
                      }}
                    >
                      <span
                        className="grid place-items-center h-9 w-9 rounded-lg shrink-0"
                        style={{
                          background: 'rgba(75, 86, 148, 0.08)',
                          border: '1px solid rgba(75, 86, 148, 0.08)',
                        }}
                      >
                        <ch.icon size={14} style={{ color: '#4B5694' }} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
                          {ch.label}
                        </div>
                        <div className="text-sm" style={{ color: 'rgba(240, 236, 228, 0.8)' }}>
                          {ch.value}
                        </div>
                      </div>
                      {ch.href && (
                        <ArrowUpRight
                          size={14}
                          className="shrink-0 transition-transform group-hover:rotate-45"
                          style={{ color: 'rgba(240, 236, 228, 0.2)' }}
                        />
                      )}
                    </motion.div>
                  )
                  return ch.href ? (
                    <a key={ch.label} href={ch.href} target="_blank" rel="noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div key={ch.label}>{inner}</div>
                  )
                })}
              </div>
            </div>
          </SectionReveal>

          {/* Right — Form */}
          <SectionReveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: 'rgba(240, 236, 228, 0.025)',
                border: '1px solid rgba(240, 236, 228, 0.05)',
              }}
              noValidate
            >
              <div className="flex items-center justify-between mb-7">
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
                    send a message
                  </div>
                  <div className="mt-1 font-display text-lg" style={{ color: '#f0ece4' }}>
                    Drop a few lines →
                  </div>
                </div>
                <div className="mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.25)' }}>
                  {form.message.length} chars
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Your name"
                  value={form.name}
                  onChange={onChange('name')}
                  error={errors.name}
                  placeholder="Yash Chavan"
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={onChange('email')}
                  error={errors.email}
                  placeholder="officialyashchavan@gmail.com"
                />
              </div>
              <div className="mt-4">
                <Field
                  label="Subject"
                  value={form.subject}
                  onChange={onChange('subject')}
                  error={errors.subject}
                  placeholder="Backend developer role · freelance project"
                />
              </div>
              <div className="mt-4">
                <Field
                  label="Message"
                  textarea
                  value={form.message}
                  onChange={onChange('message')}
                  error={errors.message}
                  placeholder="Hey Yash, I'd love to chat about..."
                />
              </div>

              <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
                  → opens your mail app
                </p>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={sending}
                  className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sent ? (
                    <>
                      <Check size={16} /> Message sent
                    </>
                  ) : sending ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} /> Send message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
  textarea = false,
}: {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  placeholder?: string
  type?: string
  textarea?: boolean
}) {
  return (
    <label className="block">
      <span
        className="block mono text-[10px] uppercase tracking-widest mb-1.5"
        style={{ color: 'rgba(240, 236, 228, 0.4)' }}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input-field resize-none ${error ? '!border-[rgba(220,80,80,0.5)]' : ''}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input-field ${error ? '!border-[rgba(220,80,80,0.5)]' : ''}`}
        />
      )}
      {error && (
        <span className="mt-1 block text-xs" style={{ color: 'rgba(220, 130, 130, 0.8)' }}>
          {error}
        </span>
      )}
    </label>
  )
}
