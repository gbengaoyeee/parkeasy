export function convertStepToHoursMinutes(step: number): { hours: number; minutes: number } {
    if (step < 0 || step > 47) {
        throw new Error("Step must be within 0 to 47");
    }

    const hours = Math.floor(step / 2);
    const minutes = (step % 2) * 30;
    return { hours, minutes };
}

export function createDateWithTime(dateString: string, timeStep: number): Date {
    // Convert the date string to a Date object
    const date = new Date(`${dateString}T00:00:00`);
    // Validate the date
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string format");
    }

    // Convert step to hours and minutes
    const { hours, minutes } = convertStepToHoursMinutes(timeStep);

    // Set the hours and minutes on the date
    date.setHours(hours, minutes, 0, 0);

    return date;
}