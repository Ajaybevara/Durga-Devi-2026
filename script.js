// Language content object with puja details
const content = {
    telugu: {
        // Header
        mainTitle: "శ్రీ శ్రీ శ్రీ దుర్గాదేవి శరన్నవరాత్రి మహోత్సవములు",
        mainSubtitle: "కొరగాo గ్రామం • దైవ వేడుకలు • మహోత్సవములు",
        festivalDates: "మహోత్సవములు: 22.09.2025 నుండి 02.10.2025 వరకు<br>శ్రీ దుర్గాదేవి శరన్నవరాత్రి పవిత్ర వేడుకలు",
        
        // Mobile Menu - Fixed names
        mobileGallery: "🖼️ గ్యాలరీ",
        mobileEvents: "🎉 కార్యక్రమాలు", 
        mobilePuja: "🎭 పూజలు",
        mobileDonors: "🙏 దాతలు",
        mobileServices: "🎊 ప్రత్యేక సేవలు",
        mobileContact: "📞 సంప్రదింపులు",
        mobileAdmin: "⚙️ గ్యాలరీ నిర్వహణ",
        
        // Events Section - Fun Activities
        eventsTitle: "🎉 వినోద కార్యక్రమాలు",
        event1Title: "🎪 వినోద ఆటలు",
        event1Date: "26-30/09/2025",
        event1Desc: "బెలూన్ గేమ్స్, కుర్చీ ఆటలు, మరియు ఇతర వినోద కార్యక్రమాలు పిల్లలు మరియు పెద్దలకు.",
        event2Title: "🍽️ ఆహార పోటీలు",
        event2Date: "27/09/2025",
        event2Desc: "వంట పోటీలు, తినే పోటీలు మరియు స్థానిక వంటకాల ప్రదర్శన.",
        event3Title: "🧠 క్విజ్ పోటీలు",
        event3Date: "28/09/2025",
        event3Desc: "మతపరమైన జ్ఞానం, సాధారణ జ్ఞానం మరియు స్థానిక చరిత్రపై క్విజ్ పోటీలు.",
        event4Title: "🪢 రస్సీ లాగు పోటీ",
        event4Date: "29/09/2025",
        event4Desc: "టగ్ ఆఫ్ వార్, రిలే రేసులు మరియు ఇతర బృంద క్రీడలు.",
        event5Title: "💃 నృత్య కార్యక్రమాలు",
        event5Date: "30/09/2025",
        event5Desc: "సాంప్రదాయ నృత్యాలు, ఫోక్ డ్యాన్స్ మరియు సాంస్కృతిక ప్రదర్శనలు.",
        event6Title: "🎯 వినోద క్రీడలు",
        event6Date: "01/10/2025",
        event6Desc: "లక్ష్య క్రీడలు, రింగ్ త్రో, మరియు ఇతర సాంప్రదాయ ఆటలు.",
        
        // Puja Section
        pujaTitle: "🎭 పవిత్ర పూజలు మరియు వేడుకలు",
        puja1Title: "🌹 అమ్మవారి పంచామృత అభిషేకం",
        puja1Date: "25/09/2025",
        puja1Desc: "పవిత్ర పంచామృతంతో అమ్మవారికి ప్రత్యేక అభిషేకం. పాలు, తేనె, చక్కెర, దధి మరియు నెయ్యితో చేసే దివ్య స్నానం.",
        puja2Title: "🪔 సహస్ర దీపాలంకరణ సేవ",
        puja2Date: "26/09/2025",
        puja2Desc: "వేలాది దీపాలతో అమ్మవారి అలంకరణ. భక్తుల సమస్యలు తొలగించాలని ప్రార్థిస్తూ చేసే ప్రత్యేక సేవ.",
        puja3Title: "🔥 రుద్రాభిషేకం",
        puja3Date: "29/09/2025",
        puja3Desc: "రుద్ర మంత్రాలతో అమ్మవారికి ప్రత్యేక అభిషేకం. శక్తి మరియు శాంతి కోసం చేసే పవిత్ర ఆచారం.",
        puja4Title: "🎭 అమ్మవారి 108 రకముల హారతులు",
        puja4Date: "30/09/2025",
        puja4Desc: "108 రకాల పుష్పాలు, 108 రకాల నైవేద్యాలతో అమ్మవారికి ప్రత్యేక యారతులు. అత్యంత మంగళకరమైన దినం.",
        puja5Title: "🙏 నారాయణ సమారాధన",
        puja5Date: "01/10/2025",
        puja5Desc: "శ్రీ మహావిష్ణువు మరియు అమ్మవారికి సంయుక్త ఆరాధన. లక్ష్మీ నారాయణుల కృపా కటాక్షం కోసం.",
        puja6Title: "🚩 అమ్మవారి తిరువీధి మరియు నిమర్జనం",
        puja6Date: "02/10/2025",
        puja6Desc: "గొప్ప శోభాయాత్రతో అమ్మవారి తిరువీధి, తర్వాత పవిత్ర నిమర్జనం. మహోత్సవాల సమాప్తి వేడుక.",
        
        // Donors Section
        donorsTitle: "🙏 మా ఆశీర్వదించబడిన దాతలు",
        specialDonorTitle: "👑 ప్రధాన దాత",
        specialDonorName: "విగ్రహ దాత",
        specialDonorDesc: "శ్రీ దుర్గాదేవి శరన్నవరాత్రి మహోత్సవాలకు అత్యధిక సహకారం అందించిన గొప్ప దాత. వారి దాతృత్వం మరియు భక్తి వల్ల ఈ పవిత్ర వేడుకలు గొప్పగా జరుగుతున్నాయి.",
        communityDonorsTitle: "🏘️ సమాజ దాతలు",
        yuvajanaTitle: "శ్రీ సీతారామ యువజన సంఘం",
        yuvajanaDesc: "మహోత్సవాల విజయవంతమైన నిర్వహణకు అత్యధిక సహకారం అందించిన గొప్ప యువజన సంఘం. వారి సేవా భావన మరియు భక్తి అనుకరణీయం.",
        villagersTitle: "కొరగం గ్రామ పురజనులు",
        villagersDesc: "మా గ్రామంలోని ప్రతి కుటుంబం తమ వంతు సహకారం అందించి ఈ పవిత్ర మహోత్సవాలను గొప్పగా జరిపించడంలో భాగస్వామ్యం వహించారు.",
        
        // Services Section
        servicesTitle: "🎊 ప్రత్యేక సేవలు",
        pantuluTitle: "🧙‍♂️ పంతులు గారు",
        pantuluName: "మావుదూరి కృష్ణరావు గారు",
        pantuluDesc: "అన్ని పవిత్ర పూజలు మరియు మంత్రోచ్చారణలకు అనుభవజ్ఞుడైన పండిత్యం గల పంతులు గారు.",
        decorationTitle: "🎨 అలంకరణ సేవలు",
        decorationName: "డెకొరేషన్ & లైట్ సెట్టింగ్",
        decorationDesc: "మహోత్సవాలకు అందమైన అలంకరణలు మరియు దీపాలంకరణ సేవలు అందించే నిపుణులు.",
        lightingTitle: "💡 లైటింగ్ సప్లైర్స్",
        lightingName: "అయ్యప్ప సప్లైర్స్",
        lightingDesc: "మహోత్సవాలకు అవసరమైన అన్ని రకాల లైటింగ్ మరియు ఎలక్ట్రికల్ సామగ్రి సరఫరా.",
        
        // Media Gallery Section
        galleryTitle: "📸🎬 పవిత్ర క్షణాల గ్యాలరీ",
        media1Text: " ",
        media2Text: "",
        media3Text: "",
        media4Text: "",
        media5Text: "",
        media6Text: "",
        media7Text: "",
        media8Text: "",
        media10Text:"",
        media11Text:"",
        media12ext:"",
        media13ext:"",
        media14ext:"",
        media15ext:"",
        media16ext:"",
        media17ext:"🪔 సహస్ర దీపాలంకరణ సేవ",
        media18ext:"🪔 సహస్ర దీపాలంకరణ సేవ",
        media19ext:"🪔 సహస్ర దీపాలంకరణ సేవ",
        media20ext:"",
        prevMediaBtn: "‹",
        nextMediaBtn: "›",
        showAllMediaBtn: "🖼️ అన్ని మీడియా చూడండి",
        stopViewBtn: "⏹️ ఆపు",
        
        // Modal Media
        modalMediaTitle: "పవిత్ర క్షణాల గ్యాలరీ",
        
        // Admin Modal
        adminModalTitle: "గ్యాలరీ నిర్వహణ",
        adminUrlPlaceholder: "మీడియా URL/స్థానిక మార్గం (ఉదా: img1.jpg)",
        adminImageOption: "చిత్రం",
        adminVideoOption: "వీడియో",
        adminTextPlaceholder: "మీడియా శీర్షిక (ఉదా: దుర్గాదేవి మూర్తి)",
        adminAddBtn: "మీడియా జోడించు",
        adminDeleteBtn: "తొలగించు",

        // Contact Section
        contactTitle: "📞 సంప్రదింపు వివరాలు",
        contact1Name: "శేషనాపూరి లక్ష్మీ ప్రసాద్",
        contact1Designation: "కార్యనిర్వాహకుడు",
        contact1Phone: "📞 9954747693",
        contact2Name: "దేవాది జన",
        contact2Designation: "సమన్వయకర్త",
        contact2Phone: "📞 8374025030",

        // Puja Modal
        pujaModalTitle: "పూజ వివరాలు",
       
        // Footer
        footerText: "&copy; 2025 శ్రీ దుర్గాదేవి శరన్నవరాత్రి మహోత్సవములు, కొరగాo. అన్ని హక్కులు రిజర్వు చేయబడ్డాయి."
    },
    english: {
        // Header
        mainTitle: "Sri Sri Sri Durgadevi Sharannavaratri Mahotsavalu",
        mainSubtitle: "Koragam Village • Divine Celebrations • Grand Festivals",
        festivalDates: "Grand Festival: 22.09.2025 to 02.10.2025<br>Sri Durgadevi Sharannavaratri Sacred Celebrations",
        
        // Mobile Menu - Fixed names
        mobileGallery: "🖼️ Gallery",
        mobileEvents: "🎉 Events",
        mobilePuja: "🎭 Pujas",
        mobileDonors: "🙏 Donors",
        mobileServices: "🎊 Special Services",
        mobileContact: "📞 Contact",
        mobileAdmin: "⚙️ Manage Gallery",
        
        // Events Section - Fun Activities
        eventsTitle: "🎉 Fun Activities",
        event1Title: "🎪 Fun Games",
        event1Date: "26-30/09/2025",
        event1Desc: "Balloon games, chair games, and other entertainment activities for children and adults.",
        event2Title: "🍽️ Food Competitions",
        event2Date: "27/09/2025",
        event2Desc: "Cooking competitions, eating contests, and local cuisine displays.",
        event3Title: "🧠 Quiz Competitions",
        event3Date: "28/09/2025",
        event3Desc: "Quiz competitions on religious knowledge, general knowledge, and local history.",
        event4Title: "🪢 Tug of War",
        event4Date: "29/09/2025",
        event4Desc: "Tug of war, relay races, and other team sports activities.",
        event5Title: "💃 Dance Programs",
        event5Date: "30/09/2025",
        event5Desc: "Traditional dances, folk dance, and cultural performances.",
        event6Title: "🎯 Fun Sports",
        event6Date: "01/10/2025",
        event6Desc: "Target games, ring toss, and other traditional games.",
        
        // Puja Section
        pujaTitle: "🎭 Sacred Pujas & Celebrations",
        puja1Title: "🌹 Goddess Panchamrita Abhishekam",
        puja1Date: "25/09/2025",
        puja1Desc: "Special abhishekam for Goddess with sacred Panchamrita. Divine bath with milk, honey, sugar, curd, and ghee.",
        puja2Title: "🪔 Sahasra Deepalankaran Seva",
        puja2Date: "26/09/2025",
        puja2Desc: "Decoration of Goddess with thousands of lamps. Special service performed to remove devotees' problems.",
        puja3Title: "🔥 Rudrabhishekam",
        puja3Date: "29/09/2025",
        puja3Desc: "Special abhishekam to Goddess with Rudra mantras. Sacred ritual performed for strength and peace.",
        puja4Title: "🎭 Goddess 108 Varieties Aarathulu",
        puja4Date: "30/09/2025",
        puja4Desc: "Special offerings to Goddess with 108 varieties of flowers and 108 types of naivedyam. Most auspicious day.",
        puja5Title: "🙏 Narayana Samaradhana",
        puja5Date: "01/10/2025",
        puja5Desc: "Joint worship of Lord Mahavishnu and Goddess. Seeking blessings of Lakshmi Narayana.",
        puja6Title: "🚩 Goddess Procession & Immersion",
        puja6Date: "02/10/2025",
        puja6Desc: "Grand procession of Goddess followed by sacred immersion. Concluding ceremony of the festival.",
        
        // Donors Section
        donorsTitle: "🙏 Our Blessed Donors",
        specialDonorTitle: "👑 Principal Donor",
        specialDonorName: "Vigraha Datha",
        specialDonorDesc: "The generous donor who provided the highest contribution to Sri Durgadevi Sharannavaratri festival. Their generosity and devotion make these sacred celebrations possible on a grand scale.",
        communityDonorsTitle: "🏘️ Community Donors",
        yuvajanaTitle: "Sri Sitarama Youth Association",
        yuvajanaDesc: "The great youth association that provided maximum support for the successful conduct of the festival. Their service spirit and devotion are exemplary.",
        villagersTitle: "Koragam Village People",
        villagersDesc: "Every family in our village contributed their share and participated in making these sacred festivals grand and successful.",
        
        // Services Section
        servicesTitle: "🎊 Special Services",
        pantuluTitle: "🧙‍♂️ Priest Services",
        pantuluName: "Mavuduri Krishna Rao Garu",
        pantuluDesc: "Experienced and learned priest for all sacred pujas and mantra recitations.",
        decorationTitle: "🎨 Decoration Services",
        decorationName: "Decoration & Light Setting",
        decorationDesc: "Expert decoration and lighting services for beautiful festival arrangements.",
        lightingTitle: "💡 Lighting Suppliers",
        lightingName: "Ayyappa Suppliers",
        lightingDesc: "Complete lighting and electrical equipment supply for all festival requirements.",
        
        // Media Gallery Section
        galleryTitle: "📸🎬 Sacred Moments Gallery",
        media1Text: "🪔 సహస్ర దీపాలంకరణ సేవ",
        media2Text: "🪔 సహస్ర దీపాలంకరణ సేవ",
        media3Text: "",
        media4Text: "",
        media5Text: "",
        media6Text: "",
        media7Text: "",
        media8Text: "",
        media9Text: "",
        media10Text: "",
        media11Text: "",
        media12Text: "",
        media13Text: "",
        media14Text: "",
        media15Text: "",
        media16Text: "",
        media17ext:"🪔 సహస్ర దీపాలంకరణ సేవ",
        media18ext:"🪔 సహస్ర దీపాలంకరణ సేవ",
        media19ext:"🪔 సహస్ర దీపాలంకరణ సేవ",
        media20ext:"",
        prevMediaBtn: "‹",
        nextMediaBtn: "›",
        showAllMediaBtn: "🖼️ View All Media",
        stopViewBtn: "⏹️ Stop",
        
        // Modal Media
        modalMediaTitle: "Sacred Moments Gallery",

        // Admin Modal
        adminModalTitle: "Gallery Management",
        adminUrlPlaceholder: "Media URL/Local Path (e.g.: img1.jpg)",
        adminImageOption: "Image",
        adminVideoOption: "Video",
        adminTextPlaceholder: "Media Title (e.g.: Durgadevi Idol)",
        adminAddBtn: "Add Media",
        adminDeleteBtn: "Delete",

        // Contact Section
        contactTitle: "📞 Contact Details",
        contact1Name: "Sesanapuri Laxmi Prasad",
        contact1Designation: "Organizer",
        contact1Phone: "📞 9954747693",
        contact2Name: "Jana Devadi",
        contact2Designation: "Coordinator",
        contact2Phone: "📞 8374025030",

        // Puja Modal
        pujaModalTitle: "Puja Details",
        
        // Footer
        footerText: "&copy; 2025 Sri Durgadevi Sharannavaratri Mahotsavalu, Koragam. All rights reserved."
    }
};

