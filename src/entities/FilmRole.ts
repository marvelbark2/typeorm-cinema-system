import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import Acteur from './Acteur';
import Film from './Film';

@Entity({name: 'film_roles'})
export class FilmRole{
    @PrimaryGeneratedColumn()
    @ManyToOne( () => Film, film => film.id )
    public numFilm!: Film;

    @PrimaryGeneratedColumn()
    @ManyToOne( () => Acteur, acteur => acteur.id )
    public numActeur!: Acteur;

    @Column({length:100})
    public role! : String;

    @Column({type:"int", width:11})
    public taille! : number;
}

export default FilmRole;