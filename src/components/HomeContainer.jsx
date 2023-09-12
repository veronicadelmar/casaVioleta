import AboutUs from "./AboutUs"
import Courses from "./Courses"
import Location from "./Location"

export default function HomeContainer() {
    return (
        <main className="flex flex-col items-center">
            <AboutUs />
            <Courses />
            <Location />
        </main>
    )
}