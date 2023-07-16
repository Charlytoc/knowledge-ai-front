
export default function StudyPlanCreate () {
    return (
        <div className="component-study-plan-create">
            {/* <h1>Hello World</h1> */}
            <h3>Define the road to your life, write your study plan description:</h3>

            <form action="">
                <input type="text" name="title" placeholder="title" />
                <input type="text" name="description" placeholder="description" />
                <input type="text" name="objective" placeholder="objective" />
                <button>
                    submit
                </button>

            </form>
        </div>
    )
}