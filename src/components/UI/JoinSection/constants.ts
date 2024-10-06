import { StaticImageData } from 'next/image';
import jab from '../../../../public/images/jab.png';
import aan from '../../../../public/images/aan.png';
import fk from '../../../../public/images/fk.png';
import rk from '../../../../public/images/rk.png';
import jtb from '../../../../public/images/jtb.png';
import db from '../../../../public/images/db.png';

export type Props = {
  testimony: string;
  person: string;
  role: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero consequatur doloremque in perferendis et sunt nisi autem. Ea, voluptatum.",
    person: 'Joe Abass Bangura',
    role: 'Team Lead',
    avatar: jab,
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero consequatur doloremque in perferendis et sunt nisi autem. Ea, voluptatum.",
    person: 'Abdul Aziz Nasser',
    role: 'Business Manager',
    avatar: aan,
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero consequatur doloremque in perferendis et sunt nisi autem. Ea, voluptatum.",
    person: 'Foday Kamara',
    role: 'Programme Lead',
    avatar: fk,
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero consequatur doloremque in perferendis et sunt nisi autem. Ea, voluptatum.",
    person: 'Ricanald King',
    role: 'Financial Mgt Expert',
    avatar: rk,
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero consequatur doloremque in perferendis et sunt nisi autem. Ea, voluptatum.",
    person: 'Jethro Tolu Bade',
    role: 'Brand Expert',
    avatar: jtb,
  },
];

export const desktopHeaderPhrase = ['Meet our dedicate team', 'members'];
