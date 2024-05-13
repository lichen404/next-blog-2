import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../models/User';
import { Post } from '../models/Post';

const pgConnection = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'blog',
    username: 'blog',
    synchronize: true,
    logging: true,
    entities: [User,Post],
    migrations: [],
    subscribers: [],
  });
  
  export const getDBConnection = async (): Promise<DataSource> => {
    if (!pgConnection.isInitialized) {
      await pgConnection.initialize();
    }
    return pgConnection;
  };