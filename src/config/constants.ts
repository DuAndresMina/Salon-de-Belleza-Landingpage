// src/config/constants.ts
export type SocialLink = {
    platform: string;
    icon: string;
    url: string;
    label: string;
  };
  
  export const socialLinks: SocialLink[] = [
    {
      platform: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/bellaessence',
      label: 'Síguenos en Instagram'
    },
    {
      platform: 'Facebook',
      icon: 'facebook',
      url: 'https://www.facebook.com/bellaessence',
      label: 'Visita nuestra página de Facebook'
    },
    {
      platform: 'TikTok',
      icon: 'tiktok',
      url: 'https://www.tiktok.com/@bellaessence',
      label: 'Síguenos en TikTok'
    },
    {
      platform: 'Pinterest',
      icon: 'pinterest',
      url: 'https://www.pinterest.com/bellaessence',
      label: 'Visita nuestro Pinterest'
    }
  ];