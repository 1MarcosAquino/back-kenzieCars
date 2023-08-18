import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { Ads } from './ads.entity';
import { User } from './users.entity';

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text' })
    comment: string;

    @ManyToOne(() => Ads, (ads) => ads.comments, {
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    ads: Ads;

    @ManyToOne(() => User, (ads) => ads.ads, {
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    user: User;
}
