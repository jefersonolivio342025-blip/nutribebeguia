CREATE TABLE public.leads_tracking (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT,
  utm_source TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  whatsapp_lead TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.leads_tracking ENABLE ROW LEVEL SECURITY;

-- Webhook externo precisa inserir sem autenticação
CREATE POLICY "Allow public inserts from webhook"
ON public.leads_tracking
FOR INSERT
TO anon
WITH CHECK (true);

-- Leitura apenas para usuários autenticados
CREATE POLICY "Authenticated users can read leads"
ON public.leads_tracking
FOR SELECT
TO authenticated
USING (true);