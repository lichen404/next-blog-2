import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '@/app/models/User';

const pgConnection = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'blog',
    username: 'blog',
    synchronize: false,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
  });
  
  export const getDBConnection = async (): Promise<DataSource> => {
    if (!pgConnection.isInitialized) {
      await pgConnection.initialize();
    }
    return pgConnection;
  };