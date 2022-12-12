import Link from "next/link"
import { AppBar, Toolbar } from "@mui/material"

const NewsPage = () => {
    return(
        <div>
            <div>
               <h1>Today's News</h1> 
            </div>
            <div>
                <ul>
                    <li><Link href="/news/business">Trending Business News</Link></li>
                    <li><Link href="/news/tech">Trending Tech News</Link></li>
                </ul>
            </div> 
        </div>
    )
}

export default NewsPage