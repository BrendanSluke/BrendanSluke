import * as dateFns from "date-fns";

interface FormatDateProps {
  dateString: string;
}
export default function Date({ dateString }: FormatDateProps): JSX.Element {
  const date = dateFns.parseISO(dateString);
  return (
    <time dateTime={dateString}>{dateFns.format(date, "LLLL d, yyyy")}</time>
  );
}
