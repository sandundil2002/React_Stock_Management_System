
export const NotFoundPage = () => {
    return (
        <>
            <div className="text-center items-center p-4 mb-4 text-4xl text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Warning!</span>
                    404 Page Not Found.
                </div>
            </div>
        </>
    );
};