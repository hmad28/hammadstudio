CREATE TABLE IF NOT EXISTS project_briefs (
  id UUID PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  locale TEXT NOT NULL CHECK (locale IN ('id','en')),
  service TEXT NOT NULL,
  client_type TEXT NOT NULL,
  summary TEXT NOT NULL,
  problem TEXT NOT NULL,
  budget TEXT NOT NULL,
  timeline TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  website TEXT,
  attachments JSONB NOT NULL DEFAULT '[]'::jsonb,
  estimate JSONB,
  fit JSONB,
  source TEXT NOT NULL DEFAULT 'direct',
  lead_score SMALLINT NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'new',
  notes TEXT
);
CREATE INDEX IF NOT EXISTS project_briefs_created_at_idx ON project_briefs (created_at DESC);
CREATE INDEX IF NOT EXISTS project_briefs_status_idx ON project_briefs (status);
