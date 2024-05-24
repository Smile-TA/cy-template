run-sauce:
	cat .env | sed 's/^/--env /' | xargs saucectl run
