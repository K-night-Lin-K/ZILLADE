/* =========================================================
	CHARACTER DATA
========================================================= */

let characters = [];

/* =========================================================
	CHARACTER SYSTEM
========================================================= */

let currentCharacter = 0;
let currentForm = 0;

const characterImage = document.getElementById("characterImage");
const characterName = document.getElementById("characterName");
const characterNameEn = document.getElementById("characterNameEn");
const characterDescription = document.getElementById("characterDescription");
const formSwitch = document.getElementById("formSwitch");
const characterList = document.getElementById("characterList");

/* キャラクターデータを読み込む */
async function loadCharacters()
{
	try
	{
		const response = await fetch("text/characters.txt");
		if(!response.ok)
		{
			throw new Error("キャラクターデータを読み込めませんでした。");
		}

		const text = await response.text();
		characters = parseCharacterData(text);

		showCharacter(0);
	}
	catch(error)
	{
		console.error(error);
	}
}

/* キャラクターデータを解析 */
function parseCharacterData(text)
{
	const blocks = text.split(/\n(?=\[)/);
	const result = [];
	let currentCharacter = null;

	blocks.forEach(
		function(block)
		{
			const lines = block.trim().split("\n");
			const firstLine = lines[0];

			if(!firstLine || !firstLine.startsWith("["))
			{
				return;
			}

			const name = firstLine.replace(/^\[|\]$/g, "");
			const nameEnLine = lines.find(
				function(line)
				{
					return line.startsWith("nameEn=");
				}
			);

			if(nameEnLine)
			{
				currentCharacter =
				{
					name: name,
					nameEn: nameEnLine.replace("nameEn=", ""),
					forms: []
				};

				result.push(currentCharacter);
				return;
			}

			if(!currentCharacter)
			{
				return;
			}

			const formName = name;
			const imageLine = lines.find(
				function(line)
				{
					return line.startsWith("image=");
				}
			);

			const descriptionIndex = lines.findIndex(
				function(line)
				{
					return line === "description=";
				}
			);

			if(!imageLine || descriptionIndex === -1)
			{
				return;
			}

			const description = lines
				.slice(descriptionIndex + 1)
				.join("\n")
				.trim();

			currentCharacter.forms.push(
			{
				name: formName,
				image: imageLine.replace("image=", ""),
				description: description
			});
		}
	);

	return result;
}

/* キャラクター表示 */
function showCharacter(index)
{
	currentCharacter = index;
	currentForm = 0;
	showForm();
	createCharacterIcons();
}

/* 通常/変身後などの表示 */
function showForm()
{
	const character = characters[currentCharacter];
	const form = character.forms[currentForm];

	characterImage.src = form.image;
	characterImage.alt = character.name;
	characterName.textContent = character.name;
	characterNameEn.textContent = character.nameEn;
	characterDescription.textContent = form.description;

	/* フォーム切り替えボタン */
	formSwitch.innerHTML = "";

	if(character.forms.length > 1)
	{
		character.forms.forEach(
			function(formData, index)
			{
				const button = document.createElement("button");
				button.textContent = formData.name;

				if(index === currentForm)
				{
					button.classList.add("active");
				}

				button.addEventListener("click",
					function()
					{
						currentForm = index;
						showForm();
					}
				);

				formSwitch.appendChild(button);
			}
		);
	}
}

/* キャラクターアイコン一覧 */
function createCharacterIcons()
{
	characterList.innerHTML = "";

	characters.forEach(
		function(character, index)
		{
			const button = document.createElement("div");
			button.className = "character-icon";

			if(index === currentCharacter)
			{
				button.classList.add("active");
			}

			const img = document.createElement("img");
			img.src = character.forms[0].image;
			img.alt = character.name;
			button.appendChild(img);

			button.addEventListener("click",
				function()
				{
					showCharacter(index);

					/* スマホでキャラクターを選んだら紹介部分までスクロール */
					if(window.innerWidth <= 800)
					{
						document.querySelector(".character-area").scrollIntoView(
						{
							behavior: "smooth",
							block: "start"
						});
					}
				}
			);

			characterList.appendChild(button);
		}
	);
}

/* キャラクターデータ読み込み開始 */
loadCharacters();


/* =========================================================
	STORY SYSTEM
========================================================= */

/* 外部テキストを読み込む */
async function loadStory(fileName, title, episodeLink)
{
	const existingViewer = episodeLink.nextElementSibling;

	if(existingViewer && existingViewer.classList.contains("story-viewer"))
	{
		return;
	}

	const viewer = document.createElement("div");
	viewer.className = "story-viewer";
	viewer.innerHTML = `<h3>${title}</h3><div class="story-text">Loading...</div><button class="story-close" onclick="this.parentElement.remove()">閉じる</button>`;

	episodeLink.after(viewer);

	try
	{
		const response = await fetch(fileName);

		if(!response.ok)
		{
			throw new Error("ファイルを読み込めませんでした。");
		}

		const text = await response.text();
		viewer.querySelector(".story-text").textContent = text;
	}
	catch(error)
	{
		viewer.querySelector(".story-text").textContent = "Storyを読み込めませんでした。";
		console.error(error);
	}
}

/* Storyを閉じる */
function closeStory()
{
	const viewer = document.getElementById("storyViewer");
	viewer.classList.remove("visible");
}