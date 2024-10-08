import ic_money_send from '../../../../public/svgs/ic_money_send.svg';
import ic_wallet_minus from '../../../../public/svgs/ic_wallet_minus.svg';

import branding from '../../../../public/images/branding.jpg'
import marketing from '../../../../public/images/marketing.jpg'
import advertising from '../../../../public/images/advertising.jpg'

export const cardsInfo = [
  {
    title: 'Branding',
    details:
      '',
    icon: branding,
  },
  {
    title: 'Marketing',
    details:
      '',
    icon: marketing,
  },
  {
    title: 'Advertising',
    details:
      '',
    icon: advertising,
  },
];

export const stats = [
  {
    number: '1204+',
    subtitle: 'Male',
    percentage: '47%',
  },
  {
    number: '1332+',
    subtitle: 'Female',
    percentage: '53%',
  },
  {
    number: '2536',
    subtitle: 'Total',
    percentage: '100%',
  },
];

// For desktop
export const desktopHeaderPhrase = [
  'Value Added',
  'Services',
];
export const desktopParagraphPhrase = [
  "LBD Group's StartUp Body Shop gives founder a linear add value",
  'by offering services like branding, marketing and advertising',
];

// For mobile
export const mobileHeaderPhrase = [
  'Value Added',
  'Services',
];
export const mobileParagraphPhrase = [
 "LBD Group's StartUp Body Shop gives founder a linear add value",
  'by offering services like branding, marketing and advertising',
];

export const statTitleDesktop = [
   'Impact data of entrepreneurs', 'we have served to date'
]

export const statSubTitleDesktop = [
  'Over the last decade, LBD Startup BodyShop has worked with',
  'and equipped 2,536 businesses and entrepreneurs in the',
  'country, 47% of whom are male and 53% female. '
]

export const statTitleMobile = [
  'Impact data of entrepreneurs', 'we have served to date'
]

export const statSubTitleMobile = [
  'Over the last decade, LBD Startup BodyShop has worked with',
  'and equipped 2,536 businesses and entrepreneurs in the',
  'country, 47% of whom are male and 53% female. '
]

export const chartData = {
  labels: ['Label 1', 'Label 2', 'Label 3'], // Example labels
  datasets: [
      {
          label: 'My Dataset',
          data: [12, 19, 3], // Example data
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
  ],
};