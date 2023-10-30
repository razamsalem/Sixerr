const gigDemoData = [
  {
    _id: "i101",
    title: "I will create custom company logo design for your business",
    price: 15,
    packages: {
      basic: {
        title: 'Bronze Package',
        packPrice: 15,
        packDaysToMake: 3,
        desc: '1 logo design, High Quality Mock-up, Logo Transparency',
        features: ['1 concept included', 'Logo transparency']
      },
      standard: {
        title: 'Silver Package',
        packPrice: 30,
        packDaysToMake: 5,
        desc: '2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file',
        features: ['2 concept included', 'Logo transparency', 'Printable file', 'Include 3D mockup']
      },
      premium: {
        title: 'Gold Package',
        packPrice: 45,
        packDaysToMake: 8,
        desc: ' 3 Amazing concepts + all source files+ Social Media Kit + 24/7 priority customer services',
        features: ['3 concepts included', 'Logo transparency', 'Vector file', 'Printable file', 'Include 3D mockup', 'Include source file', 'Include social media kit']
      }
    },
    owner: {
      "_id": "u101",
      "fullname": "Taylor P",
      "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
      "level": 2,
      "rate": 5,
    },
    daysToMake: 3,
    description: "Captivating, enriched, elaborate and original is what I believe you're looking for. Your business logo deserves to be created by somebody who gets your business. I am professional designer offering high-quality business Logo design services since 2013 and branding solutions to all kind of businesses",
    imgUrls: ["https://res.cloudinary.com/dgsfbxsed/image/upload/v1698674928/taylor-1_nmgnmv.webp", "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698674928/taylor-2_uqjv74.webp"],
    category: "Graphics & Design",
    tags: ['Logo Design', 'Website Design', 'App Design', 'UX Design'],
    likedByUsers: ['mini-user']
  },
  {
    _id: "i102",
    title: "I will design your company's vision plan and create logos",
    price: 20,
    packages: {
      basic: {
        title: 'Low Cost Package',
        packPrice: 20,
        packDaysToMake: 3,
        desc: '1 logo design, High Quality Mock-up, Logo Transparency',
        features: ['1 concept included', 'Logo transparency']
      },
      standard: {
        title: 'Normal Package',
        packPrice: 40,
        packDaysToMake: 5,
        desc: '2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file',
        features: ['2 concept included', 'Logo transparency', 'Printable file', 'Include 3D mockup']
      },
      premium: {
        title: 'Deluxe Package',
        packPrice: 60,
        packDaysToMake: 8,
        desc: ' 3 Amazing concepts + all source files+ Social Media Kit + 24/7 priority customer services',
        features: ['3 concepts included', 'Logo transparency', 'Vector file', 'Printable file', 'Include 3D mockup', 'Include source file', 'Include social media kit']
      }
    },
    owner: {
      "_id": "u192",
      "fullname": "Julia Carter",
      "level": 2,
      "rate": 3.2,
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675021/julia-logo_ahamun.webp",
    },
    daysToMake: 3,
    description: "Thank you for stopping by! This gig is intended for anyone who is looking for a well rounded and undefined design for their company or brand. We will try different concepts and ideas to get you where you need to be. If you aren't sure where to start, this is a good gig to choose Unlike a lot of other fiverr artists, my designs do not change in quality depending upon what package you choose. All of my designs deserve the same attention and quality guarantee. My process starts in the traditional form which means I begin with paper and pencil. Once that is complete I refine it with art and/or calligraphy pens. Once that's complete, I bring it into my computer and render it digitally. The colors can be whatever you choose and the packages are all different. So please read them carefully or send me a message if you have any questions",
    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675269/salty-dog_z7kqoy.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675270/salty-forest_nbtfmr.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675270/salty-fish_gpddlj.webp"],
    category: "Graphics & Design",
    tags: ['Logo Design', 'Website Design', 'App Design', 'UX Design'],
    likedByUsers: ['mini-user']
  },
  {
    _id: "i1qz",
    title: "I will create custom company logo design for your business",
    price: 10,
    packages: {
      basic: {
        title: 'Beginner Package',
        packPrice: 10,
        packDaysToMake: 3,
        desc: '1 logo design, High Quality Mock-up, Logo Transparency',
        features: ['1 concept included', 'Logo transparency']
      },
      standard: {
        title: 'VIP Package',
        packPrice: 25,
        packDaysToMake: 5,
        desc: '2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file',
        features: ['2 concept included', 'Logo transparency', 'Printable file', 'Include 3D mockup']
      },
      premium: {
        title: 'Best Package',
        packPrice: 50,
        packDaysToMake: 8,
        desc: ' 3 Amazing concepts + all source files+ Social Media Kit + 24/7 priority customer services',
        features: ['3 concepts included', 'Logo transparency', 'Vector file', 'Printable file', 'Include 3D mockup', 'Include source file', 'Include social media kit']
      }
    },
    owner: {
      "_id": "u190",
      "fullname": "Micky Smith",
      "level": 1,
      "rate": 5,
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675356/kfc-prof_iykiuz.jpg",
    },
    daysToMake: 3,
    description: "Are you looking for an artist to turn your ideas into linocut Illustration? You are in the right gig! Hi, I am Micky, a full-time graphic designer for more than 5 years. I have a strong interest in linocut Illustration. Most of my works focus on Animals, Botanicals, and Landscapes, but are not limited to other objects. I like to incorporate some Japanese handwriting into the Illustration. In this gig, I will provide a service to create an artistic, high-quality, and unique linocut Illustration based on your request. You can freely discuss this with me before placing your Linocut order.",
    imgUrls: ["https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675441/rizem-1_scjm0u.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675442/rizem-2_xi3u52.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675442/rizem-3_qenwne.webp"],
    category: "Graphics & Design",
    tags: ['Logo Design', 'Website Design', 'App Design', 'UX Design'],
    likedByUsers: ['mini-user']
  },
  {
    _id: "i104",
    title: "I will do 3 modern minimalist logo design",
    price: 60,
    packages: {
      basic: {
        title: 'Starter Package',
        packPrice: 60,
        packDaysToMake: 4,
        desc: '1 logo design, High Quality Mock-up, Logo Transparency',
        features: ['1 concept included', 'Logo transparency']
      },
      standard: {
        title: 'Professional Package',
        packPrice: 150,
        packDaysToMake: 6,
        desc: '2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file',
        features: ['2 concept included', 'Logo transparency', 'Printable file', 'Include 3D mockup']
      },
      premium: {
        title: 'Diamond Package',
        packPrice: 250,
        packDaysToMake: 8,
        desc: ' 3 Amazing concepts + all source files+ Social Media Kit + 24/7 priority customer services',
        features: ['3 concepts included', 'Logo transparency', 'Vector file', 'Printable file', 'Include 3D mockup', 'Include source file', 'Include social media kit']
      }
    },
    owner: {
      "_id": "u154",
      "fullname": "Justin Timber",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675693/justin-1_ch5ljv.webp",
      "level": 1,
      "rate": 4,
    },
    daysToMake: 4,
    description: "Dive into my unique and eye catching Logo Design expertise. Crafting captivating visuals is my forte, excluding whimsical cartoons.Led by our proficient team, we excel in Business, Website, and YouTube Logo Design.",
    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675694/justin-2_rpngo4.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675641/justin-4_i1rbhl.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675641/justin-3_twyvpr.webp"
    ],
    category: "Graphics & Design",
    tags: ['Logo Design', 'Website Design', 'App Design', 'UX Design'],
    likedByUsers: ['mini-user']
  },
  {
    _id: "iz1",
    title: "I will convert figma to react PSD to react js next js tailwind CSS",
    price: 20,
    packages: {
      basic: {
        title: 'Basic React',
        packPrice: 20,
        packDaysToMake: 1,
        desc: 'simple two section UI of one page',
        features: ['1 page', 'Responsive design', 'Browser compatibility']
      },
      standard: {
        title: 'Standard React',
        packPrice: 40,
        packDaysToMake: 2,
        desc: 'simple four section UI of two page, routing',
        features: ['1 pages', 'Responsive design', 'Browser compatibility', 'Slider/scroller']
      },
      premium: {
        title: 'Premium React',
        packPrice: 80,
        packDaysToMake: 4,
        desc: 'complex design of 3 pages, routing, auth with firebase or mongodb',
        features: ['3 pages', 'Responsive design', 'Browser compatibility', 'Slider/scroller', 'Custom admin panel', 'Server upload']
      }
    },
    owner: {
      "_id": "d101",
      "fullname": "Rhett R.",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698675948/rhett-1_xldfaa.webp",
      "level": 2,
      "rate": 5,
    },
    daysToMake: 1,
    description: `Hello, Greetings!
    Are you looking for a Frontend React developer who can Convert your design into a website like Figma to React, PSD to React, XD to React, AI to React, Sketch to React, PDF to React, JPG to React, PNG to React tailwind CSS Bootstrap?
    Okay, it's the right place. 
    I have already converted lot of projects into react js website using Tailwind, Ant design, MUI React Bootstrap. Without using any custom CSS.
 
    My knowledge and skills:  
    - HTML5, CSS3, SCSS
    - Bootstrap, Tailwindcss
    - Javascript, ECMAScript (ES6)
    - Framer Motion
    - React js, Next js, RESTful API integration 
    - Redux-toolkit, React-query
    - React Bootstrap, Ant Design, Material Ui (MUI), Tailwind
    - Node js, Express, Firebase
    - MongoDB, MySQL 
    `,
    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676039/rhett-2_hvxaxz.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676040/rhett-3_xm7dmt.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676040/rhett-4_xbidii.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676040/rhett-5_xqsape.webp"
    ],
    category: "Programming & Tech",
    tags: ['AI Services', 'Website Development', 'Business Websites', 'E-Commerce Development', 'Landing Pages', 'Web Applications', 'HTML & CSS Developers', 'JavaScript Developers'],
    likedByUsers: [{
      "_id": "u102",
      "fullname": "Michelle R",
      "imgUrl": "/img/img2.jpg"
    }]
  },
  {
    _id: "iz2",
    title: "I will develop a responsive website in HTML CSS Javascript React Node NextJS",
    price: 50,
    packages: {
      basic: {
        title: 'Basic',
        packPrice: 50,
        packDaysToMake: 1,
        desc: 'Single page Frontend website (Static).',
        features: ['1 page', 'Content upload', 'Responsive design', 'Design customization']
      },
      standard: {
        title: 'Standard',
        packPrice: 100,
        packDaysToMake: 2,
        desc: 'Major frontend website',
        features: ['3 pages', 'Content upload', 'Responsive design', 'Design customization', 'Source code']
      },
      premium: {
        title: 'Premium',
        packPrice: 150,
        packDaysToMake: 4,
        desc: 'FullStack website',
        features: ['5 pages', 'Content upload', 'Responsive design', 'Design customization', 'Backend', 'Custom admin panel', 'Server upload']
      }
    },
    owner: {
      "_id": "d102",
      "fullname": "Simon Timber",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676156/simon-1_mlnqhr.webp",
      "level": 1,
      "rate": 1,
    },
    daysToMake: 3,
    description: `
    Welcome to my FullStack (MERN stack) and Nextjs Website Development Gig!
    I specialize in creating stunning and responsive web applications for businesses and individuals using MERN stack (MongoDB, Express, React, Nodejs) and Nextjs. Whether you need a simple landing page or a complex app, I've got you covered!
    `,
    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676158/simon-2_uacoph.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676157/simon-3_zayrwb.webp"
    ],
    category: "Programming & Tech",
    tags: ['Wordpress', 'Website Development', 'E-Commerce Development', 'Web Applications', 'HTML & CSS Developers', 'JavaScript Developers'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz3",
    title: "I will build web apps, sites with js, react, nextjs, PHP and node",
    price: 85,
    packages: {
      basic: {
        title: 'Basic',
        packPrice: 85,
        packDaysToMake: 4,
        desc: 'Create for you website',
        features: ['2 pages', 'Design customization', 'Content upload', 'Responsive design']
      },
      standard: {
        title: 'Deluxe',
        packPrice: 185,
        packDaysToMake: 4,
        desc: 'Create and fix website errors and bugs',
        features: ['5 pages', 'Design customization', 'Content upload', 'Responsive design']
      },
      premium: {
        title: 'Super Deluxe',
        packPrice: 320,
        packDaysToMake: 10,
        desc: 'FullStack website',
        features: ['5 pages', 'Content upload', 'Responsive design', 'Design customization', 'Backend', 'Custom admin panel', 'Server upload']
      }
    },
    owner: {
      "_id": "d103",
      "fullname": "Jason Cook",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676246/jason-1_lroa1e.webp",
      "level": 2,
      "rate": 5,
    },
    daysToMake: 4,
    description: `
    NB: Contact me for Codebase errors/Bugs fixes, JavaScript/PHP issues.
    Are you Looking for skilled Pro design and development for your website and apllications?
    Are you looking for HTML/CSS, ReactJS/NEXTJS Development?
    Are you an agency looking to outsource projects for your clients?
    If yes, I have come to your rescue!

    What I offer here is to share your lenses, picture what you have in mind and then find the best approach to help you actualize your Web Applications Project.
    I develop apps with latest technology using Html/CSS, Reactjs, Nextjs, Nodejs, JavaScript and Laravel.`,

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676247/jason-2_ykqz4t.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676247/jason-3_qsbsay.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676247/jason-4_uu1us4.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676248/jason-5_l7ijy1.webp"
    ],
    category: "Programming & Tech",
    tags: ['Website Development', 'Business Websites', 'Web Applications', 'HTML & CSS Developers', 'JavaScript Developers'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz4",
    title: "I will code HTML CSS javascript PHP web application",
    price: 70,
    packages: {
      basic: {
        title: 'Basic',
        packPrice: 70,
        packDaysToMake: 1,
        desc: 'Single page Frontend website (Static).',
        features: ['1 page', 'Content upload', 'Responsive design', 'Design customization']
      },
      standard: {
        title: 'Standard',
        packPrice: 100,
        packDaysToMake: 2,
        desc: 'Major frontend website',
        features: ['3 pages', 'Content upload', 'Responsive design', 'Design customization', 'Source code']
      },
      premium: {
        title: 'Premium',
        packPrice: 150,
        packDaysToMake: 4,
        desc: 'FullStack website',
        features: ['5 pages', 'Content upload', 'Responsive design', 'Design customization', 'Backend', 'Custom admin panel', 'Server upload']
      }
    },
    owner: {
      "_id": "d105",
      "fullname": "Sohaib Saim",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676353/sohib_uuutrd.webp",
      "level": 1,
      "rate": 5,
    },
    daysToMake: 1,
    description: `Hi there!
    Are you looking for a JavaScript Developer to build a responsive and user-friendly website from scratch or add new features or redesign your existing website? then you're in the right place!


    I have 5+ years of experience in web application development and I write code in JavaScript, Typescript, jQuery, HTML, CSS, Bootstrap, and PHP for custom websites according to the requirement.`,

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676353/sohib-1_pw15oz.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676354/sohib-2_qrcivu.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698676354/sohib-3_ttej46.webp",
    ],
    category: "Programming & Tech",
    tags: ['Website Development', 'Business Websites', 'E-Commerce Development', 'Landing Pages', 'Web Applications', 'HTML & CSS Developers', 'JavaScript Developers'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz5",
    title: "I will be your frontend wizard with html css react js jquery",
    price: 80,
    packages: {
      basic: {
        title: 'Basic',
        packPrice: 80,
        packDaysToMake: 1,
        desc: 'Single page Frontend website (Static).',
        features: ['1 page', 'Content upload', 'Responsive design', 'Design customization']
      },
      standard: {
        title: 'Standard',
        packPrice: 160,
        packDaysToMake: 2,
        desc: 'Major frontend website',
        features: ['3 pages', 'Content upload', 'Responsive design', 'Design customization', 'Source code']
      },
      premium: {
        title: 'Premium',
        packPrice: 240,
        packDaysToMake: 4,
        desc: 'FullStack website',
        features: ['5 pages', 'Content upload', 'Responsive design', 'Design customization', 'Backend', 'Custom admin panel', 'Server upload']
      }
    },
    owner: {
      "_id": "d106",
      "fullname": "Haya Ch",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678569/haya-1_caoqil.webp",
      "level": 1,
      "rate": 4.9,
    },
    daysToMake: 1,
    description: `Hello, my name is Haya Ch and i am a front end web developer and i can build a responsive website for you.
     I have almost 1 year of experience and complete almost 200+ projects.. 
     I have good skills on HTML5, CSS3, BOOTSTRAP, JAVASCRIPT, REACT JS. I can built a responsive website so that your website will look perfect on all the small and wide screens. i will use advance CSS3 and vanilla javascript for animations on your website. .I can convert figma to html and i can convert psd to html. 
     I will be your Front-end Web Wizard!`,

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678570/haya-2_vqypg7.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678570/haya-3_qr7qjr.webp"
    ],
    category: "Programming & Tech",
    tags: ['Landing Pages', 'Web Applications', 'HTML & CSS Developers', 'JavaScript Developers'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz6",
    title: "I will do professional youtube video editing within 24 hours",
    price: 100,
    packages: {
      basic: {
        title: 'Small Project ',
        packPrice: 100,
        packDaysToMake: 2,
        desc: 'Basic edits/corrections, I suggest that you get in contact with me first.',
        features: ['Up to 1 minute running time', 'Sound design & mixing']
      },
      standard: {
        title: 'Medium Project',
        packPrice: 300,
        packDaysToMake: 3,
        desc: 'Professionally Editing will be done with Color Grading, Subtitles, Sound design & mixing, Transition',
        features: ['Up to 3 minutes running time', 'Sound design & mixing', 'Motion graphics']
      },
      premium: {
        title: 'Large Project',
        packPrice: 500,
        packDaysToMake: 3,
        desc: 'This Package Includes Intro/Outro/Thumbnails/Extremely Professional, 4k Video Editing.',
        features: ['Up to 6 minutes running time', 'Sound design & mixing', 'Motion graphics', 'Color grading']
      }
    },
    owner: {
      "_id": "d107",
      "fullname": "Sikandar Yoor",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678643/slik_fpytey.webp",
      "level": 1,
      "rate": 4.9,
    },
    daysToMake: 2,
    description:
      `Hi Welcome to My Gig, 
    Are you looking for a Professional YouTube Video Editing service that can deliver in 24 hours or less time?
    
    Important: 
    Video editing is complex, so please contact me with your description of what you want.  
    Vlogs, explainer videos(stock footage over voiceover),and Green Screen are my favorites.
    And any type of Video editing can be done.`,

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678645/slik-1_iuu2w7.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678645/slik2_tnpyew.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678647/slik3_eah6rw.jpg"
    ],
    category: "Video & Animation",
    tags: ["Video Editing", "Visual Effects", "Video Art", "Logo Animation", "Character Animation", "Animated GIFs"],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz7",
    title: "I will be your pro Tiktok editor for all your Tiktok needs",
    price: 10,
    packages: {
      basic: {
        title: '1 Edit tiktoks, reels and shorts',
        packPrice: 10,
        packDaysToMake: 2,
        desc: 'One Video Upto 30 Seconds Of Runtime, Emojies, Logo, Motion Graphics, Color Grading.',
        features: ['Up to 1 minute running time', 'Sound design & mixing', 'Subtitles']
      },
      standard: {
        title: '5 Edit tiktoks, reels and shorts',
        packPrice: 50,
        packDaysToMake: 5,
        desc: '5 Edit tiktoks, reels and shorts',
        features: ['Up to 3 minutes running time', 'Sound design & mixing', 'Subtitles', 'Motion graphics']
      },
      premium: {
        title: '10 Edit tiktoks, reels and shorts',
        packPrice: 100,
        packDaysToMake: 7,
        desc: 'This Package Includes Intro/Outro/Thumbnails/Extremely Professional, 4k Video Editing.',
        features: ['Up to 6 minutes running time', 'Sound design & mixing', 'Subtitles', 'Motion graphics', 'Color grading']
      }
    },
    owner: {
      "_id": "d108",
      "fullname": "Adnan Adnani",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678722/adnan_nvjxgd.webp",
      "level": 2,
      "rate": 4.8,
    },
    daysToMake: 2,
    description:
      `Keeping your TikTok video editing real, always! 

      A video that delivers all the necessary information a customer wants has a great influence.   
      This is why businesses rely on TikTok animations or TikTok advertising that can easily go viral on social networks and win over the hearts of their target audience. 
      
      But
      What if the TikTok editing looks unreal, blurry, or poorly dubbed? Wont it throw a spanner in the works? 

      This is exactly why businesses need their TikTok videos to be edited. 
      GET YOUR TikTok VIDEO EDITING BY A PRO`,

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678724/adnan-1_cnvfvc.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678725/adnan-2_f5xscr.webp",
    ],
    category: "Video & Animation",
    tags: ["Video Editing", "Visual Effects", "Video Art", "Logo Animation", "Character Animation", "Animated GIFs"],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "R8aks45Q",
    title: "I will design a brand style guide and logo for you",
    price: 25,
    packages: {
      basic: {
        title: 'Cheap Package',
        packPrice: 25,
        packDaysToMake: 3,
        desc: '1 logo design, High Quality Mock-up, Logo Transparency',
        features: ['1 concept included', 'Logo transparency']
      },
      standard: {
        title: 'Standard Package',
        packPrice: 50,
        packDaysToMake: 5,
        desc: '2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file',
        features: ['2 concept included', 'Logo transparency', 'Printable file', 'Include 3D mockup']
      },
      premium: {
        title: 'HIGH QUALITY',
        packPrice: 100,
        packDaysToMake: 8,
        desc: ' 3 Amazing concepts + all source files+ Social Media Kit + 24/7 priority customer services',
        features: ['3 concepts included', 'Logo transparency', 'Vector file', 'Printable file', 'Include 3D mockup', 'Include source file', 'Include social media kit']
      }
    },
    owner: {
      "_id": "u101",
      "fullname": "Taylor P",
      "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
      "level": 2,
      "rate": 5,
    },
    daysToMake: 6,
    description: "The process if you have a logo already: After you complete my questionnaire and submit your vector file of the logo I will create your editable guideline in PDF format. The process if you DON'T have a logo already: After you complete my questionnaire, I will create logo concepts, after approval of the logo I will create the guideline.",
    imgUrls: ["https://res.cloudinary.com/de2rdmsca/image/upload/v1698328728/7fc3e2d2da246770dd879d232d1e946c6ad755a7_exmid7.webp", "https://res.cloudinary.com/de2rdmsca/image/upload/v1698328721/178e5fac2ad62b9a85e8be65e9ad3802b2fdc4bd_zfczqg.webp", "https://res.cloudinary.com/de2rdmsca/image/upload/v1698328726/a27bc6ad887e1e7c421805257d146c38b99e97e4_dadpez.webp"],
    category: "Graphics & Design",
    tags: ['Logo Design', 'Brand Style Guides', 'UX Design'],
    likedByUsers: ['mini-user']
  },
  {
    _id: "iz8",
    title: "I will build react js next js website with tailwind css",
    price: 50,
    packages: {
      basic: {
        title: 'Basic',
        packPrice: 50,
        packDaysToMake: 1,
        desc: 'Single page Frontend website (Static).',
        features: ['1 page', 'Content upload', 'Responsive design', 'Design customization']
      },
      standard: {
        title: 'Standard',
        packPrice: 150,
        packDaysToMake: 2,
        desc: 'Major frontend website',
        features: ['3 pages', 'Content upload', 'Responsive design', 'Design customization', 'Source code']
      },
      premium: {
        title: 'Premium',
        packPrice: 250,
        packDaysToMake: 4,
        desc: 'FullStack website',
        features: ['5 pages', 'Content upload', 'Responsive design', 'Design customization', 'Backend', 'Custom admin panel', 'Server upload']
      }
    },
    owner: {
      "_id": "d109",
      "fullname": "David Iz",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678832/david-1_pptqxf.webp",
      "level": 1,
      "rate": 5,
    },
    daysToMake: 3,
    description:
      `Hello,
      I am a frontend web developer and working with React Js, Next Js, and Tailwind Css since 2019 and building nice, clean, and responsive websites.
   
      I have completed over 200+ websites using all the modern technologies like React, Next js, Tailwind css, and all the other related technologies here on Fiverr and outside of Fiverr.
  
      Services I offer:

      React js, single page application
      Next js, server-side rendered application
      Static site using next js
      Tailwind Css
      Responsive design
      Typescript
      API integration
      Figma, Adobe xd to React Next js
      Redux
      React form with Formik and Yup or React hook form`,

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678833/david-2_ddvsbd.jpg",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678835/david-3_qe1f1c.jpg",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678836/david-4_gr5w1r.webp"
    ],
    category: "Programming & Tech",
    tags: ['Website Development', 'Web Applications', 'HTML & CSS Developers', 'JavaScript Developers'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz9",
    title: "I will do hyper realistic pencil portrait by hand drawing",
    price: 20,
    packages: {
      basic: {
        title: 'Silver',
        packPrice: 20,
        packDaysToMake: 3,
        desc: 'I will make your portrait or any other digital drawing any kind of with in 2 days',
        features: ['1 figure', 'Include source file', 'Include colors in illustration']
      },
      standard: {
        title: 'Diamond',
        packPrice: 50,
        packDaysToMake: 5,
        desc: 'I will offer a High resolution portrait or any other kind of art with more realistic features',
        features: ['1 figure', 'Include source file', 'Include colors in illustration', 'Printable resolution file', 'Commercial use']
      },
      premium: {
        title: 'Platinum',
        packPrice: 100,
        packDaysToMake: 7,
        desc: 'I will offer a hyperrealism portrait or any other art you want with much more realism.',
        features: ['2 figure', 'Include source file', 'Include colors in illustration', 'Printable resolution file', 'Commercial use', 'Include entire body illustration']
      }
    },
    owner: {
      "_id": "fred1",
      "fullname": "Fredrick F",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678915/fred-1_pvhlr6.webp",
      "level": 1,
      "rate": 4
    },
    daysToMake: 3,
    "description": "Hello ! Much obliged for visiting my gig :)\nIn this gig I'm offering you an exceptionally 3 one of a kind, best and reasonable bundles.\nIn case you are thinking for giving somebody uncommon an extremely delightful, eye getting gift( hyper practical hand drawing pencil sketch picture)?\nKindly select the helpful bundle and submit your request at this moment and I'll give you an ideal picture sketch, hand drawing, practical drawing, pencil attracting high goal JPEG/PNG advanced document.\nI will give hand-drawn dark and White or hued reasonable pictures.\nSympathetically give me clear reference photograph however much as could be expected.\nThe material I utilized for Creating pencil representations are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, mono eraser, brush, mixing stump, mechanical pencil, graphite powder and so on .\nYou can give me anything:\nPicture photographs\nFamily photographs\nCreature photographs\nAny item photographs\nScene photographs\nEngineering photographs\nAnything you envision\nKindly reach me prior to submitting your request! Much appreciated.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITA",

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678917/fred-2_xysl0a.jpg",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678919/fred-3_wkg4ff.jpg",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698678921/fred-4_a92x63.webp"
    ],
    category: "Graphics & Design",
    tags: ['Portraits & Caricatures'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz10",
    title: "I will rank etsy listing with etsy seo title and tags",
    price: 70,
    packages: {
      basic: {
        title: 'Shop Review',
        packPrice: 70,
        packDaysToMake: 5,
        desc: 'An in-depth report that tells you what is going well and how to improve.',
        features: ['E-commerce seo audit']
      },
      standard: {
        title: 'Shop Revamp',
        packPrice: 210,
        packDaysToMake: 7,
        desc: 'Optimisation of your store and up to 3 listings',
        features: ['E-commerce seo audit', 'Title optimization', 'Product description', 'Meta tags optimization']
      },
      premium: {
        title: 'Shop Revamp + 1:1 Training',
        packPrice: 270,
        packDaysToMake: 7,
        desc: 'Standard package + 1:1 video training via Zoom.',
        features: ['E-commerce seo audit', 'Title optimization', 'Product description', 'Meta tags optimization']
      }
    },
    owner: {
      "_id": "eLxx1",
      "fullname": "Elena",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679004/elena_hhosym.webp",
      "level": 2,
      "rate": 5
    },
    daysToMake: 5,
    "description": `Hit your targets and maximize your potential with an Etsy SEO Expert
    🚀I'm an experienced SEO expert and digital marketing consultant specializing in web content writing and e-commerce. Since 2018, I've helped over 2000 Etsy stores thrive and assisted numerous businesses in achieving 7-figure revenues. 💰My tailored approach to SEO and marketing strategies can help take your business to the next level. Trust in my attention to detail and commitment to your success. ✨Let's work together to build your online presence and achieve your goals. 📈 Contact me now.`,

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679006/elena-1_n2up3b.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679007/elena-2_ftzpx2.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679009/elena-3_brsqza.webp"
    ],
    category: "Digital Marketing",
    tags: ['E-Commerce Marketing', 'E-Commerce SEO', 'Video SEO', 'Email Marketing', 'Guest Posting'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz11",
    title: "I will design converting amazon listing enhanced brand content ebc a plus product page",
    price: 245,
    packages: {
      basic: {
        title: 'Basic',
        packPrice: 245,
        packDaysToMake: 10,
        desc: 'Per A+ Page - Up to 3 modules (The A+ Page may be suitable for multiple products).',
        features: ['1 keyword researched', '1 competitor researched']
      },
      standard: {
        title: 'Deluxe',
        packPrice: 435,
        packDaysToMake: 10,
        desc: 'Per A+ Page - Up to 3 modules (The A+ Page may be suitable for multiple products).',
        features: ['2 keyword researched', '2 competitor researched', '24/6 Online Service']
      },
      premium: {
        title: 'Super Deluxe',
        packPrice: 720,
        packDaysToMake: 12,
        desc: 'Per A+ Page - Up to 3 modules (The A+ Page may be suitable for multiple products)..',
        features: ['3 keyword researched', '3 competitor researched', '24/7 Online Service']
      }
    },
    owner: {
      "_id": "tHx1l",
      "fullname": "Thomas C",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679090/tom_dhk6bf.webp",
      "level": 2,
      "rate": 5
    },
    daysToMake: 10,
    "description": `Top Ecommerce Experts here to help scale your business
    Test. Scale. Win. We are a team of entrepreneurs at heart, certified experts working across 6 different timezones with 17 years of e-commerce experience. While your competition sleeps, we’re working on getting you ahead. Our data-driven tactics, and proven playbooks`,

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679092/tom-1_c1nyop.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679094/tom-2_wldeqi.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679096/tom-3_hzugs9.webp"
    ],
    category: "Digital Marketing",
    tags: ['E-Commerce Marketing', 'E-Commerce SEO', 'Video SEO', 'Email Marketing'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz12",
    title: "I will set up your etsy shop,add listings, SEO or do a complete overhaul",
    price: 40,
    packages: {
      basic: {
        title: 'Medium Shop',
        packPrice: 40,
        packDaysToMake: 4,
        desc: 'I will do complete etsy setup + 5 Products listings + Complete products SEO',
        features: ['E-commerce seo audit', '5 pages', 'Title optimization']
      },
      standard: {
        title: 'Large Shop',
        packPrice: 75,
        packDaysToMake: 7,
        desc: 'I will do complete etsy setup + 8 Products listings + Complete products SEO',
        features: ['E-commerce seo audit', '8 pages', 'Title optimization', 'Meta tags optimization']
      },
      premium: {
        title: 'Massive Shop',
        packPrice: 150,
        packDaysToMake: 14,
        desc: 'I will do complete etsy setup + 12 Products listings + Complete products SEO',
        features: ['E-commerce seo audit', '12 pages', 'Title optimization', 'Meta tags optimization', 'Product description']
      }
    },
    owner: {
      "_id": "Hssx1l",
      "fullname": "Haseeb",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679182/as_mqqeng.webp",
      "level": 1,
      "rate": 3
    },
    daysToMake: 4,
    "description": 'I will set up your Etsy shop, add listings, will do complete ETSY SEO or do a complete overhaul.',

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679183/as-1_ean46t.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679183/as-3_iq15tz.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679183/as-2_rdwzud.webp"
    ],
    category: "Digital Marketing",
    tags: ['E-Commerce Marketing', 'E-Commerce SEO', 'Video SEO', 'Email Marketing'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz13",
    title: "I will create cash cow automated youtube channel and videos for you",
    price: 60,
    packages: {
      basic: {
        title: 'Small Channel',
        packPrice: 60,
        packDaysToMake: 1,
        desc: 'I will create and setup your channel for you',
        features: ['Setup & integrations', 'Channel evaluation', 'Content creation']
      },
      standard: {
        title: 'Medium Channel',
        packPrice: 125,
        packDaysToMake: 3,
        desc: 'I will create and setup your channel for you including - Tags',
        features: ['Setup & integrations', 'Channel evaluation', 'Content creation', 'Action plan', 'Reporting']
      },
      premium: {
        title: 'Large Channel',
        packPrice: 350,
        packDaysToMake: 5,
        desc: 'I will create and setup your channel for you including - Logo and Banner - Tags',
        features: ['Setup & integrations', 'Channel evaluation', 'Content creation', 'Action plan', 'Reporting', 'Logo and Banner']
      }
    },
    owner: {
      "_id": "yox1l",
      "fullname": "Yomi",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679255/yo_go6ra7.webp",
      "level": 2,
      "rate": 5
    },
    daysToMake: 4,
    "description": `So you want to start a cash cow channel?
    Welcome to my YT cash cow gig! As an experienced YT marketer, I can help you turn your cash cow idea into a profitable business. Do you have a burning desire to upload content and make money passively from it. Just like Real estate you can make your money work for you by creating awesome cash cow channels that generate passive income long after they've been created.`,

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679255/yo-1_gibkwp.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679256/yo-2_hwqmjo.jpg",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679256/yo-3_pkjnlr.webp"
    ],
    category: "Digital Marketing",
    tags: ['Video Marketing', 'E-Commerce Marketing', 'E-Commerce SEO', 'Video SEO', 'Email Marketing'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "FUsdf5",
    title: "I will professionally promote your instagram account",
    price: 35,
    packages: {
      basic: {
        title: 'Small account',
        packPrice: 35,
        packDaysToMake: 3,
        desc: 'I will promote your Instagram account for 3 days',
        features: ['Natural Grow', 'Action plan', 'Content creation']
      },
      standard: {
        title: 'Medium account',
        packPrice: 55,
        packDaysToMake: 5,
        desc: 'I will promote your Instagram account for 5 days',
        features: ['Natural Grow', 'Action plan', 'Content creation']
      },
      premium: {
        title: 'Large account',
        packPrice: 70,
        packDaysToMake: 7,
        desc: 'I will promote your Instagram account for 1 Week',
        features: ['Natural Grow', 'Action plan', 'Content creation']
      }
    },
    owner: {
      "_id": "u101",
      "fullname": "Taylor P",
      "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
      "level": 2,
      "rate": 5,
    },
    daysToMake: 3,
    description: "Instagram is one of the most important websites to do marketing for yourself or your business. With more than 1 billion users, you can always reach new people on it. After years of experience in digital marketing and advertising, I managed to make a great marketing team and we are ready to help you to promote your Instagram account.",
    imgUrls: ["https://res.cloudinary.com/de2rdmsca/image/upload/v1698329461/promote-your-facebook-page-to-country-targeted-audience_oppvsc.jpg", "https://res.cloudinary.com/de2rdmsca/image/upload/v1698329479/promote-your-facebook-page-to-country-targeted-audience_xsam5t.jpg", "https://res.cloudinary.com/de2rdmsca/image/upload/v1698329472/promote-your-facebook-page-to-country-targeted-audience_spzn9u.jpg"],
    category: "Digital Marketing",
    tags: ['Social Media Marketing', 'Organic Social Promotions'],
    likedByUsers: ['mini-user']
  },
  {
    _id: "iz14",
    title: "I will assist you in your work, write articles and blogs in spanish, french and german",
    price: 20,
    packages: {
      basic: {
        desc: 'Write 400 words articles and blog in English ,French ,German , Portuguese , Italian , Spanish',
        features: ['Topic research', 'SEO keywords', 'References & citations', 'Plagiarism check']
      }
    },
    owner: {
      "_id": "yox1l",
      "fullname": "Yomi",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679255/yo_go6ra7.webp",
      "level": 2,
      "rate": 5
    },
    daysToMake: 1,
    "description": "If you are looking for someone to get your message across powerfully in articles, blog posts, or marketing material, I am the content writer you need. Let me exploit the opportunity by offering you something phenomenal.",

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679340/t-1_ozhsab.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679340/t-2_fskyyw.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679340/t-3_jkh9ss.jpg"
    ],
    category: "Writing & Translation",
    tags: ['Articles & Blog Posts', 'Content Strategy'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz15",
    title: "I will make you 3 catchy producer beat tags",
    price: 10,
    packages: {
      basic: {
        desc: '3 Phrases with and without effects High Quality Catchy',
        features: ['Fast delivery', 'Accepted Revisions', 'Crisp audio', 'Fire tags🔥🚒']
      }
    },
    owner: {
      "_id": "aax1lr",
      "fullname": "Aaron B",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679389/aa_nzzujn.webp",
      "level": 1,
      "rate": 4.9
    },
    daysToMake: 2,
    "description": "I will do a custom male vocal tag. I will send you the wav record with and without your preferred impacts, for example, reverb, delay, falter, flanger, and so on. Included on Worldstar, Youtube and then some. I have a very high quality sounding mic and have had skill using Fl Stdudio for over 3 years now!",

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679389/aa-1_xohyag.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679390/aa-2_nrfxb8.webp",
    ],
    category: "Music & Audio",
    tags: ['DJing', 'DJ Drops & Tags', 'DJ Mixing', 'Remixing & Mashups', 'Mixing & Mastering', 'Audio Editing'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "iz16",
    title: "I will create amazing images and concept art using midjourney ai",
    price: 130,
    packages: {
      basic: {
        desc: '1 Concept art of an AI image + basic edition. IMPORTANT: Please contact me before placing an order.',
        features: ['1 image', '1 upscaled variation', 'Prompt creation', 'Prompt delivery']
      }
    },
    owner: {
      "_id": "aax1lb",
      "fullname": "Jesus S",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679480/je_rwwd0t.jpg",
      "level": 2,
      "rate": 4.9
    },
    daysToMake: 2,
    "description": `Hello everyone!



    I love to bring customer ideas to life, it doesn't matter the topic. Let your imagination run wild and let's make awesome AI art together, in any style. You will be involved in the creation process, and I will make a basic edition of the result if needed. Remember, there are limitations in the AI (no blood, no NSFW content, similar face generation, etc.), so if possible, I can help by making a few basic touches and changes to get the desired image.
    
    
    
    Order now and let's make your concept a reality. Remember to ask any question you want before placing an order, that way I can start right away.
    
    
    
    IMPORTANT: Midjourney AI won't give you an exact representation of your face, which is important to know beforehand. For cases like this, I create a sample with Midjourney so the client can approve it before placing the order.`,

    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679480/j-2_gdh8hb.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679480/j-3_shcoe8.webp"
    ],
    category: "Graphics & Design",
    tags: ['AI Artists', 'Image Generation', 'Artists'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
  {
    _id: "FUq4sRza",
    title: "I will optimize your youtube video SEO and channel organically",
    price: 30,
    packages: {
      basic: {
        desc: '01 Video SEO Title, Description, Hashtags and Tags Research+ Backlinks',
        features: ['Page/channel evaluation', '15 keywords/hashtags research', '1 video optimized', 'Title & description optimized']
      }
    },
    owner: {
      "_id": "Ra20Z02",
      "fullname": "Shaon P",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698679530/sha_wfu7lp.webp",
      "level": 1,
      "rate": 5,
    },
    daysToMake: 5,
    description: "Welcome to my YouTube SEO gig! I'm a certified SEO expert with years of experience in helping clients increase their visibility and grow their channels on YouTube. If you want to rank higher in search results, attract more views and subscribers, and boost your online presence, you've come to the right place.",
    imgUrls: ["https://res.cloudinary.com/de2rdmsca/image/upload/v1698359084/e13cd8fa46f36704c6475da3ce7c29e4f39b2136_ih0uoq.webp", "https://res.cloudinary.com/de2rdmsca/image/upload/v1698359143/5996e86f11851bb75874bde997a39b830c3dbcfe_xndusq.webp", "https://res.cloudinary.com/de2rdmsca/image/upload/v1698359129/571c768d79532944cb766722dbb7313306da948a_dt2nmf.webp"],
    category: "Digital Marketing",
    tags: ['Video Marketing', 'Organic Social Promotions', 'Video SEO'],
    likedByUsers: ['mini-user']
  },
  {
    _id: "ApOD12yGCxd",
    title: "I will write SEO blog posts and articles for your website",
    price: 15,
    packages: {
      basic: {
        title: 'BASIC SEO',
        packPrice: 15,
        packDaysToMake: 1,
        desc: '500 Word SEO Optimized Blog Post',
        features: ['1 Article', 'Plagiarism check', 'Include keyword research']
      },
      standard: {
        title: 'SEO MAX',
        packPrice: 25,
        packDaysToMake: 2,
        desc: '1000 Word SEO Optimized Blog Post',
        features: ['1 Article', 'Plagiarism check', 'Include keyword research']
      },
      premium: {
        title: 'SEO PRO MAX',
        packPrice: 50,
        packDaysToMake: 3,
        desc: '1500 Word SEO Optimized Blog Post',
        features: ['1 Article', 'Plagiarism check', 'Include keyword research', 'On-Standby support']
      }
    },
    owner: {
      "_id": "zD1109",
      "fullname": "Karen M",
      "imgUrl": "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698706620/karenM_axc4rw.webp",
      "level": 2,
      "rate": 5,
    },
    daysToMake: 3,
    description: `
    Hey there! Im Karen, a UK-based writer, and this cozy corner of Fiverr is where words come alive. With over 1000 orders successfully delivered, and not a single frown in the reviews, I'd like to believe I've got a flair for this.

    In my 9+ years of writing and marketing, I've had the remarkable privilege of collaborating with some truly exceptional brands. This includes household names like Fiverr, Spotify, Lyric, Turo, Zuper, and Adidas. Plus, I'm grateful to be working with hundreds of amazing clients every month, which keeps my creative juices in tip-top shape.
    `,
    imgUrls: [
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698706621/KarenM-1_gqoziy.jpg",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698706621/Karen-m-3_jwo4p8.webp",
      "https://res.cloudinary.com/dgsfbxsed/image/upload/v1698706621/Karen-M-2_jj1paf.webp"
    ],
    category: "Writing & Translation",
    tags: ['Articles & Blog Posts', 'Content Strategy', 'Proofreading & Editing', 'AI Content Editing', 'Book Editing', 'Beta Reading', 'Writing Advice', 'Career Writing', 'Resume Writing', 'Cover Letters', 'LinkedIn Profiles'],
    likedByUsers: [{
      "_id": "u103",
      "fullname": "David C",
      "imgUrl": "/img/img3.jpg"
    }]
  },
]

export default gigDemoData

function loadApp() {
  socketService.on(SOCKET_EVENT_ORDER_ADDED, (order) => {
    showSuccessMsg(`Another order was just made, check it out ${order.gig._id}`)
  })
}