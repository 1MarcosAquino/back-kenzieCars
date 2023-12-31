import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    OneToMany,
    OneToOne,
} from 'typeorm';

import { hashSync, getRounds } from 'bcryptjs';
import { Address } from './addresses.entity';
import { Ads } from './ads.entity';
import { Comment } from './comments.entity';

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

    @Column('varchar', { length: 12, unique: true })
    phone: string;

    @Column({ default: false, nullable: true })
    announcer: boolean;

    @Column('varchar', { length: 120 })
    password: string;

    @Column('text')
    description: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @OneToOne(() => Address, (address) => address.user)
    address: Address;

    @OneToMany(() => Ads, (ads) => ads.user)
    ads: Ads[];

    @OneToMany(() => Comment, (comments) => comments.user)
    comments: Comment[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const incrypt = getRounds(this.password);
        if (!incrypt) this.password = hashSync(this.password, 10);
    }
}