// Puja details data
const pujaDetails = {
    puja1: {
        telugu: {
            title: "🌹 అమ్మవారి పంచామృత అభిషేకం",
            date: "25/09/2025",
            time: "ఉదయం 6:00 - 8:00",
            description: "పవిత్ర పంచామృతంతో అమ్మవారికి ప్రత్యేక అభిషేకం చేస్తారు. ఈ అభిషేకం అమ్మవారి కృపను పొందడానికి చాలా ముఖ్యమైనది.",
            materials: [
                "🥛 పాలు - 2 లీటర్లు",
                "🍯 తేనె - 1/2 కిలో",
                "🍬 చక్కెర - 1 కిలోలు", 
                "🧈 దధి - 1 కిలోలు",
                "🧈 నెయ్యి - 1/2 కిలో",
                "🌹 గులాబీ రేకులు",
                "🌿 తులసి ఆకులు",
                "🥥 కొబ్బరి - 21 కాయలు"
            ],
            process: "మొదట అమ్మవారిని పవిత్ర జలంతో స్నానం చేయించి, తర్వాత పంచామృతంతో అభిషేకం చేస్తారు. ప్రతి పదార్థాన్ని ప్రత్యేకంగా అర్పిస్తూ మంత్రోచ్చారణ చేస్తారు.",
            benefits: "ఈ పూజ చేయడం వల్ల ఆరోగ్యం, ధనం, సంతానం, విద్య మరియు మోక్షం లభిస్తుంది. అమ్మవారి పూర్ణ కృప లభిస్తుంది.",
            mantras: "ఓం దుర్గాయై నమః, ఓం అమ్బికాయై నమః, ఓం చండికాయై నమః"
        },
        english: {
            title: "🌹 Goddess Panchamrita Abhishekam",
            date: "25/09/2025", 
            time: "Morning 6:00 - 8:00",
            description: "Special abhishekam performed for the Goddess with sacred Panchamrita. This abhishekam is very important to receive the blessings of the Mother Divine.",
            materials: [
                "🥛 Milk - 3 liters",
                "🍯 Honey - 1/2 kg",
                "🍬 Sugar - 2 kg",
                "🧈 Curd - 1 kg", 
                "🧈 Ghee - 1/2 kg",
                "🌹 Rose petals",
                "🌿 Tulsi leaves",
                "🥥 Coconuts - 21 pieces"
            ],
            process: "First, the Goddess is bathed with sacred water, then abhishekam is performed with Panchamrita. Each ingredient is offered separately while chanting mantras.",
            benefits: "This puja brings health, wealth, children, education and salvation. Complete grace of the Divine Mother is obtained.",
            mantras: "Om Durgayai Namah, Om Ambikayai Namah, Om Chandikayai Namah"
        }
    },
    puja2: {
        telugu: {
            title: "🪔 సహస్ర దీపాలంకరణ సేవ",
            date: "26/09/2025",
            time: "సాయంత్రం 6:00 - 9:00", 
            description: "వేలాది దీపాలతో అమ్మవారి అలంకరణ చేస్తారు. ఈ సేవ చేయడం వల్ల అన్ని చీకటులు తొలగిపోతాయి.",
            materials: [
                "🪔 దీపాలు - 1008",
                "🛢️ నూనె - 3 లీటర్లు", 
                "🧵 వత్తులు - 2000",
                "🌼 పూలు - వివిధ రకాలు",
                "🕯️ కర్పూరం - 500 గ్రాములు",
                "🌾 అక్షతలు - 2 కిలోలు",
                "🍌 పండ్లు - వివిధ రకాలు"
            ],
            process: "అమ్మవారి చుట్టూ 1008 దీపాలను వెలిగించి, ప్రత్యేక మంత్రాలతో ఆరతి చేస్తారు. ప్రతి దీపం వెలిగించేటప్పుడు అమ్మవారి నామాలను జపిస్తారు.",
            benefits: "జీవితంలో వెలుగు, జ్ఞానం, శాంతి, సంపద మరియు ఆనందం లభిస్తుంది. అన్ని రకాల భయాలు తొలగిపోతాయి.",
            mantras: "ఓం జ్యోతిస్వరూపాయై నమః, దీపజ్యోతి పరబ్రహ్మ"
        },
        english: {
            title: "🪔 Sahasra Deepalankaran Seva",
            date: "26/09/2025",
            time: "Evening 6:00 - 9:00",
            description: "Decoration of the Goddess with thousands of lamps. This service removes all darkness from life.",
            materials: [
                "🪔 Lamps - 1008",
                "🛢️ Oil - 3 liters",
                "🧵 Wicks - 2000",
                "🌼 Flowers - various types",
                "🕯️ Camphor - 500 grams", 
                "🌾 Rice - 2 kg",
                "🍌 Fruits - various types"
            ],
            process: "1008 lamps are lit around the Goddess and special arati is performed with mantras. While lighting each lamp, the names of the Goddess are chanted.",
            benefits: "Light, knowledge, peace, wealth and joy are obtained in life. All kinds of fears are removed.",
            mantras: "Om Jyotiswarupayai Namah, Deepajyoti Parabrahma"
        }
    },
    puja3: {
        telugu: {
            title: "🔥 రుద్రాభిషేకం",
            date: "29/09/2025",
            time: "ఉదయం 5:00 - 7:00",
            description: "రుద్ర మంత్రాలతో అమ్మవారికి ప్రత్యేక అభిషేకం. ఇది అత్యంత శక్తివంతమైన పూజ.",
            materials: [
                "🥥 కొబ్బరి నీరు - 21 కాయలు",
                "🥛 పాలు - 3 లీటర్లు",
                "🍯 తేనె - 1 కిలోలు",
                "🌿 బిల్వ పత్రాలు - 1008",
                "🌹 ఎర్ర పూలు",
                "🔥 హోమ సామగ్రి",
                "📿 రుద్రాక్ష మాలలు"
            ],
            process: "రుద్రం పఠనంతో పాటు అభిషేకం చేస్తారు. ప్రత్యేక హోమం కూడా నిర్వహిస్తారు.",
            benefits: "శత్రు నివారణ, రోగ నివారణ, శక్తి వృద్ధి, మానసిక శాంతి లభిస్తుంది.",
            mantras: "ఓం నమః శివాయ, రుద్రం చమకం, మృత్యుంజయ మంత్రం"
        },
        english: {
            title: "🔥 Rudrabhishekam", 
            date: "29/09/2025",
            time: "Morning 5:00 - 7:00",
            description: "Special abhishekam to the Goddess with Rudra mantras. This is a very powerful puja.",
            materials: [
                "🥥 Coconut water - 21 coconuts",
                "🥛 Milk - 3 liters", 
                "🍯 Honey - 1 kg",
                "🌿 Bilva leaves - 1008",
                "🌹 Red flowers",
                "🔥 Homa materials",
                "📿 Rudraksha malas"
            ],
            process: "Abhishekam is performed along with Rudram chanting. Special homa is also conducted.",
            benefits: "Enemy removal, disease removal, strength increase, mental peace is obtained.",
            mantras: "Om Namah Shivaya, Rudram Chamakam, Mrityunjaya Mantra"
        }
    },
    puja4: {
        telugu: {
            title: "🎭 అమ్మవారి 108 రకముల హారతులు",
            date: "30/09/2025", 
            time: "సాయంత్రం 5:00 - 8:00",
            description: "108 రకాల పుష్పాలు మరియు నైవేద్యాలతో అమ్మవారికి ప్రత్యేక ఆరాధన.",
            materials: [
                "🌸 108 రకాల పుష్పాలు",
                "🍯 108 రకాల నైవేద్యాలు", 
                "🪔 దీపాలు - 108",
                "🌾 అక్షతలు - 3 కిలోలు",
                "🥥 కొబ్బరికాయలు - 108",
                "🍌 అరటిపండ్లు - 108",
                "🧈 నెయ్యి - 2 కిలోలు"
            ],
            process: "108 రకాల పూలతో అలంకరించి, 108 రకాల నైవేద్యాలు అర్పిస్తారు. ప్రతి ఆరతికి ప్రత్యేక మంత్రం చెప్తారు.",
            benefits: "అన్ని రకాల కోరికలు తీరుతాయి. సంపూర్ణ ఐశ్వర్యం లభిస్తుంది.",
            mantras: "దుర్గా అష్టోత్తర శతనామావళి, లలిత సహస్రనామం"
        },
        english: {
            title: "🎭 Goddess 108 Varieties Aarathulu",
            date: "30/09/2025",
            time: "Evening 5:00 - 8:00", 
            description: "Special worship to the Goddess with 108 varieties of flowers and offerings.",
            materials: [
                "🌸 108 varieties of flowers",
                "🍯 108 varieties of offerings",
                "🪔 Lamps - 108", 
                "🌾 Rice - 3 kg",
                "🥥 Coconuts - 108",
                "🍌 Bananas - 108", 
                "🧈 Ghee - 2 kg"
            ],
            process: "Decorated with 108 types of flowers and 108 varieties of offerings are made. Special mantras are chanted for each arati.",
            benefits: "All desires are fulfilled. Complete prosperity is obtained.",
            mantras: "Durga Ashtottara Shatanamavali, Lalita Sahasranamam"
        }
    },
    puja5: {
        telugu: {
            title: "🙏 నారాయణ సమారాధన",
            date: "01/10/2025",
            time: "ఉదయం 6:00 - 10:00",
            description: "శ్రీ మహావిష్ణువు మరియు అమ్మవారికి సంయుక్త ఆరాధన.",
            materials: [
                "🌼 తుళసి మాలలు - 108",
                "🌾 అక్షతలు - 1/2 కిలోలు",
                "🍯 తేనె - 1/2 లీటర్లు",
                "🥛 పాలు - 1 లీటర్లు", 
                "🌹 పూలు - వివిధ రకాలు",
                "🍌 పండ్లు - 11 రకాలు",
                "💎 రత్నాలు - 9 రకాలు"
            ],
            process: "విష్ణు సహస్రనామం పఠనంతో పాటు లక్ష్మీ నారాయణ పూజ చేస్తారు.",
            benefits: "ధన సంపద, సుఖ శాంతులు, దీర్ఘాయువు, మోక్షం లభిస్తుంది.",
            mantras: "విష్ణు సహస్రనామం, లక్ష్మీ అష్టకం, నారాయణ మంత్రం"
        },
        english: {
            title: "🙏 Narayana Samaradhana", 
            date: "01/10/2025",
            time: "Morning 6:00 - 10:00",
            description: "Joint worship of Lord Mahavishnu and the Divine Mother.",
            materials: [
                "🌼 Tulsi garlands - 108",
                "🌾 Rice - 1/2 kg",
                "🍯 Honey - 1/2 liters",
                "🥛 Milk - 1 liters",
                "🌹 Flowers - various types", 
                "🍌 Fruits - 11 varieties",
                "💎 Gems - 9 types"
            ],
            process: "Lakshmi Narayana puja is performed along with Vishnu Sahasranama chanting.",
            benefits: "Wealth, happiness, peace, longevity and salvation are obtained.",
            mantras: "Vishnu Sahasranamam, Lakshmi Ashtakam, Narayana Mantra"
        }
    },
    puja6: {
        telugu: {
            title: "🚩 అమ్మవారి తిరువీధి మరియు నిమర్జనం",
            date: "02/10/2025",
            time: "సాయంత్రం 6:30 - 12:00", 
            description: "గొప్ప శోభాయాత్రతో అమ్మవారి తిరువీధి మరియు పవిత్ర నిమర్జనం.",
            materials: [
                "🚩 జెండాలు - వివిధ రంగులు",
                "🎺 వాద్య యంత్రాలు",
                "🌸 పూల వర్షం",
                "🪔 దీపాలు - 2008", 
                "🎭 సాంస్కృతిక కార్యక్రమాలు",
                "🥥 కొబ్బరికాయలు - 501",
                "🌾 అక్షతలు - 10 కిలోలు"
            ],
            process: "అమ్మవారిని అలంకరించి గ్రామం అంతా తిరువీధి తీసుకెళ్లి, చివరికి పవిత్ర నిమర్జనం చేస్తారు.",
            benefits: "గ్రామం మొత్తానికి శుభం, శాంతి, సమృద్ధి లభిస్తుంది. అమ్మవారి శాశ్వత ఆశీర్వాదాలు.",
            mantras: "జై అమ్మ, దుర్గా మాతా కీ జై, సర్వ మంగళ మాంగల్యే"
        },
        english: {
            title: "🚩 Goddess Procession & Immersion",
            date: "02/10/2025", 
            time: "Evening 6:30 - 12:00",
            description: "Grand procession of the Goddess and sacred immersion ceremony.",
            materials: [
                "🚩 Flags - various colors",
                "🎺 Musical instruments", 
                "🌸 Flower shower",
                "🪔 Lamps - 2008",
                "🎭 Cultural programs",
                "🥥 Coconuts - 501",
                "🌾 Rice - 10 kg"
            ],
            process: "The Goddess is decorated and taken in procession throughout the village, finally sacred immersion is performed.",
            benefits: "The entire village gets auspiciousness, peace and prosperity. Eternal blessings of the Divine Mother.",
            mantras: "Jai Amma, Durga Mata Ki Jai, Sarva Mangala Mangalye"
        }
    }
};

