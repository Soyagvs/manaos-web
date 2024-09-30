
export default function InformationGrid() {
    return (
        <main className="h-screen flex justify-center items-center">
            <div className="grid grid-cols-4 grid-rows-5 gap-4">
                <div className="col-span-2 row-span-3 bg-red-600 w-96 h-72 rounded-md transition hover:scale-[01.04]">1</div>
                <div className="col-span-2 row-span-2 col-start-3 bg-red-600 w-96 rounded-md transition hover:scale-[01.04]">2</div>
                <div className="col-span-2 row-span-3 col-start-3 row-start-3 bg-red-600 w-96 rounded-md transition hover:scale-[01.04]">3</div>
                <div className="col-span-2 row-span-2 row-start-4 bg-red-600 w-96 rounded-md transition hover:scale-[01.04]">4</div>
            </div>
        </main>
    )
}
