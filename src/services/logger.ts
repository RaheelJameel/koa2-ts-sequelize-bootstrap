import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import * as Logger from 'bunyan';
import { Stream } from 'bunyan';

// tslint:disable-next-line:no-var-requires
const packageJson = require('../../package.json');
const appName = (packageJson && packageJson.name) || 'App';

export class AppLogger {
  private logDir: string;
  private logFile: string;
  private logErrorFile: string;
  private name: string;

  constructor(name: string) {
    this.name = name;
    this.logDir = join(__dirname, '../../logs');
    this.logFile = join(this.logDir, 'debug.json');
    this.logErrorFile = join(this.logDir, 'error.json');

    if (!existsSync(this.logDir)) {
      mkdirSync(this.logDir);
    }
  }

  public createLogger(): Logger {
    const streams: Stream[] = [
      {
        path: this.logErrorFile,
        level: 'error',
        type: 'rotating-file',
        period: '1d'
      },
      {
        stream: process.stdout,
        level: 'error'
      }
    ];

    if (process.env.NODE_ENV !== 'production') {
      streams.push({
        stream: process.stdout,
        level: 'debug'
      });

      streams.push({
        path: this.logFile,
        level: 'debug',
        type: 'rotating-file',
        period: '1d'
      });
    }

    return Logger.createLogger({
      name: this.name,
      streams
    });
  }
}

export const logger: Logger = new AppLogger(appName).createLogger();
