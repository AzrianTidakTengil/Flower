import { useSelector } from "react-redux"

export default function Frame2() {
    const {page, status, data, frame, meta} = useSelector((state) => state.pagination);

    return(
        <div>
            <h1>Hello world!</h1>
        </div>
    )
}