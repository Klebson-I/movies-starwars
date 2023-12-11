import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

const { INTERNAL_SERVER_ERROR } = HttpStatus;

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    if (exception instanceof BadRequestException) {
      const status = exception.getStatus();
      return response.status(status).json({
        error: exception.message,
        status: status,
      });
    }
    response.status(INTERNAL_SERVER_ERROR).json({
      error: exception.message,
      status: INTERNAL_SERVER_ERROR,
    });
  }
}
