import '@pracht/core';

declare module '@pracht/core' {
  interface Register {
    env: {
      API_DELAY_MS?: string;
      POSTGRES_URL?: string;
    };
  }
}
