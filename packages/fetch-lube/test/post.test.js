import { client } from "./fetch-lube.js"

await client("https://dummyjson.com/auth/login")
	.post()
	.json({
		username: "kminchelle",
		password: "0lelplR"
	})
	.then(value => value.json())
	.then(json => client("https://dummyjson.com/auth/users/1")
			.get()
			.query(0, {
				Authorization: "Bearer " + json.token
			})
			.then(value => value.json())
			.then(json => console.log("atuny0@sohu.com:", json.email === "atuny0@sohu.com"))
	)