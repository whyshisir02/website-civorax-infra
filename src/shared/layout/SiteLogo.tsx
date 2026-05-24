import LocaleLink from "@/shared/ui/LocaleLink";

export default function SiteLogo() {
  return (
    <LocaleLink href="/" className="group inline-flex flex-col items-start">
      <span className="font-sora block text-[32px] font-extrabold leading-none tracking-[-0.06em] text-[#081d30] transition-colors">
        Civora<span className="text-[#2f7d32]">X</span>
      </span>
      <span className="mt-0.5 block pl-[1px] text-[10px] font-bold uppercase leading-none tracking-[0.45em] text-[#6d7a72]">
        INFRA PVT. LTD.
      </span>
    </LocaleLink>
  );
}
