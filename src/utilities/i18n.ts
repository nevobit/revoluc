import { I18n } from "i18n";
import path  from 'path';

const i18n = new I18n({
    locales: ['en', 'es', 'fr'],
    directory: path.join(__dirname, 'locales')
})

export type Lang = "en" | "fr" | "es";

export const LANGS: Array<Lang> = ["en", "fr", "es"];

export const otherLang = (lang: Lang) => lang === "en" ? "fr" : "es";

const langs: Array<Lang> = i18n.getLocales() as unknown as Array<Lang>;

export type Dict = {
    [key: string]: string | Dict
}

export const getOtherLanguages = (lang: Lang) => {
    return langs.filter((_lang) => _lang != lang);
}

function getFromDictionnary(keys: Array<string>, dict: Dict | string): Dict | string {
    if(typeof dict == "string"){
        return dict;
    }

    if(keys.length == 0){
        return "";
    }

    if(!dict) {
        return "";
    }

    const key = keys.shift() || "";

    return getFromDictionnary(keys, dict[key]);
}


export const _t = (key: string, dict: Dict): string => {
    if(!key) { return ""; }

    const keys = key.split(".");

    const ret = getFromDictionnary(keys, dict);

    if(!ret){
        return key;
    }

    if(typeof ret !== "string"){
        console.error("getFromDict returned a " + (typeof ret));
        return key;
    }

    return ret;

}

// const baseRoutes = [
//     "services",
//     "sitemap"
// ]