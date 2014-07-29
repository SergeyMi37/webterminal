/**
 * The instance of this object holds language constants for localizing whole terminal application.
 */
var TerminalLocalization = function () {

    /**
     * List of available languages in settings.
     *
     * How to add any other language support:
     * 1. Add localization sign to the list below (it is better to use 2-letter code of country);
     * 2. Fill localization base variable below with new language units according to examples there;
     * 3. Try it!
     *
     * Do not forget to check that all language units are filled. In case of nonexistent language
     * unit you will receive warning text instead of expected phrase.
     */
    this.AVAILABLE_LOCALIZATIONS = {
        "en": "en",
        "ru": "ru"
    };

    /**
     * Indicates the current localization.
     *
     * @type {string}
     * @private
     */
    this._currentLocalization = this.AVAILABLE_LOCALIZATIONS["en"];

    /**
     * This constant includes all terminal localizations. Properties of this object is an ID's by
     * which it is possible to get required localized string with this.get(ID) method.
     * todo: change tags to sequences
     *
     * @private
     * @see this.get
     */
    this._LOCALIZATION_BASE = {
        0: {
            en: "Terminal base ready. Type /help or /tip to get more information.",
            ru: "Приложение терминала готово. Введите /help или /tip чтобы получить дополнительную информацию."
        },
        1: {
            en: "Connecting to",
            ru: "Подключение к"
        },
        2: {
            en: "Terminal state has been loaded.",
            ru: "Состояние терминала загружено."
        },
        3: {
            en: "Authorisation succeeded.",
            ru: "Авторизация успешна."
        },
        4: {
            en: "system",
            ru: "система"
        },
        5: {
            en: "Authorisation failed.",
            ru: "Авторизация не удалась."
        },
        6: {
            en: "Terminal state has been saved.",
            ru: "Состояние терминала сохранено."
        },
        7: {
            en: "Unable to load terminal state: no saves.",
            ru: "Невозможно загрузить состояние терминала: нет сохранений."
        },
        8: {
            en: "Saving terminal state...",
            ru: "Сохранение состояния терминала..."
        },
        9: {
            en: "Unknown terminal mode",
            ru: "Неизвестный режим терминала"
        },
        10: {
            en: "Data received",
            ru: "Полученные данные"
        },
        11: {
            en: "SQL mode",
            ru: "режим SQL"
        },
        12: {
            en: "enabled",
            ru: "активирован"
        },
        13: {
            en: "disabled",
            ru: "деактивирован"
        },
        15: {
            en: "Reload the page to connect to server again.",
            ru: "Перезагрузите страницу, чтобы вновь присоединиться к серверу."
        },
        16: {
            en: "Use",
            ru: "Используйте"
        },
        17: {
            en: "defined as",
            ru: "определено как"
        },
        18: {
            en: "for",
            ru: "для"
        },
        19: {
            en: "In development since summer, 2013",
            ru: "В разработке с лета, 2013"
        },
        20: {
            en: "Project page",
            ru: "Страница проекта"
        },
        21: {
            en: "Use at your own risk!",
            ru: "Используйте на свой страх и риск!"
        },
        22: {
            en: "For the time being",
            ru: "Пока что"
        },
        23: {
            en: "Query client execution time",
            ru: "Время выполнения команды"
        },
        24: {
            en: "Packages",
            ru: "Пакетов"
        },
        25: {
            en: "current/ideal",
            ru: "текущее/идеальное"
        },
        26: {
            en: "Please, enter watch name. Use " + c[0] + " for more information.",
            ru: "Введите цель слежения. Введите " + c[0] + " чтобы получить больше информации."
        },
        27: {
            en: "Enter command or index.",
            ru: "Введите команду или индекс."
        },
        28: {
            en: "Command saved to slot",
            ru: "Комманда сохранена в слот"
        },
        29: {
            en: "Choose correct slot: slots 0-9 are available",
            ru: "Выберите существующий слот: слоты 0-9 доступны"
        },
        30: {
            en: "I'm alive!",
            ru: "Я жив!"
        },
        31: {
            en: "Unknown internal command",
            ru: "Неизвестная внутренняя команда"
        },
        32: {
            en: "Watches stopped.",
            ru: "Слежение остановлено."
        },
        33: {
            en: "Unable to watch",
            ru: "Невозможно следить за"
        },
        34: {
            en: "Stopping to watch",
            ru: "Прекращаем слежение за"
        },
        35: {
            en: "Starting to watch",
            ru: "Начинаем слежение за"
        },
        36: {
            en: "Disconnecting from current server...",
            ru: "Закрывается соединение с сервером..."
        },
        37: {
            en: "Pointless server disconnection: there's no connection established.",
            ru: "Бесполезное закрытие соединения с сервером: его и так нет."
        },
        38: {
            en: "Loading Caché language for",
            ru: "Загрузка словаря Caché для"
        },
        39: {
            en: "Wrong language file for",
            ru: "Неверный файл словаря для"
        },
        40: { // means "terminal language" object
            en: "Language for",
            ru: "Словарь для"
        },
        41: {
            en: "merged with current.",
            ru: "слит с текущим."
        },
        42: {
            en: "load fail.",
            ru: "не удалось загрузить."
        },
        43: {
            en: "Connection already established. Disconnect first.",
            ru: "Соединение уже установленно. Закройте его сперва."
        },
        44: {
            en: "No connection established. Try "+c[2]+" first.",
            ru: "Соединение отсутствует. Установите его, используя "+c[2]
        },
        45: {
            en: "Connection terminated: code",
            ru: "Соединение потеряно: код"
        },
        46: {
            en: "WebSocket error:",
            ru: "Ошибка WebSocket:"
        },
        47: {
            en: "Can't save data to storage: no more space available. Expand storage place and try again.",
            ru: "Незьзя сохранить данные в локальное хранилище: нет места. Измените настройки хранилища и попробуйте еще раз."
        },
        48: {
            en: "Local HTML5 storage is not available. Saving will be disabled.",
            ru: "Локальное HTML5 хранилище недоступно. Операции сохранения не будут успешными."
        },
        49: {
            en: "<div class=\"normalWrap\">" +
                "<div class=\"center\">" +
                "<h3>Caché Web Terminal<span class=\"warning\"> v" + c[3] + "</span></h3>" +
                "</div>" +
                "<div class=\"center\">" +
                "<span class=\"syntax-_comment\">Global client command syntax</span><br>" +
                "a r <span class=\"syntax-_string\">\"g u\"</span> m e n t №0 <span class=\"syntax-_client\">/{command}</span>" +
                " argument1 <span class=\"syntax-_string\">\"argument2\"</span> ...<br>" +
                "</div>" +
                "<div>" +
                "Some examples:<br>" +
                "<span class=\"syntax-_client\">/define</span> &1 <span class=\"syntax-_string\">\"##class(%File)\"" +
                "</span> <span class=\"syntax-_comment\"> To use something like &1.Exists(\"Name\")</span><br>" +
                "<span class=\"syntax-_client\">/tail</span> <span class=\"syntax-_global\">^MyGlobal</span> " +
                "<span class=\"syntax-_comment\">To watch for global changes.</span><br>" +
                "<span class=\"syntax-_command\">do</span> <span class=\"syntax-_sysMacro\">##class</span><span class=\"" +
                "syntax-_bracket\">(</span><span class=\"syntax-mysuperapplication\">MySuperApplication</span><span cla" +
                "ss=\"syntax-_other\">.MySuperClass</span><span class=\"syntax-_bracket\">)</span><span class=\"syntax-" +
                "_other\">.MySuperMethod</span><span class=\"syntax-_bracket\">(</span><span class=\"syntax-mysuperargu" +
                "ments\">MySuperArguments</span><span class=\"syntax-_bracket\">)</span> <span class=\"syntax-_client\"" +
                ">/favorite</span> <span class=\"syntax-_other\">1</span> " +
                "<span class=\"syntax-_comment\">To save code before command into favorite slot 1.</span><br>&nbsp;" +
                "</div>" +
                "<table>" +
                "<tr>" +
                "<td class=\"hint\">Available client-side commands</td>" +
                "<td class=\"hint\">Description</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/help</td>" +
                "<td>Show help</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/tip [all]</td>" +
                "<td>Show tips and detail usage information. If \"all\" isn't present, it will be a tutorial for " +
                "you.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/echo [*]</td>" +
                "<td>Get back given arguments from server</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/save</td>" +
                "<td>Save current command history, settings and dictionary to local storage</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/load</td>" +
                "<td>Load current command history, settings and dictionary from local storage</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/reset</td>" +
                "<td>Reset whole terminal application to default settings, including server autocomplete files," +
                " client data, settings, etc.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/connect</td>" +
                "<td>Establish new connection to Caché server via <b>WebSocket</b> [deprecated]</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/disconnect</td>" +
                "<td>Disconnecting from current server [deprecated]</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/reconnect</td>" +
                "<td>Reopen server connection [deprecated]</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/clear</td>" +
                "<td>Clear terminal command log</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/define {redefinition} {definition}</td>" +
                "<td>Every occurrence of {definition} in input will be replaced with {redefinition}</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">{code} /favorite {slot}</td>" +
                "<td>Add code to favorites. You can load code anytime by calling /favorite {slot}</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">{/tail|/watch} {fileFullPath|globalName}</td>" +
                "<td>Watch for file/global changes. Execute command again to stop watching. This command without " +
                "arguments will stop watching for everything defined before</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/sql</td>" +
                "<td>Open/close integrated SQL shell</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/autocomplete [new]</td>" +
                "<td>" +
                "Load all class definitions for current namespace. This may take a while depending on your " +
                "system settings. Normally it takes 20-30 seconds for first execution. Next executions will " +
                "load already generated files or generate only namespace-specific language while new parameter given." +
                "To regenerate system language file (one which generates only first time) you have " +
                "to /reset whole terminal application." +
                "</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/siege {iterations = 120} {serverDelay = 0.02}</td>" +
                "<td>" +
                "Test client/server connection. Executes loops with delay on server and measures time/packages transferred." +
                "Be careful with serverDelay variable!" +
                "</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/settings</td>" +
                "<td>Open panel with different application settings. Use &lt;ESC&gt; to hide panel.</td>" +
                "</tr>" +
                "</table>" +
                "<div class=\"center\">" +
                "<h3>Controls</h3>" +
                "</div>" +
                "<table>" +
                "<tr>" +
                "<td class=\"hint\">Key</td>" +
                "<td class=\"hint\">Description</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">TAB</td>" +
                "<td>Extend current input with suggested autocomplete option</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">CTRL</td>" +
                "<td>If several autocomplete variants are present, change variant to next available</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">ALT</td>" +
                "<td>If several autocomplete variants are present, change variant to to previous available</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">UP/DOWN</td>" +
                "<td>Access to command history. <i>Current command won't be saved.</i></td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">SHIFT/CTRL + ENTER</td>" +
                "<td>Next line in current command stack.</td>" +
                "</tr>"+
                "<tr>" +
                "<td class=\"info\">ESC</td>" +
                "<td>Hide settings panel.</i></td>" +
                "</tr>" +
                "</table>" +
                "</div>",
            ru: "<div class=\"normalWrap\">" +
                "<div class=\"center\">" +
                "<h3>Caché Web Terminal<span class=\"warning\"> v" + c[3] + "</span></h3>" +
                "</div>" +
                "<div class=\"center\">" +
                "<span class=\"syntax-_comment\">Синтаксис команд с клиентской стороны</span><br>" +
                "а р <span class=\"syntax-_string\">\"г у\"</span> м е н т №0 <span class=\"syntax-_client\">/{command}</span>" +
                " аргумент1 <span class=\"syntax-_string\">\"аргумент2\"</span> ...<br>" +
                "</div>" +
                "<div>" +
                "Несколько примеров:<br>" +
                "<span class=\"syntax-_client\">/define</span> &1 <span class=\"syntax-_string\">\"##class(%File)\"" +
                "</span> <span class=\"syntax-_comment\"> Чтобы добиться следующего: &1.Exists(\"Name\")</span><br>" +
                "<span class=\"syntax-_client\">/tail</span> <span class=\"syntax-_global\">^MyGlobal</span> " +
                "<span class=\"syntax-_comment\">Чтобы следить за измерениями глобала.</span><br>" +
                "<span class=\"syntax-_command\">do</span> <span class=\"syntax-_sysMacro\">##class</span><span class=\"" +
                "syntax-_bracket\">(</span><span class=\"syntax-mysuperapplication\">MySuperApplication</span><span cla" +
                "ss=\"syntax-_other\">.MySuperClass</span><span class=\"syntax-_bracket\">)</span><span class=\"syntax-" +
                "_other\">.MySuperMethod</span><span class=\"syntax-_bracket\">(</span><span class=\"syntax-mysuperargu" +
                "ments\">MySuperArguments</span><span class=\"syntax-_bracket\">)</span> <span class=\"syntax-_client\"" +
                ">/favorite</span> <span class=\"syntax-_other\">1</span> " +
                "<span class=\"syntax-_comment\">Чтобы запомнить любимую команду в слот 1.</span><br>&nbsp;" +
                "</div>" +
                "<table>" +
                "<tr>" +
                "<td class=\"hint\">Доступные команды:</td>" +
                "<td class=\"hint\">Описание</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/help</td>" +
                "<td>Показать справку</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/tip [all]</td>" +
                "<td>Отобразить следующую часть детальной обучающей информации. Если \"all\" задано как аргумент, " +
                "выведет весь материал сразу.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/echo [*]</td>" +
                "<td>Вернуть поданные аргументы обратно.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/save</td>" +
                "<td>Сохранить текущие настройки, словарь, определения и историю в локальное хранилище браузера.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/load</td>" +
                "<td>Загрузить сохранённые настройки, словарь, определения и историю из локального хранилища.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/reset</td>" +
                "<td>Вернуть терминал в исходное состояние, тем самым удалив всю историю, настройки и сгенерированные " +
                "файлы на серверной стороне.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/connect</td>" +
                "<td>Установить новое соединение через <b>WebSocket</b> [устаревшее]</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/disconnect</td>" +
                "<td>Разорвать соединение с сервером [устаревшее]</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/reconnect</td>" +
                "<td>Обновить соединение с сервером [устаревшее]</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/clear</td>" +
                "<td>Очистить весь вывод.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/define {переопределение} {определение}</td>" +
                "<td>Определить {переопределение} как {определение}, что приведёт к замене всех последних первыми.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">{код} /favorite {слот}</td>" +
                "<td>Запомнить {код} в {слот}. Используйте /favorite {слот} чтобы загрузить {код}</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">{/tail|/watch} {ПолныйПутьКФайлу|ИмяГлобала}</td>" +
                "<td>Наблюдать за изменениями в файле/глобале. Выполните команду вновь, чтобы прекратить наблюдение. " +
                "Команда без аргументов остановит все наблюдения.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/sql</td>" +
                "<td>Перейти в или выйти из SQL-режима</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/autocomplete [new]</td>" +
                "<td>" +
                "Загружает определения классов и глобалов в словарь. Эта операция может занять некоторое время, в " +
                "зависимости от настроек системы. Обычно потребуется 20-30 секунд для первого выполнения команды. Все " +
                "последующие выполнения будут загружать уже сгенерированные файлы словаря с сервера. Системный словарь " +
                "генерируется дольше всех и только первый раз. Чтобы перегенерировать файлы словаря текущей области, " +
                "используйте аргумент \"new\". Команда /reset удалит все ранее сгенерированные файлы." +
                "</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/siege {итераций = 120} {задержка сервера = 0.02}</td>" +
                "<td>" +
                "Тестировать соединение. Выполняет тестовый код на сервере и измеряет количество пакетов и время их передачи. " +
                "Будьте внимательны при выборе аргументов." +
                "</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">/settings</td>" +
                "<td>Открыть панель настроек.</td>" +
                "</tr>" +
                "</table>" +
                "<div class=\"center\">" +
                "<h3>Управление</h3>" +
                "</div>" +
                "<table>" +
                "<tr>" +
                "<td class=\"hint\">Клавиша</td>" +
                "<td class=\"hint\">Описание</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">TAB</td>" +
                "<td>Дополнить ввод текущим вариантом автодополнения.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">CTRL</td>" +
                "<td>Следующий вариант автодополнения.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">ALT</td>" +
                "<td>Предыдущий вариант автодополнения.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">ВВЕРХ/ВНИЗ</td>" +
                "<td>Доступ к истории команд. <i>Текущая команда не будет сохранена</i>.</td>" +
                "</tr>" +
                "<tr>" +
                "<td class=\"info\">SHIFT/CTRL + ENTER</td>" +
                "<td>Переход на следующую строчку.</td>" +
                "</tr>"+
                "<tr>" +
                "<td class=\"info\">ESC</td>" +
                "<td>Спрятать панель настроек.</i></td>" +
                "</tr>" +
                "</table>" +
                "</div>"
        },
        50: {
            en: "<h1 class=\"center\">WebTerminal usage tips</h1>" +
                "<h3>This guide will show you detail description about application functionality.</h3>" +
                "<p>Note that you can call <span class=\"syntax-_client\">/help</span> command for list of available " +
                "commands any time you want. Client-side commands (that beginning with slash) are server-independent, " +
                "so you can relax by reading, for example, help information while heavy server command in progress.</p>" +
                "<p>Start by typing something like \"" + c[5] + "\". While entering " +
                "first letter, you can notice that there's " +
                "an autocompletion variant (darker highlighted) for command \"set\". You can press [TAB] key to perform " +
                "autocompletion. Also you can list available variants by pressing [CTRL] or [ALT], depending on direction" +
                "you need. After normal command execution try to execute \"" + c[6] +
                "\". You will notice available autocompletion variants for command \"write\" and for your variable \"test\". " +
                "Autocompletion both working for local variables and globals you've just defined." +
                "</p>",
            ru: "<h1 class=\"center\">Советы по использованию веб-терминала</h1>" +
                "<h3>Этот обучающий материал расскажет вам об основных возможностях приложения.</h3>" +
                "<p>На заметку: вы всегда можете выполнить команду <span class=\"syntax-_client\">/help</span> и получить " +
                "справочную информацию. Клиентские команды (которые начинаются со слеша) не зависят от сервера, " +
                "потому, к примеру, можно читать справку или эту информацию во время выполнения тяжёлой команды на сервере.</p>" +
                "<p>Начните с ввода чего-то похожего на \"" + c[5] + "\". Пока вы вводите команду set, можно заметить " +
                "возникающую подсказку - это вариант автодополнения. По нажатию [TAB] тусклый текст превращается в обычный. " +
                "Если доступно несколько вариантов, и получится перелистывать их нажатиями [CTRL] или [ALT], в зависимости от " +
                "требуемого направления. После нормального выполнения команды попробуйте выполнить \"" + c[6] +
                "\". Будет заметно, что варианты автодополнения будут доступны не только для \"write\", но и для \"test\". " +
                "Точно так же будет и с глобалами, которые вы только что определили." +
                "</p>"
        },
        51: {
            en: "<p>As you may have noticed, there's a set of client-side commands you can " +
                "execute. This is client-side command. Every client-side command can have a list of arguments. Here's the " +
                "rules of passing arguments in examples: </p><ul><li>" + parser.highlightHTML("/command argument1 argument2 ...") + "</li>" +
                "<li>" + parser.highlightHTML("/command \"argument1 with spaces\" argument_2 \"\" it_was_argument_3 ...") +
                "</li><li>" + parser.highlightHTML("argument №1 /command") + "</li>" +
                "<li>" + parser.highlightHTML("a r g u \"m\" e n t 1 /command \"a r g u m e n t 2\" argument3 ...") + "</li></ul>" +
                "<p>You can play with arguments by using " + parser.highlightHTML("/echo") + " command. Try to pass something " +
                "scary withing this command and see the result.</p>",
            ru: "<p>Как вы могли заметить, существует набор команд, которые можно выполнять " +
                "на клиентской части. Каждая такая команда может иметь набор аргументов. Вот некоторые правила их передачи: " +
                "</p><ul><li>" + parser.highlightHTML("/команда аргумент1 аргумент2 ...") + "</li>" +
                "<li>" + parser.highlightHTML("/команда \"аргумент1 с пробелами\" аргумент_2 \"\" Это_был_третий_аргумент ...") +
                "</li><li>" + parser.highlightHTML("аргумент №1 /команда") + "</li>" +
                "<li>" + parser.highlightHTML("а р г у \"м\" е н т 1 /команда \"а р г у м е н т 2\" аргумент3 ...") + "</li></ul>" +
                "<p>Можно более детально изучить работу парсера аргументов, исполнив команду  " + parser.highlightHTML("/echo") + ". " +
                "Сервер отдаст вам каждый аргумент с новой строчки.</p>"
        },
        52: {
            en: "<p>Let's explore a little more about autocompletion. For example, you wishes to autocomplete " +
                "your current classes in namespace. Because of large base of variants available, this implemented by " +
                parser.highlightHTML("/autocomplete") + "</span> command. By calling this command you will cause " +
                "client to request server for namespace autocomplete data. In case of first execution file will be " +
                "automatically generated. This may take a while depending on number of classes present. Normally it takes " +
                "15-20 seconds to perform this operation. After autocomplete file generate, it will be loaded immediately " +
                "and you will get <span class=\"syntax-_string\">\"Language for [namespace] merged.\"</span> message. " +
                "Calling this command again and again will cause loading already generated autocomplete file. If you " +
                "wish to regenerate this file, then execute this command with \"new\" argument: \"" +
                parser.highlightHTML("/autocomplete new") + "\". </p>",
            ru: "<p>Теперь стоит добавить еще кое-что про автодополнение. Допустим, вам потребовалось дополнять классы " +
                "и методы в текущем пространстве имён. Из-за большой базы всех этих слов, такое достигается за счёт выполнения команды " +
                parser.highlightHTML("/autocomplete") + "</span>. Вызывая эту команду, вы заставите сервер сгенерировать " +
                "файлы с данными, которые будут подгружены, или подгрузить уже существующие. Первое выполнение команды может " +
                "стать затратным, так как будет сгенерирован большой файл системных классов. Он генерируется единожды и удаляется только в случае команды "+c[7]+". Данная операция может занять 15-20 секунд, это " +
                "нормально. После подгрузки сгенерированного \"словаря\" вы получите уведомление об успешности операции слития с уже существующим словарём. " +
                "Последующие вызовы команды будут просто подгружать уже сгенерированные файлы. Если словарь для текущего пространства имён требуется сгенерировать заново, выполните \"" +
                parser.highlightHTML("/autocomplete new") + "\". </p>"
        },
        53: {
            en: "<p>Terminal application has different settings you can change. Simply call " +
                c[8] + " command and you will get a panel with list of options. To close " +
                "panel press [ESC] or click \"Close\" at upper right corner.</p><p>One important thing to know about " +
                "settings - they're automatically saving and storing in your local browser (localStorage). So you can " +
                "continue your work with terminal with same settings after web page closed and opened again. But make " +
                "sure that this works only for one domain. None of settings are storing on server.</p>",
            ru: "<p>Приложение терминала имеет множество настроек. Просто выполните " +
                c[8] + " и вы увидите панель с настройками. Чтобы закрыть панель, нажмите " +
                "[ESC] или кликните \"Закрыть\" в правом верхнем углу.</p><p>Еще одно, что важно знать о настройках - " +
                "они автоматически сохраняются в локальное хранилище браузера. Продолжать работу можно будет с теми же " +
                "настройками, что были ранее. Но стоит заметить, что это работает только для одного домена. Настройки " +
                "не хранятся на сервере.</p>"
        },
        54: {
            en: "<p>Another thing storing in localStorage is terminal language and command history. Terminal " +
                "language - it's a special object which includes all keywords and autocomplete data with the rules of " +
                "autocompletion. After " + parser.highlightHTML("/save") + " command call, your settings, language and " +
                "history will be saved. Anytime you want it is possible to restore this settings - just call " +
                parser.highlightHTML("/load") + " command. " + parser.highlightHTML("/reset") + " command will " +
                "bring terminal to initial state.</p>",
            ru: "<p>Так же успешно, как и настройки, в локальное хранилище попадает словарь, история и определения. Словарь " +
                "- это специальный объект, который включает в себя базу слов, необходимую для работы автодополнения и анализа. " +
                "После вызова команды " + parser.highlightHTML("/save") + " всё вышеперечисленное будет копировано в хранилище. " +
                "В любой другой момент можно загрузить это, выполнив команду " +
                parser.highlightHTML("/load") + ". " + parser.highlightHTML("/reset") + " сотрёт всё, вернув терминал в исходное состояние.</p>"
        },
        55: {
            en: "<p>There are more features you can obtain with client-side commands.</p><p>First, you can use " +
                parser.highlightHTML("/sql") + " command to enter and exit simple sql-mode. Easiest then ever.</p><p>" +
                "Next, it is easy to define " +
                "any big command by using " + parser.highlightHTML("/define") + " command. Try to execute something like </p><p>" +
                parser.highlightHTML("##class(%Library.File).Exists( /define ?f(") + "</p><p> and sure how it works by " +
                "executing </p><p>" + parser.highlightHTML("write ?f(\"C:\")") + "</p><p>Do not forget about autocomplete! " +
                "If you didn't, use " + parser.highlightHTML("/autocomplete") + " option to load classes and examine how it " +
                "helps. Autocompletion have to help you enter \"%Library.File\" class and it's method \"Exists\".</p>" +
                "<p>Another cool thing is watching " +
                "(or tailing). You can call " + parser.highlightHTML("/watch or /tail") + " command with one argument - " +
                "file path or global name. Let's imagine that you have file " + parser.highlightHTML("C:\\temp\\log.txt") + " or global " +
                parser.highlightHTML("^myLog") + ". Then you can call " + parser.highlightHTML("/tail ^myLog") + " or " +
                parser.highlightHTML("/watch C:\\temp\\log.txt") + " and look for their's changes.</p>",
            ru: "<p>Теперь стоит рассмотреть, на что способны клиентские команды.</p><p>Для начала, следует попробовать " +
                parser.highlightHTML("/sql") + " режим. Он позволит быстро выполнять SQL-запросы.</p><p>" +
                "Затем, можно определить любое сокращение, используя " +
                parser.highlightHTML("/define") + ". Попробуйте выполнить </p><p>" +
                parser.highlightHTML("##class(%Library.File).Exists( /define ?f(") + "</p><p> и убедитесь в том, как это работает,  " +
                "выполнив </p><p>" + parser.highlightHTML("write ?f(\"C:\")") + "</p><p>Не забывайте про автодополнение! " +
                "Выполните " + parser.highlightHTML("/autocomplete") + ", чтобы загрузить базу классов и их свойств. " +
                "Это должно помочь вам быстрее набрать тот самый Library.File и его метод Exists.</p>" +
                "<p>Другая интересная вещь - это наблюдение за переменными. " +
                "Вызовом " + parser.highlightHTML("/watch или /tail") + " с аргументом глобала или файла можно начать наблюдать за изменениями в них. " +
                "Давайте представим, что у вас есть файл " + parser.highlightHTML("C:\\temp\\log.txt") + " или глобал " +
                parser.highlightHTML("^myLog") + ". Выполните " + parser.highlightHTML("/tail ^myLog") + " или " +
                parser.highlightHTML("/watch C:\\temp\\log.txt") + " и попробуйте их изменить. Стоит заметить, что для глобала это " +
                "действительно только в случае добавления измерений.</p>"
        },
        56: {
            en: "<p>And finally try to use " + parser.highlightHTML("/favorite") + " command: write a piece of " +
                "code or whole program, test it and then join " + parser.highlightHTML("/favorite 1") + " to the end " +
                "of command line. This will remember you command to slot 1. Then simply call " + parser.highlightHTML("/favorite 1") +
                " (with one argument) and use use saved code again.</p><p>And that's the end of out tutorial! Do not forget " +
                "to " + parser.highlightHTML("/save") + " your history and favorites, or just use \"autosave\" option " +
                "available in settings.</p>",
            ru: "<p>Ну и в завершение попробуйте " + parser.highlightHTML("/favorite") + ": напишите часть кода или целую программу, " +
                "после чего добавьте в конец " + parser.highlightHTML("/favorite 1") +
                ". Это запомнит команду (программу) в первый слот. Потом простым вызовом " + parser.highlightHTML("/favorite 1") +
                " (с одним аргументом) можно будет снова применить код.</p><p>И на этом всё! Не забывайте сохранять (" +
                parser.highlightHTML("/save") + ") вашу историю или просто поставьте галочку напротив \"автосохранения\" в " +
                "настройках.</p>"
        },
        57: {
            en: "<p>Enjoy!</p>",
            ru: "<p>Приятного администрирования!</p>"
        },
        58: {
            en: "<p>To continue, type <span class=\"syntax-_client\">/tip</span> command again.</p>",
            ru: "<p>Чтобы продолжить, введите команду <span class=\"syntax-_client\">/tip</span> снова.</p>"
        },
        59: {
            en: "<p>Type <span class=\"syntax-_client\">/tip</span> command again, or just use " +
                "arrow [UP] key if you typed <span class=\"syntax-_client\">/tip</span> command before.</p>",
            ru: "<p>Введите <span class=\"syntax-_client\">/tip</span> вновь, или просто " +
                "нажмите стрелку вверх если вы уже вводили эту команду ранее."
        },
        60: {
            en: "<p>Continue typing <span class=\"syntax-_client\">/tip</span> if you want more " +
                "information.</p>",
            ru: "<p>Продолжайте вводить <span class=\"syntax-_client\">/tip</span> в том же духе, чтобы получить больше информации."
        },
        61: {
            en: "Reload the page to apply changes.",
            ru: "Обновите страницу, чтобы применить изменения."
        },
        62: {
            en: "Close",
            ru: "Закрыть"
        },
        63: {
            en: "Control panel",
            ru: "Панель настроек"
        },
        64: {
            en: "Application settings",
            ru: "Настройки приложения"
        },
        65: {
            en: "Highlighting",
            ru: "Подсветка синтаксиса"
        },
        66: {
            en: "Use syntax highlighting",
            ru: "Использовать подсветку синтаксиса"
        },
        67: {
            en: "Parse output",
            ru: "Парсить вывод"
        },
        68: {
            en: "Highlighting terminal output data",
            ru: "Подсвечивать вывод терминала"
        },
        69: {
            en: "Clean startup",
            ru: "Чистый старт"
        },
        70: {
            en: "Do not show additional information during terminal startup",
            ru: "Не показывать дополнительную информацию при загрузке терминала"
        },
        71: {
            en: "Animations",
            ru: "Анимации"
        },
        72: {
            en: "Animate output and some of terminal elements",
            ru: "Анимировать вывод и некоторые элементы терминала"
        },
        73: {
            en: "AutoSaving",
            ru: "Автосохранение"
        },
        74: {
            en: "Execute save command automatically after application close",
            ru: "Выполнять команду сохранения автоматически по закрытию приложения"
        },
        75: {
            en: "Language",
            ru: "Язык"
        },
        76: {
            en: "Color theme",
            ru: "Тема оформления"
        },
        77: {
            en: "Caché WEB Terminal",
            ru: "WEB-терминал Caché"
        },
        78: {
            en: "Logged as",
            ru: "Вход выполнен для"
        },
        79: {
            en: "Login failed.",
            ru: "Вход не выполнен."
        },
        80: {
            en: "Font smoothing",
            ru: "Сглаживание шрифтов"
        },
        81: {
            en: "None",
            ru: "Нет"
        },
        82: {
            en: "Antialiasing",
            ru: "Антиалиасинг"
        },
        83: {
            en: "Subpixel-antialiasing",
            ru: "Субпиксельный антиалиасинг"
        }
    };

};

/**
 * @param {number} ID
 * @returns {string}
 */
TerminalLocalization.prototype.get = function (ID) {
    return (this._LOCALIZATION_BASE[ID]) ? this._LOCALIZATION_BASE[ID][this._currentLocalization]
        || "[no translation for " + ID + "]" : "[translation with ID=" + ID + " not found]";
};

/**
 * Changes the localization.
 *
 * @param {string} localizationCode - Two-letter country code.
 */
TerminalLocalization.prototype.change = function (localizationCode) {

    if (this.AVAILABLE_LOCALIZATIONS.hasOwnProperty(localizationCode)) {
        this._currentLocalization = localizationCode;
    } else console.error("No available translations for \"" + localizationCode + "\". Please, " +
        "check available languages at TerminalLanguage file.");

};