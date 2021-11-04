import { Container } from "inversify";
import "./bootstrap/databases";
import "./api";
import { InversifyExpressServer } from "inversify-express-utils";
import { buildProviderModule } from "inversify-binding-decorators";

const container = new Container();
container.load(buildProviderModule());
const server = new InversifyExpressServer(container);

export { server, container };
