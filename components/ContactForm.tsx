'use client';

import React, { useState } from 'react';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';

type FormType = 'contact' | 'quote';

interface ContactFormProps {
  formType?: FormType;
  variant?: 'light' | 'dark';
}

export default function ContactForm({
  formType = 'contact',
  variant = 'light',
}: ContactFormProps) {
  const isDark = variant === 'dark';
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const inputClass = isDark
    ? 'w-full rounded-lg border border-slate-700 bg-[#0B1F33] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#F57C00] focus:outline-none focus:ring-1 focus:ring-[#F57C00]'
    : 'w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F57C00] focus:outline-none focus:ring-1 focus:ring-[#F57C00]';

  const labelClass = isDark
    ? 'mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-300'
    : 'mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.email.trim()) {
      setError('Email is required.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formType }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Unable to send message.');
    }
  };

  if (status === 'success') {
    return (
      <div
        className={`rounded-xl border p-6 text-center ${
          isDark
            ? 'border-emerald-700/50 bg-emerald-950/40 text-emerald-100'
            : 'border-emerald-200 bg-emerald-50 text-emerald-900'
        }`}
      >
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-emerald-500" />
        <h3 className="text-lg font-bold">Thank you — message sent</h3>
        <p className="mt-2 text-sm opacity-90">
          We received your inquiry and sent a confirmation to your email. Our team will follow up shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-xs font-bold uppercase tracking-wider text-[#F57C00] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formType}-name`} className={labelClass}>
            Full Name <span className="text-[#F57C00]">*</span>
          </label>
          <input
            id={`${formType}-name`}
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor={`${formType}-email`} className={labelClass}>
            Email <span className="text-[#F57C00]">*</span>
          </label>
          <input
            id={`${formType}-email`}
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formType}-phone`} className={labelClass}>
            Phone
          </label>
          <input
            id={`${formType}-phone`}
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="973-200-7886"
          />
        </div>
        <div>
          <label htmlFor={`${formType}-company`} className={labelClass}>
            Company
          </label>
          <input
            id={`${formType}-company`}
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className={inputClass}
            placeholder="Company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${formType}-subject`} className={labelClass}>
          Subject
        </label>
        <input
          id={`${formType}-subject`}
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
          placeholder={
            formType === 'quote' ? 'Freight quote request' : 'How can we help?'
          }
        />
      </div>

      <div>
        <label htmlFor={`${formType}-message`} className={labelClass}>
          Message <span className="text-[#F57C00]">*</span>
        </label>
        <textarea
          id={`${formType}-message`}
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-y`}
          placeholder={
            formType === 'quote'
              ? 'Origin, destination, weight, pallet count, preferred pickup date…'
              : 'Tell us about your freight needs…'
          }
        />
      </div>

      {status === 'error' && error && (
        <p className="text-sm font-medium text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F57C00] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-colors hover:bg-[#E65100] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending…</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>{formType === 'quote' ? 'Request Quote' : 'Send Message'}</span>
          </>
        )}
      </button>
    </form>
  );
}
