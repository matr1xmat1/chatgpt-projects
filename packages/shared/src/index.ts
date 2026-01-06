export type ProviderStatus = "allowed" | "blocked" | "unknown";

export interface ProviderSummary {
  id: string;
  name: string;
  status: ProviderStatus;
  messageCount: number;
}
