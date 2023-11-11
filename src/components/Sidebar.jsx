import Button from "./Button";

export default function Sidebar() {
    
    /**
     *  Sample Content
     */
    const items = ['Learning React','Learning Tailwind CSS','Mastering React'];

    /** Functions */
    

    return(
        <aside className="px-8 py-16 bg-stone-900 md:w-1/5 rounded-r-xl">
            <h2 className="mb-5 font-bold uppercase md:text-3xl text-stone-200">
                Your Projects
            </h2>
            <ul>
                <div className="mb-5">
                    <Button>+ Add Project</Button>
                </div>
                {
                    /** List Current Projects */
                items.map((item,index) => (
                    <li key={index}
                        className={`text-stone-200 md:text-2xl mt-1 px-2 py-3 hover:bg-stone-700 rounded-md ${index === 0? 'mt=10' : ''}`}>
                        {item}
                    </li>
                ))
                }
            </ul>
        </aside>
    );
}