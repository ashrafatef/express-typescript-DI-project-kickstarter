import { Container } from "inversify";
import "./bootstrap/databases";
import { InversifyExpressServer } from "inversify-express-utils";
import { buildProviderModule } from "inversify-binding-decorators";

const databaseContainer = new Container();
databaseContainer.load(buildProviderModule());
const server = "";
// const server = new InversifyExpressServer(databaseContainer);

export { server, databaseContainer };


// export class DIContainer{

//     private _apiContainer: Container;
//     private _databaseContainer: Container;
//     appDIContainer:Container;
//     public get databaseContainer(): Container {
//         return this._databaseContainer;
//     }
//     public set databaseContainer(value: Container) {
//         this._databaseContainer = value;
//     }
//     public get apiContainer(): Container {
//         return this._apiContainer;
//     }
//     public set apiContainer(value: Container) {
//         this._apiContainer = value;
//     }
//     constructor(){
//         this.apiContainer = new Container();
//         this.databaseContainer = new Container();
//     }
//     initializeApi(){
        
//     }
//     initializeDatabase(){}
//     initializeContainer(){}

// }