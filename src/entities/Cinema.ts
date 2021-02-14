import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Cinema {
    @PrimaryGeneratedColumn()
    public id! : number;

    @Column({length:100})
    public nom! : String;

    @Column({length:100})
    public adresse! : String;

    @Column({length:50})
    public ville! : String;

    @Column({length:20})
    public telephone! : String;

}

export default Cinema;