﻿/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from 'react-easy-emoji'

const greeting = {
  /* Your Summary And Greeting Section */
  username: 'Umesh Bhat',
  title: "Hey all, I'm Umesh",
  subTitle: emoji(
    'An experienced full stack web developer & strong engineering professional with a Bachelor of Engineering (B.E.) focused in Computer science.'
  ),
  resumeLink: 'https://drive.google.com/file/d/1PW13wIBCBCLJypXqRrtH74nSKXnM3xur/view?usp=sharing'
}

// Your Social Media Link

const socialMediaLinks = {
  github: 'https://github.com/umeshbhat',
  linkedin: 'https://www.linkedin.com/in/bhatumesh/',
  gmail: 'umeshbhat300@gmail.com',
  facebook: 'https://www.facebook.com/umeshbhat01',
  instagram: 'https://instagram.com/umeshbhat._'
  // Instagram and Twitter are also supported in the links!
}

// Your Skills Section

const skillsSection = {
  title: 'What i do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji('⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji('⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean')
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5'
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt'
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass'
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js'
    },
    ,
    // {
    //   skillName: 'TypeScript',
    //   fontAwesomeClassname: 'fab fa-ts'
    // },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react'
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node'
    },
    // {
    //   skillName: 'swift',
    //   fontAwesomeClassname: 'fab fa-swift'
    // },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm'
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database'
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws'
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire'
    },
    // {
    //   skillName: 'python',
    //   fontAwesomeClassname: 'fab fa-python'
    // },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker'
    },
    {
      skillName: 'Jenkins',
      fontAwesomeClassname: 'fab fa-jenkins'
    },
    {
      skillName: 'Linux',
      fontAwesomeClassname: 'fab fa-linux'
    },
    {
      skillName: 'Git',
      fontAwesomeClassname: 'fab fa-git'
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '80%' //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '90%'
    },
    {
      Stack: 'Programming',
      progressPercentage: '90%'
    },
    {
      Stack: 'Infra',
      progressPercentage: '80%'
    }
  ]
}

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer',
      company: 'Mscripts',
      companylogo: require('./assets/images/mscripts.png'),
      date: 'Jan 2019 – Present',
      desc: `Admin Console: Design and built the MVP and launched beta; It is an administrative tool used by each one of our clients and our support team.Built architectural frameworks in NodeJS and React.js for the company. `,
      descBullets: [
        `Frameworks which helps the company's major tech-stack to shift from Java, Angular 1.6 to newer, relevant technologies.`,
        'Worked on MySql database queries and caching solutions like redis for REST Api written in NodeJs',
        'Fully implemented an auth system end to end for highly sensitive data based app from scratch. '
      ]
    }
    // {
    //   role: 'Front-End Developer',
    //   company: 'Quora',
    //   companylogo: require('./assets/images/quoraLogo.png'),
    //   date: 'May 2017 – May 2018',
    //   desc:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    // },
    // {
    //   role: 'Software Engineer Intern',
    //   company: 'Airbnb',
    //   companylogo: require('./assets/images/airbnbLogo.png'),
    //   date: 'Jan 2015 – Sep 2015',
    //   desc:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    // }
  ]
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'saadpasta', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true' // Set true or false to show Contact profile using Github, defaults to false
}

// Some Big Projects You have worked with your company

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/'
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/'
    }
  ]
}

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle: 'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achivementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url: 'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing'
        },
        {
          name: 'Award Letter',
          url: 'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing'
        },
        {
          name: 'Google Code-in Blog',
          url: 'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html'
        }
      ]
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url: 'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en'
        }
      ]
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        { name: 'Final Project', url: 'https://pakistan-olx-1.firebaseapp.com/' }
      ]
    }
  ]
}

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle: 'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?'
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.'
    }
  ]
}

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji('I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/'
    }
  ]
}

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: ['https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo']
}

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle: 'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91-9797438513',
  email_address: 'umeshbhat30@gmail.com'
}

//Twitter Section

const twitterDetails = {
  userName: 'twitter' //Replace "twitter" with your twitter username without @
}
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
}
