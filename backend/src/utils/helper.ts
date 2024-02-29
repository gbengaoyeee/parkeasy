export async function retryAsyncFunction(
  fn: () => Promise<any>,
  retriesLeft: number = 5,
  interval: number = 1000,
): Promise<any> {
  try {
    // Attempt to run the function
    return await fn();
  } catch (error) {
    // If no retries left, throw the error
    if (retriesLeft === 0) {
      throw error;
    }
    // Wait for the interval amount before retrying
    await new Promise((resolve) => setTimeout(resolve, interval));
    // Subtract one from retriesLeft and try again
    return retryAsyncFunction(fn, retriesLeft - 1, interval);
  }
}
