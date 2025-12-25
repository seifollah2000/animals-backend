export const successResponse = <T>(
  data: T,
  message?: string,
  statusCode = 200,
) => ({
  status: true,
  statusCode,
  message: message || 'موفقیت آمیز',
  data,
});

export const errorResponse = (message: string, statusCode = 400) => ({
  status: false,
  statusCode,
  message,
  data: null,
});
