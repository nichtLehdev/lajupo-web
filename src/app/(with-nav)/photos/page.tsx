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
      <PageHeader>
        <PageHeaderHeading>Photos</PageHeaderHeading>
        <PageHeaderDescription>
          {
            "Hi there! We're currently building this website. Check back soon for updates. While you wait please check out our Instagram page."
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
              href={siteConfig.links.instagram}
            >
              Instagram
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link target="_blank" rel="noreferrer" href={siteConfig.links.pwr}>
              Posaunenwerk
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
    </div>
  );
}
