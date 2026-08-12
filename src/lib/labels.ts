export const categoryLabels: Record<string,string> = { adventure:'Adventure', 'dual-sport':'Dual-sport', enduro:'Enduro', naked:'Naked / miejski', sport:'Sport', scrambler:'Scrambler', cruiser:'Cruiser / custom', scooter:'Skuter' };
export const statusLabels: Record<string,string> = { 'current-pl':'Oferta PL potwierdzona', 'current-eu':'Oferta UE', 'used-reference':'Tylko rynek używany', verify:'Dostępność PL niepotwierdzona' };
export const useLabels: Record<string,string> = { city:'Miasto', commute:'Dojazdy', weekend:'Weekendy', touring:'Turystyka', gravel:'Szutry', 'light-offroad':'Lekki teren' };
export const formatValue = (value: unknown, suffix='') => value == null ? 'brak potwierdzonych danych' : `${value}${suffix}`;
