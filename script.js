// قاعدة بيانات الـ 50 سؤالاً اختيارياً (MCQ) حول الانقسام الاختزالي ومنهاج الأحياء
const examData = [
  {
    id: 1,
    question: "1. ما هو الهدف الأساسي من عملية الانقسام الاختزالي في الكائنات الحية؟",
    options: ["أ. زيادة حجم الخلية وتجديد الأنسجة", "ب. المحافظة على ثبات عدد الكروموسومات للأجيال وتكوين الأمشاج", "ج. مضاعفة الضعف الوراثي الخلوي", "د. إنتاج الطاقة الحيوية اللازمة للنمو"],
    correctIndex: 1
  },
  {
    id: 2,
    question: "2. كم عدد الانقسامات النووية المتعاقبة التي يتكون منها الانقسام الاختزالي؟",
    options: ["أ. انقسام نووي واحد", "ب. انقسامان نوويان متعاقبان", "ج. ثلاثة انقسامات نووية متتالية", "د. أربعة انقسامات متسلسلة"],
    correctIndex: 1
  },
  {
    id: 3,
    question: "3. ما هو عدد الخلايا الناتجة في نهاية الانقسام الاختزالي من خلية أصلية واحدة؟",
    options: ["أ. خليتان ثنائيتا المجموعة الكروموسومية (2n)", "ب. خليتان أحاديتا المجموعة الكروموسومية (1n)", "ج. أربع خلايا أحادية المجموعة الكروموسومية (1n)", "د. أربع خلايا ثنائية المجموعة الكروموسومية (2n)"],
    correctIndex: 2
  },
  {
    id: 4,
    question: "4. متى يحدث تضاعف جزيئات الـ DNA في الخلية قبل بدء الانقسام الاختزالي؟",
    options: ["أ. خلال الطور البيني الذي يسبق الانقسام الاختزالي الأول", "ب. بين الانقسام الاختزالي الأول والثاني مباشرة", "ج. أثناء الطور الاستوائي الأول", "د. في نهاية الطور النهائي الثاني"],
    correctIndex: 0
  },
  {
    id: 5,
    question: "5. من كم دور يتكون الطور التمهيدي الأول من الانقسام الاختزالي؟",
    options: ["أ. ثلاثة أدوار", "ب. أربعة أدوار", "ج. خمسة أدوار", "د. ستة أدوار"],
    correctIndex: 2
  },
  {
    id: 6,
    question: "6. ما هو أول أدوار الطور التمهيدي الأول للانقسام الاختزالي؟",
    options: ["أ. الدور الازدواجي", "ب. الدور القلادي (Leptotene)", "ج. الدور التغلظي", "د. الدور الحركي"],
    correctIndex: 1
  },
  {
    id: 7,
    question: "7. في أي دور من أدوار الطور التمهيدي الأول يحدث الاقتران أو التشابك (Synapsis)؟",
    options: ["أ. الدور القلادي", "ب. الدور الازدواجي (Zygotene)", "ج. الدور الانفراجي", "د. الدور الحركي"],
    correctIndex: 1
  },
  {
    id: 8,
    question: "8. ماذا يسمى زوج الكروموسومات المتماثلة المقترنة في الدور الازدواجي؟",
    options: ["أ. الثنائي (Bivalent)", "ب. الرباعي", "ج. الكروماتيد الشقيق", "د. التصالبة"],
    correctIndex: 0
  },
  {
    id: 9,
    question: "9. في أي دور تزداد الكروموسومات قسراً وتغلظاً وتظهر حزمة مؤلفة من 4 كروماتيدات (الرباعي)؟",
    options: ["أ. الدور القلادي", "ب. الدور الازدواجي", "ج. الدور التغلظي (Pachytene)", "د. الدور الانفراجي"],
    correctIndex: 2
  },
  {
    id: 10,
    question: "10. أين ومتى يحدث التعابر (Crossing Over) وتبادل القطع بين الكروماتيدات غير الشقيقة؟",
    options: ["أ. في الطور الاستوائي الأول", "ب. في الدور التغلظي من الطور التمهيدي الأول", "ج. في الطور الانفصالي الثاني", "د. في الدور القلادي"],
    correctIndex: 1
  },
  {
    id: 11,
    question: "11. ما هو عدد الكروماتيدات في الرباعي الواحد؟",
    options: ["أ. كروماتيدان", "ب. ثلاثة كروماتيدات", "ج. أربعة كروماتيدات", "د. ثمانية كروماتيدات"],
    correctIndex: 2
  },
  {
    id: 12,
    question: "12. في أي دور يبدأ الكروموسومان المتماثلان بالابتعاد عن بعضهما مع بقائهما مرتبطين عند نقاط التصالبات؟",
    options: ["أ. الدور الازدواجي", "ب. الدور التغلظي", "ج. الدور الانفراجي (Diplotene)", "د. الدور الحركي"],
    correctIndex: 2
  },
  {
    id: 13,
    question: "13. ما هي نقاط الارتباط بين الكروماتيدات غير الشقيقة والتي تتبادل عندها القطع الكروماتيدية؟",
    options: ["أ. التصالبات (Chiasmata)", "ب. الجزء المركزي", "ج. خيوط المغزل", "د. النوية"],
    correctIndex: 0
  },
  {
    id: 14,
    question: "14. ما هو آخر أدوار الطور التمهيدي الأول للانقسام الاختزالي؟",
    options: ["أ. الدور الازدواجي", "ب. الدور التغلظي", "ج. الدور الانفراجي", "د. الدور الحركي (Diakinesis)"],
    correctIndex: 3
  },
  {
    id: 15,
    question: "15. ماذا يحدث للنوية والغشاء النووي في الدور الحركي من الطور التمهيدي الأول؟",
    options: ["أ. تزدادان حجماً ووضوحاً", "ب. تنحلان وتختفيان تدريجياً", "ج. تتضاعفان مرتين", "د. تتبادلان المواقع مع الكروموسومات"],
    correctIndex: 1
  },
  {
    id: 16,
    question: "16. كيف تترتب الكروموسومات المتماثلة في الطور الاستوائي الأول؟",
    options: ["أ. بشكل مفرد على خط استواء المغزل", "ب. بشكل ثنائيات (أزواج متماثلة) على خط استواء المغزل", "ج. مجتمعة في قطبي الخلية", "د. عشوائية تماماً دون استواء"],
    correctIndex: 1
  },
  {
    id: 17,
    question: "17. ماذا ينفصل في الطور الانفصالي الأول من الانقسام الاختزالي؟",
    options: ["أ. تنفصل الكروماتيدات الشقيقة عن بعضها", "ب. ينفصل الكروموسومان المتماثلان عن بعضهما ويتجهان للقطبين مع بقاء الكروماتيدات مرتبطة", "ج. تنفصل السايتوبلازم مباشرة دون النواة", "د. تنفصل خيوط المغزل تماماً"],
    correctIndex: 1
  },
  {
    id: 18,
    question: "18. هل تبقي الكروماتيدات الشقيقة مرتبطة في الطور الانفصالي الأول؟",
    options: ["أ. نعم، تبقى مرتبطة عند الجزء المركزي", "ب. لا، تنفصل فوراً", "ج. تتحلل الكروماتيدات بالكامل", "د. تندمج معاً لتكون كروموسوماً جديداً"],
    correctIndex: 0
  },
  {
    id: 19,
    question: "19. ماذا يُميز الطور النهائي الأول للانقسام الاختزالي؟",
    options: ["أ. تكون خليتان جديدتان تحتوي كل منهما على نصف عدد الكروموسومات (1n)", "ب. رجوع العدد إلى الحالة الكاملة (2n)", "ج. تضاعف الكروموسومات مرة أخرى", "د. عدم تكون غشاء نووي نهائياً"],
    correctIndex: 0
  },
  {
    id: 20,
    question: "20. هل يحدث تضاعف للـ DNA بين الانقسام الاختزالي الأول والانقسام الاختزالي الثاني؟",
    options: ["أ. نعم، يحدث تضاعف كامل", "ب. لا يحدث تضاعف للـ DNA بينهما", "ج. يتضاعف الـ DNA بنسبة النصف", "د. يتضاعف فقط في النباتات دون الحيوانات"],
    correctIndex: 1
  },
  {
    id: 21,
    question: "21. بأي انقسام يشابه الانقسام الاختزالي الثاني في عمليته؟",
    options: ["أ. الانقسام المباشر", "ب. الانقسام الخيطي (Mitosis)", "ج. تكوين الابواغ البكتيرية", "د. الانقسام الثنائي المستعرض"],
    correctIndex: 1
  },
  {
    id: 22,
    question: "22. في أي طور من الانقسام الاختزالي الثاني تنفصل الكروماتيدات الشقيقة عن بعضها؟",
    options: ["أ. الطور التمهيدي الثاني", "ب. الطور الاستوائي الثاني", "ج. الطور الانفصالي الثاني", "د. الطور النهائي الأول"],
    correctIndex: 2
  },
  {
    id: 23,
    question: "23. ما هو عدد الكروموسومات في النواتين الناتجتين في نهاية الانقسام الاختزالي الأول لخلية بشرية (التي تحتوي خلاياها الأصلية على 46 كروموسوماً)؟",
    options: ["أ. 46 كروموسوماً في كل خلية", "ب. 23 كروموسوماً في كل خلية", "ج. 92 كروموسوماً", "د. 10 كروموسومات"],
    correctIndex: 1
  },
  {
    id: 24,
    question: "24. خلية تحتوي على 20 كروموسوماً في الحالة الثنائية (2n)، فكم يصبح عدد الكروموسومات في كل خلية ناتجة بعد اكتمال الانقسام الاختزالي؟",
    options: ["أ. 20 كروموسوماً", "ب. 40 كروموسوماً", "ج. 10 كروموسومات (1n)", "د. 5 كروموسومات"],
    correctIndex: 2
  },
  {
    id: 25,
    question: "25. ما هي الظاهرة التي تسهم في إحداث التنوع الوراثي للأفراد الناتجة من الجنس الواحد؟",
    options: ["أ. ثبات عدد الكروموسومات", "ب. عملية التعابر وتبادل القطع الوراثية", "ج. انقسام السايتوبلازم المتساوي", "د. تكوين الجدار الخلوي"],
    correctIndex: 1
  },
  {
    id: 26,
    question: "26. أي من الآتي يُعد صفة مميزة وحصرية للانقسام الاختزالي ولا يحدث في الانقسام الخيطي؟",
    options: ["أ. تضاعف الـ DNA", "ب. اقتران الكروموسومات المتماثلة (Synapsis)", "ج. تكون خيوط المغزل", "د. انقسام السايتوبلازم"],
    correctIndex: 1
  },
  {
    id: 27,
    question: "27. لماذا يسمى الدور التغلظي بهذا الاسم؟",
    options: ["أ. لأن الكروموسومات تزداد تكثفاً وتغلظاً وقصراً", "ب. لأن السايتوبلازم يصبح غليظاً وثقيلاً", "ج. بسبب تغلظ الغلاف النووي الخارجي", "د. لتوقف العمليات الحيوية مؤقتاً"],
    correctIndex: 0
  },
  {
    id: 28,
    question: "28. ماذا يطلق على المركب الناتج من اقتران كروموسومين متماثلين؟",
    options: ["أ. كروماتيد بنوي", "ب. ثنائي (Bivalent)", "ج. جسيم مركزي", "د. صفيحة خلوية"],
    correctIndex: 1
  },
  {
    id: 29,
    question: "29. في أي دور تبدأ التصالبات بالانزلاق نحو نهايات الكروموسومات (تغور التصالبات)?",
    options: ["أ. الدور القلادي", "ب. الدور الازدواجي", "ج. الدور الحركي", "د. الدور البيني"],
    correctIndex: 2
  },
  {
    id: 30,
    question: "30. ما هو مصير الخلايا الأربعة الناتجة في نهاية الانقسام الاختزالي الثاني؟",
    options: ["أ. جميعها تبقى خلايا جسمية اعتيادية", "ب. تصبح أمشاجاً (نطف أو بيوض في الحيوانات، أو حبوب لقاح وأبواغ في النباتات)", "ج. تتحلل فوراً ولا فائدة منها", "د. تندمج مع بعضها مرة أخرى"],
    correctIndex: 1
  },
  {
    id: 31,
    question: "31. ما هو عدد الكروماتيدات في خلية جسم الإنسان (46 كروموسوماً) خلال الطور التمهيدي الأول بعد تضاعف الـ DNA؟",
    options: ["أ. 46 كروماتيداً", "ب. 23 كروماتيداً", "ج. 92 كروماتيداً", "د. 184 كروماتيداً"],
    correctIndex: 2
  },
  {
    id: 32,
    question: "32. كم عدد الكروماتيدات الكلي في خلية تحتوي على 23 رباعياً؟",
    options: ["أ. 23 كروماتيداً", "ب. 46 كروماتيداً", "ج. 92 كروماتيداً", "د. 46 زوجاً"],
    correctIndex: 2
  },
  {
    id: 33,
    question: "33. ما الذي يربط الكروماتيدات الشقيقة للكروموسوم الواحد معاً حتى الطور الانفصالي الثاني؟",
    options: ["أ. خيوط المغزل المركزية", "ب. الجزء المركزي (Centromere)", "ج. النوية الأساسية", "د. الأنابيب الدقيقة للسايتوبلازم"],
    correctIndex: 1
  },
  {
    id: 34,
    question: "34. أي الأطوار التالية يعتبر أطول أدوار الطور التمهيدي الأول تعقيداً وأهمية للتعابر؟",
    options: ["أ. الدور القلادي", "ب. الدور الازدواجي", "ج. الدور التغلظي", "د. الدور الانفراجي"],
    correctIndex: 2
  },
  {
    id: 35,
    question: "35. لماذا لا يحدث تضاعف جديد للـ DNA قبل الانقسام الاختزالي الثاني؟",
    options: ["أ. لأن المادة الوراثية تضاعفت كفاية في الطور البيني السابق للانقسام الأول", "ب. لأن الخلية تفقد قدرتها على التضاعف نهائياً", "ج. بسبب نفاد البروتينات النووية", "د. لأن إنزيم الـ DNA polymerase غير موجود"],
    correctIndex: 0
  },
  {
    id: 36,
    question: "36. ما هي المحصلة النهائية لعدد الخلايا والكروموسومات بعد إتمام الانقسام الاختزالي لخلية واحدة؟",
    options: ["أ. خليتان تحتوي كل منهما على (2n)", "ب. أربع خلايا تحتوي كل منهما على نصف العدد الأصلي (1n)", "ج. خلية واحدة عملاقة تحتوي على (4n)", "د. ثلاث خلايا ميتة وخلية واحدة (2n)"],
    correctIndex: 1
  },
  {
    id: 37,
    question: "37. في أي طور ترتبط الكروموسومات بخيوط المغزل عن طريق أجزائها المركزية في الانقسام الاختزالي الثاني؟",
    options: ["أ. الطور الاستوائي الثاني", "ب. الطور الانفصالي الأول", "ج. الدور التغلظي", "د. الطور النهائي الأول"],
    correctIndex: 0
  },
  {
    id: 38,
    question: "38. ما هو الترتيب الصحيح لأدوار الطور التمهيدي الأول للانقسام الاختزالي؟",
    options: ["أ. تغلظي -> قلادي -> ازدواجي -> انفراجي -> حركي", "ب. قلادي -> ازدواجي -> تغلظي -> انفراجي -> حركي", "ج. ازدواجي -> قلادي -> حركي -> تغلظي -> انفراجي", "د. حركي -> انفراجي -> تغلظي -> ازدواجي -> قلادي"],
    correctIndex: 1
  },
  {
    id: 39,
    question: "39. ماذا يسمى ظهور الكروموسومات في بداية الدور القلادي (Leptotene)؟",
    options: ["أ. على شكل خيوط طويلة نحيفة ومتشابكة ذات ثخانات تشبه الخرز", "ب. على شكل أزواج مترابطة تماماً", "ج. على شكل أربع حزم متفرقة", "د. منكمشة تماماً في مركز النواة"],
    correctIndex: 0
  },
  {
    id: 40,
    question: "40. ما هو الطور الذي تتجمع فيه الكروموسومات في قطبي الخلية وتتكون النوية والغشاء النووي الجديدان في الانقسام الاختزالي الأول؟",
    options: ["أ. الطور النهائي الأول (Telophase I)", "ب. الطور الانفصالي الثاني", "ج. الطور الاستوائي الأول", "د. الدور الحركي"],
    correctIndex: 0
  },
  {
    id: 41,
    question: "41. أي من العمليات الآتية تحدث خلال الطور الاستوائي الثاني؟",
    options: ["أ. اقتران الكروموسومات المتماثلة", "ب. اصطفاف الكروموسومات منفردة عند خط استواء المغزل", "ج. حدوث التعابر الوراثي", "د. تضاعف جزيئات الـ DNA"],
    correctIndex: 1
  },
  {
    id: 42,
    question: "42. لماذا تختلف الخلايا الناتجة عن الانقسام الاختزالي عن الخلية الأم وراثياً؟",
    options: ["أ. بسبب حدوث الطفرات التلقائية المستمرة", "ب. نتيجة لحدوث عملية التعابر والتوزيع العشوائي للكروموسومات", "ج. بسبب فقدان نصف الجينات الأساسية", "د. بسبب اندماج النوى العشوائي"],
    correctIndex: 1
  },
  {
    id: 43,
    question: "43. ما هي الحالة الكروموسومية للأمشاج الناتجة من الانقسام الاختزالي؟",
    options: ["أ. ثنائية المجموعة الكروموسومية (2n)", "ب. أحادية المجموعة الكروموسومية (1n)", "ج. ثلاثية المجموعة الكروموسومية (3n)", "د. عديمة الكروموسومات"],
    correctIndex: 1
  },
  {
    id: 44,
    question: "44. في أي طور تختفي النوية والغشاء النووي وتتكون خيوط المغزل للمرة الأولى في الانقسام الاختزالي؟",
    options: ["أ. الطور التمهيدي الأول", "ب. الطور الانفصالي الثاني", "ج. الطور الاستوائي الثاني", "د. الطور النهائي الأول"],
    correctIndex: 0
  },
  {
    id: 45,
    question: "45. ماذا تسمى الخلية الأولية التي تبدأ بالانقسام الاختزالي في تكوين النطف أو البيوض؟",
    options: ["أ. خلية جسمية اعتيادية", "ب. خلية جرثومية أولية (أو أم الخلايا التناسلية 2n)", "ج. خلية عصبية متخصصة", "د. خلية سرطانية نشطة"],
    correctIndex: 1
  },
  {
    id: 46,
    question: "46. ما هو الدور الذي تتميز فيه الكروموسومات بكونها واضحة ومكونة من أربعة كروماتيدات مرئية بوضوح تام؟",
    options: ["أ. الدور القلادي", "ب. الدور التغلظي", "ج. الدور الانفراجي", "د. الطور الاستوائي"],
    correctIndex: 1
  },
  {
    id: 47,
    question: "47. أي من الآتي يمثل التتابع الزمني الصحيح للأطوار الرئيسية للانقسام الاختزالي الأول؟",
    options: ["أ. تمهيدي أول -> استوائي أول -> انفصالي أول -> نهائي أول", "ب. استوائي أول -> تمهيدي أول -> نهائي أول -> انفصالي أول", "ج. انفصالي أول -> نهائي أول -> تمهيدي أول -> استوائي أول", "د. نهائي أول -> استوائي أول -> تمهيدي أول -> انفصالي أول"],
    correctIndex: 0
  },
  {
    id: 48,
    question: "48. ما هي النتيجة المباشرة لانفصال الكروموسومات المتماثلة في الطور الانفصالي الأول؟",
    options: ["أ. وصول كروموسوم كامل (مؤلف من كروماتيدين) إلى كل قطب", "ب. انفصال الكروماتيدات الشقيقة عن بعضها تماماً", "ج. تضاعف الـ DNA فوراً", "د. انقسام النواة إلى أربعة أقسام"],
    correctIndex: 0
  },
  {
    id: 49,
    question: "49. لماذا يُعد حدوث الانقسام الاختزالي ضرورياً للكائنات التي تتكاثر جنسياً؟",
    options: ["أ. لمنع مضاعفة عدد الكروموسومات عبر الأجيال عند اتحاد الأمشاج", "ب. لزيادة عدد الخلايا الجسمية فقط", "ج. لتسريع عملية التنفس الخلوي", "د. لتثبيت الصفات الوراثية دون أي تغيير مطلقا"],
    correctIndex: 0
  },
  {
    id: 50,
    question: "50. إذا حدث خلل ولم تنفصل الكروموسومات المتماثلة في الطور الانفصالي الأول، فما المتوقع حدوثه في عدد كروموسومات الأمشاج الناتجة؟",
    options: ["أ. ستكون جميع الأمشاج طبيعية تماماً (1n)", "ب. سيحدث اختلال في عدد الكروموسومات في الأمشاج (زيادة أو نقصان)", "ج. ستتوقف الخلايا عن الانقسام نهائياً وتموت فوراً", "د. ستتحول الخلايا إلى خلايا سرطانية"],
    correctIndex: 1
  }
];

