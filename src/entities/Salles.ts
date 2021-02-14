import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import Cinema from './Cinema';

@Entity()
export class Salles {
    @ManyToOne( () => Cinema, cinema => cinema.id )
    public idCine!: Cinema;

    @PrimaryGeneratedColumn({type:"int"})
    public numSalle!: number;

    @Column({type:"int", width:11})
    public nbPlaces! : number;

}
export default Salles