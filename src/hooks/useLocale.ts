import { usePathname } from "next/navigation";

import es from '../app/[lang]/dictionaries/es.json';
import en from '../app/[lang]/dictionaries/en.json';
import fr from '../app/[lang]/dictionaries/fr.json';

export const useLocale = () => {
 const pathname = usePathname();
 const segments = pathname.split("/")
 const locale = segments[1];
 const t = locale == 'en'? en : locale == 'es' ? es : fr;
 
 return { t, locale };
 
}