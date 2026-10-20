/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuestionItem, ProductItem, ColorGuideRule, SupportResource } from '../types/beauty';

export const SURVEY_QUESTIONS: QuestionItem[] = [
  // 第一模块：基础美妆与肤质评估
  {
    id: 1,
    moduleIndex: 1,
    moduleName: '第一模块 · 基础美妆与肤质评估',
    question: '请问您的基本肤质属于哪一种？',
    instruction: '选择您的日常肤质，AI 将匹配水润度与持妆基底配方。',
    field: 'skinType',
    options: [
      { key: 'dry', label: 'A. 干性肌肤，容易脱皮或卡粉' },
      { key: 'oily_combo', label: 'B. 油性或混合性肌肤，容易出油或脱妆' },
      { key: 'sensitive', label: 'C. 敏感性肌肤，容易泛红或刺痛' },
      { key: 'normal', label: 'D. 中性肌肤' },
    ],
  },
  {
    id: 2,
    moduleIndex: 1,
    moduleName: '第一模块 · 基础美妆与肤质评估',
    question: '您日常偏好的底妆妆感是？',
    instruction: '根据您的社交或日常遮盖诉求，调整粉体透光率。',
    field: 'makeupFinish',
    options: [
      { key: 'sheer_natural', label: 'A. 轻薄自然' },
      { key: 'full_coverage', label: 'B. 高度遮瑕' },
      { key: 'color_correct', label: 'C. 局部校色' },
      { key: 'other', label: 'D. 其他' },
    ],
  },

  // 第二模块：局部色彩与肌理特征
  {
    id: 3,
    moduleIndex: 2,
    moduleName: '第二模块 · 局部色彩与肌理特征',
    question: '该处肌理或色块大约形成了多久？',
    instruction: '肌理色彩会随时间发生色调转变，帮助推荐针对性的互补校色色相。',
    field: 'markDuration',
    options: [
      { key: 'within_24h', label: 'A. 24小时以内' },
      { key: '1_to_3_days', label: 'B. 1至3天' },
      { key: '4_to_7_days', label: 'C. 4至7天' },
      { key: 'over_week', label: 'D. 一周以上' },
      { key: 'unsure', label: 'E. 暂时不确定' },
    ],
  },
  {
    id: 4,
    moduleIndex: 2,
    moduleName: '第二模块 · 局部色彩与肌理特征',
    question: '该处目前的表皮状况如何？',
    instruction: '准确评估肌肤完整度，以确保化妆建议不刺激脆弱屏障。',
    warningNote: '如果存在开放性伤口、明显肿胀或疼痛，请优先考虑医疗评估，不要直接在患处使用化妆品。',
    field: 'skinCondition',
    options: [
      { key: 'color_only', label: 'A. 只有表面下的颜色变化，没有明显破损' },
      { key: 'mild_swelling', label: 'B. 伴有轻微肿胀或触痛' },
      { key: 'abrasion_broken', label: 'C. 存在擦伤或表皮破损' },
      { key: 'dry_flaky', label: 'D. 干燥、脱屑' },
      { key: 'other', label: 'E. 其他或不确定' },
    ],
  },

  // 第三模块：损伤形成原因
  {
    id: 5,
    moduleIndex: 3,
    moduleName: '第三模块 · 损伤形成原因',
    question: '请选择该处肌理或色块的形成原因，以便为您提供更适合的建议。',
    instruction: '帮助AI精准推荐抗摩擦、强持妆或修护型底妆。任何选项均保密且随时可跳过。',
    field: 'causeReason',
    options: [
      { key: 'sun_outdoor', label: 'A. 户外运动或日晒' },
      { key: 'aesthetic_treatment', label: 'B. 医美项目或皮肤科治疗后的恢复' },
      { key: 'daily_bump', label: 'C. 日常生活中不慎磕碰' },
      { key: 'household_collision', label: 'D. 家居活动、搬运物品时发生的碰撞或擦伤' },
      { key: 'interpersonal_contact', label: 'E. 与他人发生碰撞或肢体接触造成的意外', isSensitiveKey: true },
      { key: 'prefer_not_to_say', label: 'F. 原因暂不便透露', isSensitiveKey: true },
      { key: 'other_unsure', label: 'G. 其他或暂时不确定' },
    ],
  },
];

