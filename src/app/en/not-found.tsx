import NotFound from "@/components/pages/NotFound";
import { dict } from "@/lib/i18n";

export const metadata = { title: `${dict.en.notFound.title} | 404` };

export default function Page() {
  return <NotFound lang="en" />;
}
