import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
	@Query(() => String)
	hello() {
		throw new Error("Something happended");
		return "Hello world 2";
	}
}
