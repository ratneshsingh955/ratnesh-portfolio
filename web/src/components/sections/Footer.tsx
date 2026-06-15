import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-px flex flex-col items-center justify-between gap-3 text-sm text-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>Designed &amp; developed by Ratnesh Singh.</p>
      </div>
    </footer>
  );
}
