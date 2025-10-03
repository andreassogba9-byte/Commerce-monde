import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://lvsxqvdclxooidlcsxnm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2c3hxdmRjbHhvb2lkbGNzeG5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNTcyNDIsImV4cCI6MjA3NDczMzI0Mn0.1cdqKeV3Ui6bR1geJcE05i81eJXF1WnSb-syrYk5ebI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