export const COLOR_GUIDE_RULES: ColorGuideRule[] = [
  {
    targetTone: '青紫 / 深蓝灰暗沉',
    complementaryColor: '暖调蜜桃色 / 橘粉色 (Peach/Salmon)',
    hexCode: '#4A4E69',
    complementaryHex: '#E29578',
    technique: '以精准点涂刷沾取少量橘粉校色膏，以轻按点压方式覆盖中心深色区，边缘轻柔晕染过渡，切忌来回拉扯。',
    doAndDont: '先校色后粉底。若皮肤仍有紧绷感，宜选用含角鲨烷的滋润型遮瑕膏，避免干燥卡纹。',
  },
  {
    targetTone: '鲜红 / 充血泛红',
    complementaryColor: '薄荷淡绿色 (Mint Green)',
    hexCode: '#B23A48',
    complementaryHex: '#84A98C',
    technique: '使用浅薄荷绿调色乳在泛红外围薄薄涂抹，利用光学互补中和毛细血管泛红，再覆以自然肤色粉底。',
    doAndDont: '只点涂在泛红区域，不要大面积涂满健康皮肤，避免整体脸色发灰。',
  },
  {
    targetTone: '黄褐 / 泛青黄色调',
    complementaryColor: '柔焦薰衣草紫 / 亮肤色 (Lavender/Bright Beige)',
    hexCode: '#C9A227',
    complementaryHex: '#DDA15E',
    technique: '微量紫色校色提亮暗沉发黄的吸收期边缘，再用与自身颈部肤色一致的高遮瑕粉底统一全脸。',
    doAndDont: '少量多次叠涂，最后用透明散粉以粉扑垂直轻压定妆，增强抗摩擦持久力。',
  },
];

export const MOCK_PRODUCTS: ProductItem[] = [
  {
    id: 'prod_1',
    brand: "L'ORÉAL PARIS",
    name: '欧莱雅恒放溢彩持色无瑕粉底液 (吸油棒PRO)',
    subName: 'Infallible 24H Fresh Wear Liquid Foundation',
    price: '¥ 159',
    shade: '120 香草白 / 130 象牙白',
    image: '/src/assets/images/loreal_infallible_concealer_1792479862812.jpg',
    features: ['高延展高遮瑕', '呼吸级透气配方', '防汗抗摩擦24H持久', '含透明质酸不卡粉'],
    recommendationReason: '超微研磨色粉，在不压迫皮脂屏障的前提下，提供长效遮盖力，减少补妆频率与摩擦。',
    suitableFor: '油性、混合肌或需要强遮瑕且持久不脱妆的妆效场景。',
  },
  {
    id: 'prod_2',
    brand: "L'ORÉAL PARIS",
    name: '欧莱雅真彩多效四色修容校色盘',
    subName: 'True Match Color-Correcting Cream Concealer Palette',
    price: '¥ 149',
    shade: '蜜桃橘 + 薄荷绿 + 薰衣草紫 + 柔焦米',
    image: '/src/assets/images/loreal_color_corrector_1792479864641.jpg',
    features: ['光学互补色矩阵', '膏体温润丝滑', '添加维生素E与积雪草精萃', '精准局部微调'],
    recommendationReason: '针对复杂杂色与不同时期色块变化，通过光学对冲原理达到自然隐形效果，无需厚涂。',
    suitableFor: '需要针对深蓝紫、红肿或泛黄暗沉进行分阶修饰的用户。',
  },
  {
    id: 'prod_3',
    brand: "L'ORÉAL PARIS",
    name: '欧莱雅恒放溢彩多效遮瑕棒 (黑胖子遮瑕)',
    subName: 'Infallible Full Wear Waterproof Concealer',
    price: '¥ 119',
    shade: '305 瓷白 / 312 自然柔肤',
    image: '/src/assets/images/loreal_beauty_tech_hero_1792479865624.jpg',
    features: ['大刷头精准点盖', '高遮盖力乳霜质地', '防水防汗配方', '哑光雾面柔焦'],
    recommendationReason: '浓缩遮盖微粒，单次点涂即刻淡化深色瑕疵，快干成膜，不易移位与沾染衣物。',
    suitableFor: '需要高倍遮盖局部凹凸色差且讲究迅速上妆的场景。',
  },
];

