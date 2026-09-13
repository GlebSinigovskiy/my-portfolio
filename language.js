/* =====================================================
   LANGUAGE SWITCHER
   ===================================================== */

(function () {

    const STORAGE_KEY = "site-language";

    const translations = {

        en: {
            "WORK": "WORK",
            "ARCHIVE": "ARCHIVE",
            "GRAPHIC DESIGNER": "GRAPHIC DESIGNER",
            "SELF-TAUGHT / DESIGN STUDENT": "SELF-TAUGHT / DESIGN STUDENT",
            "VISUALS / IDENTITY / EXPERIMENTS": "VISUALS / IDENTITY / EXPERIMENTS",
            "SELECTED WORK": "SELECTED WORK",
            "↓ SCROLL": "↓ SCROLL",
            "01 — 04": "01 — 04",
            "ABOUT": "ABOUT",
            "INFO": "INFO",
            "A FEW QUESTIONS": "A FEW QUESTIONS",
            "CONTACT": "CONTACT",
            "MEDIA": "MEDIA",
            "WHAT CAN YOU HELP ME WITH?": "WHAT CAN YOU HELP ME WITH?",
            "HOW DO I WORK?": "HOW DO I WORK?",
            "HOW CAN WE WORK TOGETHER?": "HOW CAN WE WORK TOGETHER?",
            "I work across branding, visual identities, art direction and digital design. Whether you need a new visual identity, a campaign, a digital experience or simply a strong visual idea, I can help shape it from the first concept to the final design.": "I work across branding, visual identities, art direction and digital design. Whether you need a new visual identity, a campaign, a digital experience or simply a strong visual idea, I can help shape it from the first concept to the final design.",
            "I start with understanding the idea, the context and what the project needs to achieve. Then I develop the visual direction, explore different possibilities and refine the strongest one together with the client. I keep the process clear and collaborative, from the first conversation to the final files.": "I start with understanding the idea, the context and what the project needs to achieve. Then I develop the visual direction, explore different possibilities and refine the strongest one together with the client. I keep the process clear and collaborative, from the first conversation to the final files.",
            "Send me a message to my e-mail or telegram ↓ with a little information about your project, what you’re looking for and when you’d like to start. We can discuss the idea, scope and timeline, and I’ll suggest the best way to move forward.": "Send me a message to my e-mail or telegram ↓ with a little information about your project, what you’re looking for and when you’d like to start. We can discuss the idea, scope and timeline, and I’ll suggest the best way to move forward.",
            "TELEGRAM": "TELEGRAM",
            "INSTAGRAM": "INSTAGRAM",
            "2026 GLEB SINIGOVSKY": "2026 GLEB SINIGOVSKY",

            "BACK": "BACK",
            "ABOUT THE PROJECT": "ABOUT THE PROJECT",
            "ROTATE PHONE FOR BETTER EXPERIENCE": "ROTATE PHONE FOR BETTER EXPERIENCE",
            "DESIGN CONCEPT": "DESIGN CONCEPT",
            "THE CHARACTER": "THE CHARACTER",
            "FLEXIBLE BY NATURE": "FLEXIBLE BY NATURE",
            "VISUAL LANGUAGE": "VISUAL LANGUAGE",
            "THE AGENCY": "THE AGENCY",
            "ART DIRECTION": "ART DIRECTION",
            "TAP": "TAP",
            "TYPE": "TYPE",
            "YEAR": "YEAR",
            "ROLE": "ROLE",
            "NEXT PROJECT": "NEXT PROJECT",
            "Brand Identity": "Brand Identity",
            "Art concept": "Art concept",
            "Project Type": "Project Type",
            "PROJECT 03": "AURA",
            "PROJECT 04": "BREW.OS",

            "Hi! My name is Gleb, I’m 22 and I’m a graphic designer based in Novosibirsk. I’ve always been interested in the way things look, feel and communicate — from clothes and music to films, spaces and brands.": "Hi! My name is Gleb, I’m 22 and I’m a graphic designer based in Novosibirsk. I’ve always been interested in the way things look, feel and communicate — from clothes and music to films, spaces and brands. I even have a degree in clothing design;)",
            "Today I use design to explore those interests, creating visual identities and concepts that feel like more than just decoration.": "Today I use design to explore those interests, creating visual identities and concepts that feel like more than just decoration.",

            "ROOMMATE is a furniture rental service for people with temporary lifestyles. The brand offers an easy way to furnish a space without committing to long-term ownership.": "ROOMMATE is a furniture rental service for people with temporary lifestyles. The brand offers an easy way to furnish a space without committing to long-term ownership.",
            "A playful visual identity built around movement, flexibility, and everyday living. Bold typography, bright colors, and a simple character create a friendly brand that feels modern, energetic, and approachable.": "A playful visual identity built around movement, flexibility, and everyday living. Bold typography, bright colors, and a simple character create a friendly brand that feels modern, energetic, and approachable.",
            "The mascot represents the idea of moving furniture without the stress. A simple human figure carrying different pieces of furniture adds personality and turns the service into something more familiar and relatable.": "The mascot represents the idea of moving furniture without the stress. A simple human figure carrying different pieces of furniture adds personality and turns the service into something more familiar and relatable.",
            "ROOMMATE is designed for people who are always moving, changing, and trying something new. The identity reflects this temporary way of living through a flexible system of graphics, messages, and compositions.": "ROOMMATE is designed for people who are always moving, changing, and trying something new. The identity reflects this temporary way of living through a flexible system of graphics, messages, and compositions.",

            "АГЕНТСТВО НАСИЛИЯ™ is a song by artists gotlibgotlibgotlib and SABU. It's the song about the agency that deal with emotional violence. And that project is a fantasy on how this agency would look if it were real.": "АГЕНТСТВО НАСИЛИЯ™ is a song by artists gotlibgotlibgotlib and SABU. It's the song about the agency that deal with emotional violence. And that project is a fantasy on how this agency would look if it were real.",
            "The identity combines the aesthetics of a serious institutional agency with sharp tribal forms and subtle signs of aggression. A monochrome palette, classical serif typography and heraldic framing create a sense of authority, while small red accents disrupt the system.": "The identity combines the aesthetics of a serious institutional agency with sharp tribal forms and subtle signs of aggression. A monochrome palette, classical serif typography and heraldic framing create a sense of authority, while small red accents disrupt the system.",
            "The visual identity imagines АГЕНТСТВО НАСИЛИЯ™ as a fully functioning organization with its own rules, symbols and corporate culture. Every element is designed to make the fictional agency feel strangely legitimate — as if emotional violence could actually be a professional service.": "The visual identity imagines АГЕНТСТВО НАСИЛИЯ™ as a fully functioning organization with its own rules, symbols and corporate culture. Every element is designed to make the fictional agency feel strangely legitimate — as if emotional violence could actually be a professional service.",
            "The project balances seriousness and absurdity, turning the fictional concept into a visual world rather than a conventional brand. The restrained system leaves space for irony, tension and small unexpected details that reveal the artistic nature of the project.": "The project balances seriousness and absurdity, turning the fictional concept into a visual world rather than a conventional brand.",

            "BREW.OS is a coffee shop imagined as a digital operating system, blending café culture with the visual language of software and interfaces. The identity uses a blue-and-white palette, bitmap illustrations, soft gradients, and coffee-related slogans styled like lines of code, creating a playful, contemporary system-like aesthetic.": "BREW.OS is a coffee shop imagined as a digital operating system, blending café culture with the visual language of software and interfaces. The identity uses a blue-and-white palette, bitmap illustrations, soft gradients, and coffee-related slogans styled like lines of code, creating a playful, contemporary system-like aesthetic."
        },

        ru: {
            "WORK": "РАБОТЫ",
            "ARCHIVE": "АРХИВ",
            "GRAPHIC DESIGNER": "ГРАФИЧЕСКИЙ ДИЗАЙНЕР",
            "DIGITAL ARTIST": "ДИДЖИТАЛ ХУДОЖНИК",
            "VISUALS / IDENTITY / EXPERIMENTS": "ВИЗУАЛ / АЙДЕНТИКА / ЭКСПЕРИМЕНТЫ",
            "SELECTED WORK": "SELECTED WORK",
            "↓ SCROLL": "↓ SCROLL",
            "01 — 04": "01 — 04",
            "ABOUT": "О СЕБЕ",
            "INFO": "ИНФО",
            "A FEW QUESTIONS": "НЕСКОЛЬКО ВОПРОСОВ",
            "CONTACT": "КОНТАКТЫ",
            "MEDIA": "МЕДИА",
            "WHAT CAN YOU HELP ME WITH?": "С ЧЕМ Я МОГУ ПОМОЧЬ?",
            "HOW DO I WORK?": "КАК ПРОХОДИТ РАБОТА?",
            "HOW CAN WE WORK TOGETHER?": "КАК НАЧАТЬ РАБОТАТЬ ВМЕСТЕ?",
            "I work across branding, visual identities, art direction and digital design. Whether you need a new visual identity, a campaign, a digital experience or simply a strong visual idea, I can help shape it from the first concept to the final design.": "Я занимаюсь брендингом, визуальными айдентиками, арт-дирекцией и digital-дизайном. Могу подключиться как к созданию проекта с нуля, так и к отдельной задаче — от поиска идеи и визуального направления до готовой системы и её реализации.",
            "I start with understanding the idea, the context and what the project needs to achieve. Then I develop the visual direction, explore different possibilities and refine the strongest one together with the client. I keep the process clear and collaborative, from the first conversation to the final files.": "Сначала важно понять саму идею, контекст и задачу проекта. Затем мы определяем визуальное направление, я исследую разные варианты и постепенно собираю из них цельную систему. На каждом этапе мы остаёмся на связи, чтобы результат действительно соответствовал задаче.",
            "Send me a message to my e-mail or telegram ↓ with a little information about your project, what you’re looking for and when you’d like to start. We can discuss the idea, scope and timeline, and I’ll suggest the best way to move forward.": "Просто напишите мне сообщение мне на почту или в телеграм ↓ и расскажите немного о проекте: что вы хотите сделать, что уже есть и какой результат вам нужен. Мы обсудим задачу, сроки и объём работы, после чего я предложу подходящий формат сотрудничества.",
            "TELEGRAM": "TELEGRAM",
            "INSTAGRAM": "INSTAGRAM",
            "2026 GLEB SINIGOVSKY": "2026 GLEB SINIGOVSKY",

            "BACK": "НАЗАД",
            "ABOUT THE PROJECT": "О ПРОЕКТЕ",
            "ROTATE PHONE FOR BETTER EXPERIENCE": "ПОВЕРНИТЕ ТЕЛЕФОН ДЛЯ ЛУЧШЕГО ПРОСМОТРА",
            "DESIGN CONCEPT": "КОНЦЕПЦИЯ ДИЗАЙНА",
            "THE CHARACTER": "ПЕРСОНАЖ",
            "FLEXIBLE BY NATURE": "ГИБКОСТЬ",
            "VISUAL LANGUAGE": "ВИЗУАЛЬНЫЙ ЯЗЫК",
            "THE AGENCY": "АГЕНТСТВО",
            "ART DIRECTION": "АРТ-ДИРЕКШЕН",
            "TAP": "TAP",
            "TYPE": "ТИП",
            "YEAR": "ГОД",
            "ROLE": "РОЛЬ",
            "NEXT PROJECT": "СЛЕДУЮЩИЙ",
            "Brand Identity": "Фирменный стиль",
            "Art concept": "Арт-концепция",
            "Project Type": "Тип проекта",
            "PROJECT 03": "AURA",
            "PROJECT 04": "BREW.OS",

            "Hi! My name is Gleb, I’m 22 and I’m a graphic designer based in Novosibirsk. I’ve always been interested in the way things look, feel and communicate — from clothes and music to films, spaces and brands.": "Привет! Меня зовут Глеб, мне 22 года, я графический дизайнер из Новосибирска. Мне всегда было интересно, как вещи выглядят, ощущаются и взаимодействуют друг с другом — от одежды и музыки до кино, пространства и брендов. У меня даже есть высшее образование в сфере дизайна одежды;)",
            "Today I use design to explore those interests, creating visual identities and concepts that feel like more than just decoration.": "Сейчас я исследую эти интересы через дизайн, создавая визуальные образы, айдентики и концепции, в которых есть что-то большее, чем просто красивая картинка.",

            "ROOMMATE is a furniture rental service for people with temporary lifestyles. The brand offers an easy way to furnish a space without committing to long-term ownership.": "ROOMMATE — сервис аренды мебели для людей с временным образом жизни. Бренд предлагает простой способ обустроить пространство без необходимости покупать мебель в долгосрочное пользование.",
            "A playful visual identity built around movement, flexibility, and everyday living. Bold typography, bright colors, and a simple character create a friendly brand that feels modern, energetic, and approachable.": "Игривая визуальная айдентика построена вокруг движения, гибкости и повседневной жизни. Смелая типографика, яркие цвета и простой персонаж создают дружелюбный образ — современный, энергичный и открытый.",
            "The mascot represents the idea of moving furniture without the stress. A simple human figure carrying different pieces of furniture adds personality and turns the service into something more familiar and relatable.": "Персонаж воплощает идею переезда без стресса. Простая человеческая фигура, переносящая разные предметы мебели, добавляет бренду характер и делает сервис более понятным и близким.",
            "ROOMMATE is designed for people who are always moving, changing, and trying something new. The identity reflects this temporary way of living through a flexible system of graphics, messages, and compositions.": "ROOMMATE создан для людей, которые постоянно переезжают, меняются и пробуют что-то новое. Айдентика отражает такой временный образ жизни через гибкую систему графики, сообщений и композиций.",

            "АГЕНТСТВО НАСИЛИЯ™ is a song by artists gotlibgotlibgotlib and SABU. It's the song about the agency that deal with emotional violence. And that project is a fantasy on how this agency would look if it were real.": "АГЕНТСТВО НАСИЛИЯ™ — песня исполнителей gotlibgotlibgotlib и SABU. Это песня об агентстве, которое занимается эмоциональным насилием. И этот проект — фантазия о том, как бы выглядело такое агентство, если бы оно существовало на самом деле.",
            "The identity combines the aesthetics of a serious institutional agency with sharp tribal forms and subtle signs of aggression. A monochrome palette, classical serif typography and heraldic framing create a sense of authority, while small red accents disrupt the system.": "Айдентика объединяет эстетику серьёзного институционального агентства с резкими трибальными формами и едва заметными признаками агрессии. Монохромная палитра, классическая антиквенная типографика и геральдические рамки создают ощущение авторитетности, а небольшие красные акценты нарушают систему.",
            "The visual identity imagines АГЕНТСТВО НАСИЛИЯ™ as a fully functioning organization with its own rules, symbols and corporate culture. Every element is designed to make the fictional agency feel strangely legitimate — as if emotional violence could actually be a professional service.": "Визуальная айдентика представляет АГЕНТСТВО НАСИЛИЯ™ как полноценную организацию со своими правилами, символами и корпоративной культурой. Каждый элемент делает вымышленное агентство странно убедительным — будто эмоциональное насилие действительно могло бы быть профессиональной услугой.",
            "The project balances seriousness and absurdity, turning the fictional concept into a visual world rather than a conventional brand. The restrained system leaves space for irony, tension and small unexpected details that reveal the artistic nature of the project.": "Проект балансирует между серьёзностью и абсурдом, превращая вымышленную концепцию в визуальный мир, а не в обычный бренд. Сдержанная система оставляет пространство для иронии, напряжения и небольших неожиданных деталей, раскрывающих художественную природу проекта.",

            "BREW.OS is a coffee shop imagined as a digital operating system, blending café culture with the visual language of software and interfaces. The identity uses a blue-and-white palette, bitmap illustrations, soft gradients, and coffee-related slogans styled like lines of code, creating a playful, contemporary system-like aesthetic.": "BREW.OS — кофейня, переосмысленная как цифровая операционная система. Айдентика объединяет атмосферу кофеен с визуальным языком интерфейсов и технологий: сине-белая палитра, bitmap-иллюстрации, мягкие градиенты и кофейные слоганы, стилизованные под строки кода. Получается современная и немного игровая цифровая эстетика."
        }

    };


    const pageTitles = {
        index: {
            en: "Gleb Sinigovskiy — Graphic Designer",
            ru: "Глеб Синиговский — Графический дизайнер"
        },
        archive: {
            en: "Archive — Gleb Sinigovsky",
            ru: "Архив — Глеб Синиговский"
        },
        "project-01": {
            en: "Project 01 — Gleb Sinigovskiy",
            ru: "Проект 01 — Глеб Синиговский"
        },
        "project-02": {
            en: "АГЕНТСТВО НАСИЛИЯ™ — Gleb Sinigovskiy",
            ru: "АГЕНТСТВО НАСИЛИЯ™ — Глеб Синиговский"
        },
        "project-03": {
            en: "AURA — Gleb Sinigovskiy",
            ru: "AURA — Глеб Синиговский"
        },
        "project-04": {
            en: "Project 04 — Gleb Sinigovskiy",
            ru: "Проект 04 — Глеб Синиговский"
        }
    };


    function currentPage() {
        const path = window.location.pathname;

        if (path.includes("project-01")) return "project-01";
        if (path.includes("project-02")) return "project-02";
        if (path.includes("project-03")) return "project-03";
        if (path.includes("project-04")) return "project-04";
        if (path.includes("archive")) return "archive";

        return "index";
    }


    function normalize(text) {
        return text
            .replace(/\s+/g, " ")
            .trim();
    }


    function createSwitcher() {

        if (document.querySelector(".language-switcher")) {
            return;
        }

        const switcher = document.createElement("span");
        switcher.className = "language-switcher";

        const en = document.createElement("button");
        const slash = document.createElement("span");
        const ru = document.createElement("button");

        en.type = "button";
        ru.type = "button";

        en.dataset.lang = "en";
        ru.dataset.lang = "ru";

        en.textContent = "EN";
        slash.textContent = " / ";
        ru.textContent = "RU";

        switcher.append(en, slash, ru);

        if (document.querySelector(".project-header")) {

            const header = document.querySelector(".project-header");
            const oldRight = header.querySelector(":scope > span:nth-child(3)");

            if (oldRight) {
                oldRight.replaceWith(switcher);
            } else {
                header.appendChild(switcher);
            }

        } else {

            const header = document.querySelector(".header");

            if (header) {
                header.appendChild(switcher);
            }

        }

        en.addEventListener("click", () => setLanguage("en"));
        ru.addEventListener("click", () => setLanguage("ru"));
    }


    function styleSwitcher() {

        const switcher = document.querySelector(".language-switcher");

        if (!switcher) return;

        switcher.style.display = "inline-flex";
        switcher.style.alignItems = "center";
        switcher.style.justifyContent = "flex-end";
        switcher.style.gap = "2px";
        switcher.style.whiteSpace = "nowrap";

        switcher.querySelectorAll("button").forEach(button => {

            button.style.padding = "0";
            button.style.margin = "0";
            button.style.border = "0";
            button.style.background = "none";
            button.style.color = "inherit";
            button.style.font = "inherit";
            button.style.lineHeight = "inherit";
            button.style.cursor = "pointer";

        });

        if (document.querySelector(".header")) {

            switcher.style.position = "absolute";
            switcher.style.top = "24px";
            switcher.style.right = "30px";
            switcher.style.fontSize = "13px";

        }

    }


    function setText(selector, value) {

        const element = document.querySelector(selector);

        if (element) {
            element.textContent = value;
        }

    }


    function originalText(element) {

        if (!element.dataset.i18nOriginal) {
            element.dataset.i18nOriginal =
                normalize(element.textContent);
        }

        return element.dataset.i18nOriginal;

    }


    function translateSimpleElements(language) {

        const dictionary = translations[language];

        document.querySelectorAll("body *").forEach(element => {

            if (element.children.length !== 0) return;

            const original = originalText(element);

            if (!original || !dictionary[original]) return;

            element.textContent = dictionary[original];

        });

    }


    function translateSpecialElements(language) {

        const dictionary = translations[language];

        /* INDEX */

        const heroDescription = document.querySelectorAll(".hero-description > div");

        if (heroDescription.length >= 3) {
            heroDescription[0].textContent = dictionary["GRAPHIC DESIGNER"];
            heroDescription[1].textContent = dictionary["SELF-TAUGHT / DESIGN STUDENT"];
            heroDescription[2].textContent = dictionary["VISUALS / IDENTITY / EXPERIMENTS"];
        }

        const questionTexts = document.querySelectorAll(".question-text");

        const questionKeys = [
            "WHAT CAN YOU HELP ME WITH?",
            "HOW DO I WORK?",
            "HOW CAN WE WORK TOGETHER?"
        ];

        questionTexts.forEach((element, index) => {
            if (questionKeys[index]) {
                element.dataset.i18nOriginal = questionKeys[index];
                element.textContent = dictionary[questionKeys[index]];
            }
        });

        const answers = document.querySelectorAll(".question-answer-inner");

        const answerKeys = [
            "I work across branding, visual identities, art direction and digital design. Whether you need a new visual identity, a campaign, a digital experience or simply a strong visual idea, I can help shape it from the first concept to the final design.",
            "I start with understanding the idea, the context and what the project needs to achieve. Then I develop the visual direction, explore different possibilities and refine the strongest one together with the client. I keep the process clear and collaborative, from the first conversation to the final files.",
            "Send me a message to my e-mail or telegram ↓ with a little information about your project, what you’re looking for and when you’d like to start. We can discuss the idea, scope and timeline, and I’ll suggest the best way to move forward."
        ];

        answers.forEach((answer, index) => {
            if (answerKeys[index]) {
                answer.dataset.i18nOriginal = answerKeys[index];
                answer.textContent = dictionary[answerKeys[index]];
            }
        });


        /* PROJECT PAGES */

        const rotateNotice = document.querySelector(".rotate-notice span:last-child");

        if (rotateNotice) {
            rotateNotice.dataset.i18nOriginal =
                "ROTATE PHONE FOR BETTER EXPERIENCE";

            rotateNotice.textContent =
                dictionary["ROTATE PHONE FOR BETTER EXPERIENCE"];
        }

        const conceptLabels = document.querySelectorAll(".project-side-text > span");

        conceptLabels.forEach(label => {

            const original =
                label.dataset.i18nOriginal ||
                normalize(label.textContent);

            label.dataset.i18nOriginal = original;

            const match = original.match(/^(\d+)\s*\/\s*(.+)$/);

            if (!match) return;

            const number = match[1];
            const phrase = match[2];

            if (dictionary[phrase]) {
                label.textContent =
                    number + " / " + dictionary[phrase];
            }

        });


        const meta = document.querySelectorAll(".project-meta-bottom");

        meta.forEach(section => {

            const labels = section.querySelectorAll(":scope > div > span");
            const values = section.querySelectorAll(":scope > div > p");

            if (labels[0]) labels[0].textContent = dictionary["TYPE"];
            if (labels[1]) labels[1].textContent = dictionary["YEAR"];
            if (labels[2]) labels[2].textContent = dictionary["ROLE"];

            if (values[0]) {

                const value =
                    values[0].dataset.i18nOriginal ||
                    normalize(values[0].textContent);

                values[0].dataset.i18nOriginal = value;

                if (dictionary[value]) {
                    values[0].textContent = dictionary[value];
                }

            }

            if (values[2]) {
                values[2].innerHTML =
                    language === "ru"
                        ? "Арт-дирекшен<br>Графический дизайн"
                        : "Art Direction<br>Graphic Design";
            }

        });

    }


    function updateTransitionLabel(language) {

        const transition = document.querySelector(".page-transition span");

        if (!transition) return;

        const text = normalize(transition.textContent);
        const dictionary = translations[language];

        if (dictionary[text]) {
            transition.textContent = dictionary[text];
            return;
        }

        const projectMatch = text.match(/^PROJECT\s+(\d+)$/i);

        if (projectMatch) {
            transition.textContent =
                language === "ru"
                    ? "ПРОЕКТ " + projectMatch[1]
                    : "PROJECT " + projectMatch[1];
        }

    }


    function updateSwitcher(language) {

        document.querySelectorAll(".language-switcher button").forEach(button => {

            button.style.textDecoration =
                button.dataset.lang === language
                    ? "underline"
                    : "none";

            button.style.textUnderlineOffset = "3px";

        });

    }


    function setLanguage(language) {

        if (!translations[language]) {
            language = "en";
        }

        localStorage.setItem(STORAGE_KEY, language);

        document.documentElement.lang = language;

        translateSimpleElements(language);
        translateSpecialElements(language);
        updateTransitionLabel(language);
        updateSwitcher(language);

        const page = currentPage();

        if (pageTitles[page]) {
            document.title = pageTitles[page][language];
        }

    }


    function transitionLabelForLink(href, language) {

        const isArchive = href.includes("archive");
        const isIndex =
            href.includes("index.html") ||
            href === "../" ||
            href === "./";

        if (isArchive) {
            return language === "ru" ? "АРХИВ" : "ARCHIVE";
        }

        if (isIndex) {
            return language === "ru" ? "РАБОТЫ" : "WORK";
        }

        const match = href.match(/project-(\d+)/);

        if (match) {
            return language === "ru"
                ? "ПРОЕКТ " + match[1]
                : "PROJECT " + match[1];
        }

        return language === "ru" ? "РАБОТЫ" : "WORK";
    }


    function init() {

        const savedLanguage =
            localStorage.getItem(STORAGE_KEY) || "en";

        createSwitcher();
        styleSwitcher();
        setLanguage(savedLanguage);


        /*
         * Existing page-transition scripts handle navigation.
         * This listener only changes their label to the selected language.
         * It does not change navigation, animations or timing.
         */

        document
            .querySelectorAll('a[href$=".html"]')
            .forEach(link => {

                link.addEventListener("click", () => {

                    const language =
                        localStorage.getItem(STORAGE_KEY) || "en";

                    const transition =
                        document.querySelector(".page-transition span");

                    if (transition) {
                        transition.textContent =
                            transitionLabelForLink(
                                link.getAttribute("href") || "",
                                language
                            );
                    }

                });

            });

    }


    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
