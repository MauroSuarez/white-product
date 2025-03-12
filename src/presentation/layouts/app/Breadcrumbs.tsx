'use client'

import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BREADCRUMBS_LABEL } from "@/domain/constants/breadcrums";
import { Icon } from '@/presentation/ui/atoms/icon';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/presentation/ui/atoms/breadcrumbs";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const splitPath = pathname.split('/').filter((path) => path && path !== 'es');
  const pathItems = splitPath
                      .map((path, i) => {
                        return {
                          label: BREADCRUMBS_LABEL[path],
                          name: path,
                          path: i === 0 ? `/${path}` : splitPath.slice(1, i + 1).join('/'),
                        }
                      });
  console.log(pathItems, splitPath.slice(1, 2).join('/'), 'A VER')
  return (
    <div className="flex w-full h-12 justify-start items-center px-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
          {pathItems.map((el, key) => (
            <React.Fragment key={`${el.label}-${key}`}>
              <BreadcrumbLink>
                <Link
                  href={el.path}
                  className='flex items-center'
                >
                  {key === 0 && (<Icon name="HomeIcon" className="mr-2" />)}
                  {key < splitPath.length - 1 ? el.label : <BreadcrumbPage>{el.label}</BreadcrumbPage>}
                </Link>
              </BreadcrumbLink>
              {key < splitPath.length - 1 && (
                <BreadcrumbSeparator key={el.label} />
              )}
            </React.Fragment>
          ))}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export { Breadcrumbs };
