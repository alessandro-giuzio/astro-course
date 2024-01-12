const id = "pam-beesely.md";
						const collection = "authors";
						const slug = "pam-beesely";
						const body = "";
						const data = {name:"Pam Beesely",image:
						new Proxy({"src":"/_astro/speaker.2015bbbe.jpg","width":5669,"height":3921,"format":"jpg"}, {
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
							filePath: "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/pam-beesely.md",
							rawData: "\nname: Pam Beesely\nimage: ../posts/images/speaker.jpg",
						};

export { _internal, body, collection, data, id, slug };
