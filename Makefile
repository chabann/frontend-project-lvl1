install: # первое клонирование репозитория
	npm ci

brain-games: # исполнение скрипта brain-games.js 
	node bin/brain-games.js

brain-even: # исполнение скрипта brain-even.js 
	node bin/brain-even.js

brain-calc: # исполнение скрипта brain-calc.js 
	node bin/brain-calc.js

publish: # проверяет публикацию изменений
	npm publish --dry-run

lint: # проверка кода линтером
	npx eslint .