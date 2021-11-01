import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: "database",
    })
  );
};
