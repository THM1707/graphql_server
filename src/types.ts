import { Request, Response } from "express";
import { Redis } from "ioredis";
import { createUpdootLoader } from "./utils/createUpdootLoaders";
import { createUserLoader } from "./utils/createUserLoaders";

export type MyContext = {
	req: Request;
	res: Response;
	redis: Redis;
	userLoader: ReturnType<typeof createUserLoader>;
	updootLoader: ReturnType<typeof createUpdootLoader>;
};
