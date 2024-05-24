run-sauce:
	cat .env | sed '/^\s*#/d' | sed 's/^/--env /' | xargs saucectl run
