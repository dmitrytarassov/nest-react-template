generate:
	echo "Create full module $(name)"
	nest generate module $(name)
	nest generate controller $(name)
	nest generate service $(name)