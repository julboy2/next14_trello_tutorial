import { Navbar } from './_components/navbar'

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full bg-slate-100">
            <Navbar />
            {/** TODO: Navber */}
            <main className="pt-40 pb-20 bg-slate-100">{children}</main>
            {/** TODO: Footer */}
        </div>
    )
}
