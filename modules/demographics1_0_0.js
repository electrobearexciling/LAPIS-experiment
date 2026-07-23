const DEMOGRAPHICS = {
    required: true,
    language: 'zh',
    components: ["introduction", "age", "gender", "province", "native_language", "education", "current_occupation", "visual_impairments", "art_history_education", "art_restoration"],

    getSurvey: function(){
        let elements = [];
        for (let i = 0; i < this.components.length; ++i){
            switch(this.components[i]){
                case "introduction":
                    elements.push(this.Introduction());
                    break;
                case "age":
                    elements.push(this.Age());
                    break;
                case "gender":
                    elements.push(this.Gender());
                    break;
                case "province":
                    elements.push(this.Province());
                    break;
                case "native_language":
                    elements.push(this.NativeLanguage());
                    break;
                case "education":
                    elements.push(this.Education());
                    break;
                case "current_occupation":
                    elements.push(this.CurrentOccupation());
                    break;
                case "visual_impairments":
                    elements.push(this.VisualImpairments());
                    break;
                case "art_history_education":
                    elements.push(...this.ArtHistoryEducation());
                    break;
                case "art_restoration":
                    elements.push(...this.ArtConservation());
                    break;
                default:
                    console.warn("Unknown component:", this.components[i]);
            }
        }

        return {
            type : jsPsychSurvey,
            survey_json : {
                showQuestionNumbers : false,
                elements: elements,
            },
            data : {
                test_part : 'demographics'
            }
        }
    },

    /**
     * Introduction text
     */
    Introduction: function(){
        return {
            type: 'html',
            name: 'intro',
            html: "请回答以下问题："
        }
    },

    /**
     * Age component
     */
    Age : function(){
        return {
            type: 'text',
            title: "您的年龄是多少？",
            name: 'age',
            inputType : 'number',
            min: 17,
            max: 99,
            isRequired: this.required
        }
    },

    /**
     * Gender component
     */
    Gender: function(){
        return {
            type: 'radiogroup',
            title: "您的性别是？",
            name: 'gender',
            choices: [
                {value: 'female', text: "女"},
                {value: 'male', text: "男"},
                {value: 'non-binary', text: "非二元性别"},
                {value: 'no-disclose', text: "不愿透露"}
            ],
            isRequired: this.required,
        };
    },

    /**
     * Province component - 省份下拉选择
     */
    Province: function(){
        return {
            type: 'dropdown',
            title: "您到目前为止生活最久的省份是什么？",
            emptyText: "请选择...",
            name: 'province',
            choices: [
                {value: "bj", text: "北京市"},
                {value: "tj", text: "天津市"},
                {value: "sh", text: "上海市"},
                {value: "cq", text: "重庆市"},
                {value: "he", text: "河北省"},
                {value: "sx", text: "山西省"},
                {value: "ln", text: "辽宁省"},
                {value: "jl", text: "吉林省"},
                {value: "hlj", text: "黑龙江省"},
                {value: "js", text: "江苏省"},
                {value: "zj", text: "浙江省"},
                {value: "ah", text: "安徽省"},
                {value: "fj", text: "福建省"},
                {value: "jx", text: "江西省"},
                {value: "sd", text: "山东省"},
                {value: "ha", text: "河南省"},
                {value: "hb", text: "湖北省"},
                {value: "hn", text: "湖南省"},
                {value: "gd", text: "广东省"},
                {value: "gx", text: "广西壮族自治区"},
                {value: "hi", text: "海南省"},
                {value: "sc", text: "四川省"},
                {value: "gz", text: "贵州省"},
                {value: "yn", text: "云南省"},
                {value: "xz", text: "西藏自治区"},
                {value: "sn", text: "陕西省"},
                {value: "gs", text: "甘肃省"},
                {value: "qh", text: "青海省"},
                {value: "nx", text: "宁夏回族自治区"},
                {value: "xj", text: "新疆维吾尔自治区"},
                {value: "tw", text: "台湾省"},
                {value: "hk", text: "香港特别行政区"},
                {value: "mo", text: "澳门特别行政区"}
            ],
            allowClear: false,
            isRequired: this.required,
        };
    },

    /**
     * Native Language component - 中文放在最顶端
     */
    NativeLanguage : function(){
        return {
            type: 'dropdown',
            title: "您的母语是什么？",
            emptyText: "请选择...",
            showNoneItem: true,
            showOtherItem: true,
            name: 'native_language',
            choices: [
                // 中文放在第一个
                {"value": "zh", "text": "中文"},
                {"value": "ab", "text": "阿布哈兹语"}, {"value": "aa", "text": "阿法尔语"}, 
                {"value": "af", "text": "南非荷兰语"}, {"value": "ak", "text": "阿肯语"}, 
                {"value": "sq", "text": "阿尔巴尼亚语"}, {"value": "am", "text": "阿姆哈拉语"}, 
                {"value": "ar", "text": "阿拉伯语"}, {"value": "an", "text": "阿拉贡语"}, 
                {"value": "hy", "text": "亚美尼亚语"}, {"value": "as", "text": "阿萨姆语"}, 
                {"value": "av", "text": "阿瓦尔语"}, {"value": "ae", "text": "阿维斯陀语"}, 
                {"value": "ay", "text": "艾马拉语"}, {"value": "az", "text": "阿塞拜疆语"}, 
                {"value": "bm", "text": "班巴拉语"}, {"value": "ba", "text": "巴什基尔语"}, 
                {"value": "eu", "text": "巴斯克语"}, {"value": "be", "text": "白俄罗斯语"}, 
                {"value": "bn", "text": "孟加拉语"}, {"value": "bi", "text": "比斯拉马语"}, 
                {"value": "bs", "text": "波斯尼亚语"}, {"value": "br", "text": "布列塔尼语"}, 
                {"value": "bg", "text": "保加利亚语"}, {"value": "my", "text": "缅甸语"}, 
                {"value": "ca", "text": "加泰罗尼亚语"}, {"value": "km", "text": "高棉语"}, 
                {"value": "ch", "text": "查莫罗语"}, {"value": "ce", "text": "车臣语"}, 
                {"value": "ny", "text": "齐切瓦语"}, {"value": "cu", "text": "教会斯拉夫语"}, 
                {"value": "cv", "text": "楚瓦什语"}, {"value": "kw", "text": "康沃尔语"}, 
                {"value": "co", "text": "科西嘉语"}, {"value": "cr", "text": "克里语"}, 
                {"value": "hr", "text": "克罗地亚语"}, {"value": "cs", "text": "捷克语"}, 
                {"value": "da", "text": "丹麦语"}, {"value": "dv", "text": "迪维希语"}, 
                {"value": "nl", "text": "荷兰语"}, {"value": "dz", "text": "宗卡语"}, 
                {"value": "en", "text": "英语"}, {"value": "eo", "text": "世界语"}, 
                {"value": "et", "text": "爱沙尼亚语"}, {"value": "ee", "text": "埃维语"}, 
                {"value": "fo", "text": "法罗语"}, {"value": "fj", "text": "斐济语"}, 
                {"value": "fi", "text": "芬兰语"}, {"value": "fr", "text": "法语"}, 
                {"value": "ff", "text": "富拉语"}, {"value": "gd", "text": "盖尔语"}, 
                {"value": "gl", "text": "加利西亚语"}, {"value": "lg", "text": "干达语"}, 
                {"value": "ka", "text": "格鲁吉亚语"}, {"value": "de", "text": "德语"}, 
                {"value": "el", "text": "希腊语"}, {"value": "gn", "text": "瓜拉尼语"}, 
                {"value": "gu", "text": "古吉拉特语"}, {"value": "ht", "text": "海地克里奥尔语"}, 
                {"value": "ha", "text": "豪萨语"}, {"value": "he", "text": "希伯来语"}, 
                {"value": "hz", "text": "赫雷罗语"}, {"value": "hi", "text": "印地语"}, 
                {"value": "ho", "text": "希里莫图语"}, {"value": "hu", "text": "匈牙利语"}, 
                {"value": "is", "text": "冰岛语"}, {"value": "io", "text": "伊多语"}, 
                {"value": "ig", "text": "伊博语"}, {"value": "id", "text": "印度尼西亚语"}, 
                {"value": "ia", "text": "国际语"}, {"value": "ie", "text": "西方国际语"}, 
                {"value": "iu", "text": "因纽特语"}, {"value": "ik", "text": "伊努皮克语"}, 
                {"value": "ga", "text": "爱尔兰语"}, {"value": "it", "text": "意大利语"}, 
                {"value": "ja", "text": "日语"}, {"value": "jv", "text": "爪哇语"}, 
                {"value": "kl", "text": "格陵兰语"}, {"value": "kn", "text": "卡纳达语"}, 
                {"value": "kr", "text": "卡努里语"}, {"value": "ks", "text": "克什米尔语"}, 
                {"value": "kk", "text": "哈萨克语"}, {"value": "ki", "text": "基库尤语"}, 
                {"value": "rw", "text": "卢旺达语"}, {"value": "ky", "text": "吉尔吉斯语"}, 
                {"value": "kv", "text": "科米语"}, {"value": "kg", "text": "刚果语"}, 
                {"value": "ko", "text": "韩语"}, {"value": "kj", "text": "宽亚玛语"}, 
                {"value": "ku", "text": "库尔德语"}, {"value": "lo", "text": "老挝语"}, 
                {"value": "la", "text": "拉丁语"}, {"value": "lv", "text": "拉脱维亚语"}, 
                {"value": "li", "text": "林堡语"}, {"value": "ln", "text": "林加拉语"}, 
                {"value": "lt", "text": "立陶宛语"}, {"value": "lu", "text": "鲁巴-加丹加语"}, 
                {"value": "lb", "text": "卢森堡语"}, {"value": "mk", "text": "马其顿语"}, 
                {"value": "mg", "text": "马拉加斯语"}, {"value": "ms", "text": "马来语"}, 
                {"value": "ml", "text": "马拉雅拉姆语"}, {"value": "mt", "text": "马耳他语"}, 
                {"value": "gv", "text": "曼岛语"}, {"value": "mi", "text": "毛利语"}, 
                {"value": "mr", "text": "马拉地语"}, {"value": "mh", "text": "马绍尔语"}, 
                {"value": "mn", "text": "蒙古语"}, {"value": "na", "text": "瑙鲁语"}, 
                {"value": "nv", "text": "纳瓦霍语"}, {"value": "ng", "text": "恩东加语"}, 
                {"value": "ne", "text": "尼泊尔语"}, {"value": "nd", "text": "北恩德贝莱语"}, 
                {"value": "se", "text": "北萨米语"}, {"value": "no", "text": "挪威语"}, 
                {"value": "nb", "text": "挪威博克马尔语"}, {"value": "nn", "text": "挪威尼诺斯克语"}, 
                {"value": "oc", "text": "奥克语"}, {"value": "oj", "text": "奥吉布瓦语"}, 
                {"value": "or", "text": "奥里亚语"}, {"value": "om", "text": "奥罗莫语"}, 
                {"value": "os", "text": "奥塞梯语"}, {"value": "pi", "text": "巴利语"}, 
                {"value": "ps", "text": "普什图语"}, {"value": "fa", "text": "波斯语"}, 
                {"value": "pl", "text": "波兰语"}, {"value": "pt", "text": "葡萄牙语"}, 
                {"value": "pa", "text": "旁遮普语"}, {"value": "qu", "text": "克丘亚语"}, 
                {"value": "ro", "text": "罗马尼亚语"}, {"value": "rm", "text": "罗曼什语"}, 
                {"value": "rn", "text": "隆迪语"}, {"value": "ru", "text": "俄语"}, 
                {"value": "sm", "text": "萨摩亚语"}, {"value": "sg", "text": "桑戈语"}, 
                {"value": "sa", "text": "梵语"}, {"value": "sc", "text": "撒丁语"}, 
                {"value": "sr", "text": "塞尔维亚语"}, {"value": "sn", "text": "绍纳语"}, 
                {"value": "ii", "text": "彝语"}, {"value": "sd", "text": "信德语"}, 
                {"value": "si", "text": "僧伽罗语"}, {"value": "sk", "text": "斯洛伐克语"}, 
                {"value": "sl", "text": "斯洛文尼亚语"}, {"value": "so", "text": "索马里语"}, 
                {"value": "nr", "text": "南恩德贝莱语"}, {"value": "st", "text": "南索托语"}, 
                {"value": "es", "text": "西班牙语"}, {"value": "su", "text": "巽他语"}, 
                {"value": "sw", "text": "斯瓦希里语"}, {"value": "ss", "text": "斯威士语"}, 
                {"value": "sv", "text": "瑞典语"}, {"value": "tl", "text": "他加禄语"}, 
                {"value": "ty", "text": "塔希提语"}, {"value": "tg", "text": "塔吉克语"}, 
                {"value": "ta", "text": "泰米尔语"}, {"value": "tt", "text": "塔塔尔语"}, 
                {"value": "te", "text": "泰卢固语"}, {"value": "th", "text": "泰语"}, 
                {"value": "bo", "text": "藏语"}, {"value": "ti", "text": "提格里尼亚语"}, 
                {"value": "to", "text": "汤加语"}, {"value": "ts", "text": "聪加语"}, 
                {"value": "tn", "text": "茨瓦纳语"}, {"value": "tr", "text": "土耳其语"}, 
                {"value": "tk", "text": "土库曼语"}, {"value": "tw", "text": "契维语"}, 
                {"value": "ug", "text": "维吾尔语"}, {"value": "uk", "text": "乌克兰语"}, 
                {"value": "ur", "text": "乌尔都语"}, {"value": "uz", "text": "乌兹别克语"}, 
                {"value": "ve", "text": "文达语"}, {"value": "vi", "text": "越南语"}, 
                {"value": "vo", "text": "沃拉普克语"}, {"value": "wa", "text": "瓦隆语"}, 
                {"value": "cy", "text": "威尔士语"}, {"value": "fy", "text": "西弗里斯兰语"}, 
                {"value": "wo", "text": "沃洛夫语"}, {"value": "xh", "text": "科萨语"}, 
                {"value": "yi", "text": "意第绪语"}, {"value": "yo", "text": "约鲁巴语"}, 
                {"value": "za", "text": "壮语"}, {"value": "zu", "text": "祖鲁语"}
            ],
            allowClear: false,
            isRequired: this.required,
        };
    },

    /**
     * Education component
     */
    Education : function(){
        return {
            type: 'radiogroup',
            title: "您的最高学历或文凭是什么？",
            name: 'education',
            choices: [
                { value: "education_1", text: "小学及以下"},
                { value: "education_2", text: "初中"},
                { value: "education_3", text: "普通高中 / 中专 / 职高 / 技校（中等职业教育）"},
                { value: "education_4", text: "大专（高等职业教育 / 专科）"},
                { value: "education_5", text: "大学本科"},
                { value: "education_6", text: "研究生及以上"},
            ],
            isRequired: this.required,
        };
    },

    /**
     * Current Occupation component
     */
    CurrentOccupation: function(){
        return {
            type: 'text',
            title: "您当前的职业或所学专业是什么？",
            name: 'current_occupation',
            isRequired: this.required
        }
    },

    /**
     * Visual Impairments component
     */
    VisualImpairments: function(){
        return {
            type: 'checkbox',
            title: "您是否有任何视觉障碍？",
            name: 'visual_impairments',
            choices: [
                {value: 'colorblind', text: "有，色盲"},
                {value: 'corrected', text: "有，矫正视力（如戴眼镜）"},
                {value: 'no', text: "无"}
            ],
            isRequired: this.required,
        };
    },

    /**
     * Art History Education component
     */
    ArtHistoryEducation: function() {
        return [
            {
                "type": "radiogroup",
                "name": "art_history_education",
                "title": "您是否接受过艺术或艺术史教育？",
                "choices": [
                    {value: "art_history_education_1", text: "是，我在大学学习过艺术史"},
                    {value: "art_history_education_2", text: "是，我接受过高等艺术教育"},
                    {value: "art_history_education_3", text: "是，我参加过艺术教育课程（业余时间或工作之余）"},
                    {value: "art_history_education_4", text: "否"},
                ],
                isRequired: this.required
            },
            {
                "type": "text",
                "name": "art_history_education_1_years",
                "inputType": 'number',
                "title": "您学习艺术史多少年？",
                "visibleIf": "{art_history_education} = 'art_history_education_1'",
                isRequired: this.required
            },
            {
                "type": "text",
                "name": "art_history_education_2_years",
                "title": "您接受高等艺术教育多少年？",
                "inputType": 'number',
                "visibleIf": "{art_history_education} = 'art_history_education_2'",
                isRequired: this.required
            },
            {
                "type": "radiogroup",
                "name": "art_history_education_2_history_course",
                "title": "您是否参加过艺术史课程？",
                "choices": [
                    { value: "yes", text: "是"},
                    { value: "no", text: "否"}
                ],
                "visibleIf": "{art_history_education} = 'art_history_education_2'",
                isRequired: this.required
            },
            {
                "type": "text",
                "name": "art_history_education_3_years",
                "title": "您参加艺术教育课程多少年？",
                "inputType": 'number',
                "visibleIf": "{art_history_education} = 'art_history_education_3'",
                isRequired: this.required
            }
        ];
    },

    /**
     * Art Conservation/Restoration component
     */
    ArtConservation: function(){
        return [
            {
                "type": "radiogroup",
                "name": "art_conservation",
                "title": "您是否具有艺术修复/保护方面的背景？",
                "choices": [
                    {value: "art_conservation_education_1", text: "是，我在大学学习过艺术修复/保护"},
                    {value: "art_conservation_education_2", text: "是，我接受过高等艺术教育"},
                    {value: "art_conservation_education_3", text: "是，我参加过艺术修复/保护教育课程（业余时间或工作之余）"},
                    {value: "art_conservation_education_4", text: "否"},
                ],
                isRequired: this.required
            },
            {
                "type": "text",
                "name": "art_conservation_education_1_years",
                "inputType": 'number',
                "title": "您学习艺术修复/保护多少年？",
                "visibleIf": "{art_conservation} = 'art_conservation_education_1'",
                isRequired: this.required
            },
            {
                "type": "text",
                "name": "art_conservation_education_2_years",
                "title": "您接受高等艺术教育多少年？",
                "inputType": 'number',
                "visibleIf": "{art_conservation} = 'art_conservation_education_2'",
                isRequired: this.required
            },
            {
                "type": "radiogroup",
                "name": "art_conservation_education_2_history_course",
                "title": "您是否参加过艺术修复/保护课程？",
                "choices": [
                    { value: "yes", text: "是"},
                    { value: "no", text: "否"}
                ],
                "visibleIf": "{art_conservation} = 'art_conservation_education_2'",
                isRequired: this.required
            },
            {
                "type": "text",
                "name": "art_conservation_education_3_years",
                "title": "您参加艺术修复/保护教育课程多少年？",
                "inputType": 'number',
                "visibleIf": "{art_conservation} = 'art_conservation_education_3'",
                isRequired: this.required
            }
        ];
    }
}