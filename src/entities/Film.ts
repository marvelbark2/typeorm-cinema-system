import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Film {
    @PrimaryGeneratedColumn()
    public id! : number;

    @Column({length:100})
    public title! : String;

    @Column({length:50})
    public genre! : String;

    @Column({length:50})
    public realisateur! : String;

    @Column()
    public annee! : Date;

    @Column({type:"int", width:11})
    public Duree! : number;

    @Column({type:"int", width:11})
    public Budget! : number;

}
export default Film;