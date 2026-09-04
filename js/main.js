/* =========================================================
	CHARACTER DATA
========================================================= */
/*
	キャラクター配列
	formsを複数用意すると、「通常」「変身後」などの切り替えができる。
*/

const characters = [
{
	name: "ヴェルノ・アーシュラ",
	nameEn: "Verno Ursula",
	forms: [
	{
		name: "通常",
		image: "images/characters/01_Verno.png",
		description:
			"悪魔の力をその身に宿す青年。\n\n" +
			"自らの力と向き合いながら、" +
			"仲間とともに戦う。"
	}
	]
},
{
	name: "ヴィクトリア・アン・アーシュラ",
	nameEn: "Victoria Anne Ursula",
	forms: [
	{
		name: "通常",
		image: "images/characters/02_Victoria.png",
		description:
			"ヴェルノの妹。\n\n" +
			"兄を支えながら、" +
			"自らも戦いに身を投じていく。"
	}
	]
},
{
	name: "アベル・オルドリッジ",
	nameEn: "Abel Aldridge",
	forms: [
	{
		name: "通常",
		image: "images/characters/03_Abel.png",
		description:
			"発明家。\n\n" +
			"魔唱機に関する研究を続けている。"
	}
	]
},
{
	name: "ニーナ",
	nameEn: "Nina",
	forms: [
	{
		name: "通常",
		image: "images/characters/04_Nina.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "クリストファー・ラングフォード",
	nameEn: "Christopher Langford",
	forms: [
	{
		name: "通常",
		image: "images/characters/05_Christopher.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "ルシール・シューリス",
	nameEn: "Lucille Thewlis",
	forms: [
	{
		name: "通常",
		image: "images/characters/06_Lucille.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "シン・エクランド",
	nameEn: "Sin Ekland",
	forms: [
	{
		name: "通常",
		image: "images/characters/07_Sin.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "レオニード",
	nameEn: "Leonid",
	forms: [
	{
		name: "通常",
		image: "images/characters/08_Leonid.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "セルマ・ビアス",
	nameEn: "Thelma Bierce",
	forms: [
	{
		name: "通常",
		image: "images/characters/09_Thelma.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "フィオナ",
	nameEn: "Fiona",
	forms: [
	{
		name: "通常",
		image: "images/characters/10_Fiona.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "アリシア・リア&マイロ",
	nameEn: "Alicia Lear&Milo",
	forms: [
	{
		name: "通常",
		image: "images/characters/11_Alicia.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "マックス",
	nameEn: "Max",
	forms: [
	{
		name: "通常",
		image: "images/characters/12_Max.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "エスメラルダ・ヘイスティングズ",
	nameEn: "Esmeralda Hastings",
	forms: [
	{
		name: "通常",
		image: "images/characters/13_Esmeralda.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "鬼塚隆之介村正",
	nameEn: "Muramasa Ryunosuke Oniduka",
	forms: [
	{
		name: "通常",
		image: "images/characters/14_Muramasa.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "猿渡左衛門",
	nameEn: "Saemon Sawatari",
	forms: [
	{
		name: "通常",
		image: "images/characters/15_Saemon.png",
		description:
			"キャラクター紹介文。"
	}
	]
},,
{
	name: "賢徳大師",
	nameEn: "Kentoku Daishi",
	forms: [
	{
		name: "通常",
		image: "images/characters/16_Kentoku.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "シドニー・ホプキンス",
	nameEn: "Leonid",
	forms: [
	{
		name: "通常",
		image: "images/characters/17_Sidney.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "マルヴィナ",
	nameEn: "Malvina",
	forms: [
	{
		name: "通常",
		image: "images/characters/18_Malvina.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "フレッド・フォークナー",
	nameEn: "Fred Falkner",
	forms: [
	{
		name: "通常",
		image: "images/characters/19_Rising.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "マーシャ・グルーバー",
	nameEn: "Marcia Gruber",
	forms: [
	{
		name: "通常",
		image: "images/characters/20_RabbitFist.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "ジェイク・グルーバー",
	nameEn: "Jake Gruber",
	forms: [
	{
		name: "通常",
		image: "images/characters/21_Jake.png",
		description:
			"キャラクター紹介文。"
	},
	{
		name: "獣人化",
		image: "images/characters/21_Jake(Beast).png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "香夜",
	nameEn: "Kaya",
	forms: [
	{
		name: "通常",
		image: "images/characters/22_Kaya.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "ノア・コーマック",
	nameEn: "Noah Cormack",
	forms: [
	{
		name: "通常",
		image: "images/characters/23_Noah.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "ザラ・クレイン",
	nameEn: "Zara Crane",
	forms: [
	{
		name: "通常",
		image: "images/characters/24_Zara.png",
		description:
			"キャラクター紹介文。"
	}
	]
},
{
	name: "アイリーン・フェアバーンズ",
	nameEn: "Irene Fairbairns",
	forms: [
	{
		name: "通常",
		image: "images/characters/25_Irene.png",
		description:
			"キャラクター紹介文。"
	}
	]
}
];

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
					
					/* 選んだら紹介部分までスクロール */
					document.querySelector(".character-area").scrollIntoView(
					{
						behavior: "smooth",
						block: "start"
					});
				}
			);
			
			characterList.appendChild(button);
		}
	);
}

/* 最初のキャラクター */
showCharacter(0);

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
