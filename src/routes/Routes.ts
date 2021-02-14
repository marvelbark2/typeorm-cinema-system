import {Request, Response} from "express";
import {Controller} from "../Controller/controller";
class Routes {
    private controller: Controller;
    constructor() {
        this.controller = new Controller();
    }
    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });
// following code is to handle http://localhost:3000/superHero request.
        app.route('/film')
            .get(this.controller.getAllFilm)
        // following code is to handle http://localhost:3000/superHero/{superHeroId} request.
        app.route('/cinema')
            .get(this.controller.getAllCinema)
            .post(this.controller.addCinema);
    }
}
export {Routes};