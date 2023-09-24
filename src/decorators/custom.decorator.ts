import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CustomDecorator = createParamDecorator(
  (data: string, ectx: ExecutionContext) => {
    const context = ectx.switchToHttp().getRequest();
    const requestData = context.body;
    return requestData[data] ?? 'Cannot find data';
  },
);
