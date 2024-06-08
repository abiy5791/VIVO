function TaskSection3() {
  const tasks = [
    "Set up your local dev environment by downloading the necessary files, tools, and dependencies.",
    "Fix the broken client datafeed script in the repository by making the required adjustments to it.",
    "Generate a patch file of the changes you made.",
    "(optional): Add unit tests in the test script in the repository.",
    "Submit your work.",
  ];
  return (
    <>
      <section>
        <div class=" flex flex-col items-center px-5 py-8 mx-auto">
          <div class="flex flex-col w-full prose text-left max-w-max lg:max-w-2xl">
            <div class="w-full mx-auto">
              <h2 className="text-2xl font-medium text-slate-700 mb-10 dark:text-slate-400">
                Here's what you need to do
              </h2>
              <div className="dark:text-slate-500">
                <p>
                  For the first task of this project, you will need to
                  accomplish the following:
                </p>
                <ol className="list-decimal list-inside ml-5">
                  {tasks.map((task, index) => (
                    <li key={index} className="my-2">
                      {task}
                    </li>
                  ))}
                </ol>
                <p>Let's get to work!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default TaskSection3;
