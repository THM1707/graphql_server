import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";

export default {
	migrations: {
		pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
		path: path.join(__dirname, "./migrations"), // path to the folder with migrations
	},
	entities: [Post],
	dbName: "lireddit",
	user: "dev",
	password: "nothing1707",
	type: "postgresql",
	debug: __prod__,
} as Parameters<typeof MikroORM.init>[0];