// المتغيرات العامة للنظام
let timerInterval = null;
let secondsLeft = 1800; // 30 دقيقة = 1800 ثانية
let studentData = { name: "", section: "" };

// عند تحميل الصفحة تحقق من وجود قفل اختبار قائم أو مكتمل
window.addEventListener("DOMContentLoaded", () => {
  const activeExam = localStorage.getItem("exam_in_progress");
  const completedExam = localStorage.getItem("exam_completed");

  if (completedExam) {
    showCompletedView(JSON.parse(completedExam));
  } else if (activeExam) {
    studentData = JSON.parse(activeExam);
    resumeQuiz();
  }
});

// بدء الامتحان وتسجيل بيانات الطالب
function handleStartQuiz(e) {
  e.preventDefault();
  const name = document.getElementById("student-name").value.trim();
  const section = document.getElementById("student-section").value.trim();

  if (!name || !section) return;

  studentData = { name, section, startTime: Date.now() };
  localStorage.setItem("exam_in_progress", JSON.stringify(studentData));

  resumeQuiz();
}

// استئناف أو بدء عرض الأسئلة
function resumeQuiz() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");

  document.getElementById("display-student-name").innerText = studentData.name;
  document.getElementById("display-student-section").innerText = studentData.section;

  renderQuestions();
  startTimer();
}

