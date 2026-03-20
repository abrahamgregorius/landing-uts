import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCtaLeads } from '../lib/adminLeadQuery';

const ADMIN_SESSION_KEY = 'landing_uts_admin_auth';

function formatDateTime(value) {
    if (!value) {
        return '-';
    }

    const date = new Date(value);
    return new Intl.DateTimeFormat('id-ID', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(date);
}

export default function AdminLeads() {
    const navigate = useNavigate();
    const [leads, setLeads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let isMounted = true;

        async function loadLeads() {
            try {
                const data = await getAllCtaLeads();
                if (!isMounted) {
                    return;
                }
                setLeads(data);
            } catch (error) {
                if (!isMounted) {
                    return;
                }
                setErrorMessage(error.message || 'Gagal memuat data leads.');
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        loadLeads();

        return () => {
            isMounted = false;
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem(ADMIN_SESSION_KEY);
        navigate('/admin/login');
    };

    return (
        <main className="min-h-screen bg-gray-100">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
                    <div>
                        <h1 className="text-lg md:text-xl font-bold text-gray-900">Data CTA Leads</h1>
                        <p className="text-xs md:text-sm text-gray-600">
                            Tampilan data pendaftar konsultasi (read-only).
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="bg-gray-900 text-white hover:bg-black transition-colors px-4 py-2 text-xs md:text-sm font-semibold"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <section className="max-w-7xl mx-auto px-4 py-6 md:py-8">
                <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
                    {isLoading ? (
                        <div className="p-6 text-sm text-gray-600">Memuat data...</div>
                    ) : errorMessage ? (
                        <div className="p-6 text-sm text-red-600">{errorMessage}</div>
                    ) : leads.length === 0 ? (
                        <div className="p-6 text-sm text-gray-600">Belum ada data leads.</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[900px] text-sm">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr className="text-left text-gray-700">
                                        <th className="px-4 py-3 font-semibold">No</th>
                                        <th className="px-4 py-3 font-semibold">Nama</th>
                                        <th className="px-4 py-3 font-semibold">Email</th>
                                        <th className="px-4 py-3 font-semibold">Nomor WhatsApp</th>
                                        <th className="px-4 py-3 font-semibold">Program Diminati</th>
                                        <th className="px-4 py-3 font-semibold">Sumber Informasi</th>
                                        <th className="px-4 py-3 font-semibold">Waktu Masuk</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map((lead, index) => (
                                        <tr
                                            key={lead.id}
                                            className="border-b border-gray-100 even:bg-gray-50/40"
                                        >
                                            <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                                            <td className="px-4 py-3 text-gray-900 font-medium">{lead.nama}</td>
                                            <td className="px-4 py-3 text-gray-700">{lead.email}</td>
                                            <td className="px-4 py-3 text-gray-700">{lead.nomor_whatsapp}</td>
                                            <td className="px-4 py-3 text-gray-700">{lead.program_diminati}</td>
                                            <td className="px-4 py-3 text-gray-700">{lead.sumber_informasi}</td>
                                            <td className="px-4 py-3 text-gray-700">{formatDateTime(lead.created_at)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}