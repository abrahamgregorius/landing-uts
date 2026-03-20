import { assertSupabaseConfigured, supabase } from './supabaseClient';

export async function submitCtaLead(formData) {
    assertSupabaseConfigured();

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
