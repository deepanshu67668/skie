'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, KeyRound, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok && data.adminKey) {
        localStorage.setItem('skie_admin_key', data.adminKey);
        router.push('/admin');
      } else {
        setErrorMsg('Invalid admin passcode. Try default: skie2026');
      }
    } catch (err) {
      setErrorMsg('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-slate-900 text-white relative">
      <div className="max-w-md w-full dark-glass-card p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center border border-brand-cyan/30">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-black tracking-tight">SKIE Staff Admin Portal</h1>
          <p className="text-xs text-slate-400">Enter staff authorization passcode to access website control panel.</p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold rounded-xl text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Admin Passcode
            </label>
            <div className="relative">
              <KeyRound className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter passcode (skie2026)"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-sm text-white focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-bright to-cyan-500 text-white font-bold text-sm shadow-lg hover:scale-[1.01] transition-all"
          >
            {loading ? 'Authenticating...' : 'Access Admin Dashboard'}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-center space-x-1">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
          <span>Protected Route • Restricted to SKIE Management</span>
        </div>

      </div>
    </div>
  );
}
