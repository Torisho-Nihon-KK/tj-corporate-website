import { cn } from "@/lib/utils";
import Header from "../banners/header";
import Footer from "../banners/footer";

export default function SiteContent({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <section>
            <main>
                <Header />
                <div
                    data-slot="site-content"
                    className={cn(
                        "max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8",
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
                <Footer />
            </main>
        </section>
    );
}
