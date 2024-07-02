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
        ////////////SolutionsApt//////////
        apt_description:
          "An Advanced Persistent Threat (APT) is a targeted cyber attack that is designed to gain unauthorized access to sensitive information or systems for an extended period of time. APT attacks are typically carried out by skilled and well-funded attackers who use multiple attack vectors, including social engineering, malware, and exploit kits, to bypass traditional security measures and gain access. Once inside the system, the attackers use sophisticated techniques to move laterally across the network, steal data, and maintain persistence, often remaining undetected for months or even years. APT attacks are often associated with state-sponsored groups or organized crime syndicates that have the resources and motivation to launch targeted attacks against specific organizations or individuals.",
        ///////////////////Get in Touch Form/////////////////////
        contact_us: "Contact Us",
        speak_with_expert: "Speak With An Expert About Your Specific Needs",
        name: "Name",
        enter_name: "Enter Name",
        email: "Email",
        enter_email: "Enter Email",
        phone: "Phone",
        enter_number: "Enter Number",
        subject: "Subject",
        enter_subject: "Enter Subject",
        message: "Message",
        enter_message: "Enter Message",
        submit: "Submit",
        /////////////Breach and Attack/////////////
        breach_attack_content:
          "The Breach & Attack Simulation Solution is a pivotal tool in modern cybersecurity strategies, designed to proactively assess and fortify organizational defenses against potential cyber threats. By simulating realistic attack scenarios, such as phishing campaigns, malware infections, or unauthorized access attempts, this solution provides invaluable insights into an organization's security posture. Through comprehensive testing and analysis, businesses can identify vulnerabilities, evaluate the effectiveness of existing security measures, and prioritize remediation efforts. This proactive approach not only helps in preemptively addressing security gaps but also empowers IT teams to fine-tune incident response strategies and bolster overall resilience. By continuously simulating and refining defense mechanisms, organizations can stay ahead of evolving threats, safeguard sensitive data, and maintain operational continuity with confidence in their cybersecurity defenses.",
        ///////////////////DigitalRights/////////////////
        digital_rights_content:
          "Digital Rights Management (DRM) refers to the techniques and technologies used to control access and usage of digital content and software. It is a system that is typically implemented by content creators and publishers to protect their intellectual property from unauthorized reproduction, distribution, or copying. DRM may involve encrypting digital media, controlling access through digital keys, or limiting the number of devices that can access the content or software. It enables copyright holders to safeguard their rights and ensure that they receive payment for their works. However, DRM has also been criticized for potentially restricting user rights, making it difficult to use legally purchased content across different devices, and hindering innovation.",
        ////////////SolutionsDetailContent/////////////

        edr_description:
          "Endpoint Detection and Response (EDR) is a security solution that protects against malware and other cyber threats that can bypass traditional antivirus software. EDR solutions monitor endpoints (e.g. laptops, desktops, servers) in real-time to detect and respond to threats. EDR benefits include improved threat detection, quicker response times, and increased visibility into endpoint activity.",

        xdr_description:
          "Extended Detection and Response (XDR) is a tool that automates threat detection, response, and remediation across different security tools and platforms. XDR combines data from multiple sources to provide a more comprehensive view of the threat landscape. XDR benefits include improved collaboration between security teams, faster threat detection and response, and more efficient security operations.",

        ndr_description:
          "Network Detection and Response (NDR) is a security solution that monitors network traffic to detect and respond to threats in real-time. NDR solutions use advanced analytics and machine learning to identify and prioritize alerts, reducing the amount of false positives. NDR benefits include improved threat detection, quicker response times, and increased visibility into network activity.",

        mdr_description:
          "Managed Detection and Response (MDR) is a cybersecurity service that detects threats, provides incident response, and manages security operations for businesses. MDR services use advanced technologies, such as machine learning algorithms and artificial intelligence, to identify and respond to threats in real-time. MDR providers typically monitor network activity, logs, and endpoints for signs of malicious activity, investigate and assess any potential threats, and respond with appropriate actions to contain and mitigate the impacts of any security incidents. MDR services are particularly valuable for organizations with limited IT security resources and expertise, as they provide an outsourced solution to enhance the overall protection of the organization’s systems and data.",
        ///////////////////////Indentity Management/////////////////
        iam_description_1:
          "IAM is a framework for managing and controlling access to resources within an organization. It involves managing the identities of users, devices, and other entities that interact with an organization’s systems, applications, and data.",
        iam_description_2:
          "IAM solutions provide centralized control over user access to resources, and allow administrators to manage authentication, authorization, and access control policies. They enable organizations to enforce security policies, maintain compliance, and reduce the risk of data breaches or unauthorized access to sensitive resources.",
        iam_description_3:
          "IAM solutions typically include features such as user provisioning, single sign-on (SSO), multi-factor authentication (MFA), directory services, and identity governance and administration (IGA), among others.",
        "Identity and Access Management": "Identity and Access Management",
        //////////////////NAC//////////////////////////
        nac_description:
          "Network Access Control (NAC) is a security solution that helps organizations control access to their network. NAC solutions use various techniques to authenticate and authorize users and devices that connect to a network, ensuring that only authorized parties are granted access. This can include methods such as checking the user’s credentials, assessing the health and compliance of connected devices, and requiring the installation of security software before allowing access. NAC solutions can help prevent unauthorized or malicious access to a network and reduce the risk of security breaches.",
        /////////////////NetworkMonitoring///////////////////
        network_description:
          "Network Monitoring & Protection is a critical component of comprehensive cybersecurity frameworks, focused on safeguarding the integrity and security of organizational networks. This solution involves continuous surveillance and analysis of network traffic, detecting and mitigating potential threats in real-time. By monitoring network activity, including incoming and outgoing data packets, this solution identifies suspicious patterns, unauthorized access attempts, and potential vulnerabilities that could compromise network security. Advanced monitoring tools provide visibility into network performance metrics, ensuring optimal functionality while also alerting IT teams to anomalies that may indicate malicious activity or operational issues. By leveraging proactive monitoring and robust defense mechanisms, organizations can effectively defend against cyber threats, maintain data confidentiality, and uphold network availability, thereby safeguarding critical assets and ensuring uninterrupted business operations.",
        /////////////////NextGenFirewall////////////////
        firewallDescription:
          "Next Generation Firewalls (NGFW) refers to advanced network security devices that integrate traditional firewall capabilities with advanced security technologies such as intrusion prevention, application identification and control, and advanced threat detection. A Web Application Firewall (WAF) is a security solution that protects web applications from several forms of cyber attacks. It is designed to monitor the incoming and outgoing traffic to and from a web application and identify and block any malicious requests that could compromise the security of the application. The firewall filters the requests according to a set of predefined rules and policies based on the known vulnerabilities of the application, such as SQL injection, cross-site scripting, or file inclusion attacks. By implementing a WAF, organizations can effectively protect their web applications against common web application attacks, reduce the risk of data breaches, and ensure compliance with regulatory requirements.",
        //////////////PAM//////////////
        pamDescription:
          "Privilege Access Management (PAM) refers to the set of processes, tools, and policies designed to manage and control privileged user access in an organization. PAM is aimed at identifying and controlling privileged users, their access levels, and privileges within a system or network. This includes activities such as managing passwords, restricting access to sensitive systems, enforcing user accountability, and monitoring user activity. The goal of PAM is to reduce the risk of data breaches and protect critical assets by limiting access to only authorized users who require privileged access to perform their duties.",
        //////////////PatchManagement//////////////
        patchManagement1:
          "Patch management is the process of identifying, acquiring, testing, and installing software updates (patches) to address security vulnerabilities, performance issues, and other bugs in operating systems, applications, and firmware. Patch management helps to maintain the security, stability, and reliability of computer systems and networks by ensuring that all software components are up-to-date with the latest patches released by vendors. This can include both operating system patches as well as patches for individual applications. Effective patch management requires proper planning, testing, and change control procedures to minimize risks to the organization.",
        vulnerabilityManagement:
          "Vulnerability management is the process of identifying, evaluating, prioritizing, and mitigating security vulnerabilities in an organization’s IT infrastructure. This includes finding vulnerabilities in software, hardware, and configuration settings that could be exploited by cyber attackers to breach an organization’s security. Vulnerability management also involves implementing effective and timely responses to identified vulnerabilities, including patching, updating software, and applying security measures to prevent exploitation. The goal of vulnerability management is to minimize risk to the organization by reducing the potential for successful cyber attacks",
        /////////////SolutionsThreat//////////
        threatIntelligence:
          "Threat Intelligence is the collection, analysis, and dissemination of information related to security threats and risks to organizational assets or infrastructure. It involves using various sources of information, such as internal logs, external feeds, and human intelligence, to identify and mitigate potential security risks. The goal of security and threat intelligence is to provide organizations with the knowledge and tools they need to anticipate, detect, and respond to cyber threats and attacks. This information can be used to prevent attacks, minimize damage, and quickly recover from an incident.",
        "Threat Intelligence": "Threat Intelligence",
        //////////AssesmentTesting//////////
        cyber_attacks:
          "In the age of 'Internet of Things', we see a proliferation of evolving cyber-attacks targeting organizations and businesses. Cyber-attacks might be intangible, but their impacts are acutely felt: there is a growing risk of disruption, information loss, reputation damage and material cost to clients of different fields. The Vulnerability Assessment (VA) services provided by Depth Defense allow clients to have better knowledge of their vulnerabilities and how these could be addressed. To take things to the next level, Depth Defense’s accredited cybersecurity consultant can conduct a Penetration Test (PT) which demonstrate how these vulnerabilities could be exploited against the interest of clients.",
        va_and_pt:
          "The VA and PT represent the first step and the next in the journey of cybersecurity. Clients can enjoy affordable services from Depth Defense and better safeguard their businesses against loopholes and potential attacks. With a comprehensive VA report produced by our consultants, clients are well-informed of the current status of their information security and can respond by forming corresponding policies. PT, as an extension of VA, demonstrates the exploitability of the clients by attacking their system in a synthetic environment. Clients can experience the 'worst-case-scenario' without the incurrence of actual damages.",
        intrusion_testing:
          "By utilizing a set of intrusion testing tools and manual exploitation techniques, an experienced team of Depth Defense experts will perform a deep analysis of clients’ information networks to determine the extent of their vulnerabilities, which will be categorized against a criteria of Criticality, Exploitability, Impact and Probability to establish underlying risk levels. These vulnerabilities will be exploited by our consultant in the synthetic environment. The details of the discovered issues are documented in the report to help illustrate the current state of their IT security posture.",
        "Vulnerability Assessment and Penetration Testing":
          "Vulnerability Assessment and Penetration Testing",
        /////////Security Assesment////////////
        app_security_assessment:
          "Application security assessment is the process of testing applications to find threats and determining the measures to put in place to defend against them. Through the assessment process, organizations can evaluate the current security posture of their applications and determine the next steps for further protecting their software from future exploits. Most organizations conduct application security assessments on a regular basis to ensure their security measures are up-to-date and effective.",
        threat_identification:
          "A thorough application security assessment can enable organizations to identify potential threats to their software and applications before they become a problem. Security incidents are a substantial risk for today’s software-driven business environment because they can have a negative impact on the company’s reputation and revenue. In many industries, application security assessments may even be required to comply with cybersecurity laws and regulations. For example, the PCI standards suggest adherence to OWASP Top 10 guidelines.",
        /////////////CompromiseAssesment///////////////
        compromise_assessment_description:
          "Compromise assessments are high-level investigations where skilled teams utilize advanced tools to dig more deeply into their environment to identify ongoing or past attacker activity in addition to identifying existing weaknesses in controls and practices. The intent of the comprehensive assessment is to answer the critical question: “Has my organization been breached?”",
        benefit_1:
          "Despite advancements in cybersecurity technologies and increases in security budgets, average dwell times have remained largely unchanged over the years. Dwell time is the amount of time between an attacker’s entry into the network and their expulsion. Reducing dwell time is important because the longer a threat actor can operate undetected inside the network, the more time they have to find a route to the most valuable assets, learn how to defeat defenses, install back doors, and exfiltrate data. These advanced persistent threats (APTs) are damaging and costly, but they can be exposed by a compromise assessment.",
        benefit_2:
          "The depth and breadth of a compromise assessment allows organizations to determine if threat actors are present or if they have been breached. This determination derived through comprehensive analysis leads to a reduction in security risk of attackers stealing financial assets, customer data or intellectual property.",
        benefit_3:
          "Security posture is improved through the proactive identification of ineffective security practices such as configuration errors and policy conflicts that can leave gaps and put organizations at greater risk. A compromise assessment will expose these weaknesses and provide a path toward remediating them. Organizations will be able to answer the question, “has my organization been breached?” It will also provide suggestions for future improvements that can be used to guide decisions about budget and resources in the future. Lastly, compromise assessments are mandatory under some regulations, but even if an organization is not covered by one of those particular standards, proof of a compromise assessment will carry weight with auditors.",
        benefits_title: "Benefits of using a vCISO include:",
        ////////////////DDOS////////////////
        "DDoS Simulation1": "DDoS Simulation",
        description1:
          "A DDoS Simulation is an effort to make a system or network device unavailable to its users by attempting to connect simultaneously to the victim machine using multiple hosts. It consists of the efforts to temporarily or indefinitely interrupt or suspend services of a host connected to the Internet. Target sites include web servers such as banks, payment gateways, etc.",
        description2:
          "The attack involves populating the target machine with a massive number of requests, so that it does not respond to legitimate traffic, or responds so slowly as to be rendered effectively unavailable. The objective of these attacks is to either force the target to reset or rapidly consume all its resources so that it can no longer provide its intended service.",
        description3:
          "There is always a threat of a DDoS attack irrespective of the type of industry. There is a need to be prepared to avoid such attacks. A professional team of DDoS attackers can help you to secure yourself from attacks.",
        //////////////Forensic Analysis/////////////////////
        forensic_analysis_definition:
          "Forensic analysis definition can be described as a detailed process of detecting, investigating, and documenting the reason, course, and consequences of a security incident or violation against state and organization laws. Forensic analysis is often used for providing evidence in court hearings, especially in criminal investigations. It employs wide range of investigative procedures and technologies.",
        tracking_digital_activity:
          "By tracking digital activity, investigators can relate digital information to physical evidence. Digital forensics can also allow investigators to discover planned attacks and prevent a crime from occurring. There are five critical forensic analysis components involved in conducting a detailed forensic analysis, all of which are involved in contributing towards a successful investigation.",
        developing_policy: "Developing Policy and Procedures",
        assessing_evidence: "Assess the Evidence",
        acquiring_evidence: "Acquire Evidence",
        examining_evidence: "Examining the Evidence",
        documenting_reporting: "Documenting and Reporting",

        //////////////////////////////////////////////GRC/////////////////////////////////////

        GRC_description:
          "Governance, Risk, and Compliance (GRC) is a structured way to align IT with business goals while managing risks and meeting all industry and government regulations. It includes tools and processes to unify an organization’s governance and risk management with its technological innovation and adoption. Companies use GRC to achieve organizational goals reliably, remove uncertainty, and meet compliance requirements.",
        GRC_stand_for: "What does GRC stand for?",
        GRC_stand_for_description:
          "GRC stands for governance, risk (management), and compliance. Most businesses are familiar with these terms but have practiced them separately in the past. GRC combines governance, risk management, and compliance in one coordinated model. This helps your company reduce wastage, increase efficiency, reduce noncompliance risk, and share information more effectively.",
        Governance: "Governance",
        Governance_description:
          "Governance is the set of policies, rules, or frameworks that a company uses to achieve its business goals. It defines the responsibilities of key stakeholders, such as the board of directors and senior management. For example, good corporate governance supports your team in including the company’s social responsibility policy in their plans. Good governance includes the following:",
        Ethics_and_accountability: "Ethics and Accountability",
        Transparent_information_sharing: "Transparent Information Sharing",
        Conflict_resolution_policies: "Conflict Resolution Policies",
        Resource_management: "Resource Management",
        Risk_management: "Risk Management",
        Risk_management_description:
          "Businesses face different types of risks, includingv financial, legal, strategic, and security risks. Proper risk management helps businesses identify these risks and find ways to remediate any that are found. Companies use an enterprise risk management program to predict potential problems and minimize losses. For example, you can use risk assessment to find security loopholes in your computer system and apply a fix.",
        Compliance: "Compliance",
        Compliance_description:
          "Compliance is the act of following rules, laws, and regulations. It applies to legal and regulatory requirements set by industrial bodies and also for internal corporate policies. In GRC, compliance involves implementing procedures to ensure that business activities comply with the respective regulations. For example, healthcare organizations must comply with laws like HIPAA that protect patients’ privacy.",
        Why_is_GRC_important: "Why is GRC important?",
        Why_is_GRC_important_description:
          "By implementing GRC programs, businesses can make better decisions in a risk-aware environment. An effective GRC program helps key stakeholders set policies from a shared perspective and comply with regulatory requirements. With GRC, the entire company comes together in its policies, decisions, and actions.",
        Benefits_of_GRC:
          "The following are some benefits of implementing a GRC strategy at your organization.",
        "Data-driven_decision-making": "Data-driven Decision Making",
        "Data-driven_decision-making_description":
          "You can make data-driven decisions within a shorter time frame by monitoring your resources, setting up rules or frameworks, and using GRC software and tools.",
        Responsible_operations: "Responsible Operations",
        Responsible_operations_description:
          "GRC streamlines operations around a common culture that promotes ethical values and creates a healthy environment for growth. It guides strong organizational culture development and ethical decision-making in the organization.",
        Improved_cybersecurity: "Improved Cybersecurity",
        Improved_cybersecurity_description:
          "With an integrated GRC approach, businesses can employ data security measures to protect customer data and private information. Implementing a GRC strategy is essential for your organization due to increasing cyber risk that threatens users’ data and privacy. It helps organizations comply with data privacy regulations like the General Data Protection Regulation (GDPR). With a GRC IT strategy, you build customer trust and protect your business from penalties.",
        NGFW_description:
          "Next Generation Firewalls (NGFW) refers to advanced network security devices that integrate traditional firewall capabilities with advanced security technologies such as intrusion prevention, application identification and control, and advanced threat detection. A Web Application Firewall (WAF) is a security solution that protects web applications from several forms of cyber attacks. It is designed to monitor the incoming and outgoing traffic to and from a web application and identify and block any malicious requests that could compromise the security of the application. The firewall filters the requests according to a set of predefined rules and policies based on the known vulnerabilities of the application, such as SQL injection, cross-site scripting, or file inclusion attacks. By implementing a WAF, organizations can effectively protect their web applications against common web application attacks, reduce the risk of data breaches, and ensure compliance with regulatory requirements.",
        CITC_Compliance: "CITC Compliance",
        CITC_Compliance_description:
          "(CITC Cybersecurity Regulatory Framework (CRF)) aims to increase the level of maturity of cybersecurity in communication and information technology sector in the Kingdom of Saudi Arabia, the framework aims to:",
        CITC_Compliance_point_1:
          "Organize and enable cybersecurity practices for service providers in communication, information technology, and the postal sector.",
        CITC_Compliance_point_2:
          "Raise the maturity level of cybersecurity in the communication and information technology sector.",
        CITC_Compliance_point_3:
          "Adopt risk management methodology to achieve cybersecurity requirements.",
        CITC_Compliance_point_4:
          "Ensure the confidentiality, safety, and availability of service provided to customers.",

        NCA_ECC_Compliance: "NCA ECC Compliance",
        NCA_ECC_Compliance_description:
          "The National Cybersecurity Authority (NCA) of Saudi Arabia developed the Essential Cybersecurity Controls in the year 2018. It was developed after a comprehensivestudy of various national and international Cyber Security Frameworks and Standards. The NCA ECC was developed to ensure organizations maintain and support the Cybersecurity initiative to protect the interests, national security, critical infrastructure, and government services. It was developed with an aim to set minimum Cybersecurity requirements for information and technology assets in organizations of Saudi Arabia. The controls requirements developed are based on industry-leading practices which intend to help organizations minimize Cybersecurity Risks. The Essential Cybersecurity Controls (ECC) comprises-",

        MainDomain: "5 Cybersecurity Main Domains.",
        SubDomain: " 29 Cybersecurity Sub-Domains.",
        CyberControls: " 114 Cybersecurity Controls.",
        ControlsOutlined:
          "The controls outlined were developed after a comprehensive review of all the legal, regulatory requirements, global Cybersecurity best practices analysis of Cybersecurity incidents, and attacks on government establishments, and considering opinions of various prominent business firms of the country. In addition to the ECC Standard, the National Cyber Security Authority of Saudi Arabia introduced Critical Systems Cybersecurity Controls (CSCC) in the year 2019. The NCA CSCC mandates the minimum Cybersecurity requirements for critical systems within national organizations.",
        /////////////////////ISO27001/////////////////
        iso_description:
          "ISO27001 is an international standard that is used to manage and ensure the security of information assets in an organization. The standard provides a framework for implementing a robust information security management system (ISMS) that includes policies, procedures, and controls designed to protect the confidentiality, integrity, and availability of information.",
        benefits_title1: "Benefits of ISO27001 include:",
        benefit_1a:
          "Enhanced information security: The standard provides a comprehensive framework to manage information security and protect information assets against a range of threats.",
        benefit_2a:
          "Regulatory compliance: Implementation of ISO 27001 helps organizations comply with various regulatory requirements related to information security such as NCA, CITC,CCC,SAMA",
        benefit_3a:
          "Improved business reputation: Demonstration of adherence to the standard helps organizations gain the trust of customers, stakeholders, and partners.",
        benefit_4a:
          "Risk management: Implementation of risk management processes in line with ISO27001 helps organizations identify and mitigate potential security risks proactively",
        benefit_5a:
          "Competitive advantage: Achieving certification to the standard can provide a competitive edge in the market, demonstrating a commitment to information security to clients, partners, and other stakeholders.",
        /////////////////Malware Anaklysis/////////////////////////
        malware_analysis: "MALWARE ANALYSIS",
        malware_description:
          "Malware analysis is the use of tools and procedures to understand the behavior and purpose of a suspicious file. The process aims to detect and mitigate any potential threat. This practical process enables analysts to understand the malware’s functions, purposes, and potential impact. To achieve this, security teams use malware analysis tools. They assess and evaluate specific malware samples, usually inside a contained environment called a sandbox.",
        incident_responders:
          "Incident responders and security analysts use malware analysis to:",
        identify_source: "Identify the source of an attack.",
        categorize_incidents: "Categorize incidents by the level of severity.",
        improve_efficiency:
          "Improve the efficiency of the incident response process.",
        evaluate_damage:
          "Evaluate the potential damage from a security threat.",
        enrich_processes: "Enrich threat hunting processes.",
        //////////////Security Services//////////////////////////
        managed_security_services:
          "Managed Security Services (MSS) refer to outsourcing security tasks and duties to third-party service providers. These services aim to enhance an organization’s security posture by providing advanced security measures, threat detection, and response capabilities.",
        benefits_of_mss:
          "The benefits of Managed Security Services for organizations include:",
        proactive_threat_detection:
          "Proactive Threat Detection: MSS providers use specialized tools and techniques to continuously monitor an organizations systems, networks, and applications for potential security threats.",
        reduced_security_risk:
          "Reduced Security Risk: Managed Security Services provide a holistic approach to security and help organizations mitigate risks associated with cybersecurity breaches.",
        cost_effective:
          "Cost-Effective: MSS reduces the need for in-house security teams and infrastructure, which in turn reduces the overall cost of maintaining a robust security posture.",
        expertise:
          "Expertise: Managed Security Services providers have experienced security personnel who possess extensive knowledge and skills required to handle complex security issues.",
        compliance_and_regulations:
          "Compliance and Regulations: MSS providers ensure that organizations comply with industry standards and regulations.",
        "24x7x365_support":
          "24x7x365 Support: MSS providers offer round-the-clock support to their clients and provide immediate response to prevent or mitigate security incidents.",
        business_continuity:
          "Business Continuity: MSS providers offer business continuity services that enable organizations to resume their operations in the event of security incidents or disasters.",
        ///////////////NetworkSecurity/////////////////
        network_security_operations:
          "Network and security operations refer to the processes and practices used by an organization to monitor, manage, and secure their computer networks and systems. This includes managing network infrastructure, monitoring network traffic, detecting and responding to security threats, and ensuring data protection and compliance with regulatory standards. Network and security operations involve a combination of hardware, software, and personnel, and typically include tools such as firewalls, intrusion detection systems, and security incident and event management (SIEM) platforms. Effective network and security operations play a crucial role in protecting an organization’s assets and maintaining the integrity and reliability of their network and systems.",
        ///////////////////PDPL//////////////////////////
        pdplDescription:
          "The Personal Data Protection Law (PDPL) is the first of its kind to be passed in the Kingdom of Saudi Arabia (KSA). The data protection rules were published in the government’s Official Gazette on September 24, 2021, and comes into effect on March 17, 2023. It regulates how businesses collect, process, and store personal data about individuals residing in the country.",
        pdplTitle:
          "What is Saudi Arabia’s Personal Data Protection Law (PDPL)?",
        pdplDescription2:
          "The Personal Data Protection Law (PDPL) is the first data protection law in Saudi Arabia. The law aims to protect the rights of individuals (data subjects or users) concerning their personal data, while also ensuring compliance with the principles of effective and responsible data protection.",
        pdplDescription3:
          "The PDPL will govern any kind of processing of personal data including collecting, using, storing, sharing, transferring, or updating of personal data of Saudi Arabia residents.",
        pdplDescription4:
          "The overall objective of PDPL is to ensure that all entities process personal data per the principles set out in PDPL. This includes ensuring that there is a legal basis for processing personal data, as well as ensuring that personal data is processed fairly, lawfully, transparently, and securely. In addition, safeguards should be put in place to protect personal data from loss, damage, or destruction.",
        pdplTitle2: "Who does PDPL apply to?",
        pdplDescription5:
          "The PDPL applies to entities (including public and private companies) and to their affiliates, that process the personal data of Saudi residents, to provide them goods or services. It also applies to entities operating outside Saudi Arabia, that process the personal data of Saudi residents.",
        pdplDescription6:
          "The law protects personal data that includes information that can be used to identify a natural person including a deceased person or their family members, and excludes information used for household or personal proposes.",
        ////////////Ransomware//////////////////
        ransomwareTitle: "Ransomware:",
        ransomwareDescription:
          "Ransomware preparedness assessment aims to identify where your defenses are strong and where vulnerabilities exist that ransomware actors can exploit. Our methodology focuses on the cyber kill chain, a comprehensive examination that includes remote access configuration, phishing prevention, email and web protections, access controls and endpoint monitoring and end user awareness. At the end of our assessment, we will provide you with a prioritized, customized set of recommendations to help your organization deflect, detect or respond to a ransomware attack.",
        ///////////////RiskAssesment///////////
        riskAssessmentDescription:
          "IT security risk assessments focus on identifying the threats facing your information systems, networks and data, and assessing the potential consequences you’d face should these adverse events occur. Risk assessments should be conducted on a regular basis (e.g. annually) and whenever major changes occur within your organization.",
        redTeamingTitle: "Red Teaming",
        redTeamingDescription:
          "Red Teaming is a security discipline originating in the military arena that simulates full-spectrum cyber-attacks. This allows you to measure your cyber defense’s effectiveness against malicious actors and allows your defenders to practice their detection and response capabilities in a controlled environment and validate or refine them. Lastly, the Red Team can also expose gaps in your overall security defense capabilities by targeting your organization and not being confined by the constraints of a regular penetration test.",
        /////////////vCISO///////////////////
        vCISODescription:
          "A vCISO (Virtual Chief Information Security Officer) is a contracted service that provides an organization with the expertise and guidance of a highly skilled and experienced CISO, but on a part-time or as-needed basis rather than a full-time employee. This allows smaller organizations without the ability to afford a full-time CISO to have access to a high-level cybersecurity professional.",
        vCISOBenefitsTitle: "Benefits of using a vCISO include:",
        vCISOBenefit1:
          "Cost-effective: Organizations can save money by only paying for a vCISOs services when they require them, rather than hiring a full-time CISO.",
        vCISOBenefit2:
          "Expertise: vCISOs are highly skilled and experienced cybersecurity professionals who can provide expert guidance and recommendations tailored to an organizations specific needs.",
        vCISOBenefit3:
          "Flexibility: A vCISOs availability can be tailored to an organizations needs, with the ability to scale up or down as required.",
        vCISOBenefit4:
          "Objective perspective: As a third-party, the vCISO can offer an objective perspective on an organizations security posture and make recommendations without any bias.",
        vCISOBenefit5:
          "Risk mitigation: A vCISO can help identify and prioritize risks, develop strategies to mitigate them, and regularly monitor and assess an organizations security posture to ensure ongoing risk reduction.",
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
        "DDoS Simulation": "محاكاة DDoS",
        "Compromise Assessment": "تقييم التسوية",
        "Risk Assessment": "تقييم المخاطر",
        "Governance, Risk Management, and Compliance SAMA/CITC/NCA":
          "الحوكمة وإدارة المخاطر والامتثال SAMA/CITC/NCA",
        "Forensic Analysis": "التحليل الجنائي",
        "Network & Security Operations": "عمليات الشبكة والأمن",
        vCISO: "vCISO الافتراضي",
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
        ///////////////////SolutionsApt//////////////////
        apt_description:
          "التهديد المستمر المتقدم (APT) هو هجوم إلكتروني مستهدف مصمم للوصول غير المصرح به إلى المعلومات أو الأنظمة الحساسة لفترة طويلة من الزمن. عادةً ما يتم تنفيذ هجمات APT بواسطة مهاجمين ماهرين وممولين جيدًا يستخدمون نواقل هجوم متعددة، بما في ذلك الهندسة الاجتماعية والبرامج الضارة ومجموعات الاستغلال، لتجاوز التدابير الأمنية التقليدية والوصول. وبمجرد دخولهم إلى النظام، يستخدم المهاجمون تقنيات متطورة للتحرك أفقيًا عبر الشبكة، وسرقة البيانات، والحفاظ على استمراريتها، وغالبًا ما يظلون غير مكتشفين لأشهر أو حتى سنوات. غالبًا ما ترتبط هجمات التهديدات المستمرة المستمرة (APT) بالجماعات التي ترعاها الدولة أو عصابات الجريمة المنظمة التي لديها الموارد والدوافع لشن هجمات مستهدفة ضد منظمات أو أفراد محددين.",
        ///////////////////Get in Touch Form/////////////////////
        contact_us: "تواصل معنا",
        speak_with_expert: "تحدث مع أحد الخبراء حول احتياجاتك المحددة",
        name: "اسم",
        enter_name: "أدخل الاسم",
        email: "البريد الإلكتروني",
        enter_email: "أدخل البريد الإلكتروني",
        phone: "هاتف",
        enter_number: "أدخل رقم",
        subject: "المادة",
        enter_subject: "أدخل الموضوع",
        message: "رسالة",
        enter_message: "أدخل رسالة",
        submit: "إرسال",
        ///////////////Breachand Attack////////////////
        breach_attack_content:
          "يعد حل محاكاة الاختراق والهجوم أداة محورية في استراتيجيات الأمن السيبراني الحديثة، وهو مصمم لتقييم وتحصين الدفاعات التنظيمية بشكل استباقي ضد التهديدات السيبرانية المحتملة. من خلال محاكاة سيناريوهات الهجوم الواقعية، مثل حملات التصيد الاحتيالي أو إصابات البرامج الضارة أو محاولات الوصول غير المصرح بها، يوفر هذا الحل رؤى لا تقدر بثمن حول الوضع الأمني ​​للمؤسسة. ومن خلال الاختبار والتحليل الشاملين، يمكن للشركات تحديد نقاط الضعف وتقييم فعالية التدابير الأمنية الحالية وتحديد أولويات جهود العلاج. لا يساعد هذا النهج الاستباقي في معالجة الثغرات الأمنية بشكل استباقي فحسب، بل يعمل أيضًا على تمكين فرق تكنولوجيا المعلومات من ضبط استراتيجيات الاستجابة للحوادث وتعزيز المرونة الشاملة. ومن خلال المحاكاة المستمرة لآليات الدفاع وتحسينها، يمكن للمؤسسات البقاء في صدارة التهديدات المتطورة، وحماية البيانات الحساسة، والحفاظ على الاستمرارية التشغيلية بثقة في دفاعات الأمن السيبراني الخاصة بها.",
        ///////////DigitalRights/////////////
        digital_rights_content:
          "تشير إدارة الحقوق الرقمية (DRM) إلى التقنيات والتقنيات المستخدمة للتحكم في الوصول إلى المحتوى الرقمي والبرامج واستخدامه. إنه نظام يتم تنفيذه عادةً من قبل منشئي المحتوى والناشرين لحماية ملكيتهم الفكرية من النسخ أو التوزيع أو النسخ غير المصرح به. قد تتضمن إدارة الحقوق الرقمية تشفير الوسائط الرقمية، أو التحكم في الوصول من خلال المفاتيح الرقمية، أو تحديد عدد الأجهزة التي يمكنها الوصول إلى المحتوى أو البرنامج. فهو يمكّن أصحاب حقوق الطبع والنشر من حماية حقوقهم والتأكد من حصولهم على أموال مقابل أعمالهم. ومع ذلك، تم انتقاد إدارة الحقوق الرقمية أيضًا بسبب احتمالية تقييد حقوق المستخدم، مما يجعل من الصعب استخدام المحتوى الذي تم شراؤه بشكل قانوني عبر أجهزة مختلفة، وإعاقة الابتكار.",
        ////////////SolutionsDetailContent/////////////

        edr_description:
          "إن اكتشاف نقطة النهاية والاستجابة لها (EDR) هو حل أمني يحمي من البرامج الضارة والتهديدات السيبرانية الأخرى التي يمكنها تجاوز برامج مكافحة الفيروسات التقليدية. تقوم حلول EDR بمراقبة نقاط النهاية (مثل أجهزة الكمبيوتر المحمولة وأجهزة الكمبيوتر المكتبية والخوادم) في الوقت الفعلي لاكتشاف التهديدات والاستجابة لها. تتضمن فوائد EDR تحسين اكتشاف التهديدات وأوقات استجابة أسرع وزيادة الرؤية لنشاط نقطة النهاية.",

        xdr_description:
          "يعد الكشف والاستجابة الموسعة (XDR) أداة تعمل على أتمتة اكتشاف التهديدات والاستجابة لها ومعالجتها عبر أدوات ومنصات أمان مختلفة. يجمع XDR البيانات من مصادر متعددة لتوفير رؤية أكثر شمولاً لمشهد التهديدات. تتضمن فوائد XDR تحسين التعاون بين فرق الأمان، والكشف عن التهديدات والاستجابة لها بشكل أسرع، وعمليات أمنية أكثر كفاءة.",

        ndr_description:
          "اكتشاف الشبكة والاستجابة لها (NDR) هو حل أمني يراقب حركة مرور الشبكة لاكتشاف التهديدات والاستجابة لها في الوقت الفعلي. تستخدم حلول NDR التحليلات المتقدمة والتعلم الآلي لتحديد التنبيهات وترتيب أولوياتها، مما يقلل من كمية النتائج الإيجابية الخاطئة. تتضمن فوائد NDR تحسين اكتشاف التهديدات وأوقات استجابة أسرع وزيادة الرؤية لنشاط الشبكة.",

        mdr_description:
          "الكشف والاستجابة المُدارة (MDR) هي خدمة للأمن السيبراني تكتشف التهديدات وتوفر الاستجابة للحوادث وتدير العمليات الأمنية للشركات. تستخدم خدمات MDR تقنيات متقدمة، مثل خوارزميات التعلم الآلي والذكاء الاصطناعي، لتحديد التهديدات والاستجابة لها في الوقت الفعلي. عادةً ما يقوم موفرو MDR بمراقبة نشاط الشبكة والسجلات ونقاط النهاية بحثًا عن علامات النشاط الضار، والتحقيق في أي تهديدات محتملة وتقييمها، والاستجابة بالإجراءات المناسبة لاحتواء تأثيرات أي حوادث أمنية والتخفيف من آثارها. تعتبر خدمات MDR ذات قيمة خاصة للمؤسسات ذات الموارد والخبرات المحدودة في مجال أمن تكنولوجيا المعلومات، حيث أنها توفر حلاً خارجيًا لتعزيز الحماية الشاملة لأنظمة وبيانات المؤسسة.",
        ///////////////////////Indentity Management/////////////////
        iam_description_1:
          "IAM هو إطار عمل لإدارة ومراقبة الوصول إلى الموارد داخل المؤسسة. يتضمن إدارة هويات المستخدمين والأجهزة والكيانات الأخرى التي تتفاعل مع أنظمة المؤسسة وتطبيقاتها وبياناتها.",
        iam_description_2:
          "توفر حلول IAM تحكمًا مركزيًا في وصول المستخدم إلى الموارد، وتسمح للمسؤولين بإدارة سياسات المصادقة والترخيص والتحكم في الوصول. إنها تمكن المؤسسات من فرض سياسات الأمان والحفاظ على الامتثال وتقليل مخاطر اختراق البيانات أو الوصول غير المصرح به إلى الموارد الحساسة.",
        iam_description_3:
          "تشتمل حلول IAM عادةً على ميزات مثل توفير المستخدم، والتسجيل الموحد (SSO)، والمصادقة متعددة العوامل (MFA)، وخدمات الدليل، وحوكمة الهوية وإدارتها (IGA)، وغيرها.",

        "Identity and Access Management": "إدارة الهوية والوصول",
        //////////////////NAC//////////////////////////
        nac_description:
          "التحكم في الوصول إلى الشبكة (NAC) هو حل أمني يساعد المؤسسات على التحكم في الوصول إلى شبكتها. تستخدم حلول NAC تقنيات مختلفة لمصادقة وتفويض المستخدمين والأجهزة التي تتصل بالشبكة، مما يضمن منح الوصول للأطراف المصرح لها فقط. يمكن أن يشمل ذلك طرقًا مثل التحقق من بيانات اعتماد المستخدم، وتقييم صحة الأجهزة المتصلة وامتثالها، والمطالبة بتثبيت برنامج أمان قبل السماح بالوصول. يمكن أن تساعد حلول NAC في منع الوصول غير المصرح به أو الضار إلى الشبكة وتقليل مخاطر الخروقات الأمنية.",
        /////////////////NetworkMonitoring///////////////////
        network_description:
          "تعد مراقبة الشبكات وحمايتها عنصرًا حاسمًا في أطر الأمن السيبراني الشاملة، التي تركز على حماية سلامة وأمن الشبكات التنظيمية. يتضمن هذا الحل المراقبة والتحليل المستمر لحركة مرور الشبكة، واكتشاف التهديدات المحتملة والتخفيف من حدتها في الوقت الفعلي. من خلال مراقبة نشاط الشبكة، بما في ذلك حزم البيانات الواردة والصادرة، يحدد هذا الحل الأنماط المشبوهة ومحاولات الوصول غير المصرح بها ونقاط الضعف المحتملة التي قد تهدد أمان الشبكة. توفر أدوات المراقبة المتقدمة رؤية لمقاييس أداء الشبكة، مما يضمن الأداء الأمثل مع تنبيه فرق تكنولوجيا المعلومات أيضًا إلى الحالات الشاذة التي قد تشير إلى نشاط ضار أو مشكلات تشغيلية. ومن خلال الاستفادة من المراقبة الاستباقية وآليات الدفاع القوية، يمكن للمؤسسات الدفاع بشكل فعال ضد التهديدات السيبرانية، والحفاظ على سرية البيانات، ودعم توافر الشبكة، وبالتالي حماية الأصول الحيوية وضمان عدم انقطاع العمليات التجارية.",
        firewallDescription:
          "يشير الجيل التالي من جدران الحماية (NGFW) إلى أجهزة أمان الشبكة المتقدمة التي تدمج إمكانات جدار الحماية التقليدية مع تقنيات الأمان المتقدمة مثل منع التطفل وتحديد التطبيقات والتحكم فيها واكتشاف التهديدات المتقدمة. جدار حماية تطبيقات الويب (WAF) هو حل أمني يحمي تطبيقات الويب من عدة أشكال من الهجمات السيبرانية. وهو مصمم لمراقبة حركة المرور الواردة والصادرة من وإلى تطبيق الويب وتحديد وحظر أي طلبات ضارة يمكن أن تهدد أمان التطبيق. يقوم جدار الحماية بتصفية الطلبات وفقًا لمجموعة من القواعد والسياسات المحددة مسبقًا استنادًا إلى نقاط الضعف المعروفة في التطبيق، مثل حقن SQL أو البرمجة النصية عبر المواقع أو هجمات تضمين الملفات. من خلال تنفيذ WAF، يمكن للمؤسسات حماية تطبيقات الويب الخاصة بها بشكل فعال ضد هجمات تطبيقات الويب الشائعة، وتقليل مخاطر خروقات البيانات، وضمان الامتثال للمتطلبات التنظيمية.",
        //////////////PAM//////////////
        pamDescription:
          "تشير إدارة الوصول إلى الامتيازات (PAM) إلى مجموعة العمليات والأدوات والسياسات المصممة لإدارة والتحكم في وصول المستخدم المميز في المؤسسة. يهدف PAM إلى تحديد المستخدمين المميزين والتحكم بهم ومستويات وصولهم وامتيازاتهم داخل النظام أو الشبكة. يتضمن ذلك أنشطة مثل إدارة كلمات المرور، وتقييد الوصول إلى الأنظمة الحساسة، وفرض مساءلة المستخدم، ومراقبة نشاط المستخدم. هدف PAM هو تقليل مخاطر خروقات البيانات وحماية الأصول الهامة عن طريق قصر الوصول على المستخدمين المصرح لهم فقط الذين يحتاجون إلى وصول متميز لأداء واجباتهم.",
        //////////////PatchManagement//////////////
        patchManagement1:
          "إدارة التصحيح هي عملية تحديد تحديثات البرامج (التصحيحات) والحصول عليها واختبارها وتثبيتها لمعالجة الثغرات الأمنية ومشكلات الأداء والأخطاء الأخرى في أنظمة التشغيل والتطبيقات والبرامج الثابتة. تساعد إدارة التصحيح في الحفاظ على أمان واستقرار وموثوقية أنظمة الكمبيوتر والشبكات من خلال التأكد من تحديث كافة مكونات البرامج بأحدث التصحيحات التي يصدرها البائعون. يمكن أن يشمل ذلك تصحيحات نظام التشغيل بالإضافة إلى تصحيحات للتطبيقات الفردية. تتطلب إدارة التصحيح الفعالة التخطيط السليم والاختبار وإجراءات التحكم في التغيير لتقليل المخاطر التي تتعرض لها المؤسسة.",
        vulnerabilityManagement:
          "إدارة الثغرات الأمنية هي عملية تحديد وتقييم وتحديد الأولويات والتخفيف من الثغرات الأمنية في البنية التحتية لتكنولوجيا المعلومات في المؤسسة. يتضمن ذلك العثور على نقاط الضعف في البرامج والأجهزة وإعدادات التكوين التي يمكن استغلالها من قبل المهاجمين السيبرانيين لانتهاك أمان المؤسسة. تتضمن إدارة الثغرات الأمنية أيضًا تنفيذ استجابات فعالة وفي الوقت المناسب لنقاط الضعف المحددة، بما في ذلك التصحيح وتحديث البرامج وتطبيق التدابير الأمنية لمنع الاستغلال. الهدف من إدارة الثغرات الأمنية هو تقليل المخاطر التي تتعرض لها المنظمة عن طريق تقليل احتمالية الهجمات الإلكترونية الناجحة",

        /////////////SolutionsThreat//////////
        threatIntelligence:
          "الاستخبارات المتعلقة بالتهديدات هي جمع وتحليل ونشر المعلومات المتعلقة بالتهديدات الأمنية والمخاطر التي تهدد الأصول التنظيمية أو البنية التحتية. ويتضمن استخدام مصادر مختلفة للمعلومات، مثل السجلات الداخلية والموجزات الخارجية والاستخبارات البشرية، لتحديد المخاطر الأمنية المحتملة والتخفيف منها. الهدف من الاستخبارات الأمنية والتهديدات هو تزويد المؤسسات بالمعرفة والأدوات التي تحتاجها لتوقع التهديدات والهجمات السيبرانية واكتشافها والاستجابة لها. يمكن استخدام هذه المعلومات لمنع الهجمات وتقليل الضرر والتعافي بسرعة من الحادث.",
        "Threat Intelligence": "استخبارات التهديد",
        //////////AssesmentTesting//////////
        cyber_attacks:
          "في عصر إنترنت الأشياء، نشهد انتشارًا للهجمات الإلكترونية المتطورة التي تستهدف المؤسسات والشركات. قد تكون الهجمات السيبرانية غير ملموسة، ولكن آثارها محسوسة بشكل حاد: هناك خطر متزايد من التعطيل، وفقدان المعلومات، والإضرار بالسمعة والتكلفة المادية للعملاء في مختلف المجالات. تتيح خدمات تقييم الثغرات الأمنية (VA) التي تقدمها Depth Defense للعملاء الحصول على معرفة أفضل بنقاط الضعف لديهم وكيفية معالجتها. وللارتقاء بالأمور إلى المستوى التالي، يمكن لمستشار الأمن السيبراني المعتمد لدى Depth Defense إجراء اختبار الاختراق (PT) الذي يوضح كيف يمكن استغلال هذه الثغرات الأمنية ضد مصلحة العملاء.",
        va_and_pt:
          "يمثل VA وPT الخطوة الأولى والتالية في رحلة الأمن السيبراني. يمكن للعملاء الاستمتاع بخدمات بأسعار معقولة من Depth Defense وحماية أعمالهم بشكل أفضل ضد الثغرات والهجمات المحتملة. من خلال تقرير VA الشامل الذي يصدره مستشارونا، يصبح العملاء على دراية جيدة بالوضع الحالي لأمن معلوماتهم ويمكنهم الاستجابة من خلال تشكيل السياسات المقابلة. يوضح PT، كامتداد لـ VA، إمكانية استغلال العملاء من خلال مهاجمة أنظمتهم في بيئة اصطناعية. يمكن للعملاء تجربة السيناريو الأسوأ دون تكبد أضرار فعلية.",
        intrusion_testing:
          "من خلال استخدام مجموعة من أدوات اختبار التسلل وتقنيات الاستغلال اليدوية، سيقوم فريق ذو خبرة من خبراء الدفاع العميق بإجراء تحليل عميق لشبكات معلومات العملاء لتحديد مدى نقاط الضعف لديهم، والتي سيتم تصنيفها وفقًا لمعايير الأهمية، وقابلية الاستغلال، التأثير والاحتمالية لتحديد مستويات المخاطر الأساسية. سيتم استغلال نقاط الضعف هذه من قبل مستشارنا في البيئة الاصطناعية. تم توثيق تفاصيل المشكلات المكتشفة في التقرير للمساعدة في توضيح الوضع الحالي لوضع أمان تكنولوجيا المعلومات لديهم.",

        "Vulnerability Assessment and Penetration Testing":
          "تقييم نقاط الضعف واختبار الاختراق",
        /////////Security Assesment////////////
        app_security_assessment:
          "تقييم أمان التطبيقات هو عملية اختبار التطبيقات للعثور على التهديدات وتحديد التدابير الواجب اتخاذها للدفاع ضدها. ومن خلال عملية التقييم، يمكن للمؤسسات تقييم الوضع الأمني ​​الحالي لتطبيقاتها وتحديد الخطوات التالية لمزيد من حماية برامجها من عمليات الاستغلال المستقبلية. تجري معظم المؤسسات تقييمات أمان التطبيقات بشكل منتظم للتأكد من أن إجراءاتها الأمنية محدثة وفعالة.",
        threat_identification:
          "يمكن للتقييم الشامل لأمن التطبيقات أن يمكّن المؤسسات من تحديد التهديدات المحتملة لبرامجها وتطبيقاتها قبل أن تصبح مشكلة. تمثل الحوادث الأمنية خطرًا كبيرًا على بيئة الأعمال القائمة على البرمجيات اليوم لأنها يمكن أن يكون لها تأثير سلبي على سمعة الشركة وإيراداتها. في العديد من الصناعات، قد تكون تقييمات أمان التطبيقات مطلوبة للامتثال لقوانين ولوائح الأمن السيبراني. على سبيل المثال، تقترح معايير PCI الالتزام بإرشادات OWASP العشرة الأوائل.",
        /////////////CompromiseAssesment///////////////
        compromise_assessment_description:
          "تقييمات الاختراق هي تحقيقات رفيعة المستوى حيث تستخدم الفرق الماهرة أدوات متقدمة للتعمق أكثر في بيئتها لتحديد نشاط المهاجم الحالي أو السابق بالإضافة إلى تحديد نقاط الضعف الموجودة في الضوابط والممارسات. الهدف من التقييم الشامل هو الإجابة على السؤال الحاسم: ”هل تم اختراق مؤسستي؟“",
        benefit_1:
          "على الرغم من التقدم في تقنيات الأمن السيبراني والزيادات في ميزانيات الأمن، ظل متوسط ​​فترات الإقامة دون تغيير إلى حد كبير على مر السنين. وقت المكوث هو مقدار الوقت بين دخول المهاجم إلى الشبكة وطرده. يعد تقليل وقت المكوث أمرًا مهمًا لأنه كلما طالت مدة قدرة جهة التهديد على العمل دون أن يتم اكتشافها داخل الشبكة، زاد الوقت المتاح لها للعثور على طريق إلى الأصول الأكثر قيمة، وتعلم كيفية التغلب على الدفاعات، وتثبيت الأبواب الخلفية، وتسلل البيانات. تعتبر هذه التهديدات المستمرة المتقدمة (APTs) ضارة ومكلفة، ولكن يمكن كشفها من خلال تقييم التسوية.",
        benefit_2:
          "إن عمق واتساع نطاق تقييم التسوية يسمح للمؤسسات بتحديد ما إذا كانت الجهات الفاعلة التهديدية موجودة أو ما إذا تم اختراقها. ويؤدي هذا التحديد المستمد من التحليل الشامل إلى تقليل المخاطر الأمنية المتمثلة في قيام المهاجمين بسرقة الأصول المالية أو بيانات العملاء أو الملكية الفكرية.",
        benefit_3:
          "تم تحسين الوضع الأمني ​​من خلال التحديد الاستباقي للممارسات الأمنية غير الفعالة مثل أخطاء التكوين وتضارب السياسات التي يمكن أن تترك فجوات وتعرض المؤسسات لمخاطر أكبر. ومن شأن التقييم التوفيقي أن يكشف نقاط الضعف هذه ويمهد الطريق نحو علاجها. ستكون المنظمات قادرة على الإجابة على السؤال ”هل تم اختراق مؤسستي؟“ كما سيقدم اقتراحات للتحسينات المستقبلية التي يمكن استخدامها لتوجيه القرارات المتعلقة بالميزانية والموارد في المستقبل. وأخيرًا، تعد تقييمات التسوية إلزامية بموجب بعض اللوائح، ولكن حتى إذا لم تكن المنظمة مشمولة بأحد تلك المعايير المحددة، فإن إثبات تقييم التسوية سيكون له وزن لدى المدققين.",
        benefits_title: "تشمل فوائد استخدام vCISO ما يلي:",
        ////////////////DDOS////////////////
        "DDoS Simulation1": "محاكاة DDoS",
        description1:
          "محاكاة DDoS هي محاولة لجعل النظام أو جهاز الشبكة غير متاح لمستخدميه من خلال محاولة الاتصال بالجهاز الضحية في وقت واحد باستخدام مضيفين متعددين. وهو يتألف من الجهود المبذولة لمقاطعة أو تعليق خدمات مضيف متصل بالإنترنت بشكل مؤقت أو إلى أجل غير مسمى. تشمل المواقع المستهدفة خوادم الويب مثل البنوك وبوابات الدفع وما إلى ذلك.",
        description2:
          "يتضمن الهجوم ملء الجهاز المستهدف بعدد هائل من الطلبات، بحيث لا يستجيب لحركة المرور المشروعة، أو يستجيب ببطء شديد بحيث يصبح غير متاح بشكل فعال. الهدف من هذه الهجمات هو إما إجبار الهدف على إعادة ضبط جميع موارده أو استهلاكها بسرعة بحيث لا يتمكن من تقديم الخدمة المقصودة.",
        description3:
          "هناك دائمًا تهديد بهجوم DDoS بغض النظر عن نوع الصناعة. ومن الضروري أن نكون مستعدين لتجنب مثل هذه الهجمات. يمكن لفريق محترف من مهاجمي DDoS مساعدتك في تأمين نفسك من الهجمات.",
        //////////////Forensic Analysis/////////////////////
        forensic_analysis_definition:
          "يمكن وصف تعريف تحليل الطب الشرعي بأنه عملية تفصيلية للكشف والتحقيق وتوثيق سبب ومسار وعواقب حادث أمني أو انتهاك لقوانين الدولة والمنظمة. غالبًا ما يستخدم تحليل الطب الشرعي لتقديم الأدلة في جلسات المحكمة، وخاصة في التحقيقات الجنائية. ويستخدم مجموعة واسعة من إجراءات وتقنيات التحقيق.",
        tracking_digital_activity:
          "ومن خلال تتبع النشاط الرقمي، يمكن للمحققين ربط المعلومات الرقمية بالأدلة المادية. يمكن للطب الشرعي الرقمي أيضًا أن يسمح للمحققين باكتشاف الهجمات المخطط لها ومنع وقوع الجريمة. هناك خمسة مكونات هامة لتحليل الطب الشرعي تشارك في إجراء تحليل الطب الشرعي المفصل، وجميعها تشارك في المساهمة في تحقيق ناجح.",
        developing_policy: "تطوير السياسات والإجراءات",
        assessing_evidence: "تقييم الأدلة",
        acquiring_evidence: "الحصول على الأدلة",
        examining_evidence: "فحص الأدلة",
        documenting_reporting: "التوثيق وإعداد التقارير",

        ///////////////GRC////////////////////

        GRC_description:
          "تعد الحوكمة والمخاطر والامتثال (GRC) طريقة منظمة لمواءمة تكنولوجيا المعلومات مع أهداف العمل أثناء إدارة المخاطر وتلبية جميع لوائح الصناعة والحكومة. ويتضمن أدوات وعمليات لتوحيد حوكمة المؤسسة وإدارة المخاطر مع ابتكاراتها التكنولوجية واعتمادها. تستخدم الشركات مركز الخليج للأبحاث لتحقيق الأهداف التنظيمية بشكل موثوق، وإزالة عدم اليقين، وتلبية متطلبات الامتثال.",
        GRC_stand_for: "ماذا يعني GRC؟",
        GRC_stand_for_description:
          "يرمز GRC إلى الحوكمة وإدارة المخاطر والامتثال. معظم الشركات على دراية بهذه المصطلحات ولكنها مارستها بشكل منفصل في الماضي. يجمع مركز الخليج للأبحاث بين الحوكمة وإدارة المخاطر والامتثال في نموذج واحد منسق. وهذا يساعد شركتك على تقليل الهدر، وزيادة الكفاءة، وتقليل مخاطر عدم الامتثال، ومشاركة المعلومات بشكل أكثر فعالية.",
        Governance: "الحوكمة",
        Governance_description:
          "الحوكمة هي مجموعة السياسات أو القواعد أو الأطر التي تستخدمها الشركة لتحقيق أهداف أعمالها. ويحدد مسؤوليات أصحاب المصلحة الرئيسيين، مثل مجلس الإدارة والإدارة العليا. على سبيل المثال، تدعم حوكمة الشركات الجيدة فريقك في تضمين سياسة المسؤولية الاجتماعية للشركة في خططهم. تتضمن الإدارة الجيدة ما يلي:",
        Ethics_and_accountability: "الأخلاق والمساءلة",
        Transparent_information_sharing: "مشاركة شفافة للمعلومات",
        Conflict_resolution_policies: "سياسات حل الصراعات",
        Resource_management: "إدارة الموارد",
        Risk_management: "إدارة المخاطر",
        Risk_management_description:
          "تواجه الشركات أنواعًا مختلفة من المخاطر، بما في ذلك المخاطر المالية والقانونية والاستراتيجية والأمنية. تساعد الإدارة السليمة للمخاطر الشركات على تحديد هذه المخاطر وإيجاد طرق لمعالجة أي مخاطر يتم العثور عليها. تستخدم الشركات برنامج إدارة مخاطر المؤسسة للتنبؤ بالمشاكل المحتملة وتقليل الخسائر. على سبيل المثال، يمكنك استخدام تقييم المخاطر للعثور على ثغرات أمنية في نظام الكمبيوتر الخاص بك وتطبيق الإصلاح.",
        Compliance: "امتثال",
        Compliance_description:
          "الامتثال هو فعل اتباع القواعد والقوانين واللوائح. وينطبق على المتطلبات القانونية والتنظيمية التي تضعها الهيئات الصناعية وكذلك على السياسات الداخلية للشركات. في مركز الخليج للأبحاث، يتضمن الامتثال تنفيذ إجراءات لضمان امتثال الأنشطة التجارية للوائح ذات الصلة. على سبيل المثال، يجب على مؤسسات الرعاية الصحية الالتزام بقوانين مثل HIPAA التي تحمي خصوصية المرضى.",
        Why_is_GRC_important: "لماذا يعتبر مركز الخليج للأبحاث مهماً؟",
        Why_is_GRC_important_description:
          "ومن خلال تنفيذ برامج مركز الخليج للأبحاث، يمكن للشركات اتخاذ قرارات أفضل في بيئة واعية بالمخاطر. يساعد برنامج GRC الفعال أصحاب المصلحة الرئيسيين على وضع السياسات من منظور مشترك والامتثال للمتطلبات التنظيمية. مع مركز الخليج للأبحاث، تجتمع الشركة بأكملها معًا في سياساتها وقراراتها وإجراءاتها.",
        Benefits_of_GRC:
          "فيما يلي بعض فوائد تنفيذ استراتيجية مركز الخليج للأبحاث في مؤسستك.",
        "Data-driven_decision-making": "اتخاذ القرارات المستندة إلى البيانات",
        "Data-driven_decision-making_description":
          "يمكنك اتخاذ قرارات مبنية على البيانات خلال إطار زمني أقصر من خلال مراقبة مواردك، وإعداد القواعد أو الأطر، واستخدام برامج وأدوات مركز الخليج للأبحاث.",
        Responsible_operations: "العمليات المسؤولة",
        Responsible_operations_description:
          "يقوم مركز الخليج للأبحاث بتبسيط العمليات حول ثقافة مشتركة تعزز القيم الأخلاقية وتخلق بيئة صحية للنمو. وهو يوجه تطوير الثقافة التنظيمية القوية واتخاذ القرارات الأخلاقية في المنظمة.",
        Improved_cybersecurity: "تحسين الأمن السيبراني",
        Improved_cybersecurity_description:
          "من خلال نهج GRC المتكامل، يمكن للشركات استخدام تدابير أمن البيانات لحماية بيانات العملاء والمعلومات الخاصة. يعد تنفيذ إستراتيجية GRC أمرًا ضروريًا لمؤسستك نظرًا لزيادة المخاطر السيبرانية التي تهدد بيانات المستخدمين وخصوصيتهم. فهو يساعد المؤسسات على الامتثال للوائح خصوصية البيانات مثل اللائحة العامة لحماية البيانات (GDPR). من خلال استراتيجية تكنولوجيا المعلومات الخاصة بشركة GRC، يمكنك بناء ثقة العملاء وحماية عملك من العقوبات.",
        NGFW_description:
          "يشير الجيل التالي من جدران الحماية (NGFW) إلى أجهزة أمان الشبكة المتقدمة التي تدمج إمكانات جدار الحماية التقليدية مع تقنيات الأمان المتقدمة مثل منع التطفل وتحديد التطبيقات والتحكم فيها واكتشاف التهديدات المتقدمة. جدار حماية تطبيقات الويب (WAF) هو حل أمني يحمي تطبيقات الويب من عدة أشكال من الهجمات السيبرانية. وهو مصمم لمراقبة حركة المرور الواردة والصادرة من وإلى تطبيق الويب وتحديد وحظر أي طلبات ضارة يمكن أن تهدد أمان التطبيق. يقوم جدار الحماية بتصفية الطلبات وفقًا لمجموعة من القواعد والسياسات المحددة مسبقًا استنادًا إلى نقاط الضعف المعروفة في التطبيق، مثل حقن SQL أو البرمجة النصية عبر المواقع أو هجمات تضمين الملفات. من خلال تنفيذ WAF، يمكن للمؤسسات حماية تطبيقات الويب الخاصة بها بشكل فعال ضد هجمات تطبيقات الويب الشائعة، وتقليل مخاطر خروقات البيانات، وضمان الامتثال للمتطلبات التنظيمية.",
        CITC_Compliance: "الامتثال ل CITC",
        CITC_Compliance_description:
          "يهدف الإطار التنظيمي للأمن السيبراني (CRF) لهيئة الاتصالات وتقنية المعلومات (CITC) إلى زيادة مستوى نضج الأمن السيبراني في قطاع الاتصالات وتقنية المعلومات في المملكة العربية السعودية، ويهدف الإطار إلى:",
        CITC_Compliance_point_1:
          "تنظيم وتمكين ممارسات الأمن السيبراني لمقدمي الخدمات في مجال الاتصالات وتكنولوجيا المعلومات وقطاع البريد.",
        CITC_Compliance_point_2:
          "رفع مستوى نضج الأمن السيبراني في قطاع الاتصالات وتقنية المعلومات.",
        CITC_Compliance_point_3:
          "اعتماد منهجية إدارة المخاطر لتحقيق متطلبات الأمن السيبراني.",
        CITC_Compliance_point_4:
          "التأكد من سرية وسلامة وتوافر الخدمة المقدمة للعملاء.",

        NCA_ECC_Compliance: "امتثال NCA ECC",
        NCA_ECC_Compliance_description:
          "قامت الهيئة الوطنية للأمن السيبراني (NCA) في المملكة العربية السعودية بتطوير ضوابط الأمن السيبراني الأساسية في عام 2018. وقد تم تطويرها بعد دراسة شاملة لمختلف أطر ومعايير الأمن السيبراني الوطنية والدولية. تم تطوير NCA ECC لضمان احتفاظ المؤسسات بمبادرة الأمن السيبراني ودعمها لحماية المصالح والأمن القومي والبنية التحتية الحيوية والخدمات الحكومية. تم تطويره بهدف تحديد الحد الأدنى من متطلبات الأمن السيبراني لأصول المعلومات والتكنولوجيا في مؤسسات المملكة العربية السعودية. تعتمد متطلبات الضوابط التي تم تطويرها على الممارسات الرائدة في الصناعة والتي تهدف إلى مساعدة المؤسسات على تقليل مخاطر الأمن السيبراني. تشتمل ضوابط الأمن السيبراني الأساسية (ECC) على ما يلي:",

        MainDomain: "5 المجالات الرئيسية للأمن السيبراني.",
        SubDomain: " 29 المجالات الفرعية للأمن السيبراني.",
        CyberControls: "114 ضوابط الأمن السيبراني.",
        ControlsOutlined:
          "تم تطوير الضوابط الموضحة بعد مراجعة شاملة لجميع المتطلبات القانونية والتنظيمية، وتحليل أفضل ممارسات الأمن السيبراني العالمية لحوادث الأمن السيبراني، والهجمات على المؤسسات الحكومية، والنظر في آراء مختلف الشركات التجارية البارزة في البلاد. بالإضافة إلى معيار ECC، قدمت الهيئة الوطنية للأمن السيبراني في المملكة العربية السعودية ضوابط الأمن السيبراني للأنظمة الحرجة (CSCC) في عام 2019. وتفرض NCA CSCC الحد الأدنى من متطلبات الأمن السيبراني للأنظمة الحيوية داخل المنظمات الوطنية.",
        /////////////////////ISO27001/////////////////
        iso_description:
          "ISO27001 هو معيار دولي يُستخدم لإدارة وضمان أمان أصول المعلومات في المؤسسة. يوفر المعيار إطارًا لتنفيذ نظام قوي لإدارة أمن المعلومات (ISMS) يتضمن السياسات والإجراءات والضوابط المصممة لحماية سرية المعلومات وسلامتها وتوافرها.",
        benefits_title1: "تشمل فوائد ISO27001 ما يلي:",
        benefit_1a:
          "تعزيز أمن المعلومات: يوفر المعيار إطارًا شاملاً لإدارة أمن المعلومات وحماية أصول المعلومات ضد مجموعة من التهديدات.",
        benefit_2a:
          "الامتثال التنظيمي: يساعد تطبيق ISO 27001 المؤسسات على الامتثال للمتطلبات التنظيمية المختلفة المتعلقة بأمن المعلومات مثل NCA وCITC وCCC وSAMA",
        benefit_3a:
          "تحسين سمعة الأعمال: يساعد إثبات الالتزام بالمعيار المؤسسات على اكتساب ثقة العملاء وأصحاب المصلحة والشركاء.",
        benefit_4a:
          "إدارة المخاطر: يساعد تنفيذ عمليات إدارة المخاطر بما يتماشى مع ISO27001 المؤسسات على تحديد المخاطر الأمنية المحتملة وتخفيفها بشكل استباقي",
        benefit_5a:
          "الميزة التنافسية: الحصول على شهادة المعيار يمكن أن يوفر ميزة تنافسية في السوق، مما يدل على الالتزام بأمن المعلومات للعملاء والشركاء وأصحاب المصلحة الآخرين.",
        /////////////////Malware Anaklysis/////////////////////////
        malware_analysis: "تحليل البرامج الضارة",
        malware_description:
          "تحليل البرامج الضارة هو استخدام الأدوات والإجراءات لفهم سلوك الملف المشبوه والغرض منه. وتهدف العملية إلى اكتشاف وتخفيف أي تهديد محتمل. تتيح هذه العملية العملية للمحللين فهم وظائف البرامج الضارة وأغراضها وتأثيرها المحتمل. ولتحقيق ذلك، تستخدم فرق الأمان أدوات تحليل البرامج الضارة. يقومون بتقييم وتقييم عينات معينة من البرامج الضارة، عادةً داخل بيئة محتواة تسمى صندوق الحماية.",
        incident_responders:
          "يستخدم المستجيبون للحوادث ومحللو الأمن تحليل البرامج الضارة من أجل:",
        identify_source: "تحديد مصدر الهجوم.",
        categorize_incidents: "تصنيف الحوادث حسب مستوى خطورتها.",
        improve_efficiency: "تحسين كفاءة عملية الاستجابة للحوادث.",
        evaluate_damage: "تقييم الضرر المحتمل من التهديد الأمني.",
        enrich_processes: "إثراء عمليات البحث عن التهديدات.",
        //////////////Security Services//////////////////////////
        managed_security_services:
          "تشير خدمات الأمن المُدارة (MSS) إلى الاستعانة بمصادر خارجية في مهام وواجبات الأمان لمقدمي خدمات الطرف الثالث. تهدف هذه الخدمات إلى تعزيز الوضع الأمني ​​للمؤسسة من خلال توفير تدابير أمنية متقدمة واكتشاف التهديدات وقدرات الاستجابة.",
        benefits_of_mss: "تشمل فوائد خدمات الأمن المُدارة للمؤسسات ما يلي:",
        proactive_threat_detection:
          "الكشف الاستباقي عن التهديدات: يستخدم موفرو MSS أدوات وتقنيات متخصصة للمراقبة المستمرة لأنظمة المؤسسة وشبكاتها وتطبيقاتها بحثًا عن التهديدات الأمنية المحتملة.",
        reduced_security_risk:
          "تقليل المخاطر الأمنية: توفر خدمات الأمن المُدارة نهجًا شاملاً للأمن وتساعد المؤسسات على تخفيف المخاطر المرتبطة بانتهاكات الأمن السيبراني.",
        cost_effective:
          "فعالة من حيث التكلفة: تعمل خدمات MSS على تقليل الحاجة إلى فرق الأمان والبنية التحتية الداخلية، مما يؤدي بدوره إلى تقليل التكلفة الإجمالية للحفاظ على وضع أمني قوي.",
        expertise:
          "الخبرة: يتمتع مقدمو خدمات الأمن المُدارة بموظفي أمن ذوي خبرة يمتلكون معرفة ومهارات واسعة مطلوبة للتعامل مع المشكلات الأمنية المعقدة.",
        compliance_and_regulations:
          "الامتثال واللوائح: يضمن مقدمو خدمات MSS امتثال المؤسسات لمعايير ولوائح الصناعة.",
        "24x7x365_support":
          "الدعم على مدار 24 ساعة طوال أيام الأسبوع: يقدم موفرو MSS دعمًا على مدار الساعة لعملائهم ويوفرون استجابة فورية لمنع الحوادث الأمنية أو تخفيفها.",
        business_continuity:
          "استمرارية الأعمال: يقدم موفرو MSS خدمات استمرارية الأعمال التي تمكن المؤسسات من استئناف عملياتها في حالة وقوع حوادث أمنية أو كوارث.",
        ///////////////NetworkSecurity/////////////////
        network_security_operations:
          "تشير عمليات الشبكة والأمن إلى العمليات والممارسات التي تستخدمها المؤسسة لمراقبة وإدارة وتأمين شبكات وأنظمة الكمبيوتر الخاصة بها. يتضمن ذلك إدارة البنية التحتية للشبكة، ومراقبة حركة مرور الشبكة، واكتشاف التهديدات الأمنية والاستجابة لها، وضمان حماية البيانات والامتثال للمعايير التنظيمية. تتضمن عمليات الشبكة والأمن مجموعة من الأجهزة والبرامج والموظفين، وتتضمن عادةً أدوات مثل جدران الحماية وأنظمة كشف التسلل ومنصات إدارة الأحداث والحوادث الأمنية (SIEM). تلعب عمليات الشبكة والأمن الفعالة دورًا حاسمًا في حماية أصول المؤسسة والحفاظ على سلامة وموثوقية شبكتها وأنظمتها.",
        ///////////////////PDPL//////////////////////////
        pdplDescription:
          "يعد قانون حماية البيانات الشخصية (PDPL) هو الأول من نوعه الذي يتم إقراره في المملكة العربية السعودية. نُشرت قواعد حماية البيانات في الجريدة الرسمية للحكومة في 24 سبتمبر 2021، ودخلت حيز التنفيذ في 17 مارس 2023. وهي تنظم كيفية قيام الشركات بجمع ومعالجة وتخزين البيانات الشخصية حول الأفراد المقيمين في الدولة.",
        pdplTitle: "ما هو قانون حماية البيانات الشخصية السعودي (PDPL)؟",
        pdplDescription2:
          "يعد نظام حماية البيانات الشخصية (PDPL) أول قانون لحماية البيانات في المملكة العربية السعودية. ويهدف القانون إلى حماية حقوق الأفراد (أصحاب البيانات أو المستخدمين) فيما يتعلق ببياناتهم الشخصية، مع ضمان الامتثال أيضًا لمبادئ حماية البيانات بشكل فعال ومسؤول.",
        pdplDescription3:
          "سيحكم قانون حماية البيانات الشخصية أي نوع من معالجة البيانات الشخصية بما في ذلك جمع أو استخدام أو تخزين أو مشاركة أو نقل أو تحديث البيانات الشخصية للمقيمين في المملكة العربية السعودية.",
        pdplDescription4:
          "الهدف العام لـ PDPL هو التأكد من أن جميع الكيانات تعالج البيانات الشخصية وفقًا للمبادئ المنصوص عليها في PDPL. يتضمن ذلك ضمان وجود أساس قانوني لمعالجة البيانات الشخصية، بالإضافة إلى ضمان معالجة البيانات الشخصية بشكل عادل وقانوني وشفاف وآمن. بالإضافة إلى ذلك، ينبغي وضع ضمانات لحماية البيانات الشخصية من الفقدان أو التلف أو التدمير.",
        pdplTitle2: "على من ينطبق PDPL؟",
        pdplDescription5:
          "ينطبق قانون حماية البيانات الشخصية على الكيانات (بما في ذلك الشركات العامة والخاصة) والشركات التابعة لها، التي تعالج البيانات الشخصية للمقيمين السعوديين، لتزويدهم بالسلع أو الخدمات. وينطبق أيضًا على الكيانات العاملة خارج المملكة العربية السعودية، والتي تقوم بمعالجة البيانات الشخصية للمقيمين السعوديين.",
        pdplDescription6:
          "يحمي القانون البيانات الشخصية التي تتضمن المعلومات التي يمكن استخدامها لتحديد هوية الشخص الطبيعي بما في ذلك الشخص المتوفى أو أفراد أسرته، ويستثني المعلومات المستخدمة في العروض المنزلية أو الشخصية.",
        ////////////Ransomware//////////////////
        ransomwareTitle: "برامج الفدية:",
        ransomwareDescription:
          "يهدف تقييم الاستعداد لبرامج الفدية إلى تحديد مواطن قوة دفاعاتك ونقاط الضعف التي يمكن للجهات الفاعلة في برامج الفدية استغلالها. تركز منهجيتنا على سلسلة القتل السيبراني، وهو فحص شامل يتضمن تكوين الوصول عن بعد، ومنع التصيد الاحتيالي، وحماية البريد الإلكتروني والويب، وضوابط الوصول ومراقبة نقطة النهاية وتوعية المستخدم النهائي. في نهاية تقييمنا، سنزودك بمجموعة من التوصيات ذات الأولوية والمخصصة لمساعدة مؤسستك على صد هجوم برامج الفدية أو اكتشافه أو الاستجابة له.",
        ///////////////RiskAssesment///////////
        riskAssessmentDescription:
          "تركز تقييمات مخاطر أمن تكنولوجيا المعلومات على تحديد التهديدات التي تواجه أنظمة المعلومات والشبكات والبيانات لديك، وتقييم العواقب المحتملة التي قد تواجهها في حالة حدوث هذه الأحداث السلبية. يجب إجراء تقييمات المخاطر على أساس منتظم (على سبيل المثال سنويًا) وكلما حدثت تغييرات كبيرة داخل مؤسستك.",
        redTeamingTitle: "الفريق الأحمر",
        redTeamingDescription:
          "Red Teaming هو نظام أمني نشأ في الساحة العسكرية ويحاكي الهجمات الإلكترونية واسعة النطاق. يتيح لك ذلك قياس فعالية دفاعك السيبراني ضد الجهات الفاعلة الضارة ويسمح للمدافعين لديك بممارسة قدراتهم على الكشف والاستجابة في بيئة خاضعة للرقابة والتحقق من صحتها أو تحسينها. وأخيرًا، يمكن للفريق الأحمر أيضًا الكشف عن الثغرات في قدرات الدفاع الأمني ​​الشاملة لديك من خلال استهداف مؤسستك وعدم التقيد بقيود اختبار الاختراق المنتظم.",
        /////////////vCISO///////////////////
        vCISODescription:
          "إن vCISO (الرئيس الافتراضي لأمن المعلومات) هي خدمة متعاقد عليها تزود المؤسسة بالخبرة والتوجيه من CISO ذو المهارات العالية والخبرة، ولكن على أساس دوام جزئي أو حسب الحاجة بدلاً من موظف بدوام كامل. وهذا يسمح للمؤسسات الصغيرة التي ليس لديها القدرة على تحمل تكاليف رئيس أمن المعلومات بدوام كامل بالوصول إلى متخصص رفيع المستوى في مجال الأمن السيبراني.",
        vCISOBenefitsTitle: "تشمل فوائد استخدام vCISO ما يلي:",
        vCISOBenefit1:
          "فعالة من حيث التكلفة: يمكن للمؤسسات توفير المال عن طريق الدفع مقابل خدمات vCISOs فقط عندما تحتاج إليها، بدلاً من تعيين CISO بدوام كامل.",
        vCISOBenefit2:
          "الخبرة: vCISOs هم محترفون ذوو مهارات عالية وخبرة في مجال الأمن السيبراني ويمكنهم تقديم إرشادات وتوصيات متخصصة مصممة خصيصًا لتلبية الاحتياجات الخاصة بالمؤسسة.",
        vCISOBenefit3:
          "المرونة: يمكن تخصيص توفر vCISOs ليناسب احتياجات المؤسسة، مع القدرة على التوسع أو التخفيض حسب الحاجة.",
        vCISOBenefit4:
          "المنظور الموضوعي: كطرف ثالث، يمكن لـ vCISO تقديم منظور موضوعي حول الوضع الأمني ​​للمؤسسة وتقديم توصيات دون أي تحيز.",
        vCISOBenefit5:
          "تخفيف المخاطر: يمكن لـ vCISO المساعدة في تحديد المخاطر وترتيب أولوياتها، وتطوير استراتيجيات للتخفيف منها، ومراقبة وتقييم الوضع الأمني ​​للمؤسسة بانتظام لضمان الحد المستمر من المخاطر.",
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
