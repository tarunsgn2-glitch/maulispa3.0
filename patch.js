const fs = require('fs');

const scriptPath = './script.js';
let content = fs.readFileSync(scriptPath, 'utf8');

// The new terms and privacy contents
const termsHi = `<h2>1. शर्तों की स्वीकृति</h2><p>माउली स्पा की सेवाओं का उपयोग करके, आप इन नियमों और शर्तों से सहमत होते हैं। ये शर्तें दुकान नं 112, पहली मंजिल, द बिजनेस हब, कर्वे रोड, कोथरुड, पुणे में स्थित माउली स्पा आने वाले सभी ग्राहकों पर लागू होती हैं।</p><h2>2. सेवाएं</h2><p>सभी आयुर्वेदिक मालिश सेवाएं प्रशिक्षित और प्रमाणित थेरेपिस्ट द्वारा की जाती हैं। सेवा विवरण और कीमतें बिना पूर्व सूचना के परिवर्तन के अधीन हैं।</p><h2>3. बुकिंग और रद्दीकरण</h2><p>अग्रिम बुकिंग की सिफारिश की जाती है। अपॉइंटमेंट से कम से कम 2 घंटे पहले रद्दीकरण किया जाना चाहिए।</p><h2>4. स्वास्थ्य अस्वीकरण</h2><p>मालिश चिकित्सा चिकित्सा उपचार का विकल्प नहीं है। चिकित्सीय स्थिति वाले ग्राहकों को बुकिंग से पहले अपने चिकित्सक से परामर्श करना चाहिए।</p><h2>5. सदस्यता की शर्तें</h2><ul><li>सदस्यता अहस्तांतरणीय है।</li><li>अप्रयुक्त सत्र अगले महीने आगे बढ़ाए जाते हैं।</li><li>किसी भी समय प्रो-राटा रिफंड के साथ रद्दीकरण उपलब्ध है।</li></ul><h2>6. गोपनीयता</h2><p>हम केवल सेवाएं प्रदान करने के लिए व्यक्तिगत जानकारी एकत्र करते हैं।</p><h2>7. रेफर करें और कमाएं</h2><p>रेफर और अर्न छूट केवल ₹1,500 से अधिक की सेवाओं पर मान्य है।</p><h2>8. शासी कानून</h2><p>ये शर्तें भारत के महाराष्ट्र के कानूनों द्वारा शासित होती हैं।</p><h2>9. संपर्क करें</h2><p>प्रश्नों के लिए: maulispa33@gmail.com | +91 9156972622</p>`;
const privacyHi = `<h2>1. हम जो जानकारी एकत्र करते हैं</h2><p>जब आप अपॉइंटमेंट बुक करते हैं या हमसे संपर्क करते हैं तो हम नाम, फोन नंबर, ईमेल एकत्र करते हैं।</p><h2>2. हम आपकी जानकारी का उपयोग कैसे करते हैं</h2><ul><li>अपॉइंटमेंट की पुष्टि और प्रबंधन करने के लिए</li><li>वेलनेस टिप्स भेजने के लिए (यदि सब्सक्राइब किया है)</li><li>हमारी सेवाओं को बेहतर बनाने के लिए</li></ul><h2>3. डेटा संग्रहण</h2><p>आपकी जानकारी सुरक्षित रूप से संग्रहीत की जाती है और तीसरे पक्ष के साथ साझा नहीं की जाती है।</p><h2>4. कुकीज़</h2><p>हमारी वेबसाइट उपयोगकर्ता अनुभव को बढ़ाने के लिए कुकीज़ का उपयोग कर सकती है।</p><h2>5. WhatsApp संचार</h2><p>जब आप व्हाट्सएप के माध्यम से हमसे संपर्क करते हैं, तो आपके संदेश व्हाट्सएप की गोपनीयता नीति के अधीन होते हैं।</p><h2>6. आपके अधिकार</h2><ul><li>अपने व्यक्तिगत डेटा तक पहुंचने का अधिकार</li><li>गलत डेटा के सुधार का अधिकार</li><li>अपना डेटा हटाने का अधिकार</li></ul><h2>7. बच्चों की गोपनीयता</h2><p>हमारी सेवाएं माता-पिता की सहमति के बिना 18 वर्ष से कम उम्र के बच्चों के लिए नहीं हैं।</p><h2>8. इस नीति में परिवर्तन</h2><p>हम समय-समय पर इस नीति को अपडेट कर सकते हैं।</p><h2>9. हमसे संपर्क करें</h2><p>गोपनीयता संबंधी चिंताओं के लिए: maulispa33@gmail.com | +91 9156972622</p>`;
const termsEn = `<h2>1. Acceptance of Terms</h2><p>By using Mauli Spa's services, you agree to these Terms and Conditions. These terms apply to all clients visiting Mauli Spa located at Shop No 112, First Floor, The Business Hub, Karve Road, Kothrud, Pune.</p><h2>2. Services</h2><p>All Ayurvedic massage services are performed by trained and certified therapists. Service descriptions and prices are subject to change without prior notice.</p><h2>3. Booking & Cancellations</h2><p>Advance booking is recommended. Cancellations must be made at least 2 hours before the appointment. No-shows may be charged a cancellation fee.</p><h2>4. Health Disclaimer</h2><p>Massage therapy is not a substitute for medical treatment. Clients with medical conditions should consult their physician before booking. Mauli Spa is not liable for any adverse reactions from disclosed or undisclosed medical conditions.</p><h2>5. Membership Terms</h2><ul><li>Memberships are non-transferable (except as a gift with prior notice).</li><li>Unused sessions carry forward to the next month.</li><li>Cancellation with pro-rata refund is available anytime.</li></ul><h2>6. Privacy</h2><p>We collect personal information solely to provide services. We do not sell or share your data with third parties.</p><h2>7. Refer & Earn</h2><p>The Refer & Earn discount is valid only on services above ₹1,500. One referral discount per transaction. Discount cannot be combined with other offers.</p><h2>8. Governing Law</h2><p>These terms are governed by the laws of Maharashtra, India. Any disputes shall be resolved in Pune courts.</p><h2>9. Contact</h2><p>For queries: maulispa33@gmail.com | +91 9156972622</p>`;
const privacyEn = `<h2>1. Information We Collect</h2><p>We collect name, phone number, email, and service preferences when you book an appointment or contact us.</p><h2>2. How We Use Your Information</h2><ul><li>To confirm and manage appointments</li><li>To send wellness tips (only if subscribed)</li><li>To improve our services</li></ul><h2>3. Data Storage</h2><p>Your information is stored securely and is not shared with third parties without your consent, except as required by law.</p><h2>4. Cookies</h2><p>Our website may use cookies to enhance user experience, including remembering your language preference and visit count.</p><h2>5. WhatsApp Communication</h2><p>When you contact us via WhatsApp, your messages are subject to WhatsApp's privacy policy. We use WhatsApp solely for service-related communication.</p><h2>6. Your Rights</h2><ul><li>Right to access your personal data</li><li>Right to correction of inaccurate data</li><li>Right to deletion of your data</li><li>Right to opt out of marketing communications</li></ul><h2>7. Children's Privacy</h2><p>Our services are not directed at children under 18 without parental consent.</p><h2>8. Changes to This Policy</h2><p>We may update this policy periodically. Continued use of our services constitutes acceptance.</p><h2>9. Contact Us</h2><p>For privacy concerns: maulispa33@gmail.com | +91 9156972622</p>`;

