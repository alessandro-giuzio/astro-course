// Generated by Xata Codegen 0.28.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "users",
    columns: [
      { name: "name", type: "string", notNull: true, defaultValue: "" },
      { name: "password", type: "string", notNull: true, defaultValue: "" },
      {
        name: "email",
        type: "email",
        notNull: true,
        defaultValue: "dev@null.com",
      },
    ],
    revLinks: [{ column: "user", table: "comments" }],
  },
  {
    name: "comments",
    columns: [
      { name: "post", type: "string", notNull: true, defaultValue: "" },
      { name: "text", type: "text", notNull: true, defaultValue: "" },
      { name: "user", type: "link", link: { table: "users" } },
      { name: "date", type: "datetime", notNull: true, defaultValue: "now" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type Comments = InferredTypes["comments"];
export type CommentsRecord = Comments & XataRecord;

export type DatabaseSchema = {
  users: UsersRecord;
  comments: CommentsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Alessandro-Giuzio-s-workspace-1fkgss.eu-central-1.xata.sh/db/astro-course",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
