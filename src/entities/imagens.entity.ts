import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { Ads } from './ads.entity';

@Entity('imagens')
export class Image {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'text' })
    path: string;

    @ManyToOne(() => Ads, (ads) => ads.images, {
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    ads: Ads;
}