// تشغيل العداد التنازلي (30 دقيقة)
function startTimer() {
  const timerDisplay = document.getElementById("timer-display");
  const progressBar = document.getElementById("progress-bar");

  const elapsed = Math.floor((Date.now() - (studentData.startTime || Date.now())) / 1000);
  secondsLeft = Math.max(0, 1800 - elapsed);

  timerInterval = setInterval(() => {
    secondsLeft--;
    
    let mins = Math.floor(secondsLeft / 60);
    let secs = secondsLeft % 60;
    timerDisplay.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    let progressPercent = ((1800 - secondsLeft) / 1800) * 100;
    progressBar.style.width = `${progressPercent}%`;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("⏰ انتهى الوقت المخصص (30 دقيقة)! يتم الآن تسليم الإجابات تلقائياً.");
      autoSubmitExam();
    }
  }, 1000);
}

// توليد الـ 50 سؤالاً اختيارياً في الواجهة
function renderQuestions() {
  const wrapper = document.getElementById("questions-wrapper");
  wrapper.innerHTML = "";

  examData.forEach((qItem, index) => {
    const groupEl = document.createElement("div");
    groupEl.className = "question-block";

    let html = `<div class="question-header">${qItem.question}</div>`;
    html += `<div class="mcq-options">`;

    qItem.options.forEach((opt, optIdx) => {
      html += `
        <label class="mcq-label">
          <input type="radio" name="q_${qItem.id}" value="${optIdx}" required />
          <span>${opt}</span>
        </label>
      `;
    });

    html += `</div>`;
    groupEl.innerHTML = html;
    wrapper.appendChild(groupEl);
  });
}

