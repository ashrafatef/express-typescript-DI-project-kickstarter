import Ajv, { JSONSchemaType } from "ajv";

export interface ITask{
    title:string;
    description:string;
}


export const taskCreatePayload :JSONSchemaType<ITask>= {
  type: 'object',
  properties: {
    title: { type: "string" },
    description: {type:'string'}
  },
  required : ['title'],
  additionalProperties: false
};
