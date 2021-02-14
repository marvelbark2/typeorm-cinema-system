import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import Cinema from './Cinema';
import Film from './Film';
import Salles from "./Salles";

@Entity()
export class Programme{
    @ManyToOne( () => Film, film => film.id )
    public numF!: Film;

    @ManyToOne( () => Cinema, cinema => cinema.id )
    public numC!: Cinema;

    @ManyToOne( () => Salles, salle => salle.numSalle )
    public numS!: Cinema;

    @PrimaryGeneratedColumn("uuid")
    public date_debut!: Date;

    @Column({type:"int", width:11})
    public prix! : number;

    @Column({type:"int", width:11})
    public nbEntrees! : number;
}
export default Programme;