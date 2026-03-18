import { useState, useRef } from 'react';
import utsVid1 from '../assets/vid/UTS-vid-1.mp4';
import utsVid3 from '../assets/vid/UTS-vid-3.mp4';
import utsVid4 from '../assets/vid/UTS-vid-4.mp4';
import utsVid5 from '../assets/vid/UTS-vid-5.mp4';
import utsVid6 from '../assets/vid/UTS-vid-6.mp4';
import utsVid7 from '../assets/vid/UTS-vid-7.mp4';
import utsVid8 from '../assets/vid/UTS-vid-8.mp4';
import utsVid9 from '../assets/vid/UTS-vid-9.mp4';
import logo from '../assets/img/logo.png';
import testi1 from '../assets/img/testi-1.jpg';
import testi2 from '../assets/img/testi-2.jpg';
import testi3 from '../assets/img/testi-3.jpg';
import {
    Search,
    User,
    PlayCircle,
    BookOpen,
    GraduationCap,
    Layers3,
    FileText,
    ArrowUpRight,
    Brain,
    Sparkles,
    Laptop2,
    HelpCircle,
    ChevronDown,
    Star,
    Phone,
    MessageCircle,
    ShieldCheck,
    CheckCircle2,
    Menu,
    X,
    Clock,
} from 'lucide-react';

const heroPrograms = [
    {
        name: 'Cambridge International As & A Level',
        href: 'https://utscollege.edu.au/au/programs/cambridge',
        icon: BookOpen,
    },
    {
        name: 'UTS Foundation Studies',
        href: 'https://utscollege.edu.au/au/uts-foundation-studies',
        icon: GraduationCap,
    },
    {
        name: 'Diploma',
        href: 'https://utscollege.edu.au/au/programs/diplomas',
        icon: Layers3,
    },
    {
        name: 'Pre-Master Program',
        href: 'https://utscollege.edu.au/au/programs/pre-masters-programs',
        icon: FileText,
    },
];

const painPoints = [
    'Anak saya pemalu, ntar mereka akan “struggle” cari temen ga ya?',
    'Anak saya belum mandiri, kalau butuh bantuan di sana, apa ada yang memperhatikan?',
    'Anak saya masih bingung pilih jurusan, kalau langsung kirim keluar negeri, malah buang-buang biaya.',
];

const valuePillars = [
    {
        icon: Brain,
        title: 'Fokus pada Minat, Bukan Sekadar Nilai',
        description:
            'Bantu buah hati Anda menemukan jurusan yang sesuai dengan bakat dan minat terdalam mereka, bukan hanya berdasarkan angka di atas kertas.',
        videoUrl:
            'https://drive.google.com/file/d/1-HjirJrSZHNqzo15l-gjBgd33ngyOKa0/view?usp=drive_link',
        placeholder:
            'https://via.placeholder.com/800x450?text=Fokus+Pada+Minat',
    },
    {
        icon: Sparkles,
        title: 'Belajar dengan Nyaman dan Maksimal',
        description:
            'Lingkungan belajar yang dirancang khusus untuk mendukung kebutuhan dan ritme belajar unik setiap siswa agar mereka tidak merasa tertekan.',
        videoUrl:
            'https://drive.google.com/file/d/1NqrINeTckFlEhKOd1MVmfHnlrud4aQRi/view?usp=drive_link',
        placeholder:
            'https://via.placeholder.com/800x450?text=Belajar+Dengan+Nyaman',
    },
    {
        icon: Laptop2,
        title: 'Fasilitas Teknologi Terdepan',
        description:
            'Berikan akses ke peralatan standar industri dan teknologi masa depan yang akan memastikan anak Anda siap bersaing di dunia kerja nyata.',
        videoUrl:
            'https://drive.google.com/file/d/1FVCYBaMe3_f9nEFDNQn4s--PHHCV27oN/view?usp=drive_link',
        placeholder:
            'https://via.placeholder.com/800x450?text=Fasilitas+Teknologi+Terdepan',
    },
];

