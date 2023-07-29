import { parseISO, format } from 'date-fns';

export default function DateTransformed({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  if (!dateString) return null;
  return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
}