import { useState } from 'react';

import Navbar from '../../Navbars/NavigationBar/NavigationBar'
import MobileNavbar from '../../Navbars/MobileNavbar/MobileNavbar';
import SearchBar from '../../../utils/SearchBar/SearchBar'
import Carousel from './carousel';

import css from './HomePageBanner.module.css'

import banner from '/banners/Thirtymllogo.png'

let HomePageBanner = () => {
    let [toogleMenu, setToggleMenu] = useState(true);

    let toggleBanner = toogleMenu ? (<div className={css.banner}>
        <Navbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />
        <div className={css.bannerInner}>
            <img src={banner} alt="banner" className={css.bannerImg} />
            <div className={css.bannerTxt}>
                <div className={css.title}>thirtyml</div>
                <div className={css.tag}>The Youth Clubbing app, handcrafted here in  <span className={css.bld}>Bombay</span></div>
                <div className={css.searchbar}>
                </div>
            </div>
        </div>
    </div>) : <MobileNavbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />
 

    return toggleBanner;
}

export default HomePageBanner