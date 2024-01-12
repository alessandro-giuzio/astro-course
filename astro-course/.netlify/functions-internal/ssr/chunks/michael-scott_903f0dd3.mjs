const id = "michael-scott.md";
						const collection = "authors";
						const slug = "michael-scott";
						const body = "";
						const data = {name:"Michael Scott",image:
						new Proxy({"src":"/_astro/band.a6da028e.jpg","width":4752,"height":3168,"format":"jpg"}, {
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
							filePath: "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/michael-scott.md",
							rawData: "\nname: Michael Scott\nimage: ../posts/images/band.jpg",
						};

export { _internal, body, collection, data, id, slug };
