const Filter = ({filterData}) => {
    return(
        <div>
            {filterData.map((data) => {
                return(
                    <button>{data.tittle}</button>
                )
            })}
        </div>
    )
}

export default Filter;


