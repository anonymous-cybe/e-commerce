import { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import axios from "axios";





export default function AdmincCategoriesPage(props) {


    const [categories, setCategories] = useState([]);

    const history = useHistory();

    // useEffect(() => {
    //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //     !userInfo || !userInfo.isAdmin && props.history.push("/")
    // }
    // )


    async function deleteHandler(id) {
        window.location.reload();
        const { data } = await axios.delete(`http://localhost:5000/categories/${id}`);

    }

    useEffect(() => {

        async function getCategories() {
            const { data } = await axios.get("http://localhost:5000/categories");
            setCategories(data);

        }




        getCategories();
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        !userInfo && props.history.push("/")


    }, [setCategories])
    return (<div>
        <a href="/add-category" className="btn btn-primary mt-5rem">Add Category </a>

        <table className="table m-2" >
            {categories.length > 0 && categories.map(Category => {
                return <tr className="d-flex justify-content-between ps-2 pe-2">
                    <td>{Category.name}</td>
                    <td>
                        <a href={`/edit-category/${Category._id}`} style={{ background: "blue" }} className="btn-sm btn-primary  ">Update</a>
                        <button onClick={() => deleteHandler(Category._id)} style={{ background: "red" }} className="btn-sm btn-danger">Delete</button>

                    </td>
                </tr>
            }

            )}

        </table>



    </div>
    )

}