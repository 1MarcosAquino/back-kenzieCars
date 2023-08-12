import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';

import { User } from './users';

@Entity('address')
export class Address {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 45 })
    street: string;

    @Column('varchar', { length: 45, unique: true })
    number: string;

    @Column({ default: false, nullable: true })
    city: boolean;

    @Column('varchar', { length: 120 })
    state: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}
