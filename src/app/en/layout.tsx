import HtmlLang from "@/components/HtmlLang";

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HtmlLang lang="en" />
      {children}
    </>
  );
}