// Default slides data with your specified video paths
let slidesData = [
    { type: 'image', src: 'dep1.jpg', textKey: 'media1Text' },
    { type: 'image', src: 'dep2.jpg', textKey: 'media2Text' },
    { type: 'image', src: 'img3.jpg', textKey: 'media3Text' },
    { type: 'image', src: 'img4.jpg', textKey: 'media4Text' },
    { type: 'video', src: 'p.mp4', textKey: 'media5Text' }, 
    { type: 'video', src: 'vid.mp4', textKey: 'media6Text' }, 
    { type: 'video', src: 'vid3.mp4', textKey: 'media7Text' },
    { type: 'video', src: 'bajana.mp4', textKey: 'media8Text' },
    { type: 'video', src: 'puja.mp4', textKey: 'media9Text' },
    { type: 'video', src: 'over.mp4', textKey: 'media10Text' },
    { type: 'image', src: 'home.jpg', textKey: 'media11Text' },
    { type: 'video', src: 'vid1.mp4', textKey: 'media12Text' },
    { type: 'video', src: 'vid2.mp4', textKey: 'media13Text' },
    { type: 'video', src: 'vid4.mp4', textKey: 'media14Text' },
    { type: 'video', src: 'vid5.mp4', textKey: 'media15Text' },
    { type: 'video', src: 'vid6.mp4', textKey: 'media16Text' },
    { type: 'video', src: 'vid7.mp4', textKey: 'media17Text' },
    { type: 'image', src: 'img1.jpg', textKey: 'media18Text' },
    { type: 'image', src: 'img2.jpg', textKey: 'media19Text' },
    { type: 'video', src: 'p.mp4', textKey: 'media20Text' }
];

