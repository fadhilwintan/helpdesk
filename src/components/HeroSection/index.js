import React from 'react';
import Image from '../../images/LogoWeb.png';
import { HeroContainer, HeroBg, ImgBg} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={Image} />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection;
