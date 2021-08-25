import {development} from './development.config';
import { production } from './production.config';

const env = process.env.NODE_ENV || 'development';

const configuration:{[k: string]: any;} ={
    development,
    production
}

export default configuration[env];