// تسليم تلقائي عند انتهاء الوقت
function autoSubmitExam() {
  const form = document.getElementById("quiz-form");
  processExamSubmission(new FormData(form));
}

// تسليم يدوي عند ضغط زر الإنهاء
function handleFinalSubmit(e) {
  e.preventDefault();
  if (confirm("هل أنت متأكد من تسليم وتأكيد إجاباتك؟")) {
    clearInterval(timerInterval);
    const form = document.getElementById("quiz-form");
    processExamSubmission(new FormData(form));
  }
}

// معالجة درجات التصحيح الفوري وتوليد تقرير الأخطاء والصواب
function processExamSubmission(formData) {
  let totalScore = 0;
  let reviewDetails = [];

  examData.forEach((qItem) => {
    const userAnsStr = formData.get(`q_${qItem.id}`);
    const userAnsIdx = userAnsStr !== null ? parseInt(userAnsStr) : -1;
    let isCorrect = (userAnsIdx === qItem.correctIndex);
    let scoreEarned = isCorrect ? 2 : 0; // كل سؤال درجتان (50 * 2 = 100)

    totalScore += scoreEarned;

    reviewDetails.push({
      questionText: qItem.question,
      userAnswer: userAnsIdx !== -1 ? qItem.options[userAnsIdx] : "لم تقم باختيار إجابة",
      correctAnswer: qItem.options[qItem.correctIndex],
      isCorrect: isCorrect,
      scoreEarned: scoreEarned
    });
  });

  const finalResult = {
    student: studentData,
    score: totalScore,
    details: reviewDetails,
    submittedAt: new Date().toLocaleString("ar-IQ")
  };

  localStorage.removeItem("exam_in_progress");
  localStorage.setItem("exam_completed", JSON.stringify(finalResult));

  showCompletedView(finalResult);
}

