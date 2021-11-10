install: # первое клонирование репозитория
	npm ci

brain-games: # исполнение скрипта brain-games.js 
	node bin/brain-games.js

publish: #
	npm publish --dry-run