// Extract the 'en' object string to parse it
const matchEn = content.match(/en:\{(.*?)\}\s*\n\}/s);
if(matchEn) {
    // Let's not fully parse JSON because it's JS syntax, but we can do a regex replace to insert new languages
    // Since we can't easily parse a JS object string in node without `eval`, we will use `eval` carefully
    
    let hiMatch = content.match(/hi:\{(.*?)\},\n  en:\{/s);
    let enStr = matchEn[1];
    let hiStr = hiMatch[1];
    
    let baseEn = eval('({' + enStr + '})');
    let baseHi = eval('({' + hiStr + '})');
    
    baseHi.termsContentHtml = termsHi;
    baseHi.privacyContentHtml = privacyHi;
    baseHi.bm_stress_title = "तनाव और चिंता से राहत";
    baseHi.bm_stress_desc = "मालिश कोर्टिसोल (तनाव हार्मोन) को 30% तक कम करती है। नियमित मालिश चिंता विकारों में दवा जितनी ही प्रभावी है।";
    baseHi.bm_circulation_title = "बेहतर रक्त संचार";
    baseHi.bm_circulation_desc = "मालिश रक्त वाहिकाओं को चौड़ा करती है और रक्त प्रवाह में सुधार करती है। ऊतकों तक ऑक्सीजन और पोषक तत्वों का वितरण बेहतर होता है।";
    baseHi.bm_skin_title = "त्वचा की चमक";
    baseHi.bm_skin_desc = "आयुर्वेदिक तेल त्वचा की कोशिकाओं को पोषण देते हैं। मृत त्वचा कोशिकाएं हटा दी जाती हैं और प्राकृतिक चमक बहाल हो जाती है।";
    baseHi.bm_pain_title = "दर्द से राहत";
    baseHi.bm_pain_desc = "मालिश प्राकृतिक दर्द निवारक (एंडोर्फिन) जारी करती है। जोड़ों के दर्द, घुटने के दर्द और मांसपेशियों के दर्द में तुरंत आराम मिलता है।";
    baseHi.bm_sleep_title = "अच्छी नींद";
    baseHi.bm_sleep_desc = "मालिश सेरोटोनिन और मेलाटोनिन के स्तर को बढ़ाती है - दोनों नींद के लिए आवश्यक हैं। अनिद्रा के रोगियों में 60% बेहतर नींद की गुणवत्ता की सूचना मिली है।";
    
    baseEn.termsContentHtml = termsEn;
    baseEn.privacyContentHtml = privacyEn;
    baseEn.bm_stress_title = "Stress & Anxiety Relief";
    baseEn.bm_stress_desc = "Massage reduces cortisol (stress hormone) by up to 30%. Regular massage is as effective as medication for anxiety disorders. Particularly beneficial for IT professionals and busy executives.";
    baseEn.bm_circulation_title = "Better Blood Circulation";
    baseEn.bm_circulation_desc = "Massage dilates blood vessels and improves blood flow. Equally beneficial for gym-goers and elderly people. Delivery of oxygen and nutrients to tissues is improved.";
    baseEn.bm_skin_title = "Skin Glow & Radiance";
    baseEn.bm_skin_desc = "Ayurvedic oils nourish the skin cells. Dead skin cells are removed and natural radiance is restored. Regular massage significantly improves skin texture and tone.";
    baseEn.bm_pain_title = "Pain Relief";
    baseEn.bm_pain_desc = "Massage releases natural painkillers (endorphins). Immediate relief from joint pain, knee pain, and muscle soreness. Effective in arthritis management for elderly patients.";
    baseEn.bm_sleep_title = "Good Sleep";
    baseEn.bm_sleep_desc = "Massage boosts serotonin and melatonin levels — both are essential for sleep. Regular massage reported 60% better sleep quality in insomnia patients. Brings the mind to 'rest mode'.";

    // Languages to generate
    const langs = {
        mr: { navHome: "मुख्यपृष्ठ", navTherapies: "थेरपी", navGallery: "गॅलरी", navMembership: "सदस्यता", navAbout: "आमच्याबद्दल", navContact: "संपर्क", bookNow: "आता बुक करा", seeMoreBtn: "अधिक पहा" },
        gu: { navHome: "ઘર", navTherapies: "થેરાપીઓ", navGallery: "ગેલેરી", navMembership: "સભ્યપદ", navAbout: "અમારા વિશે", navContact: "સંપર્ક", bookNow: "હમણાં બુક કરો", seeMoreBtn: "વધુ જુઓ" },
        bn: { navHome: "বাড়ি", navTherapies: "থেরাপি", navGallery: "গ্যালারি", navMembership: "সদস্যপদ", navAbout: "আমাদের সম্পর্কে", navContact: "যোগাযোগ", bookNow: "এখন বুক করুন", seeMoreBtn: "আরও দেখুন" },
        kn: { navHome: "ಮನೆ", navTherapies: "ಚಿಕಿತ್ಸೆಗಳು", navGallery: "ಗ್ಯಾಲರಿ", navMembership: "ಸದಸ್ಯತ್ವ", navAbout: "ನಮ್ಮ ಬಗ್ಗೆ", navContact: "ಸಂಪರ್ಕಿಸಿ", bookNow: "ಈಗ ಬುಕ್ ಮಾಡಿ", seeMoreBtn: "ಇನ್ನಷ್ಟು ನೋಡಿ" },
        ml: { navHome: "വീട്", navTherapies: "ചികിത്സകൾ", navGallery: "ഗാലറി", navMembership: "അംഗത്വം", navAbout: "ഞങ്ങളെക്കുറിച്ച്", navContact: "ബന്ധപ്പെടുക", bookNow: "ഇപ്പോൾ ബുക്ക് ചെയ്യുക", seeMoreBtn: "കൂടുതൽ കാണുക" },
        ta: { navHome: "முகப்பு", navTherapies: "சிகிச்சைகள்", navGallery: "தொகுப்பு", navMembership: "உறுப்பினர்", navAbout: "எங்களை பற்றி", navContact: "தொடர்பு", bookNow: "இப்போது பதிவு செய்", seeMoreBtn: "மேலும் காண்க" },
        te: { navHome: "హోమ్", navTherapies: "చికిత్సలు", navGallery: "గ్యాలరీ", navMembership: "సభ్యత్వం", navAbout: "మా గురించి", navContact: "సంప్రదించండి", bookNow: "ఇప్పుడే బుక్ చేయండి", seeMoreBtn: "మరింత చూడండి" },
        pa: { navHome: "ਘਰ", navTherapies: "ਥੈਰੇਪੀਆਂ", navGallery: "ਗੈਲਰੀ", navMembership: "ਮੈਂਬਰਸ਼ਿਪ", navAbout: "ਸਾਡੇ ਬਾਰੇ", navContact: "ਸੰਪਰਕ", bookNow: "ਹੁਣੇ ਬੁੱਕ ਕਰੋ", seeMoreBtn: "ਹੋਰ ਦੇਖੋ" }
    };
    
    let generatedT = "const T = {\n";
    generatedT += "  hi:" + JSON.stringify(baseHi) + ",\n";
    generatedT += "  en:" + JSON.stringify(baseEn) + ",\n";
    
    for (const [lang, translations] of Object.entries(langs)) {
        let merged = { ...baseEn, ...translations };
        generatedT += "  " + lang + ":" + JSON.stringify(merged) + ",\n";
    }
    generatedT = generatedT.slice(0, -2) + "\n};";
    
    content = content.replace(/const T = \{[\s\S]*?\n\};\n/, generatedT + "\n");
    fs.writeFileSync(scriptPath, content);
    console.log('Successfully patched script.js');
} else {
    console.log('Could not parse T object');
}
