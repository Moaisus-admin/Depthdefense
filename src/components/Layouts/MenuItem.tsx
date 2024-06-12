"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

interface MenuItemProps {
  label: string;
  link: string;
  submenu?: { label: string; link: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu }) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const isActive = pathname == link;

  if (submenu) {
    return (
      <li className="nav-item" key={label}>
        <Link
          href={link}
          className="nav-link text-white dark:text-white"
          onClick={(e) => e.preventDefault()}
        >
          {t(label)} <i className="bx bx-chevron-down"></i>
        </Link>

        <ul className="dropdown-menu dark:bg-zinc-800 dark:text-white">
          {submenu.map((subItem) => {
            const isActive = pathname == subItem.link;
            return (
              <li
                className="nav-item dark:bg-zinc-800 dark:text-white"
                key={subItem.label}
              >
                <Link
                  href={subItem.link}
                  className={` dark:text-white nav-link ${
                    isActive ? "active" : ""
                  }`}
                >
                  {t(subItem.label)}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return (
    <li className="nav-item text-white" key={label}>
      <Link
        href={link}
        className={`text-white nav-link ${isActive ? "active" : ""}`}
      >
        {t(label)}
      </Link>
    </li>
  );
};

export default MenuItem;
