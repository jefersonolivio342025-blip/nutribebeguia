import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Json } from "@/integrations/supabase/types";

interface LeadRow {
  id: string;
  event_type: string | null;
  whatsapp_lead: string | null;
  metadata: Json | null;
  created_at: string;
}

interface LeadMetadata {
  customer_name?: string;
  product_name?: string;
  status?: string;
}

const statusLabels: Record<string, { label: string; color: string }> = {
  kiwify_paid: { label: "Pago", color: "bg-emerald-100 text-emerald-800" },
  kiwify_approved: { label: "Aprovado", color: "bg-emerald-100 text-emerald-800" },
  kiwify_boleto_gerado: { label: "Boleto Gerado", color: "bg-amber-100 text-amber-800" },
  kiwify_waiting_payment: { label: "Aguardando", color: "bg-amber-100 text-amber-800" },
  kiwify_refunded: { label: "Reembolsado", color: "bg-red-100 text-red-800" },
  kiwify_chargeback: { label: "Chargeback", color: "bg-red-100 text-red-800" },
};

const formatPhone = (phone: string | null): string | null => {
  if (!phone) return null;
  return phone.replace(/[^0-9]/g, "");
};

const LeadsCRM = () => {
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("leads_tracking")
      .select("*")
      .like("event_type", "kiwify_%")
      .order("created_at", { ascending: false })
      .limit(100);
    setLeads((data as LeadRow[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="px-4 pt-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-heading font-bold text-foreground">Vendas & Leads</h1>
        <Button variant="outline" size="sm" onClick={fetchLeads} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-1 ${loading ? "animate-spin" : ""}`} />
          Atualizar
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/30">
                <th className="text-left p-3 font-semibold text-muted-foreground">Data</th>
                <th className="text-left p-3 font-semibold text-muted-foreground">Cliente</th>
                <th className="text-left p-3 font-semibold text-muted-foreground">Produto</th>
                <th className="text-left p-3 font-semibold text-muted-foreground">Status</th>
                <th className="text-center p-3 font-semibold text-muted-foreground">WhatsApp</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 && !loading && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">
                    Nenhum lead encontrado ainda.
                  </td>
                </tr>
              )}
              {leads.map((lead) => {
                const meta = (lead.metadata as LeadMetadata) || {};
                const phone = formatPhone(lead.whatsapp_lead);
                const statusInfo = statusLabels[lead.event_type || ""] || {
                  label: lead.event_type?.replace("kiwify_", "") || "—",
                  color: "bg-muted text-muted-foreground",
                };

                return (
                  <tr key={lead.id} className="border-b border-border/30 hover:bg-muted/20">
                    <td className="p-3 text-muted-foreground whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="p-3 font-medium text-foreground">
                      {meta.customer_name || "—"}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {meta.product_name || "—"}
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      {phone ? (
                        <a
                          href={`https://wa.me/${phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition-colors"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          Chamar
                        </a>
                      ) : (
                        <span className="text-muted-foreground text-xs">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadsCRM;
