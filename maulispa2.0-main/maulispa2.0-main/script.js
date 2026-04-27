'use strict';
/* ============================================================
   MAULI SPA V2 — COMPLETE JAVASCRIPT
   ============================================================ */

/* ── TRANSLATIONS ─────────────────────────────────────────── */
const T = {
  hi:{tagline:"माउली आयुर्वेदिक मसाज थेरेपी",heroEyebrow:"प्राचीन आयुर्वेदिक पद्धति",heroLine1:"पुनः ऊर्जावान करें",heroLine2:"आत्मा और शरीर को",heroSub:"अपने शरीर और मन को संपूर्ण स्वास्थ्य प्रदान करें",heroBook:"अपना सत्र बुक करें",heroCatalogue:"कैटलॉग देखें",top3Badge:"सबसे लोकप्रिय थेरेपी",top3Title:"हमारी सबसे पसंदीदा सेवाएं",seeAllTherapies:"सभी थेरेपी देखें →",whyBadge:"हमें क्यों चुनें",whyTitle:"माउली आयुर्वेदिक मसाज क्यों?",w1h:"विशेषज्ञ थेरेपिस्ट",w1p:"अनुभवी और प्रमाणित स्टाफ",w2h:"शुद्ध आयुर्वेदिक तेल",w2p:"100% प्राकृतिक और जड़ी-बूटी से बने तेल",w3h:"शांत माहौल",w3p:"शोर-शराबे से दूर एक शांत वातावरण",w4h:"स्वच्छता पहले",w4p:"डिस्पोजेबल शीट और सैनिटाइज़्ड कमरे",w5h:"प्रमाणित केंद्र",w5p:"सरकार प्रमाणित आयुर्वेदिक केंद्र",w6h:"7 दिन खुला",w6p:"सोम–रवि: सुबह 10 – रात 9 बजे",benefitsBadge:"स्वास्थ्य लाभ",benefitsTitle:"आपको क्या मिलेगा?",b1h:"तनाव और चिंता से राहत",b1p:"तनाव, अवसाद और चिंता से मुक्ति",b2h:"बेहतर रक्त संचार",b2p:"बेहतर रक्त संचार और ऊर्जा स्तर",b3h:"त्वचा की चमक",b3p:"त्वचा की प्राकृतिक चमक बढ़ाना",b4h:"दर्द से राहत",b4p:"जोड़, पीठ और मांसपेशियों के दर्द से राहत",b5h:"अच्छी नींद",b5p:"नींद बेहतर होगी, अनिद्रा से मुक्ति",learnMore:"और जानें →",reviewsTitle:"हमारे ग्राहक क्या कहते हैं?",seeReviews:"सभी समीक्षाएं देखें",ctaTitle:"आज ही अपनी वेलनेस यात्रा शुरू करें",ctaSub:"हमसे बात करें और अपना परफेक्ट थेरेपी प्लान बनाएं",ctaBook:"सत्र बुक करें",navHome:"होम",navTherapies:"वेलनेस थेरेपी",navGallery:"गैलरी",navMembership:"सदस्यता",navAbout:"हमारे बारे में",navContact:"संपर्क करें",navMore:"और",navTerms:"नियम और शर्तें",navPrivacy:"गोपनीयता नीति",offerTag:"सीमित प्रस्ताव",offerTitle:"पहले 50 सदस्यों के लिए मुफ्त फेशियल!",offerDesc:"आज जॉइन करें + पहले सत्र पर 20% छूट पाएं।",footerBio:"पुणे का प्रीमियर आयुर्वेदिक वेलनेस सेंटर।",quickLinks:"त्वरित लिंक",contactInfo:"संपर्क जानकारी",trustBadges:"विश्वास और न्यूज़लेटर",newsletterDesc:"वेलनेस टिप्स के लिए सब्सक्राइब करें",subscribe:"सब्सक्राइब",therapiesH1:"वेलनेस थेरेपी",therapiesSub:"प्राचीन आयुर्वेदिक कला से संपूर्ण स्वास्थ्य",therapiesBadge:"सभी सेवाएं",therapiesTitle:"हमारी वेलनेस थेरेपी",galleryH1:"गैलरी",gallerySub:"हमारा शांत और सुंदर वातावरण देखें",virtualTour:"वर्चुअल टूर",virtualTourLabel:"माउली स्पा — वर्चुअल टूर",photoGallery:"फोटो गैलरी",memberH1:"वेलनेस सदस्यता",memberSub:"हर बार पे करने की झंझट छोड़ें",limitedOffer:"सीमित समय प्रस्ताव:",limitedOfferDesc:"पहले 50 सदस्यों के लिए जॉइन करते ही एक FREE फेशियल मिलेगा!",savingsCalc:"बचत कैलकुलेटर",normalPrice:"सामान्य मूल्य",memberPrice:"सिल्वर सदस्य",annualSaving:"वार्षिक बचत",memberTestTitle:"खुश सदस्य",faqTitle:"अक्सर पूछे जाने वाले सवाल",aboutH1:"माउली स्पा के बारे में",ourStory:"हमारी कहानी",aboutTitle:"माउली स्पा की कहानी",aboutP1:"माउली स्पा की शुरुआत एक सपने से हुई — एक ऐसी जगह बनाना जहां लोग आ सकें और सच में relax कर सकें।",aboutP2:"प्राचीन आयुर्वेदिक परंपराओं और आधुनिक wellness practices को मिला कर, हमने एक sanctuary बनाया है।",aboutP3:"हमारा mission सिर्फ massage देना नहीं है — बल्कि आपकी life में sustained wellness लाना है।",statYears:"वर्ष",statClients:"ग्राहक",statTherapies:"थेरेपी",statRating:"रेटिंग",ourVision:"हमारी दृष्टि",visionDesc:"Stress-free lifestyle promote करना और हर client को संपूर्ण स्वास्थ्य की तरफ guide करना।",ourMission:"हमारा मिशन",missionDesc:"प्राचीन Ayurvedic wisdom को modern comfort के साथ combine करके best healing experience देना।",ourValues:"हमारे मूल्य",valuesDesc:"Authenticity, purity, care और continuous improvement — ये हमारे core values हैं।",ourTeam:"हमारी टीम",contactH1:"संपर्क करें",contactSub:"हम आपका स्वागत करने के लिए इंतजार कर रहे हैं",startJourney:"अपनी वेलनेस यात्रा शुरू करें",contactFormDesc:"अपना नाम और नंबर डालें — हम 15 मिनट में contact करेंगे!",fName:"आपका नाम *",fPhone:"मोबाइल नंबर *",fService:"रुचि की सेवा",fDate:"पसंदीदा तारीख",fTime:"पसंदीदा समय",fMsg:"संदेश",submitBtn:"अपनी वेलनेस यात्रा शुरू करें 🌿",formSuccessMsg:"आपका message मिल गया। हम 15 मिनट में call करेंगे!",quickFaqs:"त्वरित प्रश्न",findUs:"हमें ढूंढें",getDirections:"दिशा निर्देश →",moreH1:"माउली स्पा से और",moreSub:"और विकल्प देखें",referTitle:"रेफर करें और छूट पाएं",referDesc:"अपने दोस्त को refer करें और दोनों को discount पाएं! ₹1,500 से ऊपर की सेवाओं पर मान्य।",rs1:"अपने दोस्त को Mauli Spa refer करें",rs2:"दोस्त के visit के बाद आपको discount मिलेगा",rs3:"और दोस्त को भी first visit पर special discount!",referYouGet:"आपको: अगली सेवा पर 10% छूट (न्यूनतम ₹1,500)",referFriendGet:"दोस्त को: पहली visit पर 5% छूट",referNow:"अभी refer करें",referTerms:"*नियम लागू। केवल ₹1,500 से ऊपर की सेवाओं पर मान्य।",joinTeamTitle:"टीम में शामिल हों",joinTeamDesc:"Mauli Spa के बढ़ते परिवार का हिस्सा बनें!",salariedTitle:"वेतनभोगी",sal1:"निश्चित मासिक वेतन",sal2:"PF और ESI लाभ",sal3:"सवैतनिक छुट्टी",sal4:"प्रशिक्षण प्रदान",freelanceTitle:"फ्रीलांसर",fr1:"लचीले घंटे",fr2:"प्रति-सत्र भुगतान",fr3:"हमारे center से काम करें",fr4:"अपना client base बनाएं",applyNow:"अभी आवेदन करें",learningTitle:"लर्निंग सेंटर",learningDesc:"Ayurveda और wellness के बारे में सीखें। Courses और workshops available!",l1h:"आयुर्वेद मूल बातें",l1p:"आयुर्वेदिक सिद्धांतों का परिचय",l2h:"मसाज तकनीक",l2p:"Professional massage skills सीखें",l3h:"तेल और जड़ी-बूटी ज्ञान",l3p:"Pure Ayurvedic oils और herbs",l4h:"प्रमाणन पाठ्यक्रम",l4p:"Ayurvedic therapist के रूप में प्रमाणित हों",learnEnroll:"अभी नामांकन करें",qTherapies:"सभी थेरेपी",qMembership:"सदस्यता",qCatalogue:"ई-कैटलॉग",qGallery:"गैलरी",termsH1:"नियम और शर्तें",privacyH1:"गोपनीयता नीति",legalUpdated:"अंतिम अपडेट: अप्रैल 2026",t3_1_name:"डीप टिश्यू थेरेपी",t3_1_desc:"दर्द से राहत के लिए",t3_1_dur:"70 मिनट",t3_2_name:"तिल तेल मसाज",t3_2_desc:"पारंपरिक गर्माहट",t3_2_dur:"60 मिनट",t3_3_name:"पीठ दर्द मसाज",t3_3_desc:"पीठ दर्द से तुरंत राहत",t3_3_dur:"30 मिनट",bookNow:"अभी बुक करें",seeMoreBtn:"और देखें",hyg1_h:"प्रमाणित थेरेपिस्ट",hyg1_p:"प्रोफेशनल और सर्टिफाइड टीम",hyg2_h:"शुद्ध प्राकृतिक तेल",hyg2_p:"100% प्राकृतिक तेलों का इस्तेमाल",hyg3_h:"डिस्पोजेबल शीट्स",hyg3_p:"हर सेशन में फ्रेश शीट्स",hyg4_h:"सैनिटाइज़्ड कमरे",hyg4_p:"हर क्लाइंट के बाद डीप सैनिटाइज़",followSocial:"सोशल मीडिया पर फॉलो करें",mem1_title:"सिल्वर",mem_mo:"/महीना",mem1_f1:"1 सेशन / महीना",mem1_f2:"अतिरिक्त सेशन पर 5% छूट",mem_f_guest:"गेस्ट पास",mem_f_support:"प्राथमिकता सहायता",mem_f_dur:"विस्तारित अवधि",joinBtn:"जॉइन करें",bestSeller:"⭐ बेस्ट सेलर",mem2_title:"गोल्ड",mem2_f1:"2 सेशन / महीना",mem2_f2:"अतिरिक्त सेशन पर 15% छूट",mem2_f3:"1 गेस्ट पास / महीना",mem2_f4:"30 दिन की वैधता",mem3_title:"प्लैटिनम",mem3_f1:"4 सेशन / महीना",mem3_f2:"अतिरिक्त सेशन पर 25% छूट",mem3_f3:"2 गेस्ट पास / महीना",mem3_f4:"5+30 दिन की वैधता",faqTitle:"अक्सर पूछे जाने वाले सवाल",mfq1_q:"क्या मेंबरशिप कैंसल कर सकता हूँ?",mfq1_a:"हाँ, किसी भी समय कैंसल कर सकते हैं। अप्रयुक्त सेशन का प्रो-राटा रिफंड मिलेगा।",mfq2_q:"क्या अप्रयुक्त सेशन अगले महीने कैरी फॉरवर्ड होंगे?",mfq2_a:"बिल्कुल! सेशन एक्सपायर नहीं होते। अगले महीने उपयोग कर सकते हैं।",mfq3_q:"क्या मेंबरशिप किसी और को गिफ्ट कर सकता हूँ?",mfq3_a:"हाँ! गिफ्ट कार्ड उपलब्ध है। अपने प्रियजनों को गिफ्ट करें।",aboutSub:"जहाँ सुकून मिलता है",team1_n:"डॉ. सविता माउली",team1_r:"संस्थापक और मुख्य थेरेपिस्ट",team1_e:"15+ वर्ष का अनुभव",team2_n:"प्रिया शर्मा",team2_r:"वरिष्ठ आयुर्वेदिक थेरेपिस्ट",team2_e:"8+ वर्ष का अनुभव",team3_n:"रवि कुमार",team3_r:"डीप टिश्यू विशेषज्ञ",team3_e:"6+ वर्ष का अनुभव",team4_n:"अनीता पाटिल",team4_r:"पोटली और हर्बल विशेषज्ञ",team4_e:"7+ वर्ष का अनुभव",team5_n:"तरुण कुमार",team5_r:"मार्केटिंग विशेषज्ञ",team5_e:"पिछले 5 वर्ष · लीड नाइट",cfq1_q:"क्या प्री-बुकिंग ज़रूरी है?",cfq1_a:"वॉक-इन उपलब्ध है, लेकिन गारंटीकृत स्लॉट के लिए एडवांस बुकिंग की सलाह दी जाती है।",cfq2_q:"क्या पार्किंग उपलब्ध है?",cfq2_a:"हाँ, द बिजनेस हब में पर्याप्त पार्किंग उपलब्ध है।",comingSoon:"जल्द आ रहा है",closeBtn:"बंद करें",physBen:"शारीरिक लाभ",mentBen:"मानसिक लाभ",forWhomH:"यह किसके लिए है?", "Spa Pack": "स्पा पैक", "Potli Massage": "पोटली मसाज", "Couple Massage": "कपल मसाज", "Medicinal Oil Massage": "मेडिसिनल ऑइल मसाज", "Deep Tissue Massage": "डीप टिश्यू मसाज", "Aloe Vera Gel Massage": "एलोवेरा जेल मसाज", "Cream Massage": "क्रीम मसाज", "Til Tel Massage": "तिल तेल मसाज", "Powder Massage": "पाउडर मसाज", "Facial": "फेशियल", "Back Pain Massage": "पीठ दर्द मसाज", "Leg Pain Massage": "पैरों का दर्द मसाज", "Foot Massage": "फुट मसाज", "Head Massage": "हेड मसाज"},
  en:{tagline:"Mauli Ayurvedic Massage Therapy",heroEyebrow:"Ancient Ayurvedic Tradition",heroLine1:"Rejuvenate Your",heroLine2:"Soul & Body",heroSub:"Achieve complete wellness through ancient Ayurvedic wisdom",heroBook:"Book Your Session",heroCatalogue:"View E-Catalogue",top3Badge:"Top Demanding Therapies",top3Title:"Our Most Loved Services",seeAllTherapies:"See All Therapies →",whyBadge:"Why Choose Us",whyTitle:"Why Mauli Ayurvedic Massage Therapy?",w1h:"Expert Therapists",w1p:"Experienced and certified staff with familiar nature",w2h:"Pure Ayurvedic Oils",w2p:"100% natural oils made from herbs",w3h:"Peaceful Ambience",w3p:"A calm environment away from noise",w4h:"Hygiene First",w4p:"Disposable sheets and sanitized rooms every time",w5h:"Certified Center",w5p:"Government certified Ayurvedic wellness center",w6h:"Open 7 Days",w6p:"Mon–Sun: 10 AM – 9 PM for your convenience",benefitsBadge:"Health Benefits",benefitsTitle:"What Will You Get?",b1h:"Stress & Anxiety Relief",b1p:"Freedom from stress, depression and anxiety",b2h:"Better Blood Circulation",b2p:"Improved blood flow and energy levels",b3h:"Skin Glow",b3p:"Enhance your skin's natural glow and radiance",b4h:"Pain Relief",b4p:"Relief from joint, back and muscle pain",b5h:"Good Sleep",b5p:"Better sleep quality, freedom from insomnia",learnMore:"Learn More →",reviewsTitle:"What Our Clients Say?",seeReviews:"See All Reviews",ctaTitle:"Start Your Wellness Journey Today",ctaSub:"Talk to us and create your perfect therapy plan",ctaBook:"Book Session",navHome:"Home",navTherapies:"Wellness Therapies",navGallery:"Gallery",navMembership:"Membership",navAbout:"About",navContact:"Contact",navMore:"More",navTerms:"Terms & Conditions",navPrivacy:"Privacy Policy",offerTag:"LIMITED OFFER",offerTitle:"Free Facial for First 50 Members!",offerDesc:"Join today + get 20% off your first session. Click to explore!",footerBio:"Pune's premier Ayurvedic wellness center. Where ancient wisdom meets modern comfort.",quickLinks:"Quick Links",contactInfo:"Contact Info",trustBadges:"Trust & Newsletter",newsletterDesc:"Subscribe for wellness tips",subscribe:"Subscribe",therapiesH1:"Wellness Therapies",therapiesSub:"Complete wellness through ancient Ayurvedic art",therapiesBadge:"All Services",therapiesTitle:"Our Wellness Therapies",galleryH1:"Gallery",gallerySub:"See Our Peaceful and Beautiful Environment",virtualTour:"Virtual Tour",virtualTourLabel:"Mauli Spa — Virtual Tour",photoGallery:"Photo Gallery",memberH1:"Wellness Membership",memberSub:"Stop paying every time — make wellness your lifestyle",limitedOffer:"LIMITED OFFER:",limitedOfferDesc:"First 50 members get a FREE Facial upon joining!",savingsCalc:"Savings Calculator",normalPrice:"Normal Price",memberPrice:"Silver Member",annualSaving:"Annual Saving",memberTestTitle:"Happy Members",faqTitle:"Frequently Asked Questions",aboutH1:"About Mauli Spa",ourStory:"Our Story",aboutTitle:"The Story of Mauli Spa",aboutP1:"Mauli Spa began with a dream — to create a place where people can truly escape and relax.",aboutP2:"Combining ancient Ayurvedic traditions with modern wellness practices, we created a sanctuary.",aboutP3:"Our mission isn't just massage — it's bringing sustained wellness into your life.",statYears:"Years",statClients:"Clients",statTherapies:"Therapies",statRating:"Rating",ourVision:"Our Vision",visionDesc:"To promote a stress-free lifestyle and guide every client toward complete wellness.",ourMission:"Our Mission",missionDesc:"Combining ancient Ayurvedic wisdom with modern comfort to provide the best healing experience.",ourValues:"Our Values",valuesDesc:"Authenticity, purity, care and continuous improvement — these are our core values.",ourTeam:"Our Team",contactH1:"Contact Us",contactSub:"We are waiting to welcome you",startJourney:"Start Your Wellness Journey",contactFormDesc:"Enter your name and number — we'll contact you within 15 minutes!",fName:"Your Name *",fPhone:"Mobile Number *",fService:"Service Interested In",fDate:"Preferred Date",fTime:"Preferred Time",fMsg:"Message",submitBtn:"Start Your Wellness Journey 🌿",formSuccessMsg:"We received your message. We'll call you within 15 minutes!",quickFaqs:"Quick FAQs",findUs:"Find Us",getDirections:"Get Directions →",moreH1:"More from Mauli Spa",moreSub:"Explore more options",referTitle:"Refer & Earn Discount",referDesc:"Refer a friend and both get a discount! Valid on services above ₹1,500.",rs1:"Refer your friend to Mauli Spa",rs2:"After friend's visit, you get a discount",rs3:"And friend gets a special discount on first visit!",referYouGet:"You get: 10% off next service (min ₹1,500)",referFriendGet:"Friend gets: 5% off first visit",referNow:"Refer Now",referTerms:"*Terms apply. Valid on services above ₹1,500 only.",joinTeamTitle:"Join Us as Team",joinTeamDesc:"Become part of Mauli Spa's growing family. Choose your work style!",salariedTitle:"Salaried",sal1:"Fixed monthly salary",sal2:"PF & ESI benefits",sal3:"Paid leaves",sal4:"Training provided",freelanceTitle:"Freelancer",fr1:"Flexible hours",fr2:"Per-session payment",fr3:"Work from our center",fr4:"Build your client base",applyNow:"Apply Now",learningTitle:"Learning Center",learningDesc:"Learn about Ayurveda and wellness. Courses and workshops available!",l1h:"Ayurveda Basics",l1p:"Introduction to Ayurvedic principles",l2h:"Massage Techniques",l2p:"Learn professional massage skills",l3h:"Oil & Herb Knowledge",l3p:"Pure Ayurvedic oils and herbs",l4h:"Certification Course",l4p:"Get certified as an Ayurvedic therapist",learnEnroll:"Enroll Now",qTherapies:"All Therapies",qMembership:"Membership",qCatalogue:"E-Catalogue",qGallery:"Gallery",termsH1:"Terms & Conditions",privacyH1:"Privacy Policy",legalUpdated:"Last Updated: April 2026",t3_1_name:"Deep Tissue Therapy",t3_1_desc:"For pain relief",t3_1_dur:"70 mins",t3_2_name:"Til Tel Massage",t3_2_desc:"Traditional sesame warmth",t3_2_dur:"60 mins",t3_3_name:"Back Pain Massage",t3_3_desc:"Instant relief for back pain",t3_3_dur:"30 mins",bookNow:"Book Now",seeMoreBtn:"See More",hyg1_h:"Certified Therapists",hyg1_p:"Professional and certified team",hyg2_h:"Pure Natural Oils",hyg2_p:"Use of 100% natural oils",hyg3_h:"Disposable Sheets",hyg3_p:"Fresh sheets in every session",hyg4_h:"Sanitized Rooms",hyg4_p:"Deep sanitized after every client",followSocial:"Follow us on Social Media",mem1_title:"Silver",mem_mo:"/mo",mem1_f1:"1 Session / month",mem1_f2:"5% Off extra sessions",mem_f_guest:"Guest Pass",mem_f_support:"Priority Support",mem_f_dur:"Extended Duration",joinBtn:"Join",bestSeller:"⭐ Best Seller",mem2_title:"Gold",mem2_f1:"2 Sessions / month",mem2_f2:"15% Off extra sessions",mem2_f3:"1 Guest Pass / month",mem2_f4:"30 days validity",mem3_title:"Platinum",mem3_f1:"4 Sessions / month",mem3_f2:"25% Off extra sessions",mem3_f3:"2 Guest Pass / month",mem3_f4:"5+30 days validity",faqTitle:"Frequently Asked Questions",mfq1_q:"Can I cancel the membership?",mfq1_a:"Yes, you can cancel anytime. A pro-rata refund will be given for unused sessions.",mfq2_q:"Will unused sessions carry forward to next month?",mfq2_a:"Absolutely! Sessions do not expire. You can use them next month.",mfq3_q:"Can I gift the membership to someone else?",mfq3_a:"Yes! Gift cards are available. Gift it to your loved ones.",aboutSub:"Where you find peace",team1_n:"Dr. Savita Mauli",team1_r:"Founder & Head Therapist",team1_e:"15+ Years Experience",team2_n:"Priya Sharma",team2_r:"Senior Ayurvedic Therapist",team2_e:"8+ Years Experience",team3_n:"Ravi Kumar",team3_r:"Deep Tissue Specialist",team3_e:"6+ Years Experience",team4_n:"Anita Patil",team4_r:"Potli & Herbal Expert",team4_e:"7+ Years Experience",team5_n:"Tarun Kumar",team5_r:"Marketing Expert",team5_e:"Last 5 Years · Lead Knight",cfq1_q:"Is pre-booking required?",cfq1_a:"Walk-ins are available, but advance booking is recommended for a guaranteed slot.",cfq2_q:"Is parking available?",cfq2_a:"Yes, ample parking is available at The Business Hub.",comingSoon:"Coming Soon",closeBtn:"Close",physBen:"Physical Benefits",mentBen:"Mental Benefits",forWhomH:"Who is it for?", "Spa Pack": "Spa Pack", "Potli Massage": "Potli Massage", "Couple Massage": "Couple Massage", "Medicinal Oil Massage": "Medicinal Oil Massage", "Deep Tissue Massage": "Deep Tissue Massage", "Aloe Vera Gel Massage": "Aloe Vera Gel Massage", "Cream Massage": "Cream Massage", "Til Tel Massage": "Til Tel Massage", "Powder Massage": "Powder Massage", "Facial": "Facial", "Back Pain Massage": "Back Pain Massage", "Leg Pain Massage": "Leg Pain Massage", "Foot Massage": "Foot Massage", "Head Massage": "Head Massage"}
};
// Minimal other langs (they fall back to en for missing keys)
const LANG_LABELS={hi:"हि",en:"EN",mr:"मर",ta:"த",te:"తె",bn:"বা",gu:"ગ",kn:"ಕ",pa:"ਪ",ml:"മ"};
const FALLBACK_LANG='en';

