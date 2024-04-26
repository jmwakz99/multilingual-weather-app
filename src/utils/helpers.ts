export const convertTimeStamp = (
  timestamp: number,
  timezone: number
): string => {
  const convertTimezone: number = timezone / 3600;

  const date: Date = new Date(timestamp * 1000);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: `Etc/GMT${convertTimezone >= 0 ? '-' : '+'}${Math.abs(convertTimezone)}`,
    hour12: true
  };

  return date.toLocaleString('en-US', options);
};

export const convertCountryCodeToName = (countryCode: string): string => {
  let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  return regionNames.of(countryCode) as string;
};
