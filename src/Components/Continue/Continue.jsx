

const Continue = () => {

    const handleGoogleSignIn = () => {
        console.log("clicked");
    }

    return (
        <div>
            <hr className="mt-4 w-1/4" />
            <p className="my-2">OR-</p>
            <hr className="w-1/4" />

            <button onClick={handleGoogleSignIn} className="bg-slate-200 text-green-600 mt-4 py-2 px-4 w-full">Continue with <span className="text-green-700">Google</span></button>
        </div>
    );
};

export default Continue;