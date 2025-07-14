import { ThemeToggle } from "../Components/ThemeToggle"
import { StarBackground } from '@/Components/StarBackground'

export const Home = () => {
    return(
       <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* theme toggle */}
            < ThemeToggle />
            {/* Background Effect */}
            <StarBackground />
            {/* For the navigation bar */}


            {/* Main Content Here */}


            {/* This is for the Footer section */}
       </div>
    )
}