interface HeaderComponentProps {
    section?: string
}

export const HeaderComponent = ({section}: HeaderComponentProps) => {
    return (
        <>
            <h1 className="mb-4 mt-2 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span
                    className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{section}</span>
            </h1>
        </>
    );
};