import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import CarouselCard from '../../components/CarouselItems/CarouselCard';
import { 
    ProjectsContainer, CenterContainer, CarouselContainer, ProjectsTitle, Line, TitleContainer
} from './ProjectsElements'

const CarouselProjects = () => {
    return(
        <Carousel style={{}}
        plugins={[
            'infinite',
            'arrows',
            {
              resolve: slidesToShowPlugin,
              options: {
               numberOfSlides: 2,
              },
            },
          ]} 
          breakpoints={{
            1440: {
              plugins: [
                'infinite',
                'arrows',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 1
                 }
               },
             ]
            },
            768: {
              plugins: [
                'arrows',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 1
                 }
               },
             ]
            }
          }}
        >
        {CarouselCard()}
        </Carousel>
    )
}

const Projects = () => {
    return (
        <>
            <ProjectsContainer id='projects'>
                <CenterContainer>
                    <TitleContainer>
                       <ProjectsTitle>Projects</ProjectsTitle> <Line/>
                    </TitleContainer>
                    <CarouselContainer>
                        {CarouselProjects()}
                    </CarouselContainer>
                </CenterContainer>
            </ProjectsContainer>
        </>
    )
}

export default Projects