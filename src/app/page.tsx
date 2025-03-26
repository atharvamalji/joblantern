const Page = () => {
    return (
        <div className="flex flex-col md:items-center">
            <section className="w-full md:w-[100rem] p-4 md:p-32 py-16 flex flex-col items-center justify-center border-b border-stone-300">
                <div className="space-y-8 flex flex-col items-center justify-center">
                    <div className="bg-green-50 text-green-600 p-1 px-2 rounded-full border w-max">
                        <p className="text-xs font-semibold">
                            Now Tracking{" "}
                            <span className="font-extrabold">100+</span>{" "}
                            Companies
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-7xl text-center">
                        Apply to Jobs the{" "}
                        <span className="font-bold text-green-500">Right</span>{" "}
                        Way
                    </h1>
                    <p className="md:text-xl text-center">
                        Stop wasting time searching on LinkedIn for stale jobs.
                        Get notified as soon as relevent jobs are posted.
                    </p>
                    <div className="w-[18rem] md:w-[20rem] grid gap-4">
                        <input
                            type="email"
                            className="p-2 md:p-4 border border-stone-300 bg-stone-50 rounded-lg"
                            placeholder="john.dev@next job.com"
                        />
                        <button className="p-2 md:p-4 bg-green-500 font-semibold text-white rounded-lg">
                            Sign Up
                        </button>
                        <p className="text-xs text-center text-stone-600">
                            We won&apos;t spam you with unecessary emails
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full md:w-[100rem] p-4 md:p-32 py-8 flex flex-col justify-center border-b border-stone-300">
                <div className="space-y-4">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Why use JobLantern
                    </h1>
                    <p>
                        JobLantern transforms your job search by tracking new
                        opportunities every 10 minutes across multiple
                        platforms, saving you countless hours of manual
                        searching and refreshing. Our streamlined dashboard
                        brings the freshest job listings directly to you,
                        ensuring you&apos;re always first in line for your dream
                        position.
                    </p>
                </div>
            </section>
            <section className="w-full md:w-[100rem] p-4 md:p-32 py-8 flex flex-col justify-center border-b border-stone-300">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Top Jobs for Various Roles
                        </h1>
                        <p>
                            Have a look at some of the latest jobs we&apos;ve just
                            collected.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 text-sm">
                            <button className="px-2 p-1 font-semibold bg-green-500 text-white">
                                Software Developer
                            </button>
                            <button className="border px-2 p-1">
                                Data Scientist
                            </button>
                            <button className="border px-2 p-1">
                                Business Analyst
                            </button>
                            <button className="border px-2 p-1">
                                Data Engineer
                            </button>
                        </div>
                        <div>
                            <div>
                                <ul className="space-y-2">
                                    <li>
                                        <div className="border p-4 flex gap-4">
                                            <div>
                                                <img
                                                    src="https://media.licdn.com/dms/image/v2/D4E0BAQGZSoh-oc0ykg/company-logo_100_100/company-logo_100_100/0/1733769817883/sharkninja_logo?e=1748476800&v=beta&t=2wFcfDEBwpHoA5hpjMH52qVQzgv-ns2_7Gu3ffDg2R8"
                                                    alt=""
                                                    className="h-12 w-12 rounded-full"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p>Software Developer I</p>
                                                <div className="flex justify-between text-sm">
                                                    <p>Microsoft</p>
                                                    <p>2 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="border p-4 flex gap-4">
                                            <div>
                                                <img
                                                    src="https://media.licdn.com/dms/image/v2/D4E0BAQGZSoh-oc0ykg/company-logo_100_100/company-logo_100_100/0/1733769817883/sharkninja_logo?e=1748476800&v=beta&t=2wFcfDEBwpHoA5hpjMH52qVQzgv-ns2_7Gu3ffDg2R8"
                                                    alt=""
                                                    className="h-12 w-12 rounded-full"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p>Software Developer I</p>
                                                <div className="flex justify-between text-sm">
                                                    <p>Microsoft</p>
                                                    <p>2 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="border p-4 flex gap-4">
                                            <div>
                                                <img
                                                    src="https://media.licdn.com/dms/image/v2/D4E0BAQGZSoh-oc0ykg/company-logo_100_100/company-logo_100_100/0/1733769817883/sharkninja_logo?e=1748476800&v=beta&t=2wFcfDEBwpHoA5hpjMH52qVQzgv-ns2_7Gu3ffDg2R8"
                                                    alt=""
                                                    className="h-12 w-12 rounded-full"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p>Software Developer I</p>
                                                <div className="flex justify-between text-sm">
                                                    <p>Microsoft</p>
                                                    <p>2 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="border p-4 flex gap-4">
                                            <div>
                                                <img
                                                    src="https://media.licdn.com/dms/image/v2/D4E0BAQGZSoh-oc0ykg/company-logo_100_100/company-logo_100_100/0/1733769817883/sharkninja_logo?e=1748476800&v=beta&t=2wFcfDEBwpHoA5hpjMH52qVQzgv-ns2_7Gu3ffDg2R8"
                                                    alt=""
                                                    className="h-12 w-12 rounded-full"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p>Software Developer I</p>
                                                <div className="flex justify-between text-sm">
                                                    <p>Microsoft</p>
                                                    <p>2 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="border p-4 flex gap-4">
                                            <div>
                                                <img
                                                    src="https://media.licdn.com/dms/image/v2/D4E0BAQGZSoh-oc0ykg/company-logo_100_100/company-logo_100_100/0/1733769817883/sharkninja_logo?e=1748476800&v=beta&t=2wFcfDEBwpHoA5hpjMH52qVQzgv-ns2_7Gu3ffDg2R8"
                                                    alt=""
                                                    className="h-12 w-12 rounded-full"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p>Software Developer I</p>
                                                <div className="flex justify-between text-sm">
                                                    <p>Microsoft</p>
                                                    <p>2 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full md:w-[100rem] p-4 md:p-32 py-8 flex flex-col justify-center border-b border-stone-300">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Pricing
                        </h1>
                        <p>
                            We have pricing plans to suit all budgets. Choose
                            the right plan for you.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex flex-col border p-4 space-y-4 rounded-lg border-stone-300 bg-stone-50">
                            <div className="text-center space-y-2">
                                <p className="text-4xl font-bold">$0</p>
                                <p>Free Forever</p>
                            </div>
                            <hr />
                            <div className="flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <ul className="space-y-1">
                                        <li>
                                            <span className="text-green-500">
                                                ✓
                                            </span>{" "}
                                            Updates every 1 hour
                                        </li>
                                        <li>
                                            <span className="text-green-500">
                                                ✓
                                            </span>{" "}
                                            Search for upto 1 job role
                                        </li>
                                        <li>
                                            <span className="text-green-500">
                                                ✓
                                            </span>{" "}
                                            Upto 10 job openings every hour
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <button className="bg-green-500 text-white p-2 w-full rounded-lg">
                                        Sign Up for Free
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border p-4 space-y-4 rounded-lg border-stone-300 bg-stone-50">
                            <div className="text-center space-y-2">
                                <p className="text-4xl font-bold">$2.99</p>
                                <p>Most Popular</p>
                            </div>
                            <hr />
                            <div className="flex-1 flex flex-col justify-between space-y-4">
                                <ul>
                                    <li>
                                        <span className="text-green-500">
                                            ✓
                                        </span>{" "}
                                        Updates every 10 min
                                    </li>
                                    <li>
                                        <span className="text-green-500">
                                            ✓
                                        </span>{" "}
                                        Search for upto 5 job roles
                                    </li>
                                    <li>
                                        <span className="text-green-500">
                                            ✓
                                        </span>{" "}
                                        Upto 10 job openings every 10 min
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button className="bg-green-500 text-white p-2 w-full rounded-lg">
                                    Buy
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col border p-4 space-y-4 rounded-lg border-stone-300 bg-stone-50">
                            <div className="text-center space-y-2">
                                <p className="text-4xl font-bold">$5.99</p>
                                <p>Ultimate Plan</p>
                            </div>
                            <hr />
                            <div className="flex-1 flex flex-col justify-between space-y-4">
                                <ul>
                                    <li>
                                        <span className="text-green-500">
                                            ✓
                                        </span>{" "}
                                        Updates every 10 min
                                    </li>
                                    <li>
                                        <span className="text-green-500">
                                            ✓
                                        </span>{" "}
                                        Search for upto 10 job roles
                                    </li>
                                    <li>
                                        <span className="text-green-500">
                                            ✓
                                        </span>{" "}
                                        Upto 100 job openings every 10 min
                                    </li>
                                    <li>
                                        <span className="text-green-500">
                                            ✓
                                        </span>{" "}
                                        Match your resume with job listings
                                    </li>
                                    <li>
                                        <span className="text-green-500">
                                            ✓
                                        </span>{" "}
                                        Track job applications
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button className="bg-green-500 text-white p-2 w-full rounded-lg">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
