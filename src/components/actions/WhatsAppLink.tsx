import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { Lang } from "@/i18n/locales";
import {
  createWhatsAppUrl,
  hasWhatsApp,
  type WhatsAppMessageKey,
} from "@/lib/business";

type WhatsAppLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel" | "children" | "aria-label"
> & {
  locale: Lang;
  messageKey: WhatsAppMessageKey;
  variables?: Record<string, string>;
  className?: string;
  disabledClassName?: string;
  ariaLabel: string;
  children: ReactNode;
};

export function WhatsAppLink({
  locale,
  messageKey,
  variables,
  className = "",
  disabledClassName = "",
  ariaLabel,
  children,
  ...anchorProps
}: WhatsAppLinkProps) {
  if (!hasWhatsApp) {
    return (
      <span
        className={[className, disabledClassName].filter(Boolean).join(" ")}
        aria-label={ariaLabel}
        aria-disabled="true"
        tabIndex={anchorProps.tabIndex}
        role="link"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={createWhatsAppUrl({
        locale,
        messageKey,
        variables,
      })}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      {...anchorProps}
    >
      {children}
    </a>
  );
}
