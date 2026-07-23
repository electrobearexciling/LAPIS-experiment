class VastR{
    constructor(language, image_folder, selected_images){
        this.language = language;
        this.image_folder = image_folder;

        if (selected_images === undefined)
            this.selected_images =  [1, 2, 7, 8, 9, 12, 13, 15, 20, 22, 23, 27, 28, 31, 35, 37, 38, 39, 40, 41, 43, 44, 45, 48, 49];

        this.generateImages();
    }

    generateImages(){
        this.image_srcs = [`${this.image_folder}/a.png`, `${this.image_folder}/b.png`, `${this.image_folder}/c.png`];

        for(let i = 0; i < this.selected_images.length; ++i){
            let current_image = `${this.image_folder}/${this.selected_images[i]}.png`;
            this.image_srcs.push(current_image);
        }
    }

    getjsPsychInstructions(){
        let baseInstruction = {
            type: jsPsychInstructions,
            show_clickable_nav: true,
            button_label_previous : this.language == 'en' ? 'Previous' : (this.language == 'nl' ? 'Vorige' : '上一页'),
            button_label_next : this.language == 'en' ? 'Next' : (this.language == 'nl' ? 'Volgende' : '下一页'),
            data: {
                test_part: 'vast-r_instructions'
            } 
        }

        if(this.language === 'en'){
            baseInstruction['pages'] = [
                '<p style="max-width: 50em;">This test contains a series of twenty-five pairs of pictures. Each pair consists of two quite similar pictures one of which is superior from the point of view of design; it is more harmonious, better balanced and better adapted in the way the elements are ordered, and in the way the lines are drawn. Look carefully at the picture, and you will see that in the comparison the worse picture contains small "faults" or "errors" which destroy the balance of the picture. These judgements were made unanimously by a group of painters and graphic artists for all twenty five pairs of pictures.</p>',
                '<p style="max-width: 50em;">At the beginning of the test, three examples are given (pairs A, B and C) which illustrate these points. A check mark is affixed to the more balanced, better formulated picture. </p>',
                `<p style="max-width: 50em;margin:auto">In the case of picture A, the picture marked with a check is better because the contour is more even, and the central point is located right in the middle. In the less good picture there are breaks in the contour in two places, and the circle is badly positioned.</p><img src="${this.image_folder}/a.png">`,
                `<p style="max-width: 50em;margin:auto">In the case of B, the three polygonal figures present a well-ordered and circumscribed figure, while this is not at all clear in the worse figure, where the small pointed areas constitute a disturbance. </p><img src="${this.image_folder}/b.png">`,
                `<p style="max-width: 50em;margin:auto">As regards figure C, the rythmic movement can be seen clearly in the better figure, while this is not at all clear in the worse figure, where the small pointed areas constitute a disturbance.</p><img src="${this.image_folder}/c.png">`,
                '<p style="max-width: 50em;">Your task will be to discover, as far as the twenty-five remaining pairs of pictures are concerned, which in each pair is the better design. Sometimes this will be on the left side, sometimes on the right. Look carefully and take your time; the correct answer is not always obvious! When you have made a decision, click the button below the item with the better design. </p><p style="max-width: 50em;">Do not form your judgement according to which of the two pictures you like better.</p><p style="max-width: 50em;">This is not the point, because sometimes a picture that is less well designed may please you better, because you find it personally more interesting. Your task is to discover which picture has been better designed. Note that the problems differ in difficulty, but that the more difficult ones are not necessarily to be found near the end; easy and difficult items are intermingled on a fairly random basis.</p>'
            ];
        }
        else if (this.language === 'nl'){
            baseInstruction['pages'] = [
                '<p style="max-width: 50em;">Deze test bevat een reeks van vijfentwintig paren van afbeeldingen. Elk paar bestaat uit twee erg gelijkende afbeeldingen, waarvan er één superieur is uit het oogpunt van vormgeving; het is harmonieuzer, beter gebalanceerd en beter aangepast in de manier waarop de elementen geordend zijn en in de manier waarop de lijnen getrokken zijn. Kijk zorgvuldig naar de afbeelding, en u zult zien dat in de vergelijking de slechtere afbeelding kleine "foutjes" of "vergissingen" bevat die het evenwicht van de afbeelding tenietdoen. Deze beoordelingen werden unaniem gegeven door een groep schilders en grafische kunstenaars voor alle vijfentwintig paren van afbeeldingen.</p>',
                '<p style="max-width: 50em;">Aan het begin van de test staan drie voorbeelden (de paren A, B en C) die deze punten illustreren. Er is een vinkje gezet bij de meer evenwichtige, beter gevormde afbeelding. </p>',
                `<p style="max-width: 50em;margin:auto">In het geval van afbeelding A is de afbeelding aangeduid met een vinkje beter omdat de contouren gelijkmatiger zijn en het centrale punt precies in het midden ligt. In de minder goede afbeelding zijn er op twee plaatsen breuken in de contour en is de cirkel slecht gepositioneerd.</p><img src="${this.image_folder}/a.png">`,
                `<p style="max-width: 50em;margin:auto">In het geval van B presenteren de drie veelhoekige figuren een goed geordende en omlijnde figuur, terwijl dit helemaal niet duidelijk is in de slechtere figuur, waar de kleine puntige gebieden een verstoring vormen. </p><img src="${this.image_folder}/b.png">`,
                `<p style="max-width: 50em;margin:auto">In het gevan van C is de ritmische beweging duidelijk zichtbaar in de betere afbeelding. Dit is veel minder duidelijk in de slechtere figuur, waar de kleine gepunte gebieden een verstoring vormen</p><img src="${this.image_folder}/c.png">`,
                '<p style="max-width: 50em;">Uw taak zal zijn om voor de vijfentwintig resterende paren van afbeeldingen te ontdekken welke van elk paar het betere ontwerp is. Soms zal dit links zijn, soms rechts. Kijk goed en neem de tijd; het juiste antwoord ligt niet altijd voor de hand! Als je een beslissing hebt genomen, klik je op de knop onder de afbeelding met het betere ontwerp. \n' +
                'Beoordeel niet welke van de twee afbeeldingen je het mooist vindt.\n' +
                'Dat is niet de bedoeling, want soms kan een afbeelding die minder goed ontworpen is je beter bevallen, omdat je het persoonlijk interessanter vindt. Uw taak is te ontdekken welke afbeelding beter ontworpen is. Merk op dat de problemen verschillen in moeilijkheidsgraad, maar dat de moeilijkste niet noodzakelijkerwijs aan het eind te vinden zijn; gemakkelijke en moeilijke items worden vrij willekeurig door elkaar gebruikt.\n</p>'
            ];
        }
        else if (this.language === 'zh'){
            baseInstruction['pages'] = [
                '<p style="max-width: 50em;">本测试包含二十五对图片。每对图片由两幅非常相似的画面组成，其中一幅在设计上更胜一筹，它更和谐、更均衡，各元素的秩序和线条的勾勒也更为协调。请仔细观察画面，你会发现相比之下，较差的那幅画中存在一些小的"瑕疵"或"错误"，破坏了画面的平衡。对于全部二十五对图片，这些判断均由一组画家和平面艺术家一致评定。</p>',
                '<p style="max-width: 50em;">测试开始前，先给出三个示例（A、B和C组）来说明上述要点。在更均衡、构图更完善的图片上标有对勾标记。</p>',
                `<p style="max-width: 50em;margin:auto">在图片A中，打勾的那幅更好，因为其轮廓更加平滑，且中心点恰好位于正中。而较差的那幅中，轮廓有两处断裂，圆形的位置也偏离中心。</p><img src="${this.image_folder}/a.png">`,
                `<p style="max-width: 50em;margin:auto">在图片B中，三个多边形构成了一个秩序井然、轮廓清晰的图形；而在较差的那幅中，这一点完全不明确，那些尖锐的小区域构成了干扰。</p><img src="${this.image_folder}/b.png">`,
                `<p style="max-width: 50em;margin:auto">对于图片C，在较好的那幅中可以清晰地看到节奏感的运动，而较差的那幅中则完全不明了，那些尖锐的小区域构成了干扰。</p><img src="${this.image_folder}/c.png">`,
                '<p style="max-width: 50em;">你的任务是在剩下的二十五对图片中，判断每一对中哪一幅是更好的设计。正确答案有时在左侧，有时在右侧。请仔细观察，不必着急；正确答案并不总是显而易见的！做出决定后，请点击你认为设计更好那幅图片下方的按钮。</p><p style="max-width: 50em;">请不要根据你个人更喜欢哪幅图来形成判断。这不是关键，因为有时设计较差的那幅可能因为你个人觉得更有趣而更讨你喜欢。你的任务是辨别哪幅图画设计得更好。请注意，各题的难度有所不同，但较难的题目不一定都在末尾；简单和困难的题目是相当随机地混合排列的。</p>'
            ];
        }
        return baseInstruction;
    }

    getjsPsychImageButtonResponseTrials(){
        let trials = [];

        let choices, prompt;
        if(this.language === 'en'){
            choices = ['Left', 'Right'];
            prompt = `<p>Which image has the better design?</p>`;
        }
        else if(this.language == 'nl'){
            choices = ['Links', 'Rechts'];
            prompt = `<p>Welke afbeelding is beter ontworpen?</p>`;
        }
        else if(this.language == 'zh'){
            choices = ['左', '右'];
            prompt = `<p>哪幅图片设计更好？</p>`;
        }

        for(let i = 0; i < this.selected_images.length; ++i){
            let current_image = `${this.image_folder}/${this.selected_images[i]}.png`;
            let trial = {
                type: jsPsychImageButtonResponse,
                stimulus: current_image,
                choices: choices,
                prompt: prompt,
                on_load: function(){
                    // 可选的加载时样式调整
                },
                data: {
                    test_part: 'vast-r',
                    trial_number: i + 1,
                    image_number: this.selected_images[i]
                } 
            }
            trials.push(trial);
        }

        return trials;
    }

    getImageSources(){
        return this.image_srcs;
    }
}