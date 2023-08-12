import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    CreateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    OneToMany,
    OneToOne,
} from 'typeorm';

import { hashSync, getRounds } from 'bcryptjs';
import { Address } from './address';
import { Announcement } from './announcements';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 45 })
    firstName: string;

    @Column('varchar', { length: 45 })
    lastName: string;

    @Column('varchar', { length: 45, unique: true })
    email: string;

    @Column({ default: false, nullable: true })
    announcer: boolean;

    @Column('varchar', { length: 120 })
    password: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt?: string | null | undefined;

    @OneToOne(() => Address)
    address: Address;

    @OneToMany(() => Announcement, (announcements) => announcements.user)
    announcements: Announcement[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const incrypt = getRounds(this.password);
        if (!incrypt) this.password = hashSync(this.password, 10);
    }
}
