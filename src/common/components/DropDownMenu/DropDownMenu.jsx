//Drop Down Menu Component
import { useRouter } from "next/router";
//Need to install this for dropdown menu: npm install @radix-ui/react-popover@latest -E
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import styles from "./DropDownMenu.module.css";

export default function DropDownMenu() {

    //Languages (check next.config.js)
    const { locale: activeLocale, locales, asPath } = useRouter();
    const availableLocales = locales.filter((locale) => locale !== activeLocale);

    return <div>
    <DropdownMenu.Root>
        <DropdownMenu.Trigger  className={styles['trigger']} >Languages</DropdownMenu.Trigger>

        <DropdownMenu.Content className={styles['content']}>
            <DropdownMenu.Item className={styles['item']}>

                        {availableLocales.map((locale) => {
                            return (
                            <li key={locale}>
                                <Link href={asPath} locale={locale}>
                                {locale.toUpperCase()}
                                </Link>
                            </li>
                            );
                        })}

            </DropdownMenu.Item>

        </DropdownMenu.Content>
    </DropdownMenu.Root>
    </div>;
    }