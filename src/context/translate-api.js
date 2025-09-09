'use client';

import { createContext, useContext, useMemo, useCallback, useState, useEffect } from "react";

import en from "../../public/locales/en";
import ar from "../../public/locales/ar";
import Cookies from "js-cookie";

const context = {
    locale: "ar",
    t: ar,
    direction: "rtl",
    changeLanguage: () => { },
};

const I18nContext = createContext(context);

export const I18nProvider = ({ initialLocal = "ar", children } = {}) => {
    const [locale, setLocale] = useState(initialLocal);

    // Sync with cookie on mount (client-side only)
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

    const t = useMemo(() => locale === "ar" ? ar : en, [locale]);
    const direction = useMemo(() => locale === "ar" ? "rtl" : "ltr", [locale]);

    return (
        <I18nContext.Provider value={{ locale, t, direction, changeLanguage }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => useContext(I18nContext);