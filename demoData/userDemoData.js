const demoUsers = [
  {
    _id: "u101",
    fullname: "Taylor P",
    imgUrl: "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
    username: "taylor_paul10",
    password: "secret",
    rate: 5,
    level: 2,
    desc: "Are you looking for an expert logo designer to design your logo? If your answer is yes, then I welcome you and you are at the right place.",
    isSeller: true,
    location: "Germany",
    lang: ['English', 'German'],
    reviews: [
      {
        "id": "r101",
        "gig": "{optional-mini-gig}",
        "txt": "Although my logo was drawn mostly how I described it, there were elements that she included that were clearly not thought about properly. For example, in the first sketch like the dog was floating off the book pages which made no sense as the dog was laying on the book. After a revision this was corrected but that should not be an element needed to be correcting. Apart from that I am happy with my logo and it turned out very nice. Thank you.",
        "rate": 4,
        "createdAt": 1697993927300,
        "reviewImgUrl": null,
        "by": {
          "_id": "u207",
          "fullname": "James Q",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696177501/samples/people/boy-snow-hoodie.jpg",
          "location": "Italy"
        }
      },
      {
        "id": "r102",
        "gig": "{optional-mini-gig}",
        "txt": "Very kind and works fast",
        "rate": 5,
        "createdAt": 1697993927389,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States"
        }
      },
      {
        "id": "r103",
        "gig": "{optional-mini-gig}",
        "txt": "really helpful and on top of everything. will do business again.",
        "rate": 5,
        "createdAt": 1697993927389,
        "reviewImgUrl": null,
        "by": {
          "_id": "u208",
          "fullname": "Liri C",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696589336/MV5BZDJhYzdkMTUtMTg2MS00ZTM5LWI1OGUtYTY5MzY4NDM3NThjXkEyXkFqcGdeQXVyMjQwMDg0Ng_._V1__okvske.jpg",
          "location": "Greece"
        }
      },
    ],
  },
  {
    _id: "u102",
    fullname: "Jhon I",
    imgUrl: "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
    username: "jhon_iverson23",
    password: "123",
    rate: 4.8,
    level: 2,
    desc: "Are you looking for an expert web developer to design and develop your website? If your answer is yes, then I welcome you and you are at the right place.",
    isSeller: false,
    location: 'United States',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "r101",
        "gig": "{optional-mini-gig}",
        "txt": "Very nice. Thank you.",
        "rate": 4,
        "createdAt": 1697993927300,
        "reviewImgUrl": null,
        "by": {
          "_id": "u207",
          "fullname": "James Q",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696177501/samples/people/boy-snow-hoodie.jpg",
          "location": "Italy"
        }
      },
      {
        "id": "r103",
        "gig": "{optional-mini-gig}",
        "txt": "Love it!",
        "rate": 5,
        "createdAt": 1697993927389,
        "reviewImgUrl": null,
        "by": {
          "_id": "u208",
          "fullname": "Liri C",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696589336/MV5BZDJhYzdkMTUtMTg2MS00ZTM5LWI1OGUtYTY5MzY4NDM3NThjXkEyXkFqcGdeQXVyMjQwMDg0Ng_._V1__okvske.jpg",
          "location": "Greece"
        }
      },
    ],

  },
  {
    _id: "u207",
    fullname: "James Q",
    imgUrl: "https://res.cloudinary.com/de2rdmsca/image/upload/v1696177501/samples/people/boy-snow-hoodie.jpg",
    username: "james_q55",
    password: "123",
    rate: 4.9,
    level: 1,
    desc: "Are you looking for an expert web developer to design and develop your website? If your answer is yes, then I welcome you and you are at the right place.",
    isSeller: false,
    location: 'Italy',
    lang: ['Italian', 'Chinese', 'English', 'Spanish'],
    reviews: []

  },
  {
    _id: "u208",
    fullname: "Liri C",
    imgUrl: "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696589336/MV5BZDJhYzdkMTUtMTg2MS00ZTM5LWI1OGUtYTY5MzY4NDM3NThjXkEyXkFqcGdeQXVyMjQwMDg0Ng_._V1__okvske.jpg",
    username: "liri_cohen10",
    password: "123",
    rate: 4.7,
    level: 1,
    desc: "Hey! im Liri, Are you looking for an expert web developer to design and develop your website? If your answer is yes, then I welcome you and you are at the right place.",
    isSeller: false,
    location: 'Greece',
    lang: ['English', 'Spanish', 'Hebrew'],
    reviews: []
  },
  {
    _id: "u192",
    fullname: "Julia Carter",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/6eac0adad8586c2d46b7fcf4a5f0d227-1671025218902/9fe6d9ab-6d6a-4199-9934-b9d1675d709d.jpg",
    username: "julia123",
    password: "123",
    rate: 5,
    level: 2,
    desc: "Welcome! I always love to explore new things, design, work, nature, and that's why I love to be called Explorance. I own a creative design studio based in India specializing in Logo and brand design. I am passionate and dedicated in everything I create is minimal, clean, smart, and remarkable. I believe in 100% satisfaction, nothing less! Please free to get in touch, let's work together.",
    isSeller: true,
    location: 'Italy',
    lang: ['English', 'Spanish', 'Hebrew'],
    reviews: [
      {
        "id": "r104",
        "gig": "{optional-mini-gig}",
        "txt": "exceptional performance . i got more than i was expecting . i highly recomend this lady if you want quality .",
        "rate": 4,
        "createdAt": 1697993927785,
        "reviewImgUrl": null,
        "by": {
          "_id": "u101",
          "fullname": "Taylor P",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
          "location": "Germany",
        }
      },
      {
        "id": "r105",
        "gig": "{optional-mini-gig}",
        "txt": "Great service!",
        "rate": 5,
        "createdAt": 1692993933333,
        "reviewImgUrl": null,
        "by": {
          "_id": "u207",
          "fullname": "James Q",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696177501/samples/people/boy-snow-hoodie.jpg",
          "location": "Italy"
        }
      },
      {
        "id": "r106",
        "gig": "{optional-mini-gig}",
        "txt": "Okayyy, let's gooo!",
        "rate": 4,
        "createdAt": 1591993933389,
        "reviewImgUrl": null,
        "by": {
          "_id": "u208",
          "fullname": "Liri C",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696589336/MV5BZDJhYzdkMTUtMTg2MS00ZTM5LWI1OGUtYTY5MzY4NDM3NThjXkEyXkFqcGdeQXVyMjQwMDg0Ng_._V1__okvske.jpg",
          "location": "Greece",
        }
      },
    ],
  },
  {
    _id: "u190",
    fullname: "Micky Smith",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/3e69825348268689975368374cd57bbb-1611383243667/c28fdd4b-d5c7-4035-8379-862ac10d67fd.png",
    username: "mick",
    password: "123a",
    rate: 4.5,
    level: 1,
    desc: "Hi, I am Micky, a curious person who is having a strong interest in art. Doing my hobby leads me to work as a graphic designer. Working with many clients to solve their problems helps me to generate new ideas that suitable for the purpose of the creative field. I am used to helping people to visualize their conceptual idea into a unique, timeless, and memorable design. I am always ready to work with you.",
    isSeller: true,
    location: 'Peru',
    lang: ['English', 'Spanish', 'Hebrew'],
    reviews: [
      {
        "id": "r107",
        "gig": "{optional-mini-gig}",
        "txt": "The output wasn't upto the standard I was looking for really but okay for the money.",
        "rate": 3,
        "createdAt": 1697993927340,
        "reviewImgUrl": null,
        "by": {
          "_id": "u208",
          "fullname": "Liri C",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696589336/MV5BZDJhYzdkMTUtMTg2MS00ZTM5LWI1OGUtYTY5MzY4NDM3NThjXkEyXkFqcGdeQXVyMjQwMDg0Ng_._V1__okvske.jpg",
          "location": "Greece",
        }
      },
      {
        "id": "r108",
        "gig": "{optional-mini-gig}",
        "txt": "I am not satisfied with the work of Mr.Micky..",
        "rate": 3,
        "createdAt": 1621993933389,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States",
        }
      },
      {
        "id": "r109",
        "gig": "{optional-mini-gig}",
        "txt": "Great work, i'm very happy with the provided service :)",
        "rate": 5,
        "createdAt": 1651993933389,
        "reviewImgUrl": null,
        "by": {
          "_id": "u192",
          "fullname": "Julia Carter",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/6eac0adad8586c2d46b7fcf4a5f0d227-1671025218902/9fe6d9ab-6d6a-4199-9934-b9d1675d709d.jpg",
          "location": "Italy",
        }
      },
    ],
  },
  {
    _id: "u154",
    fullname: "Justin Timber",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb6eef20969192eca1d8b1301e91cb4f-1630440851285/60f03cc4-71f2-437b-a241-f9423b6e2728.jpg",
    username: "justintimber",
    password: "123",
    rate: 3.7,
    level: 1,
    desc: "Hello there, I'm Justin Timber. I bring five years of dedicated experience in the realm of logo design. During this time, I've honed my skills and gained valuable insights in the field. My primary goal is to offer my clients impeccable service, consistently aiming to surpass their expectations. Each project I take on is a chance not just to deliver outstanding results, but also to welcome fresh hurdles that contribute to my growth. My enthusiasm drives me to constantly explore innovative techniques that elevate my work. Thank you for considering my introduction.",
    isSeller: true,
    location: 'Israel',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "r112",
        "gig": "{optional-mini-gig}",
        "txt": "I was very pleased with the work. It was fast but more than what I expected. I recommend that anyone who needs a logo to use Nikon Studio. More importantly, he told me a day that I should expect the project, and he delivered on the day that he promised. Immaculate work. I would recommend him to anyone needing any graphic service.",
        "rate": 5,
        "createdAt": 1693993927112,
        "reviewImgUrl": null,
        "by": {
          "_id": "d105",
          "fullname": "Soaib Saim",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c45eaabd0990937c721c897183c6805f-1661974546688/fc7dd1c0-d3a1-4122-826f-6758abf48a4e.png",
          "location": "Ukraine",
        }
      }
    ],
  },
  {
    _id: "d101",
    fullname: "Rhett R.",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/aba588e47c44c19722c421049a09d168-1121175101628566927720/JPEG_20210810_094204_50143180573023551.jpg",
    username: "rhett123",
    password: "123",
    rate: 4.8,
    level: 2,
    desc: `Hi ! I am a  Graphic designer based in Germany. Specialised in designing iconic and industry-leading logos for Startups and cutting-edge companies. I believe a great logo is an intrinsic factor to a company's success. It is the first step towards credibility and customer loyalty. This is why I will work passionately with you to create the modern, cuttinge-edge, and professional logo your company needs to succeed.

    Less is more
    Less is Bold
    Bold is confidence
    Bold is experimental
    Experiments bring creativity
    Creative means smart
    Smart is communicative, effective, and beautiful.`,
    isSeller: true,
    location: 'Israel',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "r112",
        "gig": "{optional-mini-gig}",
        "txt": "Not the best result, but good effort.",
        "rate": 3,
        "createdAt": 1693993927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States",
        }
      }
    ],
  },
  {
    _id: "d102",
    fullname: "Simon Timber",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/3e02f819fe9719f3988281f83826cbcf-1670335805098/f18b5e11-2353-4e7d-b001-49c9531165cf.jpg",
    username: "simontimber",
    password: "123",
    rate: 4,
    level: 1,
    desc: `I am 'Track' full-stack web developer with more than 10+ years of IT experience, including PHP, MySQL, HTML5, CSS3, Frameworks, javascript/node. js, WordPress, and Plus for you is I am working as an SEO Expert for the last 7 years.

    I am a creative website designer and developer with professional modern elegance. I offer my Web Development, Front End Development, Customizations, Software Solutions Provider and Development, Enterprise Solutions, and digital marketing services.
    
    I did the full spectrum of the site-building process: from planning and design to implementation to digital marketing.`,
    isSeller: true,
    location: 'Israel',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "r113",
        "gig": "{optional-mini-gig}",
        "txt": "Not the best result, but good effort.",
        "rate": 3,
        "createdAt": 1693993927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States",
        }
      }
    ],
  },
  {
    _id: "d103",
    fullname: "Jason Cook",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d2214c77229a1b9a1868e03433ccad04-1668453330627/2a7fa61e-c5b3-4176-af0a-0b41e1731c99.jpg",
    username: "jsoncook",
    password: "123",
    rate: 5,
    level: 2,
    desc: `I am 'Track' full-stack web developer with more than 10+ years of IT experience, including PHP, MySQL, HTML5, CSS3, Frameworks, javascript/node. js, WordPress, and Plus for you is I am working as an SEO Expert for the last 7 years.

    I am a creative website designer and developer with professional modern elegance. I offer my Web Development, Front End Development, Customizations, Software Solutions Provider and Development, Enterprise Solutions, and digital marketing services.
    
    I did the full spectrum of the site-building process: from planning and design to implementation to digital marketing.`,
    isSeller: true,
    location: 'France',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "r114",
        "gig": "{optional-mini-gig}",
        "txt": "Not the best result, but good effort.",
        "rate": 3,
        "createdAt": 1693993927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States",
        }
      }
    ],
  },
  {
    _id: "d105",
    fullname: "Sohaib Saim",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c45eaabd0990937c721c897183c6805f-1661974546688/fc7dd1c0-d3a1-4122-826f-6758abf48a4e.png",
    username: "sohaibsaim",
    password: "123",
    rate: 3.7,
    level: 1,
    desc: `Hello, I'm Sohaib, a dedicated Full Stack Software Engineer with a strong background in the MERN stack, NextJS, Firebase, and Python frameworks. With a proven track record in developing efficient, user-centric web applications, I bring a problem-solving mindset and a commitment to delivering high-quality software. Whether you're looking to build a new web application or enhance an existing one, I'm here to provide the expertise and dedication you need to achieve your goals.`,
    isSeller: true,
    location: 'Ukrain',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "r115",
        "gig": "{optional-mini-gig}",
        "txt": "Not the best result, but good effort.",
        "rate": 3,
        "createdAt": 1693993927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States",
        }
      }
    ],
  },
  {
    _id: "d106",
    fullname: "Haya Ch",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c2e55a6aa898b7f413bd36827f49dc0d-794152801692271062.3187551/D3B90156-5AD6-4188-88E5-B3564884AF30",
    username: "hayach",
    password: "123",
    rate: 3.4,
    level: 1,
    desc: `I am a Senior Software Engineer having working experience of more than 9 Years in the Front End development.

      I am extremely passionate about my work. In my professional career, I have done more than 800 projects. I would love to assist you with Front end, Shopify, React, and WordPress projects.
      I have a strong grip on the latest front-end development technologies Html5, Css3, SASS/LESS, Bootstrap, Tailwind, Materialize, Foundation, JavaScript, and jQuery.`,
    isSeller: true,
    location: 'Uzbekistan',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "r105",
        "gig": "{optional-mini-gig}",
        "txt": "Not the best result, but good effort.",
        "rate": 3,
        "createdAt": 1693993927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States",
        }
      }
    ],
  },
  {
    _id: "d107",
    fullname: "Sikandar Yoor",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4ffeeb6a29d87c2528e7d245fe11173b-1653057002928/66803263-ff55-451e-aa76-2345dacb975b.PNG",
    username: "sikandaryoor",
    password: "123",
    rate: 3.2,
    level: 1,
    desc: `Hello and thanks for visiting my page.

      I have been a video editor for over 5 years. I use mostly Adobe After Effects 2020, but I can use nearly any program.
      I can make anything look interesting within a few minutes of editing.
      Whether its anime clips, video game clips, tv show clips, or anything else.
      I make it look great and get it done quick. So, don't be afraid to send me a message if you have any questions.
      ;)`,
    isSeller: true,
    location: 'Russia',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "r105",
        "gig": "{optional-mini-gig}",
        "txt": "Not the best result, but good effort.",
        "rate": 3,
        "createdAt": 1693993927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States",
        }
      }
    ],
  },
  {
    _id: "d108",
    fullname: "Adnan Adnani",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/256d39d8ed1c83a1b86dba441e34478f-1672157011855/10831853-8fc3-4d07-8f53-80d17e361e27.jpg",
    username: "adnanadnani",
    password: "123",
    rate: 4,
    level: 2,
    desc: `I am Adnan, a professional video and photo editor. I had worked with lots of youtube channels and have worked with 200+ companies all over the country now and completed 900++ orders. I believe in quality rather than quantity. I assure you I will do my best to complete your project and make you satisfied.
    Professional Video Editor and Adobe Premiere Pro Expert!`,
    isSeller: true,
    location: 'India',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "r105",
        "gig": "{optional-mini-gig}",
        "txt": "Not the best result, but good effort.",
        "rate": 3,
        "createdAt": 1693993927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States",
        }
      }
    ],
  },
  {
    _id: "fred1",
    fullname: "Fredrick F",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
    username: "fred1",
    password: "fred1",
    rate: 4,
    level: 1,
    desc: "Hi reader, thanks for your time. I'm an experienced young artist and i specialize in 3D animation, graphic designing and pencil Art. I'm familiar with word processing application. Kindly hit me up if if you need any of my services.",
    isSeller: true,
    location: 'United states',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "x121105",
        "gig": "{optional-mini-gig}",
        "txt": "Fred is a super kind artist doing the process he was super professional and only took him 1 shot to deliver a perfect result ! Highly recommended work with this guy !",
        "rate": 5,
        "createdAt": 1693993927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States",
        },
      }
    ],
  },
  {
    _id: "eLxx1",
    fullname: "Elena",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/3211eec040953b9e53d8a3104baca648-1689536066356/5f91dde3-9c16-4fb3-9aa4-bb1ff6f639f7.png",
    username: "fred1",
    password: "fred1",
    rate: 4,
    level: 2,
    desc: "Hi reader, thanks for your time. I'm an experienced young artist and i specialize in 3D animation, graphic designing and pencil Art. I'm familiar with word processing application. Kindly hit me up if if you need any of my services.",
    isSeller: true,
    location: 'United states',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "xid12x",
        "gig": "{optional-mini-gig}",
        "txt": "Good service, a little slow..",
        "rate": 4,
        "createdAt": 1693993927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u102",
          "fullname": "Jhon I",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
          "location": "United States",
        },
      }
    ],
  },
  {
    _id: "tHx1l",
    fullname: "Thomas C",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/429c1a9395f66cd8a36b38028ff35aa6-1550219507580/db25059c-6725-4e49-bf82-fa4d2af0a780.jpg",
    username: "thomasC11",
    password: "thomas-boy",
    rate: 5,
    level: 2,
    desc: "Test. Scale. Win. We are a team of entrepreneurs at heart, certified experts working across 6 different timezones with 17 years of e-commerce experience. While your competition sleeps, we’re working on getting you ahead. Our data-driven tactics, and proven playbooks, paired with the skill set of our team’s top 2% talents yield impressive sales results your CFO won’t be able to ignore!",
    isSeller: true,
    location: 'United states',
    lang: ['English'],
    reviews: [
      {
        "id": "rev1",
        "gig": "{optional-mini-gig}",
        "txt": "Great work, thank you very much for the amazing results Mr.Thomas!",
        "rate": 5,
        "createdAt": 1674493927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u154",
          "fullname": "Justin Timber",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb6eef20969192eca1d8b1301e91cb4f-1630440851285/60f03cc4-71f2-437b-a241-f9423b6e2728.jpg",
          "location": "Canada",
        },
      }
    ],
  },
  {
    _id: "tHx2l",
    fullname: "Thomas C",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/429c1a9395f66cd8a36b38028ff35aa6-1550219507580/db25059c-6725-4e49-bf82-fa4d2af0a780.jpg",
    username: "thomasC11",
    password: "thomas-boy",
    rate: 5,
    level: 2,
    desc: "Test. Scale. Win. We are a team of entrepreneurs at heart, certified experts working across 6 different timezones with 17 years of e-commerce experience. While your competition sleeps, we’re working on getting you ahead. Our data-driven tactics, and proven playbooks, paired with the skill set of our team’s top 2% talents yield impressive sales results your CFO won’t be able to ignore!",
    isSeller: true,
    location: 'United states',
    lang: ['English'],
    reviews: [
      {
        "id": "rev1",
        "gig": "{optional-mini-gig}",
        "txt": "Great work, thank you very much for the amazing results Mr.Thomas!",
        "rate": 5,
        "createdAt": 1674493927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u154",
          "fullname": "Justin Timber",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb6eef20969192eca1d8b1301e91cb4f-1630440851285/60f03cc4-71f2-437b-a241-f9423b6e2728.jpg",
          "location": "Canada",
        },
      }
    ],
  },
  {
    _id: "Hssx1l",
    fullname: "Haseeb",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7db1f7dfd20c7a062df2b095e73caeef-1664639608927/bdfede03-50b3-463f-9f40-72ba79608605.jpg",
    username: "HassaMan",
    password: "LettuceIsTheBest",
    rate: 3,
    level: 1,
    desc: "Hello everyone! Haseeb ul Hassan is here. Am loves to work on amazon storefront, enhanced brand content (EBC/A+ content) and Amazon Infographics. Just drop a message to see work sample. Thank you :)",
    isSeller: true,
    location: 'India',
    lang: ['English', 'Hindu'],
    reviews: [
      {
        "id": "rev2",
        "gig": "{optional-mini-gig}",
        "txt": "Good enough for the price, the results have been okay but i expected more.",
        "rate": 4,
        "createdAt": 1684493927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u154",
          "fullname": "Justin Timber",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb6eef20969192eca1d8b1301e91cb4f-1630440851285/60f03cc4-71f2-437b-a241-f9423b6e2728.jpg",
          "location": "Canada",
        },
      }
    ],
  },
  {
    _id: "yox1l",
    fullname: "Yomi",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4b7fe17dde65726409810dd2541769c4-1681190210085/1f9751ab-3804-48b7-a2ec-7eabe5361ad8.jpg",
    username: "yomiflex",
    password: "flex",
    rate: 5,
    level: 2,
    desc: "Hey there! Nice to meet you, my name is Yomi. I create business documentaries on my YouTube channel @NaijaBoss. I can provide you any content creation services you might need. Shoot me a message with your requirements and lets get to work.",
    isSeller: true,
    location: 'United states',
    lang: ['English'],
    reviews: [
      {
        "id": "rev3",
        "gig": "{optional-mini-gig}",
        "txt": "Yomi helped me create my dream youtube channel in no time, provided awesome service and i even found a friend for life :)",
        "rate": 5,
        "createdAt": 1694493927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u154",
          "fullname": "Justin Timber",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb6eef20969192eca1d8b1301e91cb4f-1630440851285/60f03cc4-71f2-437b-a241-f9423b6e2728.jpg",
          "location": "Canada",
        },
      }
    ],
  },
  {
    _id: "aax1lr",
    fullname: "Aaron B",
    imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/e0c3546285a4bcc29110abed89772c7c-1648494595657/9d64cf71-f097-4e6a-9670-97afdd1168f8.jpg",
    username: "goonin",
    password: "gooninflex",
    rate: 4.9,
    level: 1,
    desc: "Thank you for checking out my profile! I am an audio engineer based out of Seattle, Washington. I have been designing, mixing and producing videos and graphics throughout my life. I love helping out small producers fulfilling their dream, and seeing other people enjoy any of my products always puts a smile on my face! :)",
    isSeller: true,
    location: 'United states',
    lang: ['English'],
    reviews: [
      {
        "id": "rev4",
        "gig": "{optional-mini-gig}",
        "txt": "Aaron delivered for sure. Fast comms, went beyond the advertised service. Got more than I asked for, great customer service. Definitely got a lot of material I can work with. Really fair pricing, especially compared to what you get. Would recommend without a doubt. Keep up the good work Aaron.",
        "rate": 5,
        "createdAt": 1694493927315,
        "reviewImgUrl": null,
        "by": {
          "_id": "u154",
          "fullname": "Yomi",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4b7fe17dde65726409810dd2541769c4-1681190210085/1f9751ab-3804-48b7-a2ec-7eabe5361ad8.jpg",
          "location": "Canada",
        },
      }
    ],
  },
  {
    "_id": "aax1lb",
    "fullname": "Jesus S",
    username: "jesussantana",
    password: "jesus123",
    "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8dbc4e7b5f760cd24fed43a081943f3d-1657973641858/f4996058-9d75-4afd-adbc-1afdb033a82e.jpg",
    "level": 2,
    "rate": 4.9,
    desc: "I am proficient in traditional (pen/pencil/charcoal) drawing and digital painting. If you want anything to be illustrated, be it for a book, a portrait or anything at all, I'm the one you want! My love for drawing will assure you that all the work I will do for you will be in the best quality!",
    isSeller: true,
    location: 'Venezuela',
    lang: ['Spanish', 'English', 'Italian'],
    reviews: [
      {
        "id": "rev5",
        "gig": "{optional-mini-gig}",
        "txt": "It is in fact an amazing experience to work with Jesus Santana. Many designers learnt how to work with AI, but Jesus Santana has an exceptional vision and taste. As a bonus, Jesus shows some samples and previews before placing the order. I feel very happy with such cooperation. HIghly recommend!",
        "rate": 5,
        "createdAt": 1694493927300,
        "reviewImgUrl": null,
        "by": {
          "_id": "u154",
          "fullname": "Yomi",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4b7fe17dde65726409810dd2541769c4-1681190210085/1f9751ab-3804-48b7-a2ec-7eabe5361ad8.jpg",
          "location": "Canada",
        },
      }
    ],
  },
  {
    "_id": "Ra20Z02",
    "fullname": "Shaon P",
    username: "shaonpaulyt",
    password: "Shaon123",
    "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/1351ddea6267fbdac34406d7b9cb73a5-1695927142342/ea482d66-6692-4e61-b6a3-2e7df1895fa5.png",
    "level": 1,
    "rate": 4.4,
    desc: "YouTube Specialist And Organic SEO Expert",
    isSeller: true,
    location: 'Bangladesh',
    lang: ['German', 'English', 'Italian'],
    reviews: [
      {
        "id": "rev5",
        "gig": "{optional-mini-gig}",
        "txt": "Serious guy, I enjoyed working with him",
        "rate": 4,
        "createdAt": 1694493927300,
        "reviewImgUrl": null,
        "by": {
          "_id": "u154",
          "fullname": "Yomi",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4b7fe17dde65726409810dd2541769c4-1681190210085/1f9751ab-3804-48b7-a2ec-7eabe5361ad8.jpg",
          "location": "Canada",
        },
      },
      {
        "id": "rev5",
        "gig": "{optional-mini-gig}",
        "txt": "My seo went up by a lot. it had been to early to see results, but I am positive that more views and more people will come to my channel and videos!",
        "rate": 5,
        "createdAt": 1694493927300,
        "reviewImgUrl": null,
        "by": {
          "_id": "u101",
          "fullname": "Taylor P",
          "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
          "location": "Germany",
        },
      }
    ],
  },
  {
    "_id": "d109",
    "fullname": "David Iz",
    username: "davidiz",
    password: "davidiz123",
    "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/6640180a2dbba46cad4068dcd9ad47f1-1646966940115/25a12acd-5e46-4636-a01a-a289c6749009.png",
    "level": 1,
    "rate": 5,
    "desc": `As a full-stack web developer with over 3 years of experience and completion of over 200+ orders here on Fiverr, I specialize in modern technologies such as React, Next js, Typescript, Tailwind CSS, Node js, Express js, MySQL, MongoDB, Prisma, and many more. My passion lies in building responsive websites that help to improve user experience and grow your business. I always pay attention to detail and dedication to delivering high-quality work. I am committed to exceeding your expectations and delivering results that drive success. Let's work together to bring your ideas to life.`,
    isSeller: true,
    location: 'Bangladesh',
    lang: ['English'],
    reviews: [
      {
        "id": "rev6",
        "gig": "{optional-mini-gig}",
        "txt": "David is a very talented developer and puts a lot of energy into the project before the project starts. I am very satisfied with our collaboration, a real blessing to know David.",
        "rate": 4,
        "createdAt": 1694493927300,
        "reviewImgUrl": null,
        "by": {
          "_id": "u154",
          "fullname": "Yomi",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4b7fe17dde65726409810dd2541769c4-1681190210085/1f9751ab-3804-48b7-a2ec-7eabe5361ad8.jpg",
          "location": "Canada",
        },
      },
    ]
  }
]


export default demoUsers
