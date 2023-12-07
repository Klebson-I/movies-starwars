import { Injectable, OnModuleInit } from '@nestjs/common';
import * as cron from 'node-cron';
import { CleanupService } from './cleanup.service';

@Injectable()
export class SchedulerService implements OnModuleInit {
  constructor(private readonly cleanupService: CleanupService) {}

  onModuleInit() {
    cron.schedule('56 21 * * *', async () => {
      console.log('now');
      await this.cleanupService.cleanupCollections();
    });
  }
}
