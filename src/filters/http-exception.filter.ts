import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

// 需要实现 ExceptionFilter 接口，里面有一个catch方法需要实现
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();      //获取状态信息
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const exceptionRes: any = exception.getResponse();
    let { message } = exceptionRes
    const errorResponse = {
      message: message instanceof Array ? message[0] : message || exceptionRes,
      path: request.url,
      code: 0
    }
    response.status(status).json(errorResponse);
  }
}