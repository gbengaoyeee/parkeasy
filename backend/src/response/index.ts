export class IResponseData {
  json: {
    message: string;
    data: any;
  };
  constructor(
    private message: string,
    private data: any,
  ) {
    this.json = {
      data,
      message,
    };
  }
}

export class IResponseError extends Error {
  error: any;
  constructor(message: string, error: any) {
    super(message);
    this.error = error;
  }

  json() {
    return {
      message: this.message,
      error: this.error,
    };
  }
}