// Variables
let currentLanguage = 'telugu';
let currentStatusIndex = 0;
let isStatusAutoplay = false;
let statusAutoplayTimeout;
let currentGalleryVideo = null;

const mainContent = document.getElementById('mainContent');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mediaModal = document.getElementById('mediaModal');
const adminModal = document.getElementById('adminModal');
const pujaModal = document.getElementById('pujaModal');
const statusStoriesRow = document.getElementById('statusStoriesRow');
const statusViewer = document.getElementById('statusViewer');
const statusContent = document.getElementById('statusContent');
const statusProgressBars = document.getElementById('statusProgressBars');
const currentStatusTitle = document.getElementById('currentStatusTitle');
const currentStatusTime = document.getElementById('currentStatusTime');
const modalMediaGrid = document.getElementById('modalMediaGrid');
const adminMediaList = document.getElementById('adminMediaList');

// --- Local Storage Management ---
const LOCAL_STORAGE_KEY = 'durgadeviGalleryData';

function saveSlidesData() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(slidesData));
}

function loadSlidesData() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        slidesData = JSON.parse(savedData);
    }
}

// Language Selection Function
function selectLanguage(language, event) {
    currentLanguage = language;
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    updateContent();
}

// Update Content Based on Language
function updateContent() {
    const lang = content[currentLanguage];
    
    document.getElementById('pageTitle').textContent = lang.mainTitle;

    Object.keys(lang).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = lang[key];
        }
    });

    updateNavigationItems();
    updateMediaControls();

    renderStatusStories();
    renderModalMediaGrid();
    renderAdminMediaList();
}

