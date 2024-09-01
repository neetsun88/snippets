import Link from "next/link";

export default function header(){
    return(
        <div>
            <Link href="/">Home</Link>
            <Link href="/snippets/new">Create</Link>
            <Link href="/docviewer">Doc Viewer</Link>
        </div>
    )
}