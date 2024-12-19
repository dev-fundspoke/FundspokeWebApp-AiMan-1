import { v4 as uuidv4 } from 'uuid';
import type { ErrorLogEntry, ErrorLogOptions, ErrorStorageService } from '../types/error';
import { LocalStorageErrorService } from '../services/errorStorage';

export enum ErrorSeverity {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO'
}

export class Logger {
  private static instance: Logger;
  private logs: ErrorLogEntry[] = [];
  private storage: ErrorStorageService;

  private constructor() {
    this.storage = new LocalStorageErrorService();
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  logError(error: Error, options?: ErrorLogOptions): ErrorLogEntry {
    const entry: ErrorLogEntry = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      message: error.message,
      stack: error.stack,
      severity: options?.severity || ErrorSeverity.ERROR,
      component: options?.component,
      type: error.name,
      context: options?.context
    };

    this.logs.push(entry);
    this.storage.save(entry);
    this.notifyError(entry);

    return entry;
  }

  private notifyError(entry: ErrorLogEntry): void {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', entry);
    }
  }

  getLogs(): ErrorLogEntry[] {
    return this.storage.getAll();
  }

  clearLogs(): void {
    this.logs = [];
    this.storage.clear();
  }
}

export const logger = Logger.getInstance();

export const logError = (
  error: Error,
  component?: string,
  context?: Record<string, unknown>
): ErrorLogEntry => {
  return logger.logError(error, { component, context });
};