import styled from "./home.module.css"
export default function Home(){
    return(
        <section className={styled.mainWrapper}>
            <nav className={styled.navWrapper}>
                <div className={styled.logo}>
                    ./h
                </div>
                <div className={styled.NavList}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li>🔥</li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}