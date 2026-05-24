import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Lazy-load all namespaces in parallel — each page only accesses
  // its own namespace via getTranslations({ namespace }) or useTranslations('ns')
  const [
    common,
    navigation,
    home,
    services,
    about,
    contact,
    process,
    ourWork,
    auth,
    dashboard,
    errors,
    seo,
  ] = await Promise.all([
    import(`../translations/${locale}/common.json`),
    import(`../translations/${locale}/navigation.json`),
    import(`../translations/${locale}/home.json`),
    import(`../translations/${locale}/services.json`),
    import(`../translations/${locale}/about.json`),
    import(`../translations/${locale}/contact.json`),
    import(`../translations/${locale}/process.json`),
    import(`../translations/${locale}/our-work.json`),
    import(`../translations/${locale}/auth.json`),
    import(`../translations/${locale}/dashboard.json`),
    import(`../translations/${locale}/errors.json`),
    import(`../translations/${locale}/seo.json`),
  ]);

  return {
    locale,
    messages: {
      common: common.default,
      navigation: navigation.default,
      home: home.default,
      services: services.default,
      about: about.default,
      contact: contact.default,
      process: process.default,
      "our-work": ourWork.default,
      auth: auth.default,
      dashboard: dashboard.default,
      errors: errors.default,
      seo: seo.default,
    },
  };
});
