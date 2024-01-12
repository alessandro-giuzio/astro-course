const id = "jim-halpert.md";
						const collection = "authors";
						const slug = "jim-halpert";
						const body = "";
						const data = {name:"Jim Halpert",image:
						new Proxy({"src":"/_astro/coffee.4bbfba78.jpg","width":3202,"height":4265,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					};
						const _internal = {
							type: 'content',
							filePath: "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/jim-halpert.md",
							rawData: "\nname: Jim Halpert\nimage: ../posts/images/coffee.jpg",
						};

export { _internal, body, collection, data, id, slug };