// Update Navigation Items - Fixed mobile menu with proper names
function updateNavigationItems() {
    const lang = content[currentLanguage];
    
    const mobileNav = document.getElementById('mobileMenuItems');
    if (mobileNav) {
        mobileNav.innerHTML = `
            <li><a href="#media-gallery" onclick="closeMenu()">🖼️ Gallery</a></li>
            <li><a href="#events" onclick="closeMenu()">🎉 Events</a></li>
            <li><a href="#puja" onclick="closeMenu()">🎭 Pujalu</a></li>
            <li><a href="#donors" onclick="closeMenu()">🙏 Donors</a></li>
            <li><a href="#services" onclick="closeMenu()">🎊 Services</a></li>
            <li><a href="#contact" onclick="closeMenu()">📞 Contact</a></li>
            <li><a href="#" onclick="openAdminModal(); closeMenu()">⚙️ Admin</a></li>
        `;
    }
}

// Update Media Gallery Controls
function updateMediaControls() {
    const lang = content[currentLanguage];
    const stopViewBtn = document.getElementById('stopViewBtn');
    const showAllBtn = document.getElementById('showAllMediaBtn');

    if (stopViewBtn) {
        stopViewBtn.textContent = isStatusAutoplay ? lang.stopViewBtn : (currentLanguage === 'telugu' ? '▶️ ప్లే' : '▶️ Play');
    }
    if (showAllBtn) showAllBtn.textContent = lang.showAllMediaBtn;
    if (document.getElementById('modalMediaTitle')) document.getElementById('modalMediaTitle').textContent = lang.modalMediaTitle;
    if (document.getElementById('adminModalTitle')) document.getElementById('adminModalTitle').textContent = lang.adminModalTitle;
    if (document.getElementById('mediaUrlInput')) document.getElementById('mediaUrlInput').placeholder = lang.adminUrlPlaceholder;
    if (document.getElementById('mediaTextInput')) document.getElementById('mediaTextInput').placeholder = lang.adminTextPlaceholder;
    if (document.getElementById('mediaTypeSelect')) {
        document.getElementById('mediaTypeSelect').options[0].textContent = lang.adminImageOption;
        document.getElementById('mediaTypeSelect').options[1].textContent = lang.adminVideoOption;
    }
    if (document.querySelector('.admin-add-btn')) document.querySelector('.admin-add-btn').textContent = lang.adminAddBtn;
}