/* ── STATE ────────────────────────────────────────────────── */
let currentLang='hi', currentHeroIdx=0, heroTimer=null;
let lbImages=[], lbIdx=0;
let tmCarouselIdx=0, tmCarouselEl=null, tmCarouselDots=[];
let currentJobType='salaried';

/* ── THERAPY DATA ─────────────────────────────────────────── */
const THERAPIES=[
  {name:"Spa Pack",price:"₹3,999",dur:"Full Pack",short:"Complete wellness: cleansing, scrub, steam aur full body massage.",long:"Hamare signature Spa Pack mein aapko ek complete wellness journey milti hai. Cleansing se shuru hokar scrub, relaxing steam, aur deep ayurvedic massage tak — ye sab mila kar aapke shareer ko andar se saaf aur bahar se glow karta hai.",phys:["Deep cleansing aur detoxification","Skin softening aur natural glow","Muscle tension se rahat","Behtar blood circulation"],ment:["Complete relaxation","Stress aur anxiety se mukti","Mind ko freshness"],forWhom:"Unke liye jo complete rejuvenation chahte hain.",imgs:["https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"]},
  {name:"Potli Massage",price:"₹2,999",dur:"90 mins",short:"Garam jadi-bootiyon ki potli se deep pain relief aur relaxation.",long:"Potli Massage mein garam jadi-bootiyon ki potli se massage ki jaati hai. Ye herbal heat deep muscles mein jaati hai aur chronic pain, arthritis, aur stiffness ko door karti hai.",phys:["Joint pain aur arthritis mein rahat","Muscle stiffness kam hoti hai","Deep heat se circulation improve","Skin ko poshnak tatv milte hain"],ment:["Deep relaxation aur calm feeling","Better sleep quality","Stress hormones kam hote hain"],forWhom:"Joint pain, arthritis patients aur elderly people ke liye.",imgs:["https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop"]},
  {name:"Couple Massage",price:"₹2,699",dur:"60 mins each",short:"Shared wellness for two. Relax and reconnect together.",long:"Couple Massage ek romantic aur rejuvenating experience hai. Dono ke liye side-by-side massage sessions, customized to individual needs. Perfect for anniversaries and birthdays.",phys:["Full body relaxation","Muscle tension release","Improved circulation"],ment:["Emotional bonding strengthen","Shared relaxation","Stress se mukti"],forWhom:"Couples jo saath mein quality wellness time share karna chahte hain.",imgs:["https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop"]},
  {name:"Medicinal Oil Massage",price:"₹2,499",dur:"75 mins",short:"Therapeutic Ayurvedic oil massage tailored to your body constitution.",long:"Dosha ke hisaab se specific Ayurvedic oils select ki jaati hain. Ye oils deep tissue mein penetrate karti hain aur healing accelerate karti hain.",phys:["Dosha balance restore","Deep tissue nourishment","Joint lubrication improve","Toxin removal"],ment:["Mind-body balance","Mental clarity improve","Anxiety kam hoti hai"],forWhom:"Specific health concerns ya authentic Ayurvedic experience chahne wale.",imgs:["https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop"]},
  {name:"Deep Tissue Massage",price:"₹2,199",dur:"70 mins",short:"Targeted deep pressure for chronic muscle tension and pain relief.",long:"Deep Tissue Massage mein deep, firm pressure use ki jaati hai chronic muscle tension aur knots ko target karne ke liye. Especially for chronic pain and injury recovery.",phys:["Chronic muscle tension eliminate","Injury recovery accelerate","Posture improve","Blood pressure reduce"],ment:["Deep relaxation","Pain se freed hoke mental peace","Better body awareness"],forWhom:"Athletes, office workers jinhe chronic back/neck pain ho.",imgs:["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop"]},
  {name:"Aloe Vera Gel Massage",price:"₹1,999",dur:"60 mins",short:"Cooling aloe vera massage for deep hydration and soothing relief.",long:"Pure aloe vera gel ka use hota hai jo skin ko deep hydrate karta hai aur inflammation reduce karta hai. Summer mein ya sunburn ke baad bahut soothing hoti hai.",phys:["Deep skin hydration","Inflammation reduce","Sunburn se rahat","Skin texture improve"],ment:["Cooling sensation","Immediate relaxation","Skin glow se confidence"],forWhom:"Dry skin, sensitive skin ya natural treatment chahne wale.",imgs:["https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"]},
  {name:"Cream Massage",price:"₹1,799",dur:"60 mins",short:"Luxurious cream-based massage for nourished and glowing skin.",long:"Premium moisturizing cream use ki jaati hai jo massage ke saath skin mein absorb hoti jaati hai. Skin ko instantly soft aur nourished feel karta hai.",phys:["Intense skin moisturization","Smooth aur soft skin","Cell renewal promote","Body aches reduce"],ment:["Pampered feeling","Stress release","Luxury experience"],forWhom:"Dry skin treatment ke saath relaxation chahne wale.",imgs:["https://images.unsplash.com/photo-1559841644-08984562005b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop"]},
  {name:"Til Tel Massage",price:"₹1,499",dur:"60 mins",short:"Traditional sesame oil massage for warmth and deep nourishment.",long:"Til Tel (Sesame Oil) Massage ek traditional Ayurvedic abhyanga hai. Naturally warming hota hai aur deep tissues mein penetrate karta hai. Vata dosha balance karta hai.",phys:["Vata dosha balance","Joint strength improve","Bone density support","Winter mein warmth"],ment:["Grounding aur calming effect","Anxiety reduce","Better sleep"],forWhom:"Elderly people, winter mein warmth chahne wale, vata imbalance wale.",imgs:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop"]},
  {name:"Powder Massage",price:"₹1,299",dur:"45 mins",short:"Udvartana — dry herbal powder massage for detox and weight management.",long:"Dry herbal powder se vigorous massage. Fat tissue ko break karne, lymphatic system ko stimulate karne, aur deep detoxification mein help karti hai.",phys:["Fat reduction mein help","Lymphatic drainage","Skin exfoliation","Cellulite reduce"],ment:["Energized feeling","Confidence boost","Body awareness"],forWhom:"Weight management goals, natural detox, oily/thick skin type.",imgs:["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"]},
  {name:"Facial",price:"₹999",dur:"60 mins",short:"Deep cleansing Ayurvedic facial for glowing, radiant skin.",long:"Natural herbs se skin deep cleanse. Dead skin cells remove, pores clean, natural glow restore. Completely skin-type specific treatment.",phys:["Deep pore cleansing","Dead skin removal","Natural glow restore","Acne reduce"],ment:["Refreshed aur confident feel","Self-care satisfaction"],forWhom:"Dull, tired skin. Event se pehle instant glow ke liye.",imgs:["https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop"]},
  {name:"Back Pain Massage",price:"₹999",dur:"30 mins",short:"Targeted relief for back pain, muscle tension and spine alignment.",long:"Back Pain Massage specifically back muscles, spine aur lower back ko target karti hai. IT professionals, drivers ke liye designed.",phys:["Back pain instant relief","Muscle spasm reduce","Spine alignment","Posture correction"],ment:["Pain se mukti ke baad peace","Better concentration","Work performance"],forWhom:"Office workers, IT professionals, drivers.",imgs:["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"]},
  {name:"Leg Pain Massage",price:"₹999",dur:"30 mins",short:"Relief for tired, aching legs — ideal for people on their feet all day.",long:"Teachers, shopkeepers, nurses ke liye perfect. Blood circulation improve, swelling reduce, muscles relax.",phys:["Leg pain aur cramps reduce","Swelling reduce","Blood circulation boost","Varicose veins mein rahat"],ment:["Tired feeling se rahat","Energy boost"],forWhom:"Standing jobs, athletes, long working hours.",imgs:["https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"]},
  {name:"Foot Massage",price:"₹499",dur:"20 mins",short:"Reflexology-based foot massage to rejuvenate entire body.",long:"Pair mein poore shareer ke pressure points hain. In points ko daba kar various organs stimulate hote hain. Insomnia, digestive issues mein effective.",phys:["Pain relief through reflex points","Better sleep","Digestive health","Headache relief"],ment:["Instant relaxation","Mental fatigue reduce","Mood elevate"],forWhom:"Quick relaxation, standing jobs, heel pain.",imgs:["https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"]},
  {name:"Head Massage",price:"₹499",dur:"25 mins",short:"Shiroabhyanga — traditional Indian head massage for stress and hair health.",long:"Garam oil se scalp, neck aur shoulder ka massage. Brain ko direct soothe karta hai. Migraine, hair fall aur insomnia ke liye effective.",phys:["Migraine aur headache relief","Hair fall reduce","Scalp health improve","Neck stiffness release"],ment:["Immediate stress relief","Mental clarity","Better concentration","Insomnia mein help"],forWhom:"Students, professionals, migraine patients, hair health.",imgs:["https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop"]}
];

/* ── GALLERY IMAGES ───────────────────────────────────────── */
const GALLERY_IMGS=[
  {src:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=800&fit=crop",alt:"Spa Room"},
  {src:"https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=420&fit=crop",alt:"Massage Room"},
  {src:"https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=720&fit=crop",alt:"Relaxation"},
  {src:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=500&fit=crop",alt:"Wellness"},
  {src:"https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=900&fit=crop",alt:"Therapy Room"},
  {src:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=420&fit=crop",alt:"Treatment"},
  {src:"https://images.unsplash.com/photo-1559841644-08984562005b?w=600&h=620&fit=crop",alt:"Oils"},
  {src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=420&fit=crop",alt:"Herbs"},
  {src:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=720&fit=crop",alt:"Products"},
  {src:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=520&fit=crop",alt:"Steam"},
  {src:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=820&fit=crop",alt:"Foot Spa"},
  {src:"https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=420&fit=crop",alt:"Facial"},
  {src:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=520&fit=crop",alt:"Ambience"},
  {src:"https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=700&fit=crop",alt:"Interior"},
  {src:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=420&fit=crop",alt:"Candles"},
  {src:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=620&fit=crop",alt:"Experience"}
];

/* ── BENEFIT DATA ─────────────────────────────────────────── */
const BENEFITS={
  stress:{title:"Stress & Anxiety Relief",img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=300&fit=crop",desc:"Massage cortisol (stress hormone) ko 30% tak reduce karta hai. Regular massage anxiety disorders mein medication jitna effective hai. IT professionals aur busy executives ke liye particularly beneficial hai.",gallery:["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop"]},
  circulation:{title:"Better Blood Circulation",img:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=300&fit=crop",desc:"Massage blood vessels ko dilate karta hai aur blood flow improve karta hai. Gymmer aur elderly logon ke liye equally beneficial. Oxygen aur nutrients ka delivery tissues tak improve hota hai.",gallery:["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=300&h=200&fit=crop"]},
  skin:{title:"Skin Glow & Radiance",img:"https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=300&fit=crop",desc:"Ayurvedic oils skin ke cells ko nourish karte hain. Dead skin cells remove hoti hain aur natural radiance restore hoti hai. Regular massage se skin texture aur tone significantly improve hoti hai.",gallery:["https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=200&fit=crop"]},
  pain:{title:"Pain Relief",img:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=300&fit=crop",desc:"Massage natural painkillers (endorphins) release karta hai. Joint pain, knee pain aur muscle soreness mein immediate relief milti hai. Elderly patients ke liye arthritis management mein effective hai.",gallery:["https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop"]},
  sleep:{title:"Good Sleep",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop",desc:"Massage serotonin aur melatonin levels boost karta hai — dono sleep ke liye essential hain. Insomnia patients mein regular massage se 60% better sleep quality report ki gayi hai. Mind ko 'rest mode' mein lata hai.",gallery:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=300&h=200&fit=crop"]}
};

/* ── LEGAL CONTENT ────────────────────────────────────────── */
const TERMS_CONTENT=`<h2>1. Acceptance of Terms</h2><p>By using Mauli Spa's services, you agree to these Terms and Conditions. These terms apply to all clients visiting Mauli Spa located at Shop No 112, First Floor, The Business Hub, Karve Road, Kothrud, Pune.</p><h2>2. Services</h2><p>All Ayurvedic massage services are performed by trained and certified therapists. Service descriptions and prices are subject to change without prior notice.</p><h2>3. Booking & Cancellations</h2><p>Advance booking is recommended. Cancellations must be made at least 2 hours before the appointment. No-shows may be charged a cancellation fee.</p><h2>4. Health Disclaimer</h2><p>Massage therapy is not a substitute for medical treatment. Clients with medical conditions should consult their physician before booking. Mauli Spa is not liable for any adverse reactions from disclosed or undisclosed medical conditions.</p><h2>5. Membership Terms</h2><ul><li>Memberships are non-transferable (except as a gift with prior notice).</li><li>Unused sessions carry forward to the next month.</li><li>Cancellation with pro-rata refund is available anytime.</li></ul><h2>6. Privacy</h2><p>We collect personal information solely to provide services. We do not sell or share your data with third parties.</p><h2>7. Refer & Earn</h2><p>The Refer & Earn discount is valid only on services above ₹1,500. One referral discount per transaction. Discount cannot be combined with other offers.</p><h2>8. Governing Law</h2><p>These terms are governed by the laws of Maharashtra, India. Any disputes shall be resolved in Pune courts.</p><h2>9. Contact</h2><p>For queries: maulispa33@gmail.com | +91 9156972622</p>`;

const PRIVACY_CONTENT=`<h2>1. Information We Collect</h2><p>We collect name, phone number, email, and service preferences when you book an appointment or contact us.</p><h2>2. How We Use Your Information</h2><ul><li>To confirm and manage appointments</li><li>To send wellness tips (only if subscribed)</li><li>To improve our services</li></ul><h2>3. Data Storage</h2><p>Your information is stored securely and is not shared with third parties without your consent, except as required by law.</p><h2>4. Cookies</h2><p>Our website may use cookies to enhance user experience, including remembering your language preference and visit count.</p><h2>5. WhatsApp Communication</h2><p>When you contact us via WhatsApp, your messages are subject to WhatsApp's privacy policy. We use WhatsApp solely for service-related communication.</p><h2>6. Your Rights</h2><ul><li>Right to access your personal data</li><li>Right to correction of inaccurate data</li><li>Right to deletion of your data</li><li>Right to opt out of marketing communications</li></ul><h2>7. Children's Privacy</h2><p>Our services are not directed at children under 18 without parental consent.</p><h2>8. Changes to This Policy</h2><p>We may update this policy periodically. Continued use of our services constitutes acceptance.</p><h2>9. Contact Us</h2><p>For privacy concerns: maulispa33@gmail.com | +91 9156972622</p>`;

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded',()=>{
  detectLang();
  initVisitCounter();
  initHero();
  renderTherapyCards();
  renderGallery();
  renderLegal();
  initOffer();
  initScrollEffects();
  // set min booking date
  const fd=document.getElementById('fDate');
  if(fd)fd.min=new Date().toISOString().split('T')[0];
  // close on backdrop click
  document.querySelectorAll('.modal-overlay').forEach(m=>{
    m.addEventListener('click',e=>{ if(e.target===m)m.classList.remove('show'); });
  });
});

/* ── LANGUAGE ─────────────────────────────────────────────── */
function detectLang(){
  const s=localStorage.getItem('mauliLang')||'hi';
  setLang(s);
}
function t(key){
  const lang=T[currentLang]||T[FALLBACK_LANG];
  return lang[key]||(T[FALLBACK_LANG]&&T[FALLBACK_LANG][key])||key;
}
function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    const val=t(k);
    if(val!==k)el.innerHTML=val;
  });
}
function setLang(lang){
  currentLang=lang;
  localStorage.setItem('mauliLang',lang);
  document.getElementById('langLabel').textContent=LANG_LABELS[lang]||lang.toUpperCase();
  document.documentElement.lang=lang;
  applyTranslations();
  closeLangMenu();
  // Re-render therapy cards to reflect language
  renderTherapyCards();
}
function toggleLangMenu(){
  document.getElementById('langMenu').classList.toggle('open');
}
function closeLangMenu(){
  document.getElementById('langMenu').classList.remove('open');
}
document.addEventListener('click',e=>{
  if(!e.target.closest('#langWrap'))closeLangMenu();
});

/* ── VISIT COUNTER ────────────────────────────────────────── */
function initVisitCounter(){
  let c=parseInt(localStorage.getItem('mauliVisits')||'0')+1;
  localStorage.setItem('mauliVisits',c);
  const base=13241+c;
  animCount(document.getElementById('visitCount'),base);
}
function animCount(el,target){
  let n=target-60;
  const step=Math.ceil((target-n)/50);
  const tmr=setInterval(()=>{
    n=Math.min(n+step,target);
    if(el)el.textContent=n.toLocaleString('en-IN');
    if(n>=target)clearInterval(tmr);
  },25);
}

/* ── HERO VIDEOS ──────────────────────────────────────────── */
function initHero(){
  const videos=document.querySelectorAll('.hero-video');
  const bar=document.getElementById('heroBar');
  if(!videos.length)return;
  function nextVideo(){
    videos[currentHeroIdx].classList.remove('active');
    currentHeroIdx=(currentHeroIdx+1)%videos.length;
    videos[currentHeroIdx].classList.add('active');
    if(bar){bar.style.width='0';setTimeout(()=>bar.style.width='100%',50);}
  }
  if(bar){bar.style.transition='width 6s linear';setTimeout(()=>bar.style.width='100%',100);}
  heroTimer=setInterval(nextVideo,6000);
}

/* ── NAV ──────────────────────────────────────────────────── */
function navTo(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el=document.getElementById('page-'+page);
  if(el){el.classList.add('active');}
  window.scrollTo({top:0,behavior:'smooth'});
  document.getElementById('mainNav').classList.remove('mobile-open');
  document.getElementById('hamburger').classList.remove('open');
  // sync nav highlight
  document.querySelectorAll('.nl').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('data-page')===page);
  });
}
function setNavActive(el){
  document.querySelectorAll('.nl').forEach(a=>a.classList.remove('active'));
  el.classList.add('active');
}
function toggleMobileNav(){
  document.getElementById('mainNav').classList.toggle('mobile-open');
  document.getElementById('hamburger').classList.toggle('open');
}

/* ── OFFER ────────────────────────────────────────────────── */
function initOffer(){
  if(sessionStorage.getItem('mauliOffer'))return;
  setTimeout(()=>{
    document.getElementById('offerPopup').classList.add('show');
    document.getElementById('offerBackdrop').classList.add('show');
  },1200);
  setTimeout(()=>closeOffer(),7200);
  document.getElementById('offerPopup').addEventListener('click',e=>{
    if(!e.target.closest('#offerCloseBtn')){
      closeOffer();navTo('therapies');
    }
  });
  document.getElementById('offerBackdrop').addEventListener('click',closeOffer);
  document.getElementById('offerCloseBtn').addEventListener('click',closeOffer);
}
function closeOffer(){
  document.getElementById('offerPopup').classList.remove('show');
  document.getElementById('offerBackdrop').classList.remove('show');
  sessionStorage.setItem('mauliOffer','1');
}

/* ── SCROLL EFFECTS ───────────────────────────────────────── */
function initScrollEffects(){
  const header=document.getElementById('mainHeader');
  const btt=document.getElementById('backToTop');
  window.addEventListener('scroll',()=>{
    const s=window.scrollY;
    header.classList.toggle('scrolled',s>60);
    btt.classList.toggle('show',s>350);
  },{passive:true});
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';io.unobserve(e.target);}
    });
  },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.why-card,.benefit-card,.review-card,.plan-card,.more-feature-card,.mq-card').forEach((el,i)=>{
    el.style.opacity='0';el.style.transform='translateY(28px)';
    el.style.transition=`opacity .5s ${i*.07}s ease, transform .5s ${i*.07}s ease`;
    io.observe(el);
  });
}

