'use client';

import { createContext, useContext, useMemo, useCallback, useState, useEffect } from "react";

import en from "../../public/locales/en";
import ar from "../../public/locales/ar";
import tr from "../../public/locales/tr";
import Cookies from "js-cookie";

const initialContext = {
    locale: "ar",
    t: ar,
    direction: "rtl",
    changeLanguage: () => {},
};

const I18nContext = createContext(initialContext);

export const I18nProvider = ({ initialLocale = "ar", children } = {}) => {
    const [locale, setLocale] = useState(initialLocale);

    useEffect(() => {
        const cookieLang = Cookies.get('lang');
        if (cookieLang && cookieLang !== locale) {
            setLocale(cookieLang);
        }
    }, []);

    const changeLanguage = useCallback((lang) => {
        setLocale(lang);
        Cookies.set("lang", lang, { expires: 365 });
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }, []);

    const t = useMemo(() => {
        if (locale === "ar") return ar;
        if (locale === "tr") return tr;
        return en;
    }, [locale]);

    const direction = useMemo(() => (locale === "ar" ? "rtl" : "ltr"), [locale]);

    return (
        <I18nContext.Provider value={{ locale, t, direction, changeLanguage }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => useContext(I18nContext);