
import { Link, Route, Routes } from 'react-router-dom'
import PetCard from '../PetList/PetCard/PetCard'
import { getAll } from '../../services/petService';
import PetList from '../PetList/PetList';
import {ReactComponent as Logo} from '../../logo.svg'
import './Dashboard.css'


const Dashboard = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <nav>
                <Link to="types">Types</Link>
            </nav>
            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/types" element={<><p>Types...</p></>}/>
                </Routes>
            </section>

            {/*<img src={logo} title="" al="" />*/}
            <Logo className="logo" />
        </section>


    )
}


export default Dashboard;