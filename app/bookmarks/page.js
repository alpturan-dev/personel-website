import { getDatabase } from "@/lib/notion"
import { formatDate } from "@/lib/formatDate"

export default async function Bookmarks() {
    const recipes = await getDatabase();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <main className="pt-6 w-full mx-auto min-h-screen">
            <h1 className="text-2xl text-center font-bold py-6 underline">Bookmarks</h1>
            {recipes.results.map((item, index) => (
                <div
                    key={index}
                    className="mx-auto my-2 w-3/5 py-4 px-8 border rounded-sm border-slate-400 bg-slate-100 shadow-md"
                >
                    <div className="font-bold text-lg">
                        {item.properties.Name.title.map((name) => (
                            name.plain_text
                        ))}
                    </div>
                    <a
                        key={index}
                        href={item.properties.URL.url}
                        className="opacity-60 hover:underline text-sm"
                    >
                        {item.properties.URL.url} | {formatDate(item.created_time)}
                    </a>
                </div>
            ))}
        </main>
    )
}
