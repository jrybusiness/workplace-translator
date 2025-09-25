document.addEventListener('DOMContentLoaded', () => {
    const modePredefinedBtn = document.getElementById('modePredefined');
    const modeAIBtn = document.getElementById('modeAI');
    const predefinedSection = document.getElementById('predefinedSection');
    const aiSection = document.getElementById('aiSection');

    const inputPhrasePredefined = document.getElementById('inputPhrasePredefined');
    const translateBtnPredefined = document.getElementById('translateBtnPredefined');
    const outputTruthPredefined = document.getElementById('outputTruthPredefined');

    const inputPhraseAI = document.getElementById('inputPhraseAI');
    const translateBtnAI = document.getElementById('translateBtnAI');
    const outputTruthAI = document.getElementById('outputTruthAI');

    const phraseGrid = document.getElementById('phraseGrid');

    const phrases = [
        { polite: '謝謝你，之後一定請你！', truth: '通常會不了了之。' },
        { polite: '沒多少錢，我付就好不用給。', truth: '別真的不給錢，會被覺得佔便宜。' },
        { polite: '別害羞，有什麼意見儘管提！', truth: '這分明是陷阱，別白目地暢所欲言。' },
        { polite: '你家小孩很可愛耶，很乖了啦！', truth: '對方可能只是客套話，說好話讓你開心一下。' },
        { polite: '人來就好了啦！真的不用帶東西。', truth: '絕對是客套話，別兩手空空去白吃白喝。' },
        { polite: '美女、帥哥！', truth: '那只是個客套的稱呼，對每個人都是這麼說的。' },
        { polite: '你最近有瘦喔！', truth: '人家只是在說客套話，甚至不知道該說什麼。' },
        { polite: '下次約吃飯、有空出來玩！', truth: '可能是散會後的禮貌用語，不一定真的有邀約想法。' },
        { polite: '別客氣，當自己家啊！', truth: '希望你自在，而不是真的叫你完全當自己家。' },
        { polite: '一點都沒變胖／變老，跟以前一樣年輕！', truth: '善意的客套話，讓人心情好，但別真的相信。' },
        { polite: '你最近是不是談戀愛了？', truth: '提醒你最近工作狀態不太穩定，常常分心。' },
        { polite: '你很有個性。', truth: '你有點特立獨行、搞不清楚狀況，自以為是、不擅團體合作。' },
        { polite: '你最近都在忙什麼？', truth: '對方想打聽你的底細，或覺得你閒閒沒事幹，提點你大家都注意到你的偷懶。' },
        { polite: '我對事不對人。', truth: '他心裡真的對你不爽了，必須把皮繃緊，好好挽回形象。' },
        { polite: '有機會多跟同事好好相處。', truth: '有同事在背後抱怨你了，而且怨氣應該還不小。' },
        { polite: '你很可靠老實。', truth: '你不知變通，只會遵守規則，中規中矩，毫無創新，甚至無聊。' },
        { polite: '這個職務挑戰不小喔！', truth: '這職位是屎坑，可能需要常常加班、遇上難相處的同事，或處理棘手的政治問題。' },
        { polite: '我考慮看看。', truth: '有點興趣，但總體來說覺得提議沒那麼吸引人，不想馬上回絕。' },
        { polite: '這件事你去和ＸＸ討論看看。', truth: '覺得ＸＸ能力比你強，你乾脆直接去問他意見，然後照他的意思辦事就好。' },
        { polite: '很特別。', truth: '很大機率對方是覺得你怪異、不切實際、沒抓到重點。' }
    ];

    // 初始化常見客套話列表
    function initPhraseGrid() {
        phraseGrid.innerHTML = '';
        phrases.forEach(phrase => {
            const phraseItem = document.createElement('div');
            phraseItem.className = 'phrase-item';
            phraseItem.innerHTML = `
                <div class="phrase-polite">${phrase.polite}</div>
                <div class="phrase-truth">${phrase.truth}</div>
            `;
            phraseItem.addEventListener('click', () => {
                inputPhrasePredefined.value = phrase.polite;
                outputTruthPredefined.textContent = phrase.truth;
                // 切換到常見客套話模式
                modePredefinedBtn.click();
                // 滾動到翻譯區域
                predefinedSection.scrollIntoView({ behavior: 'smooth' });
            });
            phraseGrid.appendChild(phraseItem);
        });
    }

    // 模式切換
    modePredefinedBtn.addEventListener('click', () => {
        modePredefinedBtn.classList.add('active');
        modeAIBtn.classList.remove('active');
        predefinedSection.classList.remove('hidden');
        aiSection.classList.add('hidden');
    });

    modeAIBtn.addEventListener('click', () => {
        modeAIBtn.classList.add('active');
        modePredefinedBtn.classList.remove('active');
        predefinedSection.classList.add('hidden');
        aiSection.classList.remove('hidden');
    });

    // 常見客套話翻譯功能
    translateBtnPredefined.addEventListener('click', () => {
        const input = inputPhrasePredefined.value.trim();
        let translatedTruth = '這句話我還沒學會翻譯，請輸入其他客套話或從下方列表中選擇。';

        for (const phrase of phrases) {
            if (input.includes(phrase.polite) || phrase.polite.includes(input)) {
                translatedTruth = phrase.truth;
                break;
            }
        }
        outputTruthPredefined.textContent = translatedTruth;
    });

    // AI判斷翻譯功能 (靜態版本)
    translateBtnAI.addEventListener('click', () => {
        const input = inputPhraseAI.value.trim();
        if (!input) {
            outputTruthAI.textContent = '請輸入客套話。';
            return;
        }

        outputTruthAI.textContent = 'AI翻譯功能需要後端服務支援。目前建議使用「常見客套話」功能，或查看下方的客套話列表。';
    });

    // 初始化
    initPhraseGrid();
});

