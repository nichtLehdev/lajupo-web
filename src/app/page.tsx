import Link from "next/link";

import { siteConfig } from "~/config/site";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/page-header";
import { Button } from "~/components/ui/button";

import { Icons } from "~/components/icons";

export default function IndexPage() {
  return (
    <div className="container relative">
      <div className="flex justify-center">
        <Icons.logo className="h-96 w-96" />
      </div>

      <PageHeader>
        <PageHeaderHeading>Construction Ongoing</PageHeaderHeading>
        <PageHeaderDescription>
          {
            "Hi! I'm Lars. Please stand by while I write my bachelor's thesis. Afterwards I will continue to work on this website. Stay tuned! Meanwhile you can check out other stuff I've done on my GitHub."
          }
        </PageHeaderDescription>
        <PageActions>
          {/*<Button asChild size="sm">
            <Link href="/tracker">Get Started with Time Tracking</Link>
            </Button>*/}
          <Button asChild size="sm" variant="outline">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
    </div>
  );
}
