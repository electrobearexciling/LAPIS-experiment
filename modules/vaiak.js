const Vaiak = {
    required : true,
    language : 'zh',
    image_folder : 'images/vaiak/',

    button_labels : {
        'continue' : {
            'en' : 'Continue',
            'nl' : 'Verdergaan',
            'zh' : '继续'
        },
        'yes' : {
            'en' : 'Yes',
            'nl' : 'Ja',
            'zh' : '是'
        },
        'no' : {
            'en' : 'No',
            'nl': 'Nee',
            'zh' : '否'
        },
        'complete' : {
            'en' : 'Complete',
            'nl' : 'Voltooien',
            'zh' : '完成'
        }
    },

    // Part A questionnaire data
    likert_scale_1 : {
        'en': ["Not at all", " ", " ", " ", " ", " ", "Very much"],
        'nl': ["Helemaal niet", " ", " ", " ", " ", " ", "Heel veel"],
        'zh': ["完全不符合", " ", " ", " ", " ", " ", "非常符合"]
    },

    likert_scale_2 : {
        'en': ["Less than once per year", "Once per year", "Once per half-year", "Once every three months", "Once per month", "Once every fortnight", "Once per week or more often"],
        'nl': ["Minder dan één keer per jaar", "Eén keer per jaar", "Eén keer per half jaar", "Eén keer per drie maanden", "Eén keer per maand", "Elke veertien dagen", "Eén of meer keer per week"],
        'zh': ["每年少于一次", "每年一次", "每半年一次", "每三个月一次", "每月一次", "每两周一次", "每周一次或更频繁"]
    },

    part_a_instructions : {
        'en': {
            'instructions': `<p> There are three parts to the questionnaire.</p><p>In the first part, please indicate to what extent the following statements apply to you or best describe you.</p>`,
            'title_1': `To what extent do the following statements apply to you?`,
            'title_2' : `How often do you engage in each of the following activities?`},
        'nl' : {
            'instructions':`<p>Deze vragenlijst bestaat uit drie delen</p><p>Gelieve voor het eerste deel aan te duiden in welke mate de verschillende uitspraken op jou van toepassing zijn.</p>`,
            'title_1' : `In welke mate zijn de volgende uitspraken op jou van toepassing?`,
            'title_2' : `Hoe vaak doe je elk van volgende activiteiten?`
        },
        'zh' : {
            'instructions':`<p>本问卷共分为三个部分。</p><p>在第一部分，请指出以下陈述在多大程度上适用于您或最能描述您的情况。</p>`,
            'title_1' : `以下陈述在多大程度上适用于您？`,
            'title_2' : `您参与以下各项活动的频率如何？`
        }
    },

    part_a_questions : {
        'en': {
            1 : "I enjoyed attending art class in school.",
            2 : "I enjoy talking about art with others.",
            3 : "I have many friends/acquaintances who are interested in art.",
            4 : "I am interested in art.",
            5 : "I am always looking for new artistic impressions and experiences.",
            6 : "During my everyday  life I spontaneously notice art objects that I find fascinating.",
            7 : "I come from a family that is interested in art.",
            8 : "How often do you visit art museums or art galleries on average.",
            9 : "How often do you read books, magazines or catalogues about art.",
            10: "How often do you view images of artworks (picture books, internet, etc.)",
            11: "How often do you visit events about art or art history (seminars, projects, festivals, etc.)"
        },
        'nl': {
            1 : "Ik volgde graag vakken over kunst op school.",
            2 : "Ik praat graag over kunst met anderen.",
            3 : "Ik heb veel vrienden/kennissen die geïnteresseerd zijn in kunst.",
            4 : "Ik ben geïnteresseerd in kunst.",
            5 : "Ik ben altijd op zoek naar nieuwe artistieke impressies en ervaringen.",
            6 : "In mijn dagelijks leven merk ik spontaan kunstobjecten op die ik fascinerend vind.",
            7 : "In mijn familie is er een sterke interesse in kunst.",
            8 : "Hoe vaak bezoek je een kunst museum of kunst galerij.",
            9 : "Hoe vaak lees je boeken, magazines of catalogussen over kunst.",
            10: "Hoe vaak bekijk je afbeeldingen van kunst (prentenboeken, internet, enz.)",
            11: "Hoe vaak bezoek je events over kunst of kunstgeschiedenis (seminaries, projecten, festivals, enz.)"
        },
        'zh': {
            1 : "我在上学时喜欢上美术课。",
            2 : "我喜欢与他人谈论艺术。",
            3 : "我有很多对艺术感兴趣的朋友/熟人。",
            4 : "我对艺术感兴趣。",
            5 : "我总是在寻找新的艺术感受和体验。",
            6 : "在日常生活中，我会自发地注意到我觉得引人入胜的艺术品。",
            7 : "我出身于一个对艺术感兴趣的家庭。",
            8 : "您平均多久去一次艺术博物馆或美术馆？",
            9 : "您多久阅读一次关于艺术的书籍、杂志或画册？",
            10: "您多久观看一次艺术品图像（画册、互联网等）？",
            11: "您多久参加一次关于艺术或艺术史的活动（研讨会、项目、艺术节等）？"
        }
    },

    // Part B questionnaire and image data
    part_b_instructions : {
        'en': `<p>In the second part, you will be asked questions that pertain to techniques and motifs in art.</p>
            <p>Every question is accompanied by one image. Please have a look at that image and then select the answer which you believe to be correct. </p>
            <p>There will always be four different answers, of which only one is the correct one.</p>`,
        'nl': `<p>In het tweede deel zal je vragen krijgen over bepaalde technieken en motieven in kunst.</p>
            <p>Bij elke vraag hoort één afbeelding. Bekijk de afbeelding grondig en selecteer dan het antwoord waarvan jij denkt dat het correct is.</p>
            <p>Er zullen steeds vier verschillende antwoordmogelijkheden zijn, waarvan er één correct is.</p>`,
        'zh': `<p>在第二部分中，您将回答关于艺术技法和题材的问题。</p>
            <p>每个问题都附有一张图片。请查看该图片，然后选择您认为正确的答案。</p>
            <p>每个问题均有四个不同的选项，其中只有一个是正确答案。</p>`
    },

    part_b_stimuli : {
        1 :{
            "filename": "part_b_image_1.jpg",
            "choices" : ["丘比特", "塞巴斯蒂安", "大卫", "撒母耳"],
            "prompt": "在艺术史中，左侧描绘的男子应如何正确称呼？"
        },
        2: {
            "filename": "part_b_image_2.jpg",
            "choices" : ["维纳斯休憩", "维纳斯与丘比特", "维纳斯的诞生", "维纳斯之死"],
            "prompt": "在艺术史中，所描绘的场景应如何正确称呼？"
        },
        3 :{
             "filename": "part_b_image_3.jpg",
            "choices" : ["帕里斯", "塞巴斯蒂安", "阿喀琉斯", "罗宾汉"],
            "prompt": "在艺术史中，所描绘的人物应如何正确称呼？"
        },
        4 : {
            "filename": "part_b_image_4.jpg",
            "choices" : ["维纳斯的属性", "两个孩子的父亲", "海伦娜的忠实伴侣", "王室女儿贞洁的象征"],
            "prompt": "在这幅画中，天鹅可以被解读为……？"
        },
        5: {
            "filename": "part_b_image_5.jpg",
            "choices" : ["阿卡迪亚风景中的牧羊人", "圣塞巴斯蒂安的殉难", "施洗者约翰", "苦难的化身"],
            "prompt": "在艺术史中，所描绘的场景应如何正确称呼？"
        },
        6: {
            "filename": "part_b_image_6.jpg",
            "choices" : ["混合媒介", "多媒体", "跨媒介", "新媒介"],
            "prompt": "在艺术史中，所描绘艺术品的技法应如何正确称呼？"
        }
    },

    // Part C questionnaire and image data
    part_c_instructions : {
        'en' :
            `<p>In the final part, Please indicate for every picture if you are familiar with the depicted artwork. </p>
            <p>Then please indicate which artist made the artwork, and which style the artwork is mainly associated with. </p>
            <p>If you don't know the answer just leave the answer blank.</p>`,
        'nl':
            `<p>In dit laatste deel willen we je vragen om voor elk kunstwerk aan te geven of je er bekend mee bent.</p>
            <p>Vervolgens willen we je vragen om de maker van het kunstwerk, alsook de kunststijl waarmee het werk geassocieerd wordt aan te geven.</p>
            <p>Indien je een antwoord niet weet kan je de vraag gewoon open laten.</p>`,
        'zh':
            `<p>在最后一部分，请针对每张图片指出您是否熟悉所描绘的艺术品。</p>
            <p>然后请指出该艺术品的创作者是谁，以及该作品主要与哪种风格相关联。</p>
            <p>如果您不知道答案，请将该答案留空。</p>`
    },

    part_c_stimuli : {
        1: {"filename": "part_c_image_1.jpg" },
        2: {"filename": "part_c_image_2.jpg"},
        3: {"filename": "part_c_image_3.jpg" },
        4: {"filename": "part_c_image_4.jpg" },
        5: {"filename": "part_c_image_5.jpg"},
        6: {"filename": "part_c_image_6.jpg"},
        7: {"filename": "part_c_image_7.jpg"},
        8: {"filename": "part_c_image_8.jpg"},
        9: {"filename": "part_c_image_9.png"},
        10: {"filename": "part_c_image_10.png"},
    },

    part_c_prompts : {
        "familiarity" : { "en" : "Familiar?", "nl" : "Bekend?", "zh" : "是否熟悉？"},
        "artist"      : { "en" : "Artist?", "nl" : "Kunstenaar?", "zh" : "艺术家？"},
        "style"       : { "en" : "Style?",  "nl" : "Stijl?", "zh" : "风格？"}
    },

    getPartA : function(){
        // console.log(this.button_labels['complete'][this.language]);
        let survey = {
            type: jsPsychSurvey,
            min_width: "min(95vw, 1280px)",
            survey_json:
                {
                    showQuestionNumbers: false,
                    showPrevButton: false,
                    pageNextText : this.button_labels['continue'][this.language],
                    completeText: this.button_labels['complete'][this.language],
                    pages : [
                        {
                            type: "panel",
                            name: "part-a-instruction-panel",
                            elements: {
                                type: "html",
                                name: "part_a_instructions",
                                html: this.part_a_instructions[this.language]['instructions']
                            }
                        },
                        {
                            elements: {
                            type: "matrix",
                            name: "part-a-1",
                            title: this.part_a_instructions[this.language]['title_1'],
                            columns: [
                                { value: 1, text: this.likert_scale_1[this.language][0]},
                                { value: 2, text: " "},
                                { value: 3, text: " "},
                                { value: 4, text: " "},
                                { value: 5, text: " "},
                                { value: 6, text: " "},
                                { value: 7, text: this.likert_scale_1[this.language][6]},
                            ],
                            rows: [
                                { value: "AI_1_1", text: this.part_a_questions[this.language][1]},
                                { value: "AI_1_2", text: this.part_a_questions[this.language][2]},
                                { value: "AI_1_3", text: this.part_a_questions[this.language][3]},
                                { value: "AI_1_4", text: this.part_a_questions[this.language][4]},
                                { value: "AI_1_5", text: this.part_a_questions[this.language][5]},
                                { value: "AI_1_6", text: this.part_a_questions[this.language][6]},
                                { value: "AI_1_7", text: this.part_a_questions[this.language][7]},
                            ],
                            isAllRowRequired: this.required,
                            alternateRows: true
                        }
                    },
                    {
                        elements: {
                            type: "matrix",
                            name: "part-a-2",
                            title: this.part_a_instructions[this.language]['title_2'],
                            columns : [
                                {value: 1, text: this.likert_scale_2[this.language][0]},
                                {value: 2, text: this.likert_scale_2[this.language][1]},
                                {value: 3, text: this.likert_scale_2[this.language][2]},
                                {value: 4, text: this.likert_scale_2[this.language][3]},
                                {value: 5, text: this.likert_scale_2[this.language][4]},
                                {value: 6, text: this.likert_scale_2[this.language][5]},
                                {value: 7, text: this.likert_scale_2[this.language][6]},
                            ],
                            rows : [
                                {value: "AI_2_1", text : this.part_a_questions[this.language][8]},
                                {value: "AI_2_2", text : this.part_a_questions[this.language][9]},
                                {value: "AI_2_3", text : this.part_a_questions[this.language][10]},
                                {value: "AI_2_4", text : this.part_a_questions[this.language][11]},
                            ],
                            isAllRowRequired: this.required,
                            alternateRows: true
                        }
                    }
                ]
            },
            data : {
                test_part: 'vaiak-part-a'
            },
            // on_load : function(){
            //     let elements = document.getElementsByClassName('jspsych-content');
            //     elements[0].style.maxWidth = '95%';
            // }
        }

        return survey;
    },

    getPartB : function(){
        let image_ratings = [];
        for (let imageIndex = 1; imageIndex <= 6; ++imageIndex){
            image_ratings.push(
                {
                    elements : [
                        {
                            type: "image",
                            name: `image_q${imageIndex}`,
                            imageLink: `${this.image_folder + this.part_b_stimuli[imageIndex].filename}`,
                            imageHeight: "500px",
                            imageWidth: "100%"
                        },
                        {
                            type: 'radiogroup',
                            name: `B${imageIndex}`,
                            title: this.part_b_stimuli[imageIndex].prompt,
                            choices: this.part_b_stimuli[imageIndex].choices,
                            colCount: this.part_b_stimuli[imageIndex].choices.length,
                            isRequired: this.required
                        }]
                })
        }
        let survey = {
            type: jsPsychSurvey,
            survey_json : {
                showQuestionNumbers: false,
                showPrevButton: false,
                pageNextText : this.button_labels['continue'][this.language],
                completeText: this.button_labels['complete'][this.language],
                pages : [
                    // Instructions
                    {
                        type: "panel",
                        name: "part-b-instruction-panel",
                        elements: {
                            type: "html",
                            name: "part_b_instructions",
                            html: this.part_b_instructions[this.language]
                        }
                    },
                    ...image_ratings
                ]
            },
            data : {
                test_part: 'vaiak-part-b'
            }
        };

        return survey;
    },

    getPartC : function(){
        let images = [];
        for(let imageIndex = 1; imageIndex <= 10; ++imageIndex){
            images.push({
                type: "panel",
                name: `part_c_q${imageIndex}`,
                elements: [
                    {
                        type: "image",
                        name: `image_q${imageIndex}`,
                        imageLink: `${this.image_folder + this.part_c_stimuli[imageIndex]['filename']}`,
                        imageHeight: "500px",
                        imageWidth: "100%"
                    },
                    {
                        type: "radiogroup",
                        name: `C${imageIndex}_0`,
                        title: this.part_c_prompts.familiarity[this.language],
                        isRequired: this.required,
                        choices: [
                            {value: 0, text: this.button_labels.no[this.language]},
                            {value: 1, text: this.button_labels.yes[this.language]},
                        ],
                    },
                    {
                        type: "text",
                        name: `C${imageIndex}_1`,
                        title: this.part_c_prompts.artist[this.language]
                    },
                    {
                        type: "text",
                        name: `C${imageIndex}_2`,
                        title: this.part_c_prompts.style[this.language]
                    }
                ]
            })
        }

        let survey = {
            type: jsPsychSurvey,
            survey_json : {
                showQuestionNumbers: false,
                showPrevButton: false,
                pageNextText : this.button_labels['continue'][this.language],
                completeText: this.button_labels['complete'][this.language],
                pages: [
                    {
                        type: "panel",
                        name: "part-c-instruction-panel",
                        elements: {
                            type: "html",
                            name: "part_c_instructions",
                            html: this.part_c_instructions[this.language]
                        }
                    },
                    ...images
                ]
            },
            data : {
                test_part: 'vaiak-part-c',
            }
        }

        // Return trial list
        return survey;
    },

    getPreloadImages : function(){
        let images  = [];
        for(let stimulus_index in this.part_b_stimuli)
            images.push(this.image_folder + this.part_b_stimuli[stimulus_index]["filename"]);

        for(let stimulus_index in this.part_c_stimuli)
            images.push(this.image_folder + this.part_c_stimuli[stimulus_index]["filename"]);

        return images;
    },

    getTrials : function(){
        return [this.getPartA(), this.getPartB(), this.getPartC()];
    }
}