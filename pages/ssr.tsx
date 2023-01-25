import Link from "next/link";
export default function SSR({ formattedDate }: { formattedDate: string }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Server-side rendered page
      </h1>
      <p>This page is server-side rendered. It was built on {formattedDate}.</p>
      <p>
        <Link href="/">View a static page.</Link>
      </p>
    </>
  );
}

export async function getServerSideProps() {
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);
  console.log(
    `SSR ran on ${formattedDate}. This will be logged in Cloudwatch.`
  );

  return { props: { formattedDate } };
}
