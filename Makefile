default: up

up:
	docker-compose -f container/docker-compose.yml up -d

down:
	docker-compose -f container/docker-compose.yml down

.PHONY: backend
backend:
	docker exec -it zeller-backend /bin/sh

.PHONY: frontend
frontend:
	docker exec -it zeller-frontend /bin/sh

test: test-backend test-frontend

test-backend:
	cd $(CURDIR)/backend && make test

test-frontend:
	cd $(CURDIR)/frontend && make test
