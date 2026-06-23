import { getEntry } from "astro:content";
import { CONTACT_EMAIL, LOCATION } from "../consts";

const defaultSiteConfig = {
  contactEmail: CONTACT_EMAIL,
  location: LOCATION,
  mapUrl: "https://maps.app.goo.gl/9qCDBbf8MXFwN5hw9",
  instagramUrl: "https://www.instagram.com/uefslabelu/",
  youtubeUrl: "https://www.youtube.com/@LABELUuefs",
  address: {
    streetAddress:
      "Prédio do Programa de Pós-graduação em História, Anexo do Módulo 7 - UEFS. Av. Transnordestina, s/n",
    addressLocality: "Feira de Santana",
    addressRegion: "BA",
    postalCode: "44036-900",
    addressCountry: "BR",
  },
};

export async function getSiteConfig() {
  const about = await getEntry("siteConfig", "about");

  return {
    ...defaultSiteConfig,
    ...about?.data,
    address: {
      ...defaultSiteConfig.address,
      ...about?.data.address,
    },
  };
}
