const Term2 = (props)=>{
    const courseList = props.data;
    let courses = Object.entries(courseList).map(([key,value]) => {
        const courseName = key+ " " + props.catalog.courses[key].name;
        return (
            <p>
                {courseName}
            </p>
        );	
    });

    return (
    <div class="semester">
        <div className="semHeader">
            {props.term}
        </div>
        {courses}
    </div>
    );

}
export default Term2;