const objections = [
    {
        question: 'Kenapa anak saya butuh tahun Foundation? Apa tidak bisa langsung masuk kuliah saja?',
        answer:
            'Tahun Foundation adalah jembatan emas. Program ini memastikan transisi anak Anda dari SMA ke standar universitas Australia berjalan mulus—memperkuat kemampuan bahasa, teknik riset, dan kepercayaan diri agar mereka tidak "kaget" atau tertinggal di tahun pertama.',
        videoUrl:
            'https://drive.google.com/file/d/1iYWoRZ_wZinoL-1adJifg83qk2i7b-DE/view?usp=drive_link',
    },
    {
        question: 'Apakah fasilitas dan metode belajarnya masih relevan dengan industri saat ini?',
        answer:
            'Kami tidak hanya mengajar teori. Kurikulum kami disusun bersama industri untuk memastikan siswa menggunakan perangkat standar profesional terbaru. Kami tidak menggunakan alat yang usang karena dunia kerja tidak menunggu siapa pun.',
        videoUrl:
            'https://drive.google.com/file/d/1LqoozKgYKmS6nE5RPspfW3t3SxvyJFd8/view?usp=drive_link',
    },
    {
        question: 'Apakah AI dan teknologi terbaru benar-benar diajarkan dalam proses belajar?',
        answer:
            'Tentu saja. Di UTS, teknologi seperti AI bukan hanya alat tambahan, tapi bagian inti dari cara kami belajar. Kami mempersiapkan anak Anda untuk menguasai teknologi masa depan, bukan hanya menjadi pengguna, agar mereka memiliki keunggulan kompetitif saat lulus nanti.',
        videoUrl:
            'https://drive.google.com/file/d/1DdD1n4XnUPkCdQeJ4Ujy8TXaOVPU5NSh/view?usp=drive_link',
    },
];

const faqVideos = [utsVid5, utsVid7, utsVid9];

const testimonials = [
    {
        name: 'Delsie Darmawan',
        major: 'UTS – Information Technology',
        rating: 4.8,
        label: 'Testimonial 1',
        image: testi1,
        quote:
            'Waktu kecil aku penasaran tentang coding tapi aku gatau gimana cara belajarnya, pas masuk UTS College jujur lumayan challenging, aku di ajarin untuk cari satu satu problemnya. Tapi di UTS College dosennya sangat sabar, sekarang aku udah mulai bisa bikin teknologi itu sendiri. thank you UTS College karena membantu aku berkembang menjadi pemikir logis dan problem solver',
    },
    {
        name: 'Aurelia',
        major: 'UTS Foundation Studies',
        rating: 4.9,
        label: 'Testimonial 2',
        image: testi2,
        quote:
            'Dulu aku takut saat pertama kali pindah dari Indonesia, mulai dari takut sulit berteman sampai urusan menulis esai. Tapi di UTS College, aku belajar berani menyapa dan didukung lingkungan yang sangat praktis. Sekarang, aku bukan cuma punya teman dari seluruh dunia, tapi juga lebih mandiri dan siap mengejar karier sebagai software developer.',
    },
    {
        name: 'Clarissa Tan',
        major: 'Diploma of Information Technology',
        rating: 4.8,
        label: 'Testimonial 3',
        image: testi3,
        quote:
            'Berawal dari hobi menjahit bareng nenek, aku bermimpi jadi desainer sejak SMP. Meski sempat ragu kuliah di luar negeri, dukungan ayah dan sistem belajar praktis di UTS College membantuku menguasai teknologi desain hingga meraih Outstanding Graduate Prize. Kini di UTS, aku bangga bisa mengubah hobi menjadi jalur karier profesional.',
    },
];

const navLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Kenapa UTS?', href: '#why-uts' },
    { label: 'Solusi', href: '#solution' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'FAQ', href: '#objections' },
];

// Redesigned Home Page
export default function Home() {
    const [openObjectionIndex, setOpenObjectionIndex] = useState(0);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const parentVideoRef = useRef(null);
    const [parentVideoStarted, setParentVideoStarted] = useState(false);
    const solutionVideoRefs = useRef([]);
    const [solutionVideoStarted, setSolutionVideoStarted] = useState(() =>
        Array(valuePillars.length).fill(false)
    );
    const solutionVideos = [utsVid4, utsVid6, utsVid8];

    return (
        <div className="font-sans bg-white text-gray-900">
            {/* Sticky Navigation */}
            <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
                    <a
                        href="#hero"
                        className="flex items-center gap-3"
                        onClick={() => setMobileNavOpen(false)}
                    >
                        <img
                            src={logo}
                            alt="UTS College"
                            className="h-40 md:h-50 w-auto object-contain"
                        />
                    </a>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-semibold text-sm lg:text-base hover:text-red-600 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#final-cta"
                            className="rounded-full bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 text-sm font-semibold text-white shadow-md"
                        >
                            Konsultasi Gratis
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            className="p-2 text-gray-600 hover:text-red-600"
                            aria-label="Toggle navigation"
                            onClick={() => setMobileNavOpen((prev) => !prev)}
                        >
                            {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileNavOpen && (
                    <div className="md:hidden border-t border-gray-200 bg-white bg-opacity-95 backdrop-blur-lg">
                        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="py-2 text-sm font-semibold text-gray-800 hover:text-red-600"
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#final-cta"
                                className="mt-2 inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition-colors px-4 py-2.5 text-sm font-semibold text-white shadow-md"
                                onClick={() => setMobileNavOpen(false)}
                            >
                                Konsultasi Gratis
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section
                id="hero"
                className="relative overflow-hidden bg-gradient-to-b from-red-700 via-red-600 to-red-600 text-white"
                data-aos="fade-up"
                style={{ scrollMarginTop: '5rem' }}
            >
                <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
                    <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-red-400 blur-3xl" />
                    <div className="absolute -bottom-40 -left-10 h-80 w-80 rounded-full bg-orange-400 blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-24 lg:py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.15fr,0.95fr] gap-10 lg:gap-16 items-center">
                    {/* Left: Value proposition & CTA */}
                    <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                        <div className="inline-flex w-fit self-start items-center gap-2 rounded-full bg-white/10 px-3 py-1 shadow-sm backdrop-blur-sm border border-white/15">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-red-600 text-[10px] font-extrabold">
                                UTS
                            </span>
                            <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.14em] text-red-50/90">
                                Official UTS Pathway
                            </span>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <h1 className="text-3xl md:text-5xl lg:text-[3.1rem] font-extrabold tracking-tight leading-tight md:leading-tight">
                                Jaminan jalur masuk ke Universitas Top 100 dunia.
                            </h1>
                            <p className="text-sm md:text-lg lg:text-xl font-medium leading-relaxed text-red-50/95 max-w-xl">
                                Jalur resmi yang dirancang khusus untuk mengubah lulusan SMA menjadi mahasiswa
                                berprestasi di UTS, universitas teknologi terbaik di jantung kota Sydney.
                            </p>
                        </div>

                        <div className="space-y-4 md:space-y-5">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                <a
                                    href="#programs"
                                    className="inline-flex items-center justify-center rounded-full bg-white text-red-700 hover:bg-red-50 hover:text-red-800 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-semibold shadow-lg shadow-red-900/30 transition-colors"
                                >
                                    Explore Program
                                </a>
                                <a
                                    href="https://wa.me/62818282817"
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-white/90 hover:text-white underline-offset-4 hover:underline"
                                >
                                    <Phone className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                                    <span className="underline">
                                        Sudah tahu apa yang diinginkan? <span className="font-bold">Daftar sekarang</span>
                                    </span>
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-[11px] md:text-xs text-red-50/90">
                                <div className="inline-flex items-center gap-1.5">
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" aria-hidden="true" />
                                    <span>Program resmi UTS College dengan dukungan penuh hingga masa transisi.</span>
                                </div>
                                <div className="inline-flex items-center gap-1.5">
                                    <Star className="w-3.5 h-3.5 text-yellow-300" aria-hidden="true" />
                                    <span>4.8/5 kepuasan orang tua &amp; siswa internasional.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero visual with video + mini stats */}
                    <div className="flex flex-col gap-4 md:gap-5">
                        <div
                            className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] overflow-hidden rounded-[32px] bg-black shadow-2xl shadow-red-950/60 border border-red-400/40"
                            style={{ aspectRatio: '9 / 16' }}
                        >
                            <div className="absolute inset-x-4 top-4 flex items-start justify-start text-[11px] md:text-xs text-red-50/90">
                                <div className="inline-flex items-center gap-2 bg-black/25 px-3 py-1 rounded-full border border-white/15">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                    <span className="font-semibold tracking-wide">Modern City Campus • Sydney</span>
                                </div>
                            </div>

                            <video
                                src={utsVid1}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                controls
                                playsInline
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Why UTS (Value Grid) */}
            <section
                id="why-uts"
                className="bg-white"
                data-aos="fade-up"
                style={{ scrollMarginTop: '5rem' }}
            >
                <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 space-y-10">
                    <div className="max-w-3xl space-y-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                            Mengapa UTS College Adalah Investasi Terbaik untuk Masa Depan Anak Anda?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-red-50 border border-red-100 p-5 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-red-700">
                                <GraduationCap className="w-5 h-5" aria-hidden="true" />
                                <span className="text-xs font-semibold uppercase tracking-widest">
                                    Jaminan Jalur Masuk
                                </span>
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                Jaminan Jalur Masuk ke Universitas Top 100 Dunia
                            </h3>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                Memberikan kepastian akses langsung ke University of Technology Sydney (UTS), salah satu
                                universitas terbaik di dunia, tanpa perlu mencemaskan nilai ATAR atau tes tambahan yang
                                rumit.
                            </p>
                        </div>

                        <div className="bg-red-50 border border-red-100 p-5 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-red-700">
                                <Clock className="w-5 h-5" aria-hidden="true" />
                                <span className="text-xs font-semibold uppercase tracking-widest">
                                    Jalur Akselerasi
                                </span>
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                Lulus Tepat Waktu dengan Jalur Akselerasi (Fast-Track)
                            </h3>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                Program Diploma kami dirancang agar anak Anda bisa langsung melanjutkan ke tahun kedua
                                sarjana di UTS. Ini berarti mereka lulus di waktu yang sama dengan jalur umum, namun
                                dengan persiapan yang jauh lebih matang.
                            </p>
                        </div>

                        <div className="bg-red-50 border border-red-100 p-5 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-red-700">
                                <User className="w-5 h-5" aria-hidden="true" />
                                <span className="text-xs font-semibold uppercase tracking-widest">
                                    Kelas Kecil
                                </span>
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                Pendampingan Personal dalam Kelas Kecil
                            </h3>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                Berbeda dengan ruang kuliah besar yang mengintimidasi, kelas kami berukuran kecil
                                sehingga setiap anak mendapatkan perhatian penuh dari pengajar untuk memastikan mereka
                                memahami materi dengan sempurna.py
                            </p>
                        </div>

                        <div className="bg-red-50 border border-red-100 p-5 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-red-700">
                                <BookOpen className="w-5 h-5" aria-hidden="true" />
                                <span className="text-xs font-semibold uppercase tracking-widest">
                                    Dukungan 24/7
                                </span>
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                Dukungan Akademik &amp; Mentor 24/7
                            </h3>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                Anak Anda tidak akan pernah merasa sendirian. Kami menyediakan layanan bantuan belajar
                                dan bimbingan akademik yang bisa diakses kapan saja, memastikan nilai mereka tetap
                                stabil dan memuaskan.
                            </p>
                        </div>

                        <div className="bg-red-50 border border-red-100 p-5 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-red-700">
                                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                                <span className="text-xs font-semibold uppercase tracking-widest">
                                    Keamanan &amp; Welfare
                                </span>
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                Keamanan &amp; Kesejahteraan Prioritas Utama (Khusus Usia &lt;18 Tahun)
                            </h3>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                Kami memiliki program perlindungan khusus untuk siswa di bawah umur. Mulai dari
                                pemantauan tempat tinggal hingga dukungan kesejahteraan emosional, kami memastikan anak
                                Anda aman dan nyaman selama di Sydney.
                            </p>
                        </div>

                        <div className="bg-red-50 border border-red-100 p-5 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-red-700">
                                <Sparkles className="w-5 h-5" aria-hidden="true" />
                                <span className="text-xs font-semibold uppercase tracking-widest">
                                    Transisi Mulus
                                </span>
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                Transisi yang Mulus ke Budaya Australia
                            </h3>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                Kami menjembatani perbedaan sistem pendidikan dari SMA ke Universitas. Anak Anda akan
                                dilatih cara riset, menulis laporan, dan presentasi standar internasional sebelum
                                mereka masuk ke dunia universitas yang sesungguhnya.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 border-2 border-yellow-400 bg-yellow-50 text-red-900 px-6 py-5 shadow-md max-w-4xl mx-auto rounded-md text-center">
                        <span className="block text-xs md:text-sm font-semibold uppercase tracking-widest text-yellow-800 mb-1">
                            Tahukah Anda?
                        </span>
                        <p className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
                            <b>90%</b> lulusan diploma kami berhasil melanjutkan ke tahun kedua UTS dengan rasa percaya diri
                            yang lebih tinggi dibandingkan siswa jalur langsung.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 3: Program Options (separated from hero) */}
            <section
                id="programs"
                className="bg-white border-t border-gray-200"
                data-aos="fade-up"
                style={{ scrollMarginTop: '5rem' }}
            >
                <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 space-y-8">
                    <div className="max-w-3xl space-y-3">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
                            Pilih Jalur Program Resmi UTS College
                        </h2>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            Empat jalur terstruktur yang menghubungkan lulusan SMA langsung ke University of Technology
                            Sydney (UTS).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {heroPrograms.map((program) => (
                            <a
                                key={program.name}
                                href={program.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex flex-col h-full p-4 bg-white hover:bg-red-50 border border-gray-200 hover:border-red-400 transition-colors shadow-sm"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex h-10 w-10 items-center justify-center bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                        <program.icon className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-red-500 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                                <span className="text-sm md:text-base font-semibold leading-snug text-gray-900 flex-1">
                                    {program.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Problem Agitation */}
            <section
                id="problems"
                className="max-w-7xl mx-auto px-4 py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
                data-aos="fade-up"
                data-aos-delay="120"
                style={{ scrollMarginTop: '5rem' }}
            >
                {/* Left: Text & Pain Points */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 text-gray-900">
                            Merasa Familiar dengan Kekhawatiran Ini?
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                            Ribuan orang tua merasakan keraguan yang sama saat menentukan masa depan kuliah anak mereka.
                            Anda tidak sendirian dalam memikirkan hal ini.
                        </p>
                    </div>
                    <div className="space-y-3.5">
                        {painPoints.map((text, index) => (
                            <div
                                key={text}
                                className="border border-gray-200 bg-gray-50 px-5 py-4 shadow-sm flex items-center gap-3"
                            >
                                <div className="text-red-600 font-bold text-lg">0{index + 1}</div>
                                <p className="text-gray-800 font-medium leading-relaxed text-sm md:text-base">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Video as vertical reels-style card */}
                <div className="flex items-center justify-center lg:justify-end">
                    <div
                        className="relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-[320px] overflow-hidden shadow-2xl shadow-red-900/40 bg-black border border-gray-900/30 rounded-[32px]"
                        style={{ aspectRatio: '9 / 16' }}
                    >
                        <video
                            ref={parentVideoRef}
                            src={utsVid3}
                            className="w-full h-full object-cover"
                            muted={!parentVideoStarted}
                            loop
                            controls
                            playsInline
                        />
                        {!parentVideoStarted && (
                            <button
                                type="button"
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
                                onClick={() => {
                                    if (parentVideoRef.current) {
                                        parentVideoRef.current.muted = false;
                                        parentVideoRef.current.play();
                                    }
                                    setParentVideoStarted(true);
                                }}
                            >
                                <PlayCircle className="w-14 h-14 text-white mb-2" aria-hidden="true" />
                                <span className="text-white font-semibold text-sm md:text-base text-center px-4">
                                    Tonton video singkat
                                </span>
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Section 3: Solution / Value Proposition */}
            <section
                id="solution"
                className="max-w-7xl mx-auto px-4 pt-10 pb-24 md:pt-16 md:pb-28 space-y-10"
                data-aos="fade-up"
                data-aos-delay="160"
                style={{ scrollMarginTop: '5rem' }}
            >
                <div className="max-w-3xl text-center mx-auto space-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
                        Kami Membangun Kampus di Mana Setiap Siswa Menemukan Tempatnya
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                        Baik putra-putri Anda seorang petualang, pemikir tenang (introvert), pecinta teknologi,
                        atau bahkan masih mencari jati diri — UTS dirancang khusus untuk mendukung siapapun mereka.
                    </p>
                </div>

                <div className="space-y-8 md:space-y-10">
                    {valuePillars.map((pillar, index) => (
                        <div
                            key={pillar.title}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center"
                        >
                            {/* Text side */}
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 border border-red-100">
                                    <span
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-700"
                                        aria-hidden="true"
                                    >
                                        <pillar.icon className="w-5 h-5" />
                                    </span>
                                    <span className="text-sm font-semibold uppercase tracking-widest text-red-700">
                                        {index === 0 && 'Bimbingan Pilihan Jurusan yang Tepat'}
                                        {index === 1 && 'Pengalaman Belajar yang Nyaman'}
                                        {index === 2 && 'Fasilitas & Teknologi Standar Industri'}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>

                            {/* Video side as compact vertical reels card */}
                            <div className="flex justify-center lg:justify-end">
                                <div
                                    className="relative w-full max-w-[240px] sm:max-w-[260px] md:max-w-[300px] overflow-hidden rounded-[32px] shadow-2xl shadow-red-900/40 bg-black border border-gray-900/30"
                                    style={{ aspectRatio: '9 / 16' }}
                                >
                                    <video
                                        ref={(el) => {
                                            solutionVideoRefs.current[index] = el;
                                        }}
                                        src={solutionVideos[index]}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        controls
                                        playsInline
                                    />
                                    {!solutionVideoStarted[index] && (
                                        <button
                                            type="button"
                                            className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 hover:bg-black/45 transition-colors"
                                            onClick={() => {
                                                const videoEl = solutionVideoRefs.current[index];
                                                if (videoEl) {
                                                    videoEl.muted = false;
                                                    videoEl.play();
                                                }
                                                setSolutionVideoStarted((prev) => {
                                                    const next = [...prev];
                                                    next[index] = true;
                                                    return next;
                                                });
                                            }}
                                        >
                                            <PlayCircle className="w-12 h-12 text-white mb-2" aria-hidden="true" />
                                            <span className="text-white font-semibold text-xs md:text-sm text-center px-4">
                                                Tonton video singkat
                                            </span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4: Objection Handling */}
            <section
                id="objections"
                className="max-w-7xl mx-auto px-4 pt-10 pb-32 md:pt-16 md:pb-36 grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-16 items-start"
                data-aos="fade-up"
                data-aos-delay="190"
                style={{ scrollMarginTop: '5rem' }}
            >
                {/* Left: Accordion */}
                <div className="space-y-8">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 border border-blue-100">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                                <HelpCircle className="w-5 h-5" aria-hidden="true" />
                            </span>
                            <span className="text-sm font-semibold uppercase tracking-widest text-blue-800">
                                Frequently Asked Question
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                            Masih Ada Pertanyaan? Kami Punya Jawabannya.
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            Kami memahami bahwa memilih universitas adalah keputusan besar bagi masa depan keluarga
                            Anda. Berikut adalah beberapa hal yang sering ditanyakan oleh orang tua seperti Anda:
                        </p>
                    </div>

                    <div className="space-y-4">
                        {objections.map((item, index) => {
                            const isOpen = openObjectionIndex === index;
                            return (
                                <div
                                    key={item.question}
                                    className="border border-gray-200 bg-white shadow-sm"
                                >
                                    <button
                                        type="button"
                                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                                        onClick={() =>
                                            setOpenObjectionIndex(isOpen ? -1 : index)
                                        }
                                    >
                                        <span className="font-semibold text-sm md:text-base text-gray-900">
                                            {item.question}
                                        </span>
                                        <span
                                            className={`flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all duration-200 ${isOpen
                                                ? 'rotate-180 bg-gray-900 text-white'
                                                : 'bg-gray-50'
                                                }`}
                                        >
                                            <ChevronDown className="w-4 h-4" aria-hidden="true" />
                                        </span>
                                    </button>
                                    <div
                                        className={`px-5 pt-0 text-sm md:text-base text-gray-700 leading-relaxed overflow-hidden transition-all duration-300 ease-out ${
                                            isOpen
                                                ? 'max-h-[520px] opacity-100 pb-5'
                                                : 'max-h-0 opacity-0 pb-0'
                                        }`}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 items-start">
                                            {/* Left: Text answer */}
                                            <div className="space-y-3">
                                                <p>{item.answer}</p>
                                            </div>

                                            {/* Right: Video (reels-style) */}
                                            <div className="w-full flex justify-center">
                                                <div
                                                    className="relative w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] overflow-hidden rounded-[32px] shadow-2xl shadow-red-900/30 bg-black border border-gray-900/30"
                                                    style={{ aspectRatio: '9 / 16' }}
                                                >
                                                    <video
                                                        src={faqVideos[index]}
                                                        className="w-full h-full object-cover"
                                                        controls
                                                        loop
                                                        playsInline
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right: Supporting visual (optional, currently commented out) */}
                {/* <div className="w-full h-full flex items-center">
                    <div className="w-full relative overflow-hidden shadow-2xl" style={{ borderRadius: 0 }}>
                        <img
                            src="https://via.placeholder.com/700x500?text=Parents+Information+Session"
                            alt="Parents information session"
                            className="w-full h-64 md:h-80 lg:h-full object-cover"
                            style={{ borderRadius: 0 }}
                        />
                        <div className="absolute inset-0 bg-black/35 flex flex-col items-start justify-end p-6 md:p-8 gap-2">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 text-xs font-semibold uppercase tracking-widest text-gray-900">
                                <HelpCircle className="w-3 h-3" aria-hidden="true" />
                                Info Session
                            </span>
                            <p className="text-white font-semibold text-base md:text-lg max-w-md">
                                Dengar langsung bagaimana kami menjawab kekhawatiran para orang tua tentang masa depan
                                pendidikan anak mereka.
                            </p>
                        </div>
                    </div>
                </div> */}
            </section>

            {/* Section 5: Testimonial */}
            <section
                id="testimonials"
                className="bg-gray-50 border-t border-gray-200"
                data-aos="fade-up"
                data-aos-delay="220"
                style={{ scrollMarginTop: '5rem' }}
            >
                <div className="max-w-7xl mx-auto px-4 py-24 md:py-28 space-y-10">
                    <div className="max-w-3xl text-center mx-auto space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                            Dari keraguan menuju kesuksesan: Testimoni siswa kami
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            Ribuan siswa telah membuktikan bahwa jalur ini adalah keputusan terbaik. Lihat bagaimana
                            dukungan personal kami membantu mereka berkembang dari siswa SMA yang ragu menjadi sarjana
                            yang siap karier.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, index) => (
                            <div
                                key={t.label}
                                className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col justify-between h-full"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-yellow-500">
                                        {Array.from({ length: 5 }).map((_, idx) => (
                                            <Star
                                                key={idx}
                                                className={`w-4 h-4 ${idx < 4 ? 'fill-yellow-400' : 'fill-yellow-200'}`}
                                            />
                                        ))}
                                        <span className="ml-2 text-sm font-semibold text-gray-800">
                                            {t.rating.toFixed(1)}/5
                                        </span>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        “{t.quote}”
                                    </p>
                                </div>
                                <div className="mt-6 space-y-2">
                                    <div className="flex items-center gap-3">
                                        {(index === 0 || index === 1 || index === 2) && t.image && (
                                            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                                                <img
                                                    src={t.image}
                                                    alt={t.name}
                                                    className={`w-full h-full object-cover ${(index === 0) ? 'scale-[1.25] origin-center translate-x-1 translate-y-2' : ''} ${(index === 1) ? 'scale-[2] origin-center -translate-x-1' : ''} ${(index === 2) ? 'scale-[1.75] origin-center translate-y-2 translate-x-5' : ''}`}
                                                />
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                                            <p className="text-xs md:text-sm text-gray-600">{t.major}</p>
                                        </div>
                                    </div>
                                    {/* <button
                                        type="button"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
                                    >
                                        <span>{t.label}</span>
                                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                                    </button> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto border border-dashed border-gray-300 bg-white/80 px-6 py-6 flex flex-col items-center gap-3">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <span className="text-[11px] md:text-xs font-semibold tracking-widest uppercase text-gray-500">
                                Alumni Outcome
                            </span>
                            <div className="flex flex-col md:flex-row items-center md:items-baseline justify-center gap-2 md:gap-3">
                                <span className="text-4xl md:text-5xl font-extrabold text-gray-900">92%</span>
                                <span className="text-sm md:text-base text-gray-700 max-w-sm">
                                    alumni melaporkan sudah bekerja atau melanjutkan studi dalam 6 bulan setelah
                                    lulus.
                                </span>
                            </div>
                        </div>
                        <p className="text-[11px] md:text-xs text-gray-500 text-center max-w-md">
                            *Angka ilustratif untuk menggambarkan outcome karier positif dari jalur persiapan UTS.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 6: Final CTA / Conversion */}
            <section
                id="final-cta"
                className="bg-gray-900 text-white"
                data-aos="fade-up"
                data-aos-delay="260"
                style={{ scrollMarginTop: '5rem' }}
            >
                <div className="max-w-7xl mx-auto px-4 py-24 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    {/* Left: Copy & reassurance */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-200">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                Langkah berikutnya
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                                Masa depan cerah anak anda, dimulai hari ini
                            </h2>
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
                                Pendaftaran telah dibuka dan kuota program sangat terbatas. Jangan biarkan keraguan
                                menunda langkah sukses anak Anda lebih lama lagi.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a
                                href="https://wa.me/62818282817"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors px-6 py-3 text-sm md:text-base font-semibold shadow-lg"
                            >
                                <Phone className="w-4 h-4" aria-hidden="true" />
                                <span>Jadwalkan konsultasi gratis sekarang · WhatsApp</span>
                            </a>
                            <div className="text-sm text-gray-200 flex flex-col sm:flex-row sm:items-center gap-2">
                                <span className="font-medium">Belum siap mendaftar?</span>
                                <a
                                    href="https://bit.ly/FT-UTSCOLLEGE-GROUP"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 font-semibold"
                                >
                                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                                    <span>Gabung di Grup WhatsApp Komunitas Orang Tua</span>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-semibold">Jaminan privasi</p>
                                    <p className="text-gray-300 text-xs md:text-sm">
                                        Data anda 100% aman dan tidak akan pernah disalahgunakan.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                                    <Star className="w-4 h-4" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-semibold">Terbukti berhasil</p>
                                    <p className="text-gray-300 text-xs md:text-sm">
                                        Rating 4.8/5 dari seluruh mahasiswa yang telah bergabung.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-semibold">Tanpa paksaan</p>
                                    <p className="text-gray-300 text-xs md:text-sm">
                                        Tidak ada komitmen apapun – hanya diskusi santai untuk masa depan anak anda.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Lead capture form */}
                    <div className="bg-white text-gray-900 shadow-2xl p-6 md:p-8 w-full max-w-md ml-auto">
                        <h3 className="text-lg md:text-xl font-extrabold mb-4">Isi data singkat untuk mulai konsultasi</h3>
                        <form
                            className="space-y-4 text-sm md:text-base"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="space-y-1">
                                <label className="font-semibold" htmlFor="lead-name">
                                    Nama
                                </label>
                                <input
                                    id="lead-name"
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                                    placeholder="Nama lengkap orang tua atau siswa"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="font-semibold" htmlFor="lead-email">
                                    Email
                                </label>
                                <input
                                    id="lead-email"
                                    type="email"
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                                    placeholder="nama@email.com"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="font-semibold" htmlFor="lead-wa">
                                    WA number
                                </label>
                                <input
                                    id="lead-wa"
                                    type="tel"
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                                    placeholder="0812xxxxxxx"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="font-semibold" htmlFor="lead-program">
                                    Program of Interest
                                </label>
                                <select
                                    id="lead-program"
                                    className="w-full border border-gray-300 px-3 py-2 text-sm bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>
                                        Pilih program yang diminati
                                    </option>
                                    <option value="cambridge">Cambridge International As &amp; A Level</option>
                                    <option value="foundation">UTS Foundation Studies</option>
                                    <option value="diploma">Diploma</option>
                                    <option value="pre-masters">Pre-Master Program</option>
                                    <option value="belum-yakin">Belum yakin, butuh diskusi dulu</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="font-semibold" htmlFor="lead-source">
                                    How did you hear about us?
                                </label>
                                <select
                                    id="lead-source"
                                    className="w-full border border-gray-300 px-3 py-2 text-sm bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>
                                        Pilih satu
                                    </option>
                                    <option value="tiktok">Tiktok</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="facebook">Facebook</option>
                                    <option value="teman">Teman</option>
                                    <option value="guru-bk">Guru BK</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="mt-2 w-full bg-gray-900 text-white hover:bg-black transition-colors px-4 py-2.5 text-sm md:text-base font-semibold tracking-wide"
                            >
                                Jadwalkan konsultasi gratis sekarang
                            </button>
                            <p className="text-[11px] md:text-xs text-gray-500 mt-2">
                                Dengan mengirim data ini, Anda setuju untuk dihubungi oleh tim UTS College terkait
                                informasi program dan konsultasi tanpa komitmen.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}
