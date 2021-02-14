import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Acteur{
    @PrimaryGeneratedColumn()
    public id! : number;

    @Column('text',{nullable:true})
    public nom! : String;

    @Column()
    public date_naissance! : Date;

    @Column("varchar", { length: 50 })
    public specialite! : String;

    @Column({type:"int", width:11})
    public taille! : number;

    @Column({type:"int", width:11})
    public poids! : number;
}
export default Acteur