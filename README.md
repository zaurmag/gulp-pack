# gulp-pack
Сборка Gulp для фронтенд-разработки

<h2>Создание компонентов</h2>

Для создания компонента необходимо написать команду в консоли:

<pre>bem create component-name</pre>

В данном случае <b>"component-name"</b> - это название создаваемого компонента.
После данной команда в директории <b>"src/components"</b> появится папка с созданным компонентом. В папке по умолчанию создаются 3 файла с аналогичным названем - pug, sass, js. 

Если необходимо исключить какой либо файл, то необходимо задать команду:

<pre>bem create component-name -n js</pre>

После данной команды создаться компонент с файлами .pug и .sass, js-файл будет исключен.

Подробнее про bem-tools-creators можно почитать <a href="https://github.com/bem-tools/bem-tools-create" target="_blank">тут</a>.
