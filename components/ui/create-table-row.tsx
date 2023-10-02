export const createTableRow = (label: string, value: string) => (
  <tr key={label}>
    <th className="text-sm text-muted-foreground whitespace-nowrap text-left">{label}</th>
    <td className="pl-4 text-sm text-muted-foreground">{value}</td>
  </tr>
);
