import { PageContaier } from "./misc";

export function SiteFooter() {
  return (
    <footer className="bg-white border-t py-8 md:py-0">
      <PageContaier>
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Designed & Developed by{" "}
            <a
              href="https://www.honeyhexa.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-blue-500"
            >
              Honey Hexa
            </a>
            .
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built using{" "}
            <a
              href="https://twitter.com/shadcn"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-blue-500"
            >
              shadcn
            </a>
            . Deployed on{" "}
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-blue-500"
            >
              Vercel
            </a>
            .
          </p>
        </div>
      </PageContaier>
    </footer>
  );
}
