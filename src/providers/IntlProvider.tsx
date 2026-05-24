import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

/**
 * Server component wrapper that fetches messages and injects them
 * into NextIntlClientProvider. Centralises i18n provider setup so
 * locale layouts stay clean.
 */
export default async function IntlProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
