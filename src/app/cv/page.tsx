import type { Metadata } from "next";
import Cv from "@/components/pages/Cv";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: `${dict.pt.cv.title} | João Vitor Chaves`,
};

export default function Page() {
  return <Cv lang="pt" />;
}
