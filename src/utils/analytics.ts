const CONSENT_KEY = 'vyra_analytics_consent';
const LOGS_KEY = 'vyra_analytics_logs';

export type ConsentStatus = 'granted' | 'denied' | 'pending';

export interface AnalyticsEvent {
  event: string;
  category?: string;
  label?: string;
  timestamp: string;
}

export const analytics = {
  getConsent(): ConsentStatus {
    try {
      const val = localStorage.getItem(CONSENT_KEY);
      if (val === 'granted' || val === 'denied') {
        return val;
      }
    } catch {
      // localStorage disabled or private mode
    }
    return 'pending';
  },

  setConsent(status: 'granted' | 'denied'): void {
    try {
      localStorage.setItem(CONSENT_KEY, status);
      if (status === 'denied') {
        localStorage.removeItem(LOGS_KEY);
      }
    } catch {
      // Ignore storage errors
    }
  },

  track(event: string, details?: { category?: string; label?: string }): void {
    if (this.getConsent() !== 'granted') {
      return; // Respect user privacy
    }

    try {
      const logsStr = localStorage.getItem(LOGS_KEY);
      const logs: AnalyticsEvent[] = logsStr ? JSON.parse(logsStr) : [];
      const newEvent: AnalyticsEvent = {
        event,
        category: details?.category,
        label: details?.label,
        timestamp: new Date().toISOString(),
      };
      // Keep at most 50 local events
      logs.unshift(newEvent);
      localStorage.setItem(LOGS_KEY, JSON.stringify(logs.slice(0, 50)));
    } catch {
      // Ignore storage failure
    }
  },

  getRecentLogs(): AnalyticsEvent[] {
    try {
      const logsStr = localStorage.getItem(LOGS_KEY);
      return logsStr ? JSON.parse(logsStr) : [];
    } catch {
      return [];
    }
  },
};
