SHELL := /bin/bash

.PHONY: install dev-landing serve-static clean

install:
	npm install

dev-landing:
	npm run dev:landing

serve-static:
	python3 -m http.server 8787 --directory ./landing/public

clean:
	rm -rf node_modules
	rm -rf landing/node_modules
