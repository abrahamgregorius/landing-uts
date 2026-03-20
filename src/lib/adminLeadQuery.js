import { assertSupabaseConfigured, supabase } from './supabaseClient';

export async function getAllCtaLeads() {
    assertSupabaseConfigured();

    const { data, error } = await supabase
        .from('cta_leads')
        .select('id, nama, email, nomor_whatsapp, program_diminati, sumber_informasi, created_at')
        .order('created_at', { ascending: false });

    if (error) {
        throw error;
    }

    return data || [];
}