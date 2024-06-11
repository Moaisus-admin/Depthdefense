import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        english: "English",
        arabic: "Arabic",
        worldClassCyberSecurity: "World Class Cyber Security",
        cyberSecurityDescription:
          "Cyber security is the protection from the theft to protect of our computer systems and networks or being damaged of our hardware and software.",
        powerfulProtectionEasyRecovery: "Powerful Protection Easy Recovery",
        Home: "Home",
        ///////////// CyberSecurity Assesment Page/////
        "Cybersecurity Assessment": "Cybersecurity Assessment",
        "Cybersecurity Assessment Description 1":
          "A cybersecurity assessment is a process of evaluating security controls to examine the overall organization’s security infrastructure. This includes validating the organization’s preparedness against the known and unknown vulnerabilities, attack vectors in the digital cybersphere, and business process in order to engage the remediating steps to lower the risk and attack surface. Overall, security assessments help track the systems, applications, and network flaws and help implement appropriate defensive controls and keep the policies up to date.",
        "Cybersecurity Assessment Description 2":
          "The cybersecurity assessment scope varies and depends upon the business nature, objective, organization size, and the compliance business adhere to. With a suitable assessment, an organization can identify its cyber weaknesses and strengths and develop an appropriate roadmap to prioritize and resolve them.",
        "Cybersecurity Assessment Description 3":
          "A strategized cybersecurity assessment helps the organization in being proactive. It is important for organizations to foster the business with proper security measures and a better understanding of risk and threats by evaluating the following components:",
        "Current assets":
          "Current assets (includes application, network, systems, data, etc.)",
        "Business compliance with the relevant security ordinance.":
          " Business compliance with the relevant security ordinance",
        " Vulnerabilities present in the assets.":
          " Vulnerabilities present in the assets",
        " Identify the attack surface.": " Identify the attack surface",
        "Potential threats and risks on assets.":
          "Potential threats and risks on assets",
        "Assets’ cyber resiliency.": "Assets’ cyber resiliency",
        " Assets prevention cost with proportion to assets cost.":
          " Assets prevention cost with proportion to assets cost",
        paragraph3:
          "Cybersecurity assessment can be done internally with a dedicated cybersecurity team or third-party cybersecurity services provider. As a trusted cybersecurity partner, Depth Defense provides various types of cybersecurity assessments. As there is no one size fits all, we assist businesses in securing their environment according to their niche, requirements, and demands with a customized assessment approach.",
        " What are the different types of cybersecurity assessments?":
          " What are the different types of cybersecurity assessments?",
        Vulnerability: "Vulnerability Assessment",
        Penetration: "Penetration Testing",
        Social: "Social Engineering Assessment",
        Compromise: "Compromise Assessment",
        Red: "Red Teaming or Red-Team Assessment",
        Cloud: "Cloud Security Assessment",
        "Third-party": "Third-party Risk Assessment",
        Risk: "Risk Assessment",
        Security: "Security Audit (NCA, CITC, SAMA, CCC)",
        // Add more English translations here
      },
    },
    ar: {
      translation: {
        english: "إنجليزي",
        arabic: "عربي",
        worldClassCyberSecurity: "الأمن السيبراني على مستوى عالمي",
        cyberSecurityDescription:
          "الأمن السيبراني هو الحماية من السرقة لحماية أنظمة الكمبيوتر والشبكات لدينا أو التلف الذي قد يلحق بأجهزتنا وبرامجنا.",
        powerfulProtectionEasyRecovery: "حماية قوية سهلة الاستعادة",
        Home: "الصفحة الرئيسية",
        ////////Cybersecurity Assesment Page////
        "Cybersecurity Assessment": "تقييم الأمن السيبراني",
        "Cybersecurity Assessment Description 1":
          "التقييم الأمني السيبراني هو عملية تقييم ضوابط الأمان لفحص بنية الأمان العامة للمنظمة. يتضمن هذا التحقق من جاهزية المنظمة ضد الثغرات الأمنية المعروفة والمجهولة، ونقاط الهجوم في الفضاء الرقمي، وعملية الأعمال للمشاركة في الخطوات التصحيحية لخفض المخاطر وسطح الهجوم. بشكل عام، تساعد التقييمات الأمنية في تتبع الأنظمة والتطبيقات والعيوب الشبكية وتساعد في تنفيذ ضوابط دفاعية مناسبة والحفاظ على السياسات محدثة.",
        "Cybersecurity Assessment Description 2":
          "نطاق التقييم الأمني السيبراني يختلف ويعتمد على طبيعة الأعمال والهدف وحجم المنظمة والامتثال للأعمال. من خلال التقييم المناسب، يمكن للمنظمة تحديد نقاط الضعف والقوة السيبرانية وتطوير خارطة طريق مناسبة لتحديد الأولويات وحلها.",
        "Cybersecurity Assessment Description 3":
          "يساعد التقييم الأمني السيبراني المستراتيجي المنظمة في أن تكون استباقية. من المهم بالنسبة للمنظمات تعزيز الأعمال بتدابير أمان مناسبة وفهم أفضل للمخاطر والتهديدات من خلال تقييم المكونات التالية:",
        "Current assets":
          "الأصول الحالية (تشمل التطبيقات والشبكات والأنظمة والبيانات، إلخ)",
        "Business compliance with the relevant security ordinance.":
          "امتثال الأعمال لقانون الأمن ذي الصلة",
        " Vulnerabilities present in the assets.":
          "نقاط الضعف الموجودة في الأصول",
        " Identify the attack surface.": "حدد سطح الهجوم",
        "Potential threats and risks on assets.":
          "التهديدات والمخاطر المحتملة على الأصول",
        "Assets’ cyber resiliency.": "المرونة السيبرانية للأصول",
        " Assets prevention cost with proportion to assets cost.":
          "تكلفة منع الأصول بما يتناسب مع تكلفة الأصول",
        paragraph3:
          "يمكن إجراء تقييم الأمن السيبراني داخليًا من خلال فريق متخصص للأمن السيبراني أو مزود خدمات الأمن السيبراني التابع لجهة خارجية. باعتبارها شريكًا موثوقًا للأمن السيبراني، توفر Depth Defense أنواعًا مختلفة من تقييمات الأمن السيبراني. نظرًا لأنه لا يوجد مقاس واحد يناسب الجميع، فإننا نساعد الشركات في تأمين بيئتها وفقًا لمكانتها ومتطلباتها ومتطلباتها من خلال نهج تقييم مخصص.",
        " What are the different types of cybersecurity assessments?":
          " ما هي الأنواع المختلفة لتقييمات الأمن السيبراني؟",
        Currentassets:
          "الأصول الحالية (تشمل التطبيق والشبكة والأنظمة والبيانات وما إلى ذلك)",
        "business compliance with the relevant security ordinance.":
          "امتثال الأعمال لقانون الأمن ذي الصلة",
        "Vulnerabilities present in the assets": "اتبع العمل للقانون ذي الصلة",
        "Identify the attack surface.": "تحديد سطح الهجوم",
        "Potential threats": "التهديدات والمخاطر المحتملة على الأصول",
        "Assets’ cyber": "المرونة السيبرانية للأصول",
        "Assets prevention": "تكلفة منع الأصول بما يتناسب مع تكلفة الأصول",
        Vulnerability: "تقييم الضعف",
        Penetration: "اختبار الاختراق",
        Social: "تقييم الهندسة الاجتماعية",
        Compromise: "تقييم التسوية",
        Red: "الفريق الأحمر أو تقييم الفريق الأحمر",
        Cloud: "تقييم الأمان السحابي",
        "Third-party": "تقييم مخاطر الطرف الثالث",
        Risk: "تقييم المخاطر",
        Security:
          "التدقيق الأمني ​​(NCA، CITC، مؤسسة النقد العربي السعودي، CCC)",
        // Add more Arabic translations here
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
