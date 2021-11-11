install: # первое клонирование репозитория
	npm ci

brain-games: # исполнение скрипта brain-games.js 
	node bin/brain-games.js

brain-even: # исполнение скрипта brain-games.js 
	node bin/brain-even.js

publish: # проверяет публикацию изменений
	npm publish --dry-run

lint: # проверка кода линтером
	npx eslint .