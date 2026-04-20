export default function Exclusions({ data }: any) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {data?.map((item: string, i: number) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}