import Acteur from '../entities/Acteur';
import Cinema from '../entities/Cinema';
import Film from '../entities/Film';
import {Request, Response} from 'express';
import {connection} from "../connection/Connection";

class Controller{
    public getAllCinema(req: Request, res: Response){
        connection
            .then(async connection => {
                const cinemas: Cinema[] = await connection.manager.find(Cinema);
                res.json(cinemas);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public getAllFilm(req: Request, res: Response){
        connection
            .then(async connection => {
                const films: Film[] = await connection.manager.find(Film);
                res.json(films);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public getAllActor(req: Request, res: Response){
        connection
            .then(async connection => {
                const data: Acteur[] = await connection.manager.find(Acteur);
                res.json(data);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public addCinema(req: Request, res: Response){
        connection
            .then(async connection => {
                let RequestCinema = req.body;
                let cinema = new Cinema();
                cinema.adresse = RequestCinema.adresse;
                cinema.nom  = RequestCinema.nom;
                cinema.telephone = RequestCinema.telephone;
                cinema.ville = RequestCinema.ville;
                
                let newd = await connection.manager.save(cinema);

                res.status(200).json({
                    success: "true",
                    message: `Data successfully saved ${(newd.id)}`
                })
                
            })
    }
}
export {Controller};