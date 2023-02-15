import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function MenuItem(props) {
  const router = useRouter();

  return (
    <li>
      <Link
        href={props.href}
        className={`relative flex rounded py-3 px-4 ${
          router.route == props.href
            ? "button-text bg-[rgba(184,184,184,0.5215336134453781)] "
            : "opacity-75 hover:bg-[rgba(184,184,184,0.5215336134453781)]"
        }`}
      >
        {router.route == props.href && (
          <span className="absolute left-0 top-1/2 h-9 w-[6px] -translate-y-1/2 rounded bg-white"></span>
        )}
        <props.icon className="mr-3" />
        {props.title}
      </Link>
    </li>
  );
}

export default MenuItem;
