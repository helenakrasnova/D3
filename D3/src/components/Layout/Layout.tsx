import Graphic from "../Graphic"

const data = [0, 10, 16, 5, 25, 30]

export const Layout = () => {

    return (
        <div>
            <header>My graphics</header>
            <Graphic data={data} />
        </div>
    )
}