import Link from "next/link";

export default function SearchResult({ results, term, closeSearchResults }) {

  return (
    <>
      <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
        <p className="!text-lg">
          Showing results for
          <span className="font-semibold">{term}</span>
        </p>
        <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
          {results.map((result) => (
            <li key={result.id} className="">
              <Link className="transition-all hover:text-emerald-600" href={`/docs/${result.id}`}
              onClick={(e)=>closeSearchResults(e)}>
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