/* ── THERAPY CARDS ────────────────────────────────────────── */
function renderTherapyCards(){
  const grid=document.getElementById('therapiesGrid');
  if(!grid)return;
  grid.innerHTML=THERAPIES.map((th,i)=>`
    <div class="tc" tabindex="0" aria-label="${t(th.name)}">
      <div class="tc-media">
        <video autoplay muted loop playsinline><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></video>
        <button class="tc-see-more" onclick="openTherapyModal(${i});event.stopPropagation()"><i class="fas fa-eye"></i> <span data-i18n="seeMoreBtn">${t('seeMoreBtn')}</span></button>
      </div>
      <div class="tc-body">
        <h3>${t(th.name)}</h3>
        <p>${t(th.short)}</p>
        <div class="tc-meta">
          <span class="tc-price">${th.price}</span>
          <span class="tc-dur"><i class="fas fa-clock"></i> ${t(th.dur)}</span>
        </div>
        <div class="tc-btns">
          <button class="btn-gold btn-sm" onclick="navTo('contact')">${t('bookNow')}</button>
          <button class="btn-outline btn-sm" onclick="openTherapyModal(${i})">${t('seeMoreBtn')}</button>
        </div>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.tc').forEach((card,i)=>{
    card.addEventListener('keydown',e=>{if(e.key==='Enter')openTherapyModal(i);});
  });
}

/* ── THERAPY MODAL ────────────────────────────────────────── */
function openTherapyModal(idx){
  const th=THERAPIES[idx];
  tmCarouselIdx=0;
  const modal=document.getElementById('therapyModal');
  const content=document.getElementById('therapyModalContent');
  const dotHtml=th.imgs.map((_,i)=>`<span class="tmc-dot${i===0?' active':''}" onclick="tmGoTo(${i})"></span>`).join('');
  content.innerHTML=`
    <div class="tm-name">${t(th.name)}</div>
    <div class="tm-meta">
      <span class="tm-price">${th.price}</span>
      <span class="tm-dur"><i class="fas fa-clock"></i> ${t(th.dur)}</span>
    </div>
    <div class="tm-carousel" id="tmCarousel">
      <div class="tm-carousel-track" id="tmTrack">
        ${th.imgs.map(src=>`<img src="${src}" alt="${th.name}" loading="lazy">`).join('')}
      </div>
      <button class="tm-carousel-prev" onclick="tmNav(-1)"><i class="fas fa-chevron-left"></i></button>
      <button class="tm-carousel-next" onclick="tmNav(1)"><i class="fas fa-chevron-right"></i></button>
    </div>
    <div class="tm-carousel-dots" id="tmDots">${dotHtml}</div>
    <p class="tm-desc">${t(th.long)}</p>
    <div class="tm-benefits">
      <h4>${t('physBen')}</h4>
      <ul>${th.phys.map(b=>`<li>${t(b)}</li>`).join('')}</ul>
      <h4>${t('mentBen')}</h4>
      <ul>${th.ment.map(b=>`<li>${t(b)}</li>`).join('')}</ul>
      <h4>${t('forWhomH')}</h4>
      <p>${t(th.forWhom)}</p>
    </div>
    <button class="btn-gold btn-full" style="margin-top:20px" onclick="navTo('contact');closeTherapyModal()">${t('bookNow')} — ${th.price}</button>
  `;
  tmCarouselEl=document.getElementById('tmTrack');
  tmCarouselDots=Array.from(document.querySelectorAll('.tmc-dot'));
  modal.classList.add('show');
  document.body.style.overflow='hidden';
  // auto-play carousel
  if(window._tmInterval)clearInterval(window._tmInterval);
  window._tmInterval=setInterval(()=>tmNav(1),2500);
}
function tmNav(dir){
  const th=THERAPIES.find(t=>t.name===document.querySelector('.tm-name')?.textContent);
  const len=th?th.imgs.length:6;
  tmCarouselIdx=(tmCarouselIdx+dir+len)%len;
  if(tmCarouselEl)tmCarouselEl.style.transform=`translateX(-${tmCarouselIdx*100}%)`;
  tmCarouselDots.forEach((d,i)=>d.classList.toggle('active',i===tmCarouselIdx));
}
function tmGoTo(i){
  tmCarouselIdx=i;
  if(tmCarouselEl)tmCarouselEl.style.transform=`translateX(-${i*100}%)`;
  tmCarouselDots.forEach((d,j)=>d.classList.toggle('active',j===i));
}
function closeTherapyModal(){
  document.getElementById('therapyModal').classList.remove('show');
  document.body.style.overflow='';
  if(window._tmInterval)clearInterval(window._tmInterval);
}

/* ── BENEFIT MODAL ────────────────────────────────────────── */
function openBenefitModal(key){
  const b=BENEFITS[key];
  const content=document.getElementById('benefitModalContent');
  content.innerHTML=`
    <img class="bm-img" src="${b.img}" alt="${b.title}">
    <div class="bm-title">${b.title}</div>
    <p style="color:var(--text2);line-height:1.8;font-size:.95rem;margin-bottom:16px">${b.desc}</p>
    <div class="bm-gallery">
      ${b.gallery.map(src=>`<img src="${src}" alt="${b.title}" loading="lazy">`).join('')}
    </div>
    <button class="btn-gold" style="margin-top:20px" onclick="navTo('contact');closeBenefitModal()">Book a Session</button>
  `;
  document.getElementById('benefitModal').classList.add('show');
  document.body.style.overflow='hidden';
}
function closeBenefitModal(){
  document.getElementById('benefitModal').classList.remove('show');
  document.body.style.overflow='';
}

/* ── GALLERY ──────────────────────────────────────────────── */
function renderGallery(){
  const grid=document.getElementById('masonryGrid');
  if(!grid)return;
  lbImages=GALLERY_IMGS;
  grid.innerHTML=GALLERY_IMGS.map((img,i)=>`
    <div class="masonry-item" onclick="openLightbox(${i})">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
      <div class="masonry-item-ov"><i class="fas fa-expand-alt"></i></div>
    </div>
  `).join('');
}
function openLightbox(idx){
  lbIdx=idx;
  document.getElementById('lbImg').src=lbImages[idx].src;
  document.getElementById('lbCounter').textContent=`${idx+1} / ${lbImages.length}`;
  document.getElementById('lightbox').classList.add('show');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('show');
  document.body.style.overflow='';
}
function lbNav(dir){
  lbIdx=(lbIdx+dir+lbImages.length)%lbImages.length;
  const img=document.getElementById('lbImg');
  img.style.opacity='0';
  setTimeout(()=>{img.src=lbImages[lbIdx].src;img.style.opacity='1';img.style.transition='opacity .3s';},120);
  document.getElementById('lbCounter').textContent=`${lbIdx+1} / ${lbImages.length}`;
}

/* ── LEGAL MODAL ──────────────────────────────────────────── */
function openLegalModal(type){
  const modal=document.getElementById('legalModal');
  const content=document.getElementById('legalModalContent');
  if(type==='terms'){
    content.innerHTML=TERMS_CONTENT;
  } else {
    content.innerHTML=PRIVACY_CONTENT;
  }
  modal.classList.add('show');
  document.body.style.overflow='hidden';
}
function closeLegalModal(){
  document.getElementById('legalModal').classList.remove('show');
  document.body.style.overflow='';
}

/* ── LEGAL ────────────────────────────────────────────────── */
function renderLegal(){
  // Kept for backward compatibility if any legacy function calls it
}

/* ── FAQ ACCORDION ────────────────────────────────────────── */
function toggleFaq(btn){
  const ans=btn.nextElementSibling;
  const open=btn.classList.contains('open');
  btn.closest('.faq-list,.contact-faqs')?.querySelectorAll('.faq-q').forEach(q=>{q.classList.remove('open');q.nextElementSibling?.classList.remove('show');});
  if(!open){btn.classList.add('open');ans.classList.add('show');}
}

/* ── CONTACT FORM ─────────────────────────────────────────── */
function submitContactForm(){
  const name=document.getElementById('fName')?.value.trim();
  const phone=document.getElementById('fPhone')?.value.trim();
  if(!name){showErr('fName','Name zaroori hai');return;}
  if(!phone||phone.length<10){showErr('fPhone','Valid number daalein');return;}
  const service=document.getElementById('fService')?.value||'';
  const date=document.getElementById('fDate')?.value||'';
  const time=document.getElementById('fTime')?.value||'';
  const msg=document.getElementById('fMsg')?.value||'';
  const waMsg=encodeURIComponent(`Namaskar! Mauli Spa booking request.\n\n👤 Name: ${name}\n📱 Phone: ${phone}\n💆 Service: ${service||'TBD'}\n📅 Date: ${date||'Flexible'}\n⏰ Time: ${time}\n💬 Message: ${msg||'None'}\n\nPlease confirm. Thank you! 🙏`);
  document.getElementById('contactFormWrap').style.display='none';
  document.getElementById('formSuccess').style.display='block';
  setTimeout(()=>window.open(`https://wa.me/919307360513?text=${waMsg}`,'_blank'),900);
}
function showErr(id,msg){
  const el=document.getElementById(id);
  if(!el)return;
  el.style.borderColor='#FC8181';el.focus();
  let e=el.parentNode.querySelector('.ferr');
  if(!e){e=document.createElement('span');e.className='ferr';e.style.cssText='color:#FC8181;font-size:.75rem;margin-top:3px;display:block;';el.parentNode.appendChild(e);}
  e.textContent=msg;
  setTimeout(()=>{el.style.borderColor='';if(e.parentNode)e.parentNode.removeChild(e);},2800);
}

/* ── REFER / JOB / LEARN MODALS ──────────────────────────── */
function openReferModal(){document.getElementById('referModal').classList.add('show');}
function openJobModal(type){
  currentJobType=type;
  document.getElementById('jobModalTitle').textContent=type==='salaried'?'Join as Salaried':'Join as Freelancer';
  document.getElementById('jobModal').classList.add('show');
}
function openLearnModal(){document.getElementById('learnModal').classList.add('show');}
function closeModal(id){document.getElementById(id).classList.remove('show');}

function submitRefer(){
  const n=document.getElementById('referName')?.value.trim();
  const p=document.getElementById('referPhone')?.value.trim();
  if(!n||!p){alert('Please fill all fields');return;}
  const fn=document.getElementById('friendName')?.value.trim();
  const fp=document.getElementById('friendPhone')?.value.trim();
  const waMsg=encodeURIComponent(`Referral Request!\n👤 My Name: ${n}\n📱 My Phone: ${p}\n👥 Friend's Name: ${fn}\n📱 Friend's Phone: ${fp}\n\nPlease process our referral discount. Thank you!`);
  window.open(`https://wa.me/919307360513?text=${waMsg}`,'_blank');
  closeModal('referModal');
}
function submitJob(){
  const n=document.getElementById('jobName')?.value.trim();
  const p=document.getElementById('jobPhone')?.value.trim();
  if(!n||!p){alert('Please fill required fields');return;}
  const e=document.getElementById('jobEmail')?.value||'';
  const exp=document.getElementById('jobExp')?.value||'';
  const about=document.getElementById('jobAbout')?.value||'';
  const waMsg=encodeURIComponent(`Job Application — ${currentJobType.toUpperCase()}\n👤 Name: ${n}\n📱 Phone: ${p}\n📧 Email: ${e}\n⏳ Experience: ${exp} years\n📝 About: ${about}`);
  window.open(`https://wa.me/919307360513?text=${waMsg}`,'_blank');
  closeModal('jobModal');
}
function submitLearn(){
  const n=document.getElementById('learnName')?.value.trim();
  const p=document.getElementById('learnPhone')?.value.trim();
  const c=document.getElementById('learnCourse')?.value||'';
  if(!n||!p){alert('Please fill required fields');return;}
  const waMsg=encodeURIComponent(`Learning Enrollment\n👤 Name: ${n}\n📱 Phone: ${p}\n📚 Course: ${c}`);
  window.open(`https://wa.me/919307360513?text=${waMsg}`,'_blank');
  closeModal('learnModal');
}

/* ── NEWSLETTER ───────────────────────────────────────────── */
function subscribeNewsletter(){
  const inp=document.getElementById('nlEmail');
  if(!inp||!inp.value.includes('@')){if(inp){inp.style.borderColor='#FC8181';inp.placeholder='Valid email!';}return;}
  const waMsg=encodeURIComponent(`Newsletter Subscription Request!\n📧 Email: ${inp.value}`);
  window.open(`https://wa.me/919307360513?text=${waMsg}`,'_blank');
  inp.value='';inp.placeholder='Subscribed! ✓';
}

/* ── KEYBOARD SUPPORT ─────────────────────────────────────── */
document.addEventListener('keydown',e=>{
  if(document.getElementById('lightbox').classList.contains('show')){
    if(e.key==='ArrowRight')lbNav(1);
    if(e.key==='ArrowLeft')lbNav(-1);
    if(e.key==='Escape')closeLightbox();
  }
  if(document.getElementById('therapyModal').classList.contains('show')&&e.key==='Escape')closeTherapyModal();
  if(document.getElementById('benefitModal').classList.contains('show')&&e.key==='Escape')closeBenefitModal();
});

/* ── TOUCH SWIPE HERO ─────────────────────────────────────── */
let txStart=0;
document.querySelector('.hero')?.addEventListener('touchstart',e=>{txStart=e.touches[0].clientX;},{passive:true});
document.querySelector('.hero')?.addEventListener('touchend',e=>{
  const diff=txStart-e.changedTouches[0].clientX;
  if(Math.abs(diff)>50){currentHeroIdx=(currentHeroIdx+(diff>0?1:-1)+2)%2;document.querySelectorAll('.hero-video').forEach((v,i)=>v.classList.toggle('active',i===currentHeroIdx));}
},{passive:true});
