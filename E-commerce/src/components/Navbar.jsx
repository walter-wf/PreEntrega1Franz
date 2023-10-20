import { Cartwidget } from "./Cartwidget";

export const Navbar = () => {

    return  ( 
    <nav>
        <div>ElectroLand</div>
            <ul>
                <li>Home</li>
                <li>Electronica</li>
                <li>Computadoras</li>
                <li>Celulares</li>
                <li>Consolas</li>
            </ul>
            <Cartwidget />
    </nav>

    );
};