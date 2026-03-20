import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export async function submitCtaLead(formData) {
    if (!supabase) {
        throw new Error('Konfigurasi Supabase belum lengkap. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.');
    }

    const payload = {
        nama: formData.nama.trim(),
        email: formData.email.trim().toLowerCase(),
        nomor_whatsapp: formData.nomorWhatsapp.trim(),
        program_diminati: formData.programDiminati,
        sumber_informasi: formData.sumberInformasi,
        created_at: new Date().toISOString(),
    };

    const { error } = await supabase
        .from('cta_leads')
        .insert([payload]);

    if (error) {
        throw error;
    }
}