// Puja Details Modal Functions
function openPujaDetails(pujaId) {
    const pujaData = pujaDetails[pujaId][currentLanguage];
    const pujaModalBody = document.getElementById('pujaModalBody');
    
    pujaModalBody.innerHTML = `
        <div class="puja-detail-section">
            <h3 class="puja-detail-title">${pujaData.title}</h3>
            <p class="puja-detail-content">${pujaData.description}</p>
        </div>
        
        <div class="puja-timing">
            <h4 style="color: #FFD700; margin-bottom: 0.5rem;">📅 ${currentLanguage === 'telugu' ? 'తేదీ మరియు సమయం' : 'Date and Time'}</h4>
            <p style="font-size: 1.1rem;"><strong>${pujaData.date}</strong> - ${pujaData.time}</p>
        </div>
        
        <div class="puja-detail-section">
            <h4 class="puja-detail-title">🛍️ ${currentLanguage === 'telugu' ? 'అవసరమైన సామగ్రి' : 'Required Materials'}</h4>
            <div class="puja-materials-grid">
                ${pujaData.materials.map(material => `
                    <div class="puja-material-item">${material}</div>
                `).join('')}
            </div>
        </div>
        
        <div class="puja-detail-section">
            <h4 class="puja-detail-title">🔄 ${currentLanguage === 'telugu' ? 'పూజా విధానం' : 'Puja Process'}</h4>
            <p class="puja-detail-content">${pujaData.process}</p>
        </div>
        
        <div class="puja-detail-section">
            <h4 class="puja-detail-title">🌟 ${currentLanguage === 'telugu' ? 'పూజా ఫలితాలు' : 'Puja Benefits'}</h4>
            <p class="puja-detail-content">${pujaData.benefits}</p>
        </div>
        
        <div class="puja-detail-section">
            <h4 class="puja-detail-title">🕉️ ${currentLanguage === 'telugu' ? 'ముఖ్య మంత్రాలు' : 'Main Mantras'}</h4>
            <p class="puja-detail-content" style="font-style: italic; color: #FFD700;">${pujaData.mantras}</p>
        </div>
    `;
    
    pujaModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closePujaModal() {
    pujaModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// WhatsApp Style Gallery Functions
function renderStatusStories() {
    statusStoriesRow.innerHTML = '';
    slidesData.forEach((slide, index) => {
        const storyElement = document.createElement('div');
        storyElement.classList.add('status-story');
        storyElement.setAttribute('data-index', index);
        
        if (slide.type === 'image') {
            storyElement.style.backgroundImage = `url('${slide.src}')`;
        } else if (slide.type === 'video') {
            // For video thumbnails, we'll use a placeholder or first frame
            storyElement.style.backgroundImage = `url('${slide.src.replace('.mp4', '-thumb.jpg')}')`; // Fallback to thumbnail
            storyElement.style.backgroundColor = '#333'; // Fallback color
        }
        
        storyElement.addEventListener('click', () => {
            selectStatus(index);
        });
        
        statusStoriesRow.appendChild(storyElement);
    });
    
    // Initialize first status
    selectStatus(0);
}

function selectStatus(index) {
    currentStatusIndex = index;
    clearTimeout(statusAutoplayTimeout);
    
    // Update progress bars
    renderProgressBars();
    
    // Update status content
    showStatus(index);
    
    // Mark story as viewed
    const stories = document.querySelectorAll('.status-story');
    stories[index].classList.add('viewed');
    
    // Update status info
    const currentSlide = slidesData[index];
    currentStatusTitle.textContent = content[currentLanguage][currentSlide.textKey];
    currentStatusTime.textContent = currentLanguage === 'telugu' ? 'ఇప్పుడు' : 'now';
}

function renderProgressBars() {
    statusProgressBars.innerHTML = '';
    slidesData.forEach((slide, index) => {
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        
        const progressFill = document.createElement('div');
        progressFill.classList.add('progress-fill');
        progressBar.appendChild(progressFill);
        
        if (index === currentStatusIndex) {
            progressBar.classList.add('active');
        }
        
        statusProgressBars.appendChild(progressBar);
    });
}

function showStatus(index) {
    const currentSlide = document.getElementById('currentStatusSlide');
    currentSlide.innerHTML = '';
    currentSlide.classList.remove('active');
    
    const slideData = slidesData[index];
    
    if (slideData.type === 'image') {
        currentSlide.style.backgroundImage = `url('${slideData.src}')`;
        
        if (isStatusAutoplay) {
            statusAutoplayTimeout = setTimeout(() => {
                nextStatus();
            }, 4000); // 4 seconds for images
        }
    } else if (slideData.type === 'video') {
        let mediaElement;
        if (slideData.src.includes('youtube.com')) {
            mediaElement = document.createElement('iframe');
            mediaElement.src = slideData.src;
            mediaElement.setAttribute('frameborder', '0');
            mediaElement.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            mediaElement.setAttribute('allowfullscreen', '');
        } else {
            mediaElement = document.createElement('video');
            mediaElement.src = slideData.src;
            mediaElement.setAttribute('controls', '');
            mediaElement.setAttribute('muted', '');
            mediaElement.style.width = '100%';
            mediaElement.style.height = '100%';
            mediaElement.style.objectFit = 'cover';
            
            currentGalleryVideo = mediaElement;
            mediaElement.play();
            
            // Auto-advance after video duration (or fixed time)
            if (isStatusAutoplay) {
                statusAutoplayTimeout = setTimeout(() => {
                    nextStatus();
                }, 8000); // 8 seconds for videos
            }
        }
        currentSlide.appendChild(mediaElement);
    }
    
    // Add caption
    const caption = document.createElement('div');
    caption.classList.add('media-caption');
    caption.textContent = content[currentLanguage][slideData.textKey];
    currentSlide.appendChild(caption);
    
    currentSlide.classList.add('active');
}

function nextStatus() {
    currentStatusIndex = (currentStatusIndex + 1) % slidesData.length;
    selectStatus(currentStatusIndex);
}

function previousStatus() {
    currentStatusIndex = (currentStatusIndex - 1 + slidesData.length) % slidesData.length;
    selectStatus(currentStatusIndex);
}

function toggleStatusAutoplay() {
    if (isStatusAutoplay) {
        clearTimeout(statusAutoplayTimeout);
        isStatusAutoplay = false;
        if (currentGalleryVideo) {
            currentGalleryVideo.pause();
        }
    } else {
        isStatusAutoplay = true;
        selectStatus(currentStatusIndex);
    }
    updateMediaControls();
}

// Render Modal Media Grid
function renderModalMediaGrid() {
    modalMediaGrid.innerHTML = '';
    slidesData.forEach((slide, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('modal-media-item');

        if (slide.type === 'image') {
            itemElement.style.backgroundImage = `url('${slide.src}')`;
        } else if (slide.type === 'video') {
            let mediaElement;
            if (slide.src.includes('youtube.com')) {
                mediaElement = document.createElement('iframe');
                mediaElement.src = slide.src;
                mediaElement.setAttribute('frameborder', '0');
                mediaElement.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                mediaElement.setAttribute('allowfullscreen', '');
            } else {
                mediaElement = document.createElement('video');
                mediaElement.src = slide.src;
                mediaElement.setAttribute('controls', '');
                mediaElement.style.width = '100%';
                mediaElement.style.height = '100%';
                mediaElement.style.objectFit = 'cover';
            }
            itemElement.appendChild(mediaElement);
        }

        const span = document.createElement('span');
        span.textContent = content[currentLanguage][slide.textKey];
        itemElement.appendChild(span);

        modalMediaGrid.appendChild(itemElement);
    });
}

// --- Admin Modal Functions ---
function openAdminModal() {
    adminModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    renderAdminMediaList();
    clearTimeout(statusAutoplayTimeout);
    if (currentGalleryVideo) {
        currentGalleryVideo.pause();
        currentGalleryVideo.muted = true;
    }
}

function closeAdminModal() {
    adminModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    if (isStatusAutoplay && mainContent.classList.contains('show')) {
        selectStatus(currentStatusIndex);
    }
}

function renderAdminMediaList() {
    adminMediaList.innerHTML = '';
    slidesData.forEach((slide, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('admin-media-item');

        const previewDiv = document.createElement('div');
        previewDiv.classList.add('admin-media-item-preview');
        if (slide.type === 'image') {
            previewDiv.style.backgroundImage = `url('${slide.src}')`;
        } else if (slide.type === 'video') {
            let mediaElement;
            if (slide.src.includes('youtube.com')) {
                mediaElement = document.createElement('iframe');
                mediaElement.src = slide.src;
                mediaElement.setAttribute('frameborder', '0');
                mediaElement.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                mediaElement.setAttribute('allowfullscreen', '');
            } else {
                mediaElement = document.createElement('video');
                mediaElement.src = slide.src;
                mediaElement.setAttribute('muted', '');
                mediaElement.setAttribute('loop', '');
                mediaElement.style.width = '100%';
                mediaElement.style.height = '100%';
                mediaElement.style.objectFit = 'cover';
            }
            previewDiv.appendChild(mediaElement);
        }
        itemDiv.appendChild(previewDiv);

        const textSpan = document.createElement('span');
        textSpan.classList.add('admin-media-item-text');
        textSpan.textContent = content[currentLanguage][slide.textKey] || slide.textKey;
        itemDiv.appendChild(textSpan);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('admin-delete-btn');
        deleteButton.textContent = content[currentLanguage].adminDeleteBtn;
        deleteButton.onclick = () => deleteMedia(index);
        itemDiv.appendChild(deleteButton);

        adminMediaList.appendChild(itemDiv);
    });
}

function addMedia() {
    const url = document.getElementById('mediaUrlInput').value.trim();
    const type = document.getElementById('mediaTypeSelect').value;
    const text = document.getElementById('mediaTextInput').value.trim();

    if (!url || !text) {
        alert('URL/Path and Title cannot be empty!');
        return;
    }

    const newTextKey = `customMedia${Date.now()}`;
    content.telugu[newTextKey] = text;
    content.english[newTextKey] = text;

    slidesData.push({ type: type, src: url, textKey: newTextKey });
    saveSlidesData();
    
    document.getElementById('mediaUrlInput').value = '';
    document.getElementById('mediaTextInput').value = '';

    updateContent(); 
    renderAdminMediaList();
    alert('మీడియా విజయవంతంగా జోడించబడింది!');
}

function deleteMedia(index) {
    if (confirm('మీరు ఈ మీడియాను తొలగించాలనుకుంటున్నారా?')) {
        slidesData.splice(index, 1);
        saveSlidesData();
        
        if (currentStatusIndex >= slidesData.length) {
            currentStatusIndex = Math.max(0, slidesData.length - 1);
        }

        updateContent();
        renderAdminMediaList();
        alert('మీడియా విజయవంతంగా తొలగించబడింది!');
    }
}

// Show All Media Modal
function showAllMedia() {
    mediaModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    clearTimeout(statusAutoplayTimeout);
    
    if (currentGalleryVideo) {
        currentGalleryVideo.pause();
        currentGalleryVideo.muted = true;
    }
}

function closeMediaModal() {
    mediaModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    if (isStatusAutoplay && mainContent.classList.contains('show')) {
        selectStatus(currentStatusIndex);
    }
}

// Mobile menu toggle
menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
    this.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
});

