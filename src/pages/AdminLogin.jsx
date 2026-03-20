import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_EMAIL = 'fortrust.id@gmail.com';
const ADMIN_PASSWORD = 'administrator';
const ADMIN_SESSION_KEY = 'landing_uts_admin_auth';

export default function AdminLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const normalizedEmail = email.trim().toLowerCase();
        const normalizedPassword = password.trim();

        if (normalizedEmail === ADMIN_EMAIL && normalizedPassword === ADMIN_PASSWORD) {
            localStorage.setItem(ADMIN_SESSION_KEY, '1');
            navigate('/admin/leads');
            return;
        }

        setErrorMessage('Email atau password tidak sesuai.');
    };

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl overflow-hidden">
                <section className="bg-gray-900 text-white p-8 md:p-10 flex flex-col justify-between">
                    <div className="space-y-4">
                        <p className="text-xs tracking-[0.2em] uppercase text-gray-300">Admin Area</p>
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Dashboard Data CTA Leads
                        </h1>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            Masuk sebagai admin untuk melihat seluruh data pendaftar konsultasi dari form CTA.
                        </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-10">
                        Akses khusus tim internal.
                    </p>
                </section>

                <section className="p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Masuk</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <label htmlFor="admin-email" className="text-sm font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                id="admin-email"
                                type="email"
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                                placeholder="Masukkan email admin"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="admin-password" className="text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <input
                                id="admin-password"
                                type="password"
                                required
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                                placeholder="Masukkan password admin"
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-sm text-red-600">{errorMessage}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white hover:bg-black transition-colors px-4 py-2.5 text-sm font-semibold"
                        >
                            Login Admin
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}