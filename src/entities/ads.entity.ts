import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';

import { User } from './users.entity';
import { Image } from './imagens.entity';
import { Comment } from './comments.entity';

@Entity('ads')
export class Ads {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 45 })
    name: string;

    @Column('varchar', { length: 15 })
    brand: string;

    @Column()
    year: number;

    @Column()
    fuel: number;

    @Column()
    value: number;

    @Column('text')
    description: string;

    @Column()
    miles: number;

    @Column('varchar', { length: 30 })
    color: string;

    @Column('varchar', { length: 20 })
    model: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt?: string | null | undefined;

    @ManyToOne(() => User, (user) => user.ads, {
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    user: User;

    @OneToMany(() => Comment, (comment) => comment.ads)
    comments: Comment[];

    @OneToMany(() => Image, (images) => images.ads)
    images: Image[];
}