export const SUPPORT_RESOURCES: SupportResource[] = [
  {
    id: 'res_hotline_12338',
    category: 'legal_medical',
    title: '全国妇联女性维权与心理援助公益服务热线',
    organization: '中华全国妇女联合会 · 官方公益热线',
    phone: '12338',
    hours: '工作日 08:30 - 17:30 (部分省市支持24小时接听)',
    description: '国家官方针对女性设立的权益保护与法律、心理咨询服务通道。接线人员受过专门保密与危机干预培训，为你提供法律指引与安全庇护对接。',
    actionGuide: [
      '通话全程免费，支持匿名咨询，不强迫透露姓名、住址或关系人信息。',
      '可询问人身安全保护令申请流程、公安家庭暴力告诫书效力及当地妇女庇护所信息。',
      '如处于紧急危险，接线员可协助指导联络最近救助机构。',
    ],
    isVerified: true,
  },
  {
    id: 'res_legal_12348',
    category: 'legal_medical',
    title: '全国公共法律服务热线',
    organization: '中华人民共和国司法部 · 法律援助中心',
    phone: '12348',
    hours: '7×24小时 全天候免费服务',
    description: '由专业持证律师提供即时法律咨询。为你解答人身伤害赔偿、婚姻家庭纠纷、申请免除诉讼费用的法律援助流程。',
    actionGuide: [
      '拨通后根据语音提示按键选择对应省市的法律援助律师。',
      '详细了解《反家庭暴力法》中关于“人身安全保护令”（不以离婚诉讼为前提即可申请）的具体操作。',
      '如需固定证据，律师将指导如何合规保管病历、报警记录及相关佐证。',
    ],
    isVerified: true,
  },
  {
    id: 'res_psych_crisis',
    category: 'legal_medical',
    title: '全国希望24小时心理危机干预热线',
    organization: '全国心理援助与危机干预专业联盟',
    phone: '400-161-9995',
    hours: '7×24小时 全年无休',
    description: '专业心理咨询师在线倾听，提供非评判性的情感支持、焦虑抚平与危机舒缓，陪伴你度过最困难的时刻。',
    actionGuide: [
      '任何情绪困扰、无助感或恐惧情绪均可直接拨打，绝不评判你的选择。',
      '全程严格执行心理咨询保密伦理。',
    ],
    isVerified: true,
  },
  {
    id: 'res_safety_plan',
    category: 'safety',
    title: '个人安全应急避险指引（安全规划）',
    organization: '女性安全防护与健康指引准则',
    description: '如果身处紧张或不稳定的关系中，提前准备一份只有自己知道的应急避险方案至关重要。',
    actionGuide: [
      '重要证件备查：提前用手机隐蔽拍摄或复印身份证、社保卡、银行卡、房产/租房合同，保存在可信网盘或安全朋友处。',
      '应急备用资金：准备小额现金与基本常用药品，放置在外出随时可取的独立小包中。',
      '建立安全代号：与一位绝对信任的闺蜜或亲友约定紧急求助暗号（如发一条“帮我买杯奶茶”，对方即知报警或前往接应）。',
      '避免在密闭无出口空间（如浴室、厨房等有刀具或硬物的空间）发生直接肢体对峙；优先选择靠近大门的位置脱离。',
    ],
    isVerified: true,
  },
  {
    id: 'res_privacy_security',
    category: 'privacy',
    title: '设备与浏览痕迹保护建议',
    organization: '数字隐私与个人信息防护指南',
    description: '在家庭共用手机、电脑或账号可能被查验的情况下，掌握基础的数据保护技巧可保障自身安全。',
    actionGuide: [
      '无痕与隐私浏览：日常查阅敏感资讯时，建议使用手机浏览器的「无痕/隐身模式」，关闭标签页后自动清除历史记录与缓存。',
      '云相册防自动同步：检查手机相册是否开启了“全家共享”或自动云同步，避免敏感照片在共享平板或电脑上自动显示。',
      '小程序历史删除：在微信「发现-小程序」列表中，长按或左滑本项目卡片即可直接删除最近使用记录。',
      '本系统承诺：本AI美妆助手所有计算均在当前浏览器本地内存运行，绝不上传照片、不搜集设备指纹、不生成任何可被检索的诊断档案。',
    ],
    isVerified: true,
  },
];
