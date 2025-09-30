
import React from "react";
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from '../landing_page/home/Hero'

describe('Hero component testing',()=>{
    test('Rendering',()=>{
        render(<Hero/>);
        const Img=screen.getByAltText('Hero Image')
        expect(Img).toBeInTheDocument();
        expect(Img).toHaveAttribute('src','media/homeHero.png')
    })

    test('Button', ()=>{
        render(<Hero/>);
        const Button= screen.getByRole('button')
        expect(Button).toBeInTheDocument();
        expect(Button).toHaveClass('mb-5')
    })

})