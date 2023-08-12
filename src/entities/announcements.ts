import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { User } from './users';

@Entity('announcements')
export class Announcement {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 45 })
    name: string;

    @Column('varchar', { length: 15 })
    brand: string;

    @Column('varchar', { length: 250 })
    image: string;

    @Column()
    year: number;

    @Column('varchar', { length: 15 })
    fuel: string;

    @Column('varchar', { length: 250 })
    description: string;

    @Column('varchar', { length: 10 })
    color: string;

    @Column()
    km: number;

    @Column()
    price: number;

    @CreateDateColumn({ type: 'date' })
    value: number;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt?: string | null | undefined;

    @ManyToOne(() => User, (user) => user.announcements, {
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    user: User;
}
