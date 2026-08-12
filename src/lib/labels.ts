export const categoryLabels: Record<string,string> = { adventure:'Adventure', 'dual-sport':'Dual-sport', enduro:'Enduro', naked:'Naked / miejski', sport:'Sport', scrambler:'Scrambler', cruiser:'Cruiser / custom', scooter:'Skuter' };
export const statusLabels: Record<string,string> = { 'current-pl':'Aktualny w Polsce', 'current-eu':'Aktualny w UE', 'used-reference':'Tylko rynek używany', verify:'Do weryfikacji' };
export const useLabels: Record<string,string> = { city:'Miasto', commute:'Dojazdy', weekend:'Weekendy', touring:'Turystyka', gravel:'Szutry', 'light-offroad':'Lekki teren' };
export const formatValue = (value: unknown, suffix='') => value == null ? 'brak potwierdzonych danych' : `${value}${suffix}`;
