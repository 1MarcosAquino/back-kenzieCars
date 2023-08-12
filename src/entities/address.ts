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
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 45 })
    street: string;

    @Column('varchar', { length: 10 })
    number: string;

    @Column('varchar', { length: 20 })
    city: string;

    @Column('varchar', { length: 2 })
    state: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}