// عرض شاشة النتيجة وتفاصيل الأخطاء والإجابات النموذجية
function showCompletedView(result) {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  document.getElementById("score-badge").innerText = `${result.score} / 100`;

  let msg = "";
  if (result.score >= 90) msg = "🎖️ ممتاز جداً! أداء متميز وفهم دقيق جداً للانقسام الاختزالي.";
  else if (result.score >= 75) msg = "👏 جيد جداً! إجاباتك صحيحة بغالبيتها مع بعض التفاصيل التي تحتاج مراجعة.";
  else if (result.score >= 50) msg = "👍 متوسط. يُنصح بمراجعة أدوار التمهيدي الأول والمسائل.";
  else msg = "⚠️ ضعيف. يتوجب عليك قراءة فصل انقسام الخلية والانقسام الاختزالي بعناية وإعادة المحاولة.";

  document.getElementById("result-message").innerText = msg;

  document.getElementById("student-report-details").innerHTML = `
    <p><strong>اسم الطالب:</strong> ${result.student.name}</p>
    <p><strong>الصف والشعبة:</strong> ${result.student.section}</p>
    <p><strong>تاريخ ووقت التسليم:</strong> ${result.submittedAt}</p>
  `;

  const reviewWrapper = document.getElementById("review-wrapper");
  reviewWrapper.innerHTML = "";

  result.details.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = `review-item ${item.isCorrect ? "correct" : "wrong"}`;

    div.innerHTML = `
      <div class="question-header">${index + 1}. ${item.questionText}</div>
      <div class="user-answer"><strong>اختيارك:</strong> ${item.userAnswer}</div>
      <div class="correct-answer"><strong>الإجابة النموذجية الصحيحة:</strong> ${item.correctAnswer}</div>
    `;

    reviewWrapper.appendChild(div);
  });
}

// إعادة الاختبار ومسح الذاكرة المؤقتة
function resetExamApp() {
  if (confirm("هل تريد مسح النتيجة الحالية وبدء محاولة اختبار جديدة؟")) {
    localStorage.removeItem("exam_completed");
    localStorage.removeItem("exam_in_progress");
    location.reload();
  }
}