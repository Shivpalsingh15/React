export default function Todo(){
    return (
      <div>
        <h1 className="text-3xl font-bold underline">Todo App</h1>
        <label htmlFor="fname">Tasks: </label><input type="text" placeholder="Enter Todo"/><br />&nbsp;
        <button className="border bg-slate-600 p-2 rounded-lg text-center text-gray-300">Add a new Tasks</button>
      </div>
    );
}