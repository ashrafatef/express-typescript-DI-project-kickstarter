import { JSONSchemaType } from "ajv";

export interface IUser {
    name: string;
    username: string;
    password: string;
    email: string
}


export const userCreatePayload: JSONSchemaType<IUser> = {
    type: 'object',
    properties: {
        name: { type: "string" },
        username: { type: "string" },
        password: { type: "string" },
        email: {
            type: 'string'
        }
    },
    required: ['username', 'password', 'name', 'email'],
    additionalProperties: false
};