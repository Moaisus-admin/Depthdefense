import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        english: "English",
        arabic: "Arabic",
        worldClassCyberSecurity: "World Class Cybersecurity",
        cyberSecurityDescription:
          "Cybersecurity is the protection from the theft to protect of our computer systems and networks or being damaged of our hardware and software.",
        powerfulProtectionEasyRecovery: "Powerful Protection Easy Recovery",

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
        /////////Navbar//////////
        Home: "Home",
        Pages: "Pages",
        "About Us": "About Us",
        Team: "Team",
        Testimonials: "Testimonials",
        Pricing: "Pricing",
        "My Account": "My Account",
        Login: "Login",
        Register: "Register",
        "Recover Password": "Recover Password",
        Faq: "Faq",
        "Coming Soon": "Coming Soon",
        "Terms & Conditions": "Terms & Conditions",
        "Privacy Policy": "Privacy Policy",
        Services: "Services",
        "Services details": "Services details",
        "Cybersecurity Assessment ": "Cybersecurity Assessment",
        "Vulnerability Assessment & Penetration Testing":
          "Vulnerability Assessment & Penetration Testing",
        "Malware Analysis": "Malware Analysis",
        "Application Security Assessment": "Application Security Assessment",
        "Ransomware Assessment": "Ransomware Assessment",
        "DDoS Simulation": "DDoS Simulation",
        "Compromise Assessment": "Compromise Assessment",
        "Risk Assessment": "Risk Assessment",
        "Governance, Risk Management, and Compliance SAMA/CITC/NCA":
          "Governance, Risk Management, and Compliance SAMA/CITC/NCA",
        "Forensic Analysis": "Forensic Analysis",
        "Network & Security Operations": "Network & Security Operations",
        vCISO: "vCISO",
        "Managed Security Services": "Managed Security Services",
        "ISO 27001": "ISO 27001",
        PDPL: "PDPL",
        Solutions: "Solutions",
        "SIEM (Security Information and Event Management)":
          "SIEM (Security Information and Event Management)",
        "End Point Protection EDR,XDR,NDR": "End Point Protection EDR,XDR,NDR",
        "Next Gen Firewall & WAF": "Next Gen Firewall & WAF",
        "IAM(Identity and Access Management)":
          "IAM (Identity and Access Management)",
        "Privilege Access Management": "Privilege Access Management",
        "Network Access Control": "Network Access Control",
        "Security Intelligence / Threat Intelligence":
          "Security Intelligence / Threat Intelligence",
        "Advanced Persistent Threat": "Advanced Persistent Threat",
        "Breach & Attack Simulation Solution":
          "Breach & Attack Simulation Solution",
        "Network Monitoring & Protection": "Network Monitoring & Protection",
        "Patch Management & Vulnerability Management":
          "Patch Management & Vulnerability Management",
        "Digital Rights Management": "Digital Rights Management",
        Contact: "Contact",
        "Get a Quote": "Get a Quote",
        ////PartnersTwo/////
        "Our Valued Vendors": "Our Valued Vendors",
        // Main Banner//////
        PDPL1: "PDPL Compliance",
        SAMA: "SAMA Compliance",
        NCA: "NCA Compliance",
        CMA: "CMA Compliance",
        CCC: "CCC Compliance",
        CITC: "CITC Compliance",
        SOC: "SOC As A Service",
        Vulnerability1: "Vulnerability Assessment",
        Penetration1: "Penetration Testing",
        RedBlueTeam: "Red Teaming / Blue Teaming",
        topTitle: "World Class Cybersecurity",
        subtitle: "Securing your future in the digital world",
        contactUs: "Contact Us",
        ///////Features///////////
        privacyDataProtectionLaw: "Privacy Data Protection Law",
        privacyDataProtectionLawDesc:
          "Ensuring compliance with Privacy and Data Protection Laws is essential for businesses operating in Saudi Arabia, given the increasing emphasis on data privacy and security. Our specialized consulting services provide expert guidance to help you navigate the regulatory landscape and protect your organization's data.",
        nationalDataManagement: "National Data Management",
        nationalDataManagementDesc:
          "Ensuring data quality, security, and compliance across all sectors. Our consulting services are designed to help organizations align with NDMO regulations and best practices, enabling them to manage and utilize data effectively.",
        SAMACompliance: "SAMA Compliance",
        SAMAComplianceDesc:
          "Our specialized SAMA Consulting Services are designed to help financial institutions, banks, and other organizations navigate and comply with these regulations, ensuring robust governance and operational excellence.",
        ////OUR Approach//////
        ourCoreServices: "Our Core Services",
        protectWebsite: "How Can I Protect My Website From Cyber Attacks",
        ISO22301: "ISO 22301:2019",
        ISO22301Desc:
          "Ensures business continuity by establishing a robust management system to prepare for and respond to disruptions effectively.",
        ISO27001: "ISO 27001",
        ISO27001Desc:
          "Focuses on information security, ensuring organizations implement a systematic approach to managing sensitive information.",
        CMMI: "CMMI",
        CMMIDesc:
          "Capability Maturity Model Integration: A framework that aids in improving an organization's processes and performance.",
        COBIT: "COBIT",
        COBITDesc:
          "Control Objectives for Information and Technologies: Provides a governance framework for aligning IT goals with business objectives.",
        /////////////////////Features2/////////////////
        strengthenCybersecurity:
          "Strengthen Your Organization's Cybersecurity with Our Professional Services",
        SOCIRService: "SOC/IR Service",
        SOCIRServiceDesc:
          "Benefit from our Security Operations Center (SOC) and Incident Response (IR) services to monitor, detect, and respond to cyber threats in real-time.",
        VAPT: "VAPT",
        VAPTDesc:
          "Strengthen your defenses with our Vulnerability Assessment and Penetration Testing (VAPT) services, identifying and mitigating security weaknesses before they can be exploited.",
        riskManagement: "Risk Management",
        riskManagementDesc:
          "Implement comprehensive risk management strategies with our expert guidance, ensuring your organization is prepared to handle potential cybersecurity threats effectively.",
        ////////Solution//////////
        whatWeDo: "What We Do",
        perfectSolution: "The Perfect Solution For all Protection",
        PDPL2: "PDPL - Privacy Data Protection Law",
        NDMO: "NDMO - National Data Management Office",
        NCA2: "NCA - National Cybersecurity Authority",
        OTCC: "OTCC - Operational Technology Cybersecurity Control",
        DCC: "DCC - Data Cybersecurity Controls",
        Aramco: "Aramco Cybersecurity Compliance Certification",
        //////////Why Choose Us////////////
        whyChooseUs: "Why Choose Us",
        lotOfSkills: "We Have a Lot of Skills in Cybersecurity",
        clientsProtection: "Clients Protection",
        trustedOrganizations: "Trusted Organizations",
        websiteProtection: "Website Protection",
        innovativeTechnology: "Innovative Technology",
        //////////TeamMemberTwo//////////
        professionals: "Professionals",
        meetOurTeam: "Meet Our Skilled Team",
        commercialDirector: "Commercial Director",
        financialOfficer: "Financial Officer",
        chiefExecutiveOfficer: "Chief Executive Officer",
        ///////////Protects////////////////
        cybersecurityProtect: "Cybersecurity Protect",
        protectYourWebsite:
          "Protect Your Website, Web Server And Web Application From Hacker Threats",
        databaseSecurity: "Database Security",
        databaseSecurityDesc:
          "Implement robust encryption and access controls to safeguard sensitive data.",
        applicationSecurity: "Application Security",
        applicationSecurityDesc:
          "Secure your applications with comprehensive code reviews and regular security testing.",
        webSecurity: "Web Security",
        webSecurityDesc:
          "Secure your website with HTTPS, strong authentication, and regular vulnerability assessments.",
        serverSecurity: "Server Security",
        serverSecurityDesc:
          "Strengthen server defenses with firewalls, regular patches, and intrusion detection systems.",
        /////////Footer/////////
        companyDescription:
          "Depth defense is Saudi based company with panache to deliver competitive & quality cyber consulting services with ease.",
        addressTitle: "Address",
        address:
          "Khalid Al Hakim Road, Ar Rabwah Dist, Riyadh, Kingdom of Saudi Arabia.",
        servicesTitle: "Services",
        riskManagement1: "Risk Management",
        vapt: "VAPT",
        socIrService: "SOC/IR Service",
        offensiveSecurity: "Offensive Security",
        nocService: "NOC Service",
        infrastructureService: "Infrastructure Service",
        quickLinksTitle: "Quick Links",
        home: "Home",
        aboutUs: "About Us",
        services: "Services",
        solution: "Solution",
        careers: "Careers",
        contact: "Contact",
        copyright: "Copyright © {{year}}",
        privacyPolicy: "Privacy Policy",
        termsConditions: "Terms & Conditions",
        cookiePolicy: "Cookie Policy",
        ///////////////////////////AboutUs//////////////////////////
        whoWeAreTitle: "Who we Are",
        whoWeAreDescription:
          "We are team of young, dynamic & passionate experienced team, always ready to take up challenges & deliver them responsibility ensuring extreme customer satisfaction & high quality of standards.",
        visionTitle: "Vision",
        visionDescription:
          "To become a highly revered Saudi Organization, recognized for deep domain knowledge & applied wisdom.",
        missionTitle: "Mission",
        missionDescription:
          "Empower clients to fortify their Infrastructure by delivering value to build secure.",
        whatWeDoTitle: "What we do",
        whatWeDoDescription:
          "Advisory consulting is our forte. We understand that business have more questions than answers to the evolving cyber threats. We assist in identifying gaps suggest solutions to mitigate risks & reduce exposure to cyber-attacks. This helps in meeting your business demands & conducting business with aplomb.",
        /////2nd//////structureofCS///////
        faqImageAlt: "Image",
        faqTitle:
          "A birds Eyes view of Defense in Depth structure of cybersecurity",
        governanceRiskTitle: "Governance & Risk management",
        isoCompliant: "ISO 27002 Compliant",
        cisControls: "Center for Internet Security (CIS) Controls",
        annualPenTests: "3 Annual Pen Tests",
        privacyShield: "Privacy Shield Certified",
        gdprCcpa: "GOPR/CCPA Compliant",
        riskRegister: "Enterprice Risk Register",
        nistCompliant: "NIST SP 800-53 Compliant",
        ssaeCertified: "SSAE 18 soCI Type 2 Certified",
        sic: "Standard Information Cathering (SIC)",
        securityAuditReports: "Information Security Audit Reports",
        incidentResponse: "Enterprice Incident Response",
        platformSecurityTitle: "Platform Security",
        nextGenFirewalls: "Next Generation Firewalls",
        antivirusServers: "Antivirus for Servers",
        aesEncryption: "AES 256 Encryption at Rest",
        segregatedAdVlans: "Segregated Active Directory & VLANS",
        privilegedAccountVaulting: "Privileged Account Vaulting",
        vulnerabilityScanning:
          "Continuous Vulnerability Scanning & Patch Management",
        secureBackups: "Secure Data Backups and Disaster Recovery",
        osHardening: "Operating Systems Hardening",
        endUserProtectionTitle: "End User Protection",
        cybersecurityTraining:
          "End User Protection Cybersecurity Awareness Training",
        multifactorAuthentication: "Multifactor Authentication",
        roleBasedAccessControl: "Role-Based Access Constrol",
        simulatedPhishing: "Simulated Pishing Campaigns",
        securityInformationEventTitle: "Security Information Event Management",
        rawLogs: "Raw Logs, Endpoint Data &Network Traffic Analytics",
        unifiedLogData: "Unified Log Data",
        userBehaviorAnalytics: "User Behavior Analytics (UBA)",
        anomalyDetection: "Suspicious Activity Detection & Alerts",
        perimeterSecurityTitle: "Perimeter security",
        externalFirewalls: "External Firewalls",
        remoteAccess: "Remote Access",
        spamFiltering: "Spam Filtering",
        threatIntelFeeds: "Threat Intel Feeds",
        remoteAuthReporting: "Remote Authentication Reporting",
        bruteForceDosDetection: "Brute Force and DoS Detection",
        dataCenterSecurity: "Data Center Physical Security",
        endpointSecurityTitle: "Endpoint Security",
        patchManagement:
          "Automated Microsoft Windows and 3rd Party application Patch Management",
        antivirusEdR: "Antivirus and Endpoint Detection &Response (EDR)",
        remoteMonitoringManagement: "Remote Monitoring & Management System",
        localAdminPassword: "Local Admin Password Solution",
        fullDiskEncryption: "Full Disk Encryption",
        mobileDeviceManagement: "Mobile Device Management",
        groupPolicyEnforcement: "Group Policy Enforcement",
        passwordComplexity: "Password Complexity",
        bruteForcePrevention: "Brute Force Prevention",
        faqRightShapeAlt: "Image",
        //////3rd DepthCS///////////
        title: "Why You Need Defense in Depth Cybersecurity",
        insiderThreats:
          "Insider Threats Modern cyber threats can originate from virtually (pun intended) anywhere – even from inside your own network. Hackers use all kinds of tricks to bypass your company’s tough perimeter defenses while careless or actively malicious insiders can create or exacerbate cybersecurity issues.",
        defenseInDepth:
          "Defense in depth cybersecurity strategies are crucial for countering insider threats-those threats which originate from within the network itself. without some kind of strong network segmentation to prevent attacks on the inside from hopping from one asset to the next, any insider threat would be able to easily compromise the entire network. From a network security standpoint, this is less than optimal.",
        networkSegmentation:
          "Using a defense in depth cybersecurity plan restricts attackers by blocking them from moving onto other systems.",
        minimizeImpactDataBreaches:
          "To Minimize the Impact of Data Breaches are almost inevitable. Sooner or later, there will be an attacker determined, resourceful, or lucky enough to slip past the perimeter defenses somehow to start ripping data from your systenms. What using a defense in depth cybersecurity plan does is make it harder for the attacker to get at everything",
        increaseBreakoutTime:
          "Instead of having carte blanche to access everything all at once as soon as they get past the perimeter, the attacker will have to peel back each layer of network security that you have. This massively increases their “breakout time” (the time it takes them to move from one server/asset on a network to the next), which gives your network security team more time to detect and counter the attack.",
        reduceDataCompromise:
          "When attackers can access fewer systems, they’ll be less likely to compromise as much data -thus reducing the severity and impact of any resultant data breaches. Yes, data will still be compromised, but attackers getting only non-personally-identificable account information is better than them walking off with sensitive info like payment data or Social Security Numbers.",
        ///////////////////////////////Contact//////////////////////////////
        sendMessage: "Send us a message",
        nameLabel: "Name",
        namePlaceholder: "Enter Name",
        emailLabel: "Email Address",
        emailPlaceholder: "Enter Email",
        phoneLabel: "Phone Number",
        phonePlaceholder: "Enter Number",
        subjectLabel: "Subject",
        subjectPlaceholder: "Enter Subject",
        messageLabel: "Message",
        messagePlaceholder: "Enter Your Message...",
        submitButton: "Submit",
        contactDetailsTitle: "Our contact details",
        addressLabel: "Address",
        addressText:
          "Khalid Al Hakim Road, Ar Rabwah Dist, Riyadh, Kingdom of Saudi Arabia.",
        followUsTitle: "Follow us:",
        contactUsTitle: "Contact Us",
        //////////////////////slider/////////////////////////////////////////
        ourEsteemedClients: "Our Esteemed Clients",
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
        //////Navbar/////
        Home: "بيت",
        Pages: "الصفحات",
        "About Us": "معلومات عنا",
        Team: "فريق",
        Testimonials: "الشهادات",
        Pricing: "التسعير",
        "My Account": "حسابي",
        Login: "تسجيل الدخول",
        Register: "تسجيل",
        "Recover Password": "استعادة كلمة المرور",
        Faq: "الأسئلة المتكررة",
        "Coming Soon": "قريبا",
        "Terms & Conditions": "الشروط والأحكام",
        "Privacy Policy": "سياسة الخصوصية",
        Services: "الخدمات",
        "Services details": "تفاصيل الخدمات",
        "Cybersecurity Assessment ": "تقييم الأمن السيبراني",
        "Vulnerability Assessment & Penetration Testing":
          "تقييم الضعف واختبار الاختراق",
        "Malware Analysis": "تحليل البرمجيات الخبيثة",
        "Application Security Assessment": "تقييم أمن التطبيق",
        "Ransomware Assessment": "تقييم رانسوموير",
        "DDoS Simulation": "محاكاة هجوم الحرمان من الخدمة",
        "Compromise Assessment": "تقييم التسوية",
        "Risk Assessment": "تقييم المخاطر",
        "Governance, Risk Management, and Compliance SAMA/CITC/NCA":
          "الحوكمة وإدارة المخاطر والامتثال SAMA/CITC/NCA",
        "Forensic Analysis": "التحليل الجنائي",
        "Network & Security Operations": "عمليات الشبكة والأمن",
        vCISO: "CISO الافتراضي",
        "Managed Security Services": "خدمات الأمن المدارة",
        "ISO 27001": "ISO 27001",
        PDPL: "PDPL",
        Solutions: "الحلول",
        "SIEM (Security Information and Event Management)":
          "SIEM (إدارة معلومات وأحداث الأمان)",
        "End Point Protection EDR,XDR,NDR": "حماية نقطة النهاية EDR,XDR,NDR",
        "Next Gen Firewall & WAF": "جدار الحماية الجيل التالي و WAF",
        "IAM(Identity and Access Management)": "IAM (إدارة الهوية والوصول)",
        "Privilege Access Management": "إدارة الوصول المميز",
        "Network Access Control": "التحكم في الوصول إلى الشبكة",
        "Security Intelligence / Threat Intelligence":
          "معلومات الأمان / استخبارات التهديدات",
        "Advanced Persistent Threat": "التهديد المستمر المتقدم",
        "Breach & Attack Simulation Solution": "حل محاكاة الاختراق والهجوم",
        "Network Monitoring & Protection": "مراقبة الشبكة وحمايتها",
        "Patch Management & Vulnerability Management":
          "إدارة التصحيحات وإدارة الثغرات الأمنية",
        "Digital Rights Management": "إدارة الحقوق الرقمية",
        Contact: "اتصل بنا",
        "Get a Quote": "إقتبس",
        /////PartnersTwo/////
        "Our Valued Vendors": "بائعينا الكرام",
        /////// Main Banner////////
        PDPL1: "الامتثال PDPL",
        SAMA: "الامتثال SAMA",
        NCA: "الامتثال NCA",
        CMA: "الامتثال CMA",
        CCC: "الامتثال CCC",
        CITC: "الامتثال CITC",
        SOC: "كخدمة SOC",
        Vulnerability1: "تقييم الضعف",
        Penetration1: "اختبار الاختراق",
        RedBlueTeam: "الفريق الأحمر / الفريق الأزرق",
        topTitle: "الأمن السيبراني من الطراز العالمي",
        subtitle: "تأمين مستقبلك في العالم الرقمي",
        contactUs: "تواصل معنا",
        ///////Features///////////
        privacyDataProtectionLaw: "قانون حماية بيانات الخصوصية",
        privacyDataProtectionLawDesc:
          "يعد ضمان الامتثال لقوانين الخصوصية وحماية البيانات أمرًا ضروريًا للشركات العاملة في المملكة العربية السعودية، نظرًا للتركيز المتزايد على خصوصية البيانات وأمنها. توفر خدماتنا الاستشارية المتخصصة إرشادات الخبراء لمساعدتك على التنقل في المشهد التنظيمي وحماية بيانات مؤسستك.",
        nationalDataManagement: "إدارة البيانات الوطنية",
        nationalDataManagementDesc:
          "ضمان جودة البيانات وأمانها والامتثال لها في جميع القطاعات. تم تصميم خدماتنا الاستشارية لمساعدة المؤسسات على التوافق مع لوائح NDMO وأفضل الممارسات، مما يمكنها من إدارة البيانات واستخدامها بشكل فعال.",
        SAMACompliance: "الامتثال SAMA",
        SAMAComplianceDesc:
          "تم تصميم خدماتنا الاستشارية المتخصصة من مؤسسة النقد العربي السعودي لمساعدة المؤسسات المالية والبنوك والمنظمات الأخرى على التنقل والامتثال لهذه اللوائح، مما يضمن حوكمة قوية وتميزًا تشغيليًا.",
        ////////OurApproach///////////
        ourCoreServices: "الخدمات الأساسية لدينا",
        protectWebsite:
          "كيف يمكنني حماية موقع الويب الخاص بي من الهجمات السيبرانية",
        ISO22301: "ISO 22301:2019",
        ISO22301Desc:
          "يضمن استمرارية الأعمال من خلال إنشاء نظام إدارة قوي للتحضير والاستجابة للاضطرابات بشكل فعال.",
        ISO27001: "ISO 27001",
        ISO27001Desc:
          "يركز على أمن المعلومات، مما يضمن قيام المؤسسات بتنفيذ نهج منظم لإدارة المعلومات الحساسة.",
        CMMI: "CMMI",
        CMMIDesc:
          "تكامل نموذج نضج القدرة: إطار يساعد في تحسين عمليات المنظمة وأدائها.",
        COBIT: "COBIT",
        COBITDesc:
          "أهداف التحكم في المعلومات والتقنيات: توفر إطارًا للحوكمة لمواءمة أهداف تكنولوجيا المعلومات مع أهداف العمل.",
        /////////////////Features2///////////////////////
        strengthenCybersecurity:
          "عزز الأمن السيبراني لمؤسستك من خلال خدماتنا الاحترافية",
        SOCIRService: "خدمة SOC/IR",
        SOCIRServiceDesc:
          "استفد من خدمات مركز العمليات الأمنية (SOC) والاستجابة للحوادث (IR) لدينا لرصد التهديدات السيبرانية واكتشافها والاستجابة لها في الوقت الفعلي.",
        VAPT: "VAPT",
        VAPTDesc:
          "قم بتعزيز دفاعاتك من خلال خدمات تقييم الثغرات الأمنية واختبار الاختراق (VAPT)، وتحديد نقاط الضعف الأمنية والتخفيف من حدتها قبل أن يتم استغلالها.",
        riskManagement: "إدارة المخاطر",
        riskManagementDesc:
          "قم بتنفيذ إستراتيجيات شاملة لإدارة المخاطر من خلال توجيهات خبرائنا، مما يضمن أن مؤسستك مستعدة للتعامل مع تهديدات الأمن السيبراني المحتملة بفعالية.",
        /////////Solution//////////
        whatWeDo: "ما نفعله",
        perfectSolution: "الحل الأمثل لجميع أنواع الحماية",
        PDPL2: "PDPL - قانون حماية بيانات الخصوصية",
        NDMO: "NDMO - المكتب الوطني لإدارة البيانات",
        NCA2: "NCA - الهيئة الوطنية للأمن السيبراني",
        OTCC: "OTCC - التحكم في الأمن السيبراني للتكنولوجيا التشغيلية",
        DCC: "DCC - ضوابط الأمن السيبراني للبيانات",
        Aramco: "شهادة الامتثال للأمن السيبراني من أرامكو",
        /////////Why Chose Us/////////////
        whyChooseUs: "لماذا أخترتنا",
        lotOfSkills: "لدينا الكثير من المهارات في مجال الأمن السيبراني",
        clientsProtection: "حماية العملاء",
        trustedOrganizations: "المنظمات الموثوقة",
        websiteProtection: "حماية الموقع",
        innovativeTechnology: "التكنولوجيا المبتكرة",
        /////////TeamMemberTwo/////////////
        professionals: "المهنيين",
        meetOurTeam: "تعرَّف على فريقنا الماهر",
        commercialDirector: "المدير التجاري",
        financialOfficer: "موظف مالي",
        chiefExecutiveOfficer: "الرئيس التنفيذي",
        /////////Protects////////////
        cybersecurityProtect: "حماية الأمن السيبراني",
        protectYourWebsite:
          "حماية موقع الويب الخاص بك وخادم الويب وتطبيق الويب من تهديدات المتسللين",
        databaseSecurity: "أمن قاعدة البيانات",
        databaseSecurityDesc:
          "تنفيذ تشفير قوي وضوابط الوصول لحماية البيانات الحساسة.",
        applicationSecurity: "أمن التطبيق",
        applicationSecurityDesc:
          "قم بتأمين تطبيقاتك من خلال مراجعات التعليمات البرمجية الشاملة واختبارات الأمان المنتظمة.",
        webSecurity: "أمن الويب",
        webSecurityDesc:
          "قم بتأمين موقع الويب الخاص بك باستخدام HTTPS والمصادقة القوية وتقييمات الضعف المنتظمة.",
        serverSecurity: "أمن الخادم",
        serverSecurityDesc:
          "قم بتعزيز دفاعات الخادم باستخدام جدران الحماية والتصحيحات العادية وأنظمة كشف التسلل.",
        /////////Footer/////////
        companyDescription:
          "شركة Depth Defense هي شركة مقرها المملكة العربية السعودية تتمتع ببراعة لتقديم خدمات استشارية إلكترونية تنافسية وعالية الجودة بسهولة.",
        addressTitle: "عُنوان",
        address:
          "طريق خالد الحكيم، حي الربوة، الرياض، المملكة العربية السعودية.",
        servicesTitle: "خدمات",
        riskManagement1: "إدارة المخاطر",
        vapt: "VAPT",
        socIrService: "SOC/IR خدمة",
        offensiveSecurity: "الأمن الهجومي",
        nocService: "NOC خدمة",
        infrastructureService: "خدمة البنية التحتية",
        quickLinksTitle: "روابط سريعة",
        home: "الصفحة الرئيسية",
        aboutUs: "معلومات عنا",
        services: "خدمات",
        solution: "محاليل",
        careers: "وظائف",
        contact: "تلامس",
        copyright: "حقوق التأليف © {{year}}",
        privacyPolicy: "سياسة الخصوصية",
        termsConditions: "الشروط والأحكام",
        cookiePolicy: "سياسة ملفات الارتباط",
        //////////////////AboutUs////////////////////////////////////////////////
        whoWeAreTitle: "من نحن",
        whoWeAreDescription:
          "نحن فريق من الشباب ذوي الخبرة والديناميكية والعاطفة، ومستعدون دائمًا لمواجهة التحديات وتسليمهم المسؤولية لضمان رضا العملاء الشديد والجودة العالية للمعايير.",
        visionTitle: "رؤية",
        visionDescription:
          "أن نصبح مؤسسة سعودية تحظى باحترام كبير، ومعترف بها بالمعرفة العميقة بالمجال والحكمة التطبيقية.",
        missionTitle: "البعثة",
        missionDescription:
          "تمكين العملاء من تحصين البنية التحتية الخاصة بهم من خلال تقديم قيمة لبناء آمن.",
        whatWeDoTitle: "الذي نفعله",
        whatWeDoDescription:
          "الاستشارات الاستشارية هي موطن قوتنا. نحن ندرك أن لدى الشركات أسئلة أكثر من الإجابات على التهديدات السيبرانية المتطورة. نحن نساعد في تحديد الثغرات واقتراح حلول للتخفيف من المخاطر وتقليل التعرض للهجمات السيبرانية. وهذا يساعد في تلبية متطلبات عملك ومزاولة الأعمال بثقة.",
        //////2nd////StructureofCS////
        faqImageAlt: "Image",
        faqTitle: "وجهة نظر عيون الطيور للدفاع في العمق هيكل الأمن السيبراني",
        governanceRiskTitle: "الحوكمة وإدارة المخاطر",
        isoCompliant: "متوافق مع ISO 27002",
        cisControls: "مركز ضوابط أمن الإنترنت (CIS).",
        annualPenTests: "3 اختبارات القلم السنوية",
        privacyShield: "شهادة درع الخصوصية",
        gdprCcpa: "متوافق مع GOPR/CCPA",
        riskRegister: "سجل مخاطر المؤسسة",
        nistCompliant: "متوافق مع NIST SP 800-53",
        ssaeCertified: "معتمد من SSAE 18 soCI من النوع 2",
        sic: "توزيع المعلومات القياسية (SIC)",
        securityAuditReports: "تقارير تدقيق أمن المعلومات",
        incidentResponse: "الاستجابة لحوادث المؤسسة",
        platformSecurityTitle: "أمن المنصة",
        nextGenFirewalls: "جدران الحماية من الجيل القادم",
        antivirusServers: "مكافحة الفيروسات للخوادم",
        aesEncryption: "تشفير AES 256 في حالة الراحة",
        segregatedAdVlans: "الدليل النشط المنفصل وشبكات VLAN",
        privilegedAccountVaulting: "خزنة الحساب المميز",
        vulnerabilityScanning: "المسح المستمر للثغرات الأمنية وإدارة التصحيحات",
        secureBackups: "تأمين النسخ الاحتياطية للبيانات والتعافي من الكوارث",
        osHardening: "تصلب أنظمة التشغيل",
        endUserProtectionTitle: "حماية المستخدم النهائي",
        cybersecurityTraining:
          "التدريب على التوعية بالأمن السيبراني لحماية المستخدم النهائي",
        multifactorAuthentication: "المصادقة متعددة العوامل",
        roleBasedAccessControl: "التحكم في الوصول على أساس الدور",
        simulatedPhishing: "محاكاة حملات التصيد الاحتيالي",
        securityInformationEventTitle: "إدارة أحداث المعلومات الأمنية",
        rawLogs: "السجلات الخام وبيانات نقطة النهاية وتحليلات حركة مرور الشبكة",
        unifiedLogData: "بيانات السجل الموحد",
        userBehaviorAnalytics: "تحليلات سلوك المستخدم (UBA)",
        anomalyDetection: "كشف النشاط المشبوه والتنبيهات",
        perimeterSecurityTitle: "أمن محيط",
        externalFirewalls: "جدران الحماية الخارجية",
        remoteAccess: "الوصول عن بعد",
        spamFiltering: "تصفية البريد العشوائي",
        threatIntelFeeds: "خلاصات إنتل للتهديد",
        remoteAuthReporting: "تقارير المصادقة عن بعد",
        bruteForceDosDetection: "القوة الغاشمة واكتشاف دوس",
        dataCenterSecurity: "الأمن المادي لمركز البيانات",
        endpointSecurityTitle: "أمن نقطة النهاية",
        patchManagement:
          "إدارة التصحيحات التلقائية لتطبيقات Microsoft Windows والجهات الخارجية",
        antivirusEdR:
          "مكافحة الفيروسات والكشف عن نقطة النهاية والاستجابة لها (EDR)",
        remoteMonitoringManagement: "نظام المراقبة والإدارة عن بعد",
        localAdminPassword: "حل كلمة مرور المسؤول المحلي",
        fullDiskEncryption: "تشفير القرص بالكامل",
        mobileDeviceManagement: "إدارة الأجهزة النقالة",
        groupPolicyEnforcement: "تنفيذ نهج المجموعة",
        passwordComplexity: "تعقيد كلمة المرور",
        bruteForcePrevention: "الوقاية من القوة الغاشمة",
        faqRightShapeAlt: "Image",
        //////3rd DepthCS///////////
        title: "لماذا تحتاج إلى الدفاع في العمق والأمن السيبراني",
        insiderThreats:
          "التهديدات الداخلية يمكن أن تنشأ التهديدات السيبرانية الحديثة من أي مكان افتراضيًا (المقصود بالتورية) - حتى من داخل شبكتك الخاصة. يستخدم المتسللون جميع أنواع الحيل لتجاوز الدفاعات الخارجية الصارمة لشركتك، بينما يمكن للمطلعين المهملين أو الخبيثين أن يخلقوا مشكلات تتعلق بالأمن السيبراني أو يؤدي إلى تفاقمها.",
        defenseInDepth:
          "يعد الدفاع المتعمق في استراتيجيات الأمن السيبراني أمرًا بالغ الأهمية لمواجهة التهديدات الداخلية - تلك التهديدات التي تنشأ من داخل الشبكة نفسها. وبدون نوع من التجزئة القوية للشبكة لمنع الهجمات من الداخل من التنقل من أصل إلى آخر، فإن أي تهديد داخلي سيكون قادرًا على اختراق الشبكة بأكملها بسهولة. من وجهة نظر أمان الشبكة، هذا أقل من الأمثل.",
        networkSegmentation:
          "يؤدي استخدام خطة دفاعية متعمقة للأمن السيبراني إلى تقييد المهاجمين عن طريق منعهم من الانتقال إلى أنظمة أخرى.",
        minimizeImpactDataBreaches:
          "إن تقليل تأثير خروقات البيانات أمر لا مفر منه تقريبًا. عاجلاً أم آجلاً، سيكون هناك مهاجم مصمم، واسع الحيلة، أو محظوظ بما يكفي لتجاوز الدفاعات المحيطة بطريقة أو بأخرى لبدء نسخ البيانات من أنظمتك. ما يفعله استخدام خطة دفاعية متعمقة للأمن السيبراني هو أنه يجعل من الصعب على المهاجم الوصول إلى كل شيء",
        increaseBreakoutTime:
          "بدلاً من الحصول على تفويض مطلق للوصول إلى كل شيء مرة واحدة بمجرد تجاوز المحيط، سيتعين على المهاجم إزالة كل طبقة من أمان الشبكة لديك. يؤدي هذا إلى زيادة كبيرة في ”وقت الاختراق“(الوقت الذي يستغرقه الانتقال من خادم/أصل على شبكة إلى آخر)، مما يمنح فريق أمان الشبكة الخاص بك مزيدًا من الوقت لاكتشاف الهجوم ومواجهته.",
        reduceDataCompromise:
          "عندما يتمكن المهاجمون من الوصول إلى عدد أقل من الأنظمة، سيكونون أقل عرضة للتنازل عن قدر كبير من البيانات - وبالتالي تقليل خطورة وتأثير أي خروقات للبيانات ناتجة. نعم، ستظل البيانات معرضة للخطر، ولكن حصول المهاجمين على معلومات الحساب غير الشخصية فقط أفضل من حصولهم على معلومات حساسة مثل بيانات الدفع أو أرقام الضمان الاجتماعي.",
        ///////////////////////////////Contact//////////////////////////////
        sendMessage: "أرسل لنا رسالة",
        nameLabel: "اسم",
        namePlaceholder: "أدخل الاسم",
        emailLabel: "عنوان البريد الإلكتروني",
        emailPlaceholder: "أدخل البريد الإلكتروني",
        phoneLabel: "رقم التليفون",
        phonePlaceholder: "أدخل رقم",
        subjectLabel: "موضوع",
        subjectPlaceholder: "أدخل الموضوع",
        messageLabel: "رسالة",
        messagePlaceholder: "أدخل رسالتك...",
        submitButton: "إرسال",
        contactDetailsTitle: "تفاصيل الاتصال لدينا",
        addressLabel: "عُنوان",
        addressText:
          "طريق خالد الحكيم، حي الربوة، الرياض، المملكة العربية السعودية.",
        followUsTitle: "تابعنا:",
        contactUsTitle: "تواصل معنا",
        //////////////////////////////Slider///////////////////////////////////
        ourEsteemedClients: "عملاؤنا",
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
