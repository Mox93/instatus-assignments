export interface EventLog {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  actor_email?: string;
  group: string;
  action: Action;
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: string;
  metadata?: Record<string, string | number | boolean>;
}

interface Action {
  id: string;
  object: string;
  name: string;
}
