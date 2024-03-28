import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, Index } from 'typeorm';


@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Index({ unique: true })
  @Column('varchar',{nullable:false})
  username?: string;

  @Column('varchar',{nullable:false})
  passwordDigest?: string;

  @CreateDateColumn()
  createdAt?:Date;

  @UpdateDateColumn()
  updatedAt?:Date;

  password?: string;
}