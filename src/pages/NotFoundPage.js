import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <div>
            <h1>404 NotFound</h1>
            <p>Opps!! Sepertinya kamu kehilangan arah,
                Tekan Link di bawah ini untuk kembali :) </p>
            <Link to='/'>Kembali</Link>
        </div>
    )
}