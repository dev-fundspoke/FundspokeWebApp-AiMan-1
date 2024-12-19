import type { ErrorLogEntry, ErrorStorageService } from '../types/error';

export class LocalStorageErrorService implements ErrorStorageService {
  private readonly STORAGE_KEY = 'error_logs';

  save(entry: ErrorLogEntry): void {
    try {
      const logs = this.getAll();
      logs.push(entry);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(logs));
    } catch (e) {
      console.error('Failed to save error log:', e);
    }
  }

  getAll(): ErrorLogEntry[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to retrieve error logs:', e);
      return [];
    }
  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}