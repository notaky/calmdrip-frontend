export default async function Page() {
  const url = process.env.API_BASE_URL + '/health_check';
  const res = await fetch(url);
  const data = await res.json();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>{data.message}</p>
    </div>
  );
}
