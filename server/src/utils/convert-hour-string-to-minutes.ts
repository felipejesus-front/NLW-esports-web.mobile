//18:00 => 1080


export function convertHourStringToMinutes(houString: string){
	const [hours, minutes] = houString.split(':').map(Number)
	
	const minutesAmount = (hours * 60) + minutes;
	return minutesAmount
}