import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

type ActiveLinkProps = {
  children: ReactElement;
} & LinkProps;

export function ActiveLink({ children, ...restProps }: ActiveLinkProps) {
  let isActive = false;

  const router = useRouter();

  if (router.asPath.startsWith(String(restProps.href))) {
    isActive = true;
  }

  return (
    <Link {...restProps}>
      {cloneElement(children, {
        color: isActive && "blue.400",
      })}
    </Link>
  );
}
