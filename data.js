//  icons
import {
  FiInstagram,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
} from 'react-icons/fi';
import { GoQuestion } from 'react-icons/go';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/avatar1.jpg';
import TestiImage2 from './assets/img/testimonials/avatar2.jpg';
import TestiImage3 from './assets/img/testimonials/avatar3.jpg';
import TestiImage4 from './assets/img/testimonials/avatar4.jpg';

/* skills images
import SkillImg1 from './assets/img/license.png';
import SkillImg2 from './assets/img/HealthInsurance.svg';
*/

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'FAQ',
    href: 'faq',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/daniel.sorrells.18',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/ambiko912/',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/daniel-sorrells-272394242/',
  },
];

/* Skills
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
]; 
*/


// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// services
export const faq = [
  {
    icon: <GoQuestion />,
    name: 'Do I qualify for Health Insurance?',
    description:
      "You don't have to be an Olympic athlete, but if you're in reasonably good shape, you should be a strong candidate.",
  },
  {
    icon: <GoQuestion />,
    name: 'Is private heath insurance expensive?',
    description:
      'It is far less expensive than you believe! Because private healthcare rates are based on health rather than income, you will generally see lower prices AND better benefits if you qualify. I personally saved $2400 per year. Health insurance plans vary, and you may find a plan that you never imagined could be so inexpensive!',
  },
  {
    icon: <GoQuestion />,
    name: 'Do you only work with health insurance? What about dental, vision, etc?',
    description:
      'No! I can also write Dental, Vision, Life, Supplemental, Critical Illness, Accident Disability, and other policies. I have many trusted referral partners and would be delighted to refer you to one of them. If there is something I cannot assist you with, please let me know.',
  },
  {
    icon: <GoQuestion />,
    name: 'Should I expect a high bill at a young age?',
    description:
      'Private Healthcare plans are based on your health and the healthy the better. This means that you qualify for the lower overall risk class and that allows insurance companies to give preferred rates to people like you!',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Daniel makes the entire process so simple from the start. I was terrified of switching from company health insurance to private coverage, but he guided me through the entire process and made it as simple as possible. 10/10 would recommend!',
    authorName: 'Bob Smith',
    authorPosition: 'Personal Trainer',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Daniel is a Lifesaver! I never imagined I could get such good coverage at such a low cost! Daniel educated me on how private insurance works because I am self-employed, and I am grateful for this opportunity. The best part is that Daniel continues to assist us each month if I have any questions.',
    authorName: 'John Washington',
    authorPosition: 'Head of Sales',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Daniel is a great guy who helped me out with my health insurance! When I was confused about the fine print, he knew what to say. He also assisted some other family members and friends. Strongly recommended!',
    authorName: 'Laura Long',
    authorPosition: 'Entrepeneur',
  },
  {
    authorImg: TestiImage4,
    authorText:
    'Daniel was able to reduce my monthly health insurance payment by nearly $200. Not only that, but his new plan significantly improved my deductibles and coverages. He was fantastic to work with and continues to be so when I have questions about my policy.',
    authorName: 'Evelyn Peterson',
    authorPosition: 'Accountant'
  }
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at sorrellsinsurancesolutions@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Tampa, Florida',
    description: 'Gladly helping clients in the Tampa area',
  },
];
