function isHoliday(holidays = 0) {
	// Holiday
	if (!holidays) holidays = ["28/03/2022", "02/12/2021"]

	// Dates
	const current_date = new Date().toLocaleString('pt-BR', { timezone: 'America/Sao_Paulo' })
	const today = current_date.split(' ')[0].toString()

	// Logical Part
	for (holiday of holidays) {
		return today == holiday ? true : false
	}
}