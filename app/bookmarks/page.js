import { getDatabase } from "@/lib/notion"
import { formatDate } from "@/lib/formatDate"

export default async function Bookmarks() {
    const recipes = await getDatabase();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <main className="pt-6 w-full mx-auto min-h-screen">
            <h1 className="text-xl text-center font-bold py-2 underline">Bookmarks</h1>
            {recipes.results.map((item, index) => (
                <div
                    key={index}
                    className="w-5/5 sm:w-4/5 md:w-3/5 lg:w-2/5 mx-1 sm:mx-auto my-2 py-4 px-8 bg-slate-100 rounded-sm shadow-md hover:shadow-xl transition-all"
                >
                    <div className="font-semibold text-base">
                        {item.properties.Name.title.map((name) => (
                            name.plain_text
                        ))}
                    </div>
                    <div className="opacity-60 font-light text-sm">
                        <a
                            key={index}
                            href={item.properties.URL.url}
                            className="hover:underline"
                        >
                            {item.properties.URL.url}
                        </a>
                        <p className="pt-2 flex justify-end font-medium">{formatDate(item.created_time)}</p>
                    </div>
                </div>
            ))}
        </main>
    )
}
