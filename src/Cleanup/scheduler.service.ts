import { Injectable, OnModuleInit } from '@nestjs/common';
import * as cron from 'node-cron';
import { CleanupService } from './cleanup.service';

@Injectable()
export class SchedulerService implements OnModuleInit {
  constructor(private readonly cleanupService: CleanupService) {}

  onModuleInit() {
    cron.schedule('55 21 * * *', async () => {
      await this.cleanupService.cleanupCollections();
    });
  }
}