// Close mobile menu
function closeMenu() {
    mobileMenu.classList.remove('open');
    menuToggle.textContent = '☰';
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMenu();
    }
});

// Close modal when clicking outside
mediaModal.addEventListener('click', function(e) {
    if (e.target === mediaModal) {
        closeMediaModal();
    }
});
adminModal.addEventListener('click', function(e) {
    if (e.target === adminModal) {
        closeAdminModal();
    }
});
pujaModal.addEventListener('click', function(e) {
    if (e.target === pujaModal) {
        closePujaModal();
    }
});

// Smooth scrolling for navigation links
document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Scroll event listener
window.addEventListener('scroll', function() {
    // Scroll to top button
    if (window.scrollY > 600) {
        if (!document.querySelector('.scroll-to-top')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '⬆️';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(45deg, #8B0000, #DC143C);
                color: white;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                z-index: 1000;
                box-shadow: 0 6px 20px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
            `;
            
            scrollBtn.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            scrollBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.boxShadow = '0 8px 25px rgba(220,20,60,0.4)';
            });
            
            scrollBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            });
            
            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-to-top');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'Escape':
            closeMenu();
            closeMediaModal();
            closeAdminModal();
            closePujaModal();
            break;
        case 'ArrowLeft':
            if (mainContent.classList.contains('show') && !mediaModal.classList.contains('show') && !adminModal.classList.contains('show') && !pujaModal.classList.contains('show')) {
                previousStatus();
            }
            break;
        case 'ArrowRight':
            if (mainContent.classList.contains('show') && !mediaModal.classList.contains('show') && !adminModal.classList.contains('show') && !pujaModal.classList.contains('show')) {
                nextStatus();
            }
            break;
        case ' ':
            if (mainContent.classList.contains('show') && !mediaModal.classList.contains('show') && !adminModal.classList.contains('show') && !pujaModal.classList.contains('show')) {
                e.preventDefault();
                toggleStatusAutoplay();
            }
            break;
    }
});

// Enhanced touch support for mobile devices
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
        if (mainContent.classList.contains('show') && !mediaModal.classList.contains('show') && !adminModal.classList.contains('show') && !pujaModal.classList.contains('show')) {
            const gallerySection = document.getElementById('media-gallery');
            if (gallerySection && gallerySection.getBoundingClientRect().top <= 120 && gallerySection.getBoundingClientRect().bottom >= 120) {
                if (diffX > 0) {
                    nextStatus();
                } else {
                    previousStatus();
                }
            }
        }
    }
}

// Add visual feedback for interactions
function addRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 215, 0, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Apply ripple effect to buttons and interactive elements
document.addEventListener('click', function(e) {
    const interactiveElements = ['button', 'a', '.donor-card', '.puja-card', '.event-card', '.gallery-btn', '.lang-btn', '.special-donor-card', '.modal-media-item', '.admin-delete-btn', '.admin-add-btn', '.contact-card', '.service-card', '.status-story', '.clickable-puja'];
    const element = e.target.closest(interactiveElements.join(', '));
    
    if (element && !element.classList.contains('no-ripple')) {
        addRippleEffect(element, e);
    }
});

// Add random floating elements
function createFloatingElement() {
    const element = document.createElement('div');
    const symbols = ['🕉️', '🙏', '✨', '🌟', '💫', '🔱', '🪔', '🌺', '📿', '🎭', '🎵', '🚩', '🌹', '🔔', '🌸'];
    element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    element.style.cssText = `
        position: fixed;
        font-size: ${1 + Math.random() * 0.5}rem;
        color: rgba(255, 215, 0, ${0.2 + Math.random() * 0.3});
        pointer-events: none;
        z-index: -1;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        animation: floatUp ${6 + Math.random() * 4}s linear forwards;
    `;
    
    document.body.appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 10000);
}

// Add CSS for floating animation
const floatUpStyle = document.createElement('style');
floatUpStyle.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-120vh) rotate(${Math.random() * 720}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatUpStyle);

// Create floating elements periodically
setInterval(createFloatingElement, 4000);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// Enhanced interactions for cards
document.querySelectorAll('.donor-card, .puja-card, .special-donor-card, .event-card, .contact-card, .service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(255,140,0,0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Auto-scroll status stories on mobile
function autoScrollStories() {
    const storiesContainer = document.getElementById('statusStoriesRow');
    if (storiesContainer && window.innerWidth <= 768) {
        const scrollAmount = 80; // Width of one story + gap
        const maxScroll = storiesContainer.scrollWidth - storiesContainer.clientWidth;
        
        if (storiesContainer.scrollLeft >= maxScroll) {
            storiesContainer.scrollLeft = 0;
        } else {
            storiesContainer.scrollLeft += scrollAmount;
        }
    }
}

// Auto-scroll stories every 3 seconds on mobile
setInterval(autoScrollStories, 3000);

// Add touch gestures for status navigation
let statusTouchStartX = 0;
let statusTouchStartY = 0;

statusViewer.addEventListener('touchstart', function(e) {
    statusTouchStartX = e.touches[0].clientX;
    statusTouchStartY = e.touches[0].clientY;
});

statusViewer.addEventListener('touchend', function(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = statusTouchStartX - touchEndX;
    const diffY = statusTouchStartY - touchEndY;
    
    // Only handle horizontal swipes
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
            nextStatus();
        } else {
            previousStatus();
        }
    }
});

// Pause autoplay when user interacts with status
statusViewer.addEventListener('click', function(e) {
    // Don't interfere with control buttons
    if (!e.target.closest('.status-prev, .status-next')) {
        if (isStatusAutoplay) {
            clearTimeout(statusAutoplayTimeout);
            isStatusAutoplay = false;
            updateMediaControls();
        }
    }
});

// Resume autoplay after 5 seconds of inactivity
let inactivityTimer;
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        if (!isStatusAutoplay && mainContent.classList.contains('show')) {
            isStatusAutoplay = true;
            selectStatus(currentStatusIndex);
            updateMediaControls();
        }
    }, 5000);
}

// Reset inactivity timer on user interaction
document.addEventListener('click', resetInactivityTimer);
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);

// Optimize video loading for mobile
function optimizeVideoForMobile() {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('video').forEach(video => {
            video.setAttribute('preload', 'metadata');
            video.setAttribute('playsinline', '');
        });
    }
}

// Call optimization on load and resize
window.addEventListener('load', optimizeVideoForMobile);
window.addEventListener('resize', optimizeVideoForMobile);

// Add status viewer click to pause/play functionality
let statusClickCount = 0;
statusContent.addEventListener('click', function(e) {
    // Avoid double-click issues
    statusClickCount++;
    setTimeout(() => {
        if (statusClickCount === 1) {
            // Single click - pause/play
            if (currentGalleryVideo) {
                if (currentGalleryVideo.paused) {
                    currentGalleryVideo.play();
                } else {
                    currentGalleryVideo.pause();
                }
            }
            
            // Toggle autoplay
            if (isStatusAutoplay) {
                clearTimeout(statusAutoplayTimeout);
                isStatusAutoplay = false;
            } else {
                isStatusAutoplay = true;
                selectStatus(currentStatusIndex);
            }
            updateMediaControls();
        }
        statusClickCount = 0;
    }, 300);
});

// Prevent context menu on status viewer (like WhatsApp)
statusViewer.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Add status progress animation
function animateProgressBar() {
    const activeBar = document.querySelector('.progress-bar.active .progress-fill');
    if (activeBar) {
        activeBar.style.animation = 'none';
        setTimeout(() => {
            activeBar.style.animation = 'progressFill 5s linear';
        }, 10);
    }
}

// Call progress animation when status changes
const originalSelectStatus = selectStatus;
selectStatus = function(index) {
    originalSelectStatus(index);
    setTimeout(animateProgressBar, 100);
};

// Initialize page - Directly show main content
document.addEventListener('DOMContentLoaded', function() {
    // Load data from localStorage first
    loadSlidesData();

    // Set initial language to Telugu
    currentLanguage = 'telugu';
    selectLanguage('telugu', {target: document.querySelector('.lang-btn.active')});

    // Show main content immediately
    mainContent.style.display = 'block';
    mainContent.style.opacity = '1';

    console.log('🕉️ శ్రీ దుర్గాదేవి శరన్నవరాత్రి మహోత్సవాలు వెబ్‌సైట్ విజయవంతంగా లోడ్ అయింది 🕉️');
    console.log('📱 WhatsApp స్టైల్ గ్యాలరీ జోడించబడింది');
    console.log('🎭 పూజా వివరాల మోడల్ జోడించబడింది');
    console.log('✨ అన్ని ఫీచర్లు పూర్తిగా పని చేస్తున్నాయి');
});

// Add performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`⚡ వెబ్‌సైట్ ${Math.round(loadTime)}ms లో లోడ్ అయింది`);
});

// Add error handling
window.addEventListener('error', function(e) {
    console.error('❌ వెబ్‌సైట్ లోపం:', e.error);
});

// Add visibility change handling
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        clearTimeout(statusAutoplayTimeout);
        clearTimeout(inactivityTimer);
        if (currentGalleryVideo) {
            currentGalleryVideo.pause();
        }
    } else {
        if (isStatusAutoplay && mainContent.classList.contains('show') && !mediaModal.classList.contains('show') && !adminModal.classList.contains('show') && !pujaModal.classList.contains('show')) {
            selectStatus(currentStatusIndex);
        }
        resetInactivityTimer();
    }
});

// Final cleanup
window.addEventListener('beforeunload', function() {
    clearTimeout(statusAutoplayTimeout);
    clearTimeout(inactivityTimer);
    
    document.querySelectorAll('video, audio').forEach(media => {
        media.pause();
    });
    
    console.log('🙏 ధన్యవాదాలు! మళ్లీ రండి! 🙏');
});

// Add PWA manifest support
const manifest = {
    name: "శ్రీ దుర్గాదేవి శరన్నవరాత్రి మహోత్సవములు",
    short_name: "దుర్గాదేవి మహోత్సవాలు",
    description: "కొరగాo గ్రామం దైవ వేడుకలు మరియు మహోత్సవములు",
    start_url: "/",
    display: "standalone",
    background_color: "#2d1b69",
    theme_color: "#FFD700",
    icons: [
        {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png"
        }
    ]
};
   
// Create and inject manifest
const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
const manifestURL = URL.createObjectURL(manifestBlob);
const link = document.createElement('link');
link.rel = 'manifest';
link.href = manifestURL;
document.head.appendChild(link);

console.log('🎉 వెబ్‌సైట్ పూర్తిగా లోడ్ అయింది - పూజా వివరాలు మరియు WhatsApp స్టైల్ గ్యాలరీతో! 🎉